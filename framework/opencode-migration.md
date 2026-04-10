# OpenCode Migration Plan

**Status:** DRAFT — pending user approval
**Created:** 2026-04-09
**Owner:** Fahad
**Supersedes:** Current Claude Code skills architecture in `.claude/skills/`

---

## 1. Why

The current 8-phase YouTube scripting pipeline lives as Claude Code skills (`.claude/skills/{structure,package,outline,hook,click-confirm,body,outro,review-script}`). Each skill is a markdown file with instructions, loaded on top of Claude Code's base system prompt.

**This is structurally broken for creative work, for three reasons:**

1. **Identity vs context.** Claude Code's system prompt says: *"You are an interactive agent that helps users with software engineering tasks."* That is the model's identity for the session. A skill file is *context added on top of* a software engineer. The model keeps behaving as a SWE who happens to have extra instructions — it takes shortcuts, optimizes for forward progress, and treats creative refusals as friction.

2. **Pipeline bleed.** The base agent can see all 8 phases in its context. It naturally wants to push toward the next phase because that's what forward progress looks like in a software task. A hook agent that doesn't know phase 5 exists cannot push the user toward phase 5.

3. **Tool surface mismatch.** Claude Code exposes ~15 tools optimized for engineering (`Bash`, `Grep`, `Glob`, `TodoWrite`, `Task`, etc.) and ~30k tokens of system prompt framing SWE work. None of that primes the model for creative writing, refusal patterns, or strict template adherence.

**The observed symptom:** during the first day of real testing, Claude Code accepted user inputs that violated Kallaway's framework, skipped dual-example gates, and pushed toward the next phase when the current phase wasn't complete. The skills are written correctly. The runtime is wrong for the job.

**The fix:** each phase becomes an agent with its own focused system prompt as *role identity*, not layered context. The agent knows only its phase, has a locked tool whitelist, and refuses pushes to other phases because it doesn't know they exist.

---

## 2. What We're Building

A forked version of [`sst/opencode`](https://github.com/sst/opencode) configured as a multi-persona agent runtime for the Human in the Loop video production pipeline.

**Architecture:**

```
                    ┌─────────────────────────┐
                    │   Director    │  ← primary entry point; user talks to this
                    │   (knows full pipeline) │
                    └───────────┬─────────────┘
                                │ dispatches via @agent-name
        ┌───────────┬───────────┼───────────┬───────────┬───────────┐
        ▼           ▼           ▼           ▼           ▼           ▼
  ┌──────────┐ ┌─────────┐ ┌─────────┐ ┌────────┐ ┌──────────┐ ┌─────────┐
  │@format-lead│ │@packager │ │@outliner │ │ @hook-writer  │ │ @click-  │ │  @body-writer  │  ...
  │          │ │         │ │         │ │        │ │ confirm  │ │         │
  └────┬─────┘ └────┬────┘ └────┬────┘ └────┬───┘ └─────┬────┘ └────┬────┘
       │            │           │            │            │            │
       └────────────┴───────────┴────────────┴────────────┴────────────┘
                                   │ all read/write
                                   ▼
                    ┌──────────────────────────┐
                    │    video-state.md        │
                    │  (single source of truth)│
                    └──────────────────────────┘
```

- **Orchestrator** is the primary agent. The user talks to it. It knows the full 8-phase pipeline at a high level (not at template-bank depth), helps the user shape the video idea, decides when a phase is ready to start, and dispatches to the specialist agents.
- **Phase specialists** (8 of them) are subagents. Each knows only its phase — its blueprint, template bank, refusal patterns, and success criteria. It reads the state file, writes its section, and returns.
- **State file** (`video-state.md`) lives per video and is the only shared memory. Every agent reads the sections it needs and writes its own section. No cross-agent talking; handoffs go through the file.
- **Each agent has a locked tool surface** — no agent gets the full drawer.

**The user's workflow becomes:**

1. Launch orchestrator on a new topic: `opencode "I want to make a video about X"`
2. Orchestrator asks shaping questions, confirms the idea fits the channel
3. Orchestrator: *"Ready to start structure. Dispatching to `@format-lead`."*
4. `@format-lead` runs its full phase, writes to `video-state.md`, returns
5. User confirms → orchestrator dispatches to `@packager`
6. Repeat through `@script-editor`
7. Final script gets written to `production/youtube/[slug]/script.md`

---

## 3. Fork Strategy

**Decision:** Fork, even though strictly speaking we could use opencode as a consumer. Reason: we want the option to diverge later without friction — custom dispatch logic, phase-gate enforcement in code, Human in the Loop branding, channel-specific features.

**Branding:** TBD — candidate names for the fork: `opencode-hitl`, `hitl-studio`, `kallaway-engine`. Keep as `opencode-hitl` until we're confident in a direction.

**Git workflow:**

```bash
# Initial setup
git clone git@github.com:HumanInTheLoopReal/opencode-hitl.git
cd opencode-hitl
git remote add upstream https://github.com/sst/opencode.git

# Periodic sync (weekly while upstream is active)
git fetch upstream
git checkout main
git merge upstream/main    # or rebase, whichever produces cleaner history

# Feature work
git checkout -b feat/kallaway-agents
# ... work ...
git push origin feat/kallaway-agents
```

**Divergence discipline:**

- **For the first 4 weeks:** zero code changes to upstream opencode. All HitL-specific work lives in a separate top-level directory that upstream doesn't touch. If we hit a limitation, we document it as a deferred decision — we do not patch core.
- **After 4 weeks:** review what couldn't be done in config/prompts alone. Decide whether to (a) upstream the feature as a contribution, (b) carry a minimal patch in the fork, or (c) change our approach.
- **Never:** rename or restructure upstream directories. Every rebase should be clean.

**GitHub account:** `HumanInTheLoopReal` (per `CLAUDE.md` — `gh auth switch --user HumanInTheLoopReal`).

---

## 4. Repo Structure

The fork will have two worlds — upstream opencode (untouched) and HitL-specific content (isolated).

```
opencode-hitl/
│
├── [... all upstream opencode files and packages — untouched ...]
│   ├── packages/opencode/            # upstream runtime, DO NOT TOUCH initially
│   ├── packages/tui/                 # upstream TUI, DO NOT TOUCH initially
│   └── opencode.jsonc                # may need small edits to register HitL agents
│
└── hitl/                             # ← everything HitL lives here, upstream never touches
    ├── README.md                     # what this directory is and how to use it
    ├── agents/                       # agent system prompts, one per phase
    │   ├── director.md
    │   ├── format-lead.md
    │   ├── packager.md
    │   ├── outliner.md
    │   ├── hook-writer.md
    │   ├── setup-writer.md
    │   ├── body-writer.md
    │   ├── outro-writer.md
    │   └── script-editor.md
    ├── kallaway/                     # Kallaway knowledge that agents load on demand
    │   ├── blueprints/               # 7 structural blueprints from video-structures.md
    │   ├── template-banks/           # sentence skeletons with [SWAP] markers
    │   ├── checklists/               # per-phase quality gates
    │   └── refusal-patterns.md       # shared refusal library every agent can reference
    ├── templates/
    │   ├── video-state.md            # the template every new video copies
    │   └── script-skeleton.md        # the final Phase 8 output shape
    ├── docs/
    │   ├── prompt-design-guide.md    # style rules for writing agent prompts (§6 of this plan)
    │   └── phase-gates.md            # conceptual contract for how a phase "finishes"
    └── scripts/
        ├── new-video.sh              # bootstraps production/youtube/[slug]/ with state file
        └── sync-prompts.sh           # if we end up needing to sync prompts into .opencode/
```

**Key principle:** every HitL asset lives under `hitl/`. Nothing leaks into upstream directories. If opencode renames its agent loading path tomorrow, our agents survive unchanged — we just update the config that points at `hitl/agents/*.md`.

**How opencode finds the agents:** via `opencode.jsonc` at the repo root, pointing each agent's `prompt` field at a file under `hitl/agents/`. See §9 for the full matrix.

---

## 5. Agent Roster

Nine agents total: one Director + eight phase specialists.

### 5.1 `@director` (primary)

**Identity:** The Human in the Loop video production Director. Knows the full 8-phase Kallaway pipeline at a high level. Works with the user to shape ideas, validate they fit the channel, and dispatch to specialists. **Never writes video content itself** — always dispatches.

**Knows:**
- Channel blueprint (IVA, creator moat, signature style)
- The 7 Kallaway blueprints at name level (not template-bank depth)
- The 8-phase pipeline and what each phase produces
- The video state file schema
- Which agent to dispatch to for which kind of work

**Does NOT know:**
- Detailed template banks for any phase
- Specific sentence skeletons
- The exhaustive checklists for any phase

**Tools allowed:** `read` (state file, channel blueprint), `write` (only to the state file's "Director Notes" section), `glob` (to find existing videos), subagent dispatch.

**Tools denied:** `bash`, `edit` (on anything except state file), `webfetch`, `websearch` — the orchestrator doesn't research, it coordinates.

### 5.2 `@format-lead`

**Phase 1.** Picks a structural blueprint and maps content to beats. (Formerly known as Format/Structure)

**Knows:** 7 Kallaway blueprints in depth, beat maps, structural refusals ("no hybrid formats"), the 5 pillars taxonomy.

**Tools allowed:** `read` (state file, Kallaway knowledge), `write` (structure section of state file), `webfetch`/`websearch` (for topic research if needed).

### 5.3 `@packager`

**Phase 2.** Creates title + thumbnail system.

**Knows:** Title formulas, thumbnail composition, color science, trust score validation.

**Tools allowed:** `read`, `write` (package section), `webfetch`/`websearch`.

### 5.4 `@outliner`

**Phase 3.** Shock-ordered bullet skeleton.

**Knows:** Shock value scoring, uniqueness validation, story lens selection, last-dab planning.

**Tools allowed:** `read`, `write` (outline section), `webfetch`/`websearch`.

### 5.5 `@hook-writer`

**Phase 4.** First 5-15 seconds. Visual-first workflow, 3-part spoken hook, 4-layer alignment.

**Knows:** Hook archetypes, visual-key identification, contrast maximization, 4-layer alignment rules.

**Tools allowed:** `read`, `write` (hook section), `webfetch`/`websearch`.

### 5.6 `@setup-writer`

**Phase 5.** 10-30 seconds after hook. Credibility drop, framework name, plan, promise.

**Knows:** Proof hierarchy, credibility patterns, framework-naming rules, outcome promises.

**Tools allowed:** `read`, `write` (click-confirm section).

### 5.7 `@body-writer`

**Phase 6.** Teaching section. Value loops with dual examples, reh-hooks, per-point iteration.

**Knows:** Value loop structure, dual-example rules (technical + non-technical), reh-hook placement, point-by-point discipline.

**Tools allowed:** `read`, `write` (body section — point-by-point, requires approval between points), `webfetch`/`websearch`.

### 5.8 `@outro-writer`

**Phase 7.** Final 30-90 seconds. Loop close, recap, last dab, surprise, CTA, sign-off.

**Knows:** Loop closure patterns, recap rules, last-dab library, CTA formulas.

**Tools allowed:** `read`, `write` (outro section).

### 5.9 `@script-editor`

**Phase 8.** Quality diagnostic across the full assembled script. 40+ checks.

**Knows:** Every Kallaway constraint from every phase. Has the widest knowledge surface but is strictly read-only on content — it only reports, it doesn't rewrite.

**Tools allowed:** `read` (everything), `write` (only to a "Review Report" section), `edit` (DENIED — review doesn't rewrite, it reports and the phase agents re-do).

---

## 6. System Prompt Design Philosophy

We're explicitly modeling our prompts after **Claude Code's real, live context window** — the complete 8-layer prompt structure Anthropic ships to every production Claude Code session. The verbatim artifact is at `framework/system-prompt.md`, captured byte-for-byte from a running Claude Opus 4.6 session on 2026-04-09. This is not an article, not a summary, not an abstract pattern — it's the actual tool definitions, static system prompt, dynamic system prompt, session hooks, and per-turn context that Claude Code uses in production. **Read it before writing any agent prompt.**

### 6.1 Why mimic Claude Code's prompt shape

The Claude Code prompt is a proven template for getting consistent, role-bound behavior out of a capable model. It:

- Establishes identity in the opening paragraph, not midway through
- Uses imperative second-person throughout (*"You do X. You never do Y."*)
- Separates tone/style rules from task rules
- Inlines concrete examples of what good output looks like
- Inlines concrete examples of what bad output looks like and why
- Uses **"When X happens, respond with Y"** patterns for predictable situations
- Lists refusals explicitly, not implicitly
- Establishes environment context at the end (working directory, platform, available tools)

We adopt that shape verbatim for every agent.

### 6.2 Anti-patterns (what NOT to do)

- **Do not write prompts as "here are some tips."** Write them as *"This is who you are. This is what you do. This is what you refuse."*
- **Do not use hedging language.** "Try to avoid" → "Never". "Generally prefer" → "Always".
- **Do not reference other phases.** Each phase agent must not know other phases exist, or it will try to advance to them.
- **Do not embed decisions in prose.** If there's a rule, it should be a numbered list item, not a sentence buried in a paragraph.
- **Do not leave refusal wording to the model.** If there's a known pushback pattern, include the exact refusal sentence.
- **Do not assume the model remembers past turns.** Important constraints get restated at decision points.

### 6.3 Token budget

Each phase agent prompt targets **8,000–15,000 tokens**. That includes:

- ~500 tokens identity and scope
- ~500 tokens tone and style
- ~3,000-6,000 tokens inlined Kallaway knowledge (blueprint + template bank + checklists)
- ~1,000-2,000 tokens worked examples (good and bad)
- ~500 tokens refusal library
- ~500 tokens output format specification
- ~200 tokens environment context

Anything beyond ~15k should be moved to an on-demand reference that the agent reads via the `read` tool when it specifically needs that section.

The orchestrator prompt is smaller — target **3,000-5,000 tokens**, because it doesn't do template-level work.

---

## 7. Canonical System Prompt Template

Every phase agent prompt MUST follow this structure. This is the template any new agent starts from.

```markdown
# Identity

You are the [ROLE NAME] for Human in the Loop. Your one
job is to [PRODUCE SPECIFIC OUTPUT] for a YouTube video, using the
proven system without deviation. You are not a general-purpose writing
assistant, you are not a content coach, and you are not a video producer.
You are a [PHASE] specialist. Nothing else.

You do not know what happens in other phases. You do not care what happens
in other phases. If the user asks about other phases, you redirect them to
the orchestrator or the relevant specialist.

# Scope

You produce:
- [Exact deliverable 1]
- [Exact deliverable 2]
- [Exact deliverable 3]

You do NOT produce:
- [Thing that belongs to another phase]
- [Thing that violates the framework]
- [Thing that's off-brand]

# Tone and Style

You communicate like Fahad communicates on the Human in the Loop channel:
- Calm, confident, practitioner voice
- "I know my shit, I got you" — confidence without arrogance
- Anti-hype: "I measured this" beats "research suggests"
- Never assume the user has coding background
- Never use emojis unless the user explicitly asks
- Never flatter or use filler ("great question!", "absolutely!")

You are direct. If the user proposes something that won't work, you say so
and explain why in one sentence, then offer the Kallaway-compliant alternative.

# The [PHASE] Framework

[INLINED KNOWLEDGE — blueprint, template bank, hard rules, examples of the
framework in use from competitor videos or Fahad's channel. This is the
largest section of the prompt. 3000-6000 tokens.]

# Process

When the user (or orchestrator) dispatches to you, you run this exact process:

1. Read the current `video-state.md` file. Specifically read these sections: [LIST].
2. Confirm the prior phases are complete. If any prerequisite section is
   missing or marked incomplete, refuse and tell the user exactly which
   phase needs to run first.
3. [PHASE-SPECIFIC STEP 1]
4. [PHASE-SPECIFIC STEP 2]
5. Present your output to the user for approval.
6. On approval, write to the [PHASE] section of `video-state.md`.
7. Mark the section as complete with the completion marker.
8. Return control to the user. Do NOT suggest the next phase. Do NOT dispatch
   to another agent. Your job ends here.

# Refusals

If the user asks you to produce a [PHASE] using a non-standard approach,
respond verbatim:

> "That's not how this works here. The proven move for this is [X].
> Here's why: [one sentence]. Do you want me to run the standard version
> instead, or would you like to work with the Director to decide
> whether this video should use a different approach?"

If the user asks you to skip a required prerequisite:

> "I can't run [PHASE] without [PREREQUISITE]. Go back to
> [PREREQUISITE_PHASE] first. I'll wait."

If the user asks you to advance to the next phase:

> "That's not my phase. Return to the Director or dispatch directly
> to [NEXT_PHASE]. My job ended when [PHASE] output was approved."

If the user asks you to produce output that violates the dual-example hard
gate:

> "Every Human in the Loop video needs both a technical and a
> non-technical example. I can't sign off on this without both. Which
> one are we missing?"

[Add 3-5 more refusal patterns specific to this phase.]

# Examples of Great Output

[5-10 concrete examples. Each one shows a realistic input and the kind of
output you'd produce. Include examples from Fahad's own channel if
available, or from competitor videos that Fahad respects.]

## Example 1 — [SITUATION]

Input: [what the user said or what's in the state file]

Your output:

[exact example of good output]

Why this works:
- [reason 1]
- [reason 2]
- [reason 3]

[Repeat for 4-9 more examples.]

# Examples of Bad Output (and why)

## Bad Example 1 — [COMMON FAILURE MODE]

Input: [same as a good example, or different]

A bad agent might produce:

[exact example of bad output — the kind of thing a general-purpose agent
would generate]

Why this fails:
- [reason 1: it violates a specific Kallaway rule]
- [reason 2: it drifts from the phase scope]
- [reason 3: it doesn't match the channel voice]

What to produce instead:

[pointer to the good example version]

[Repeat for 4 more bad examples.]

# Output Format

You write to `video-state.md`, the file at `production/youtube/[slug]/video-state.md`.

Your section header is exactly:

```
## Phase [N]: [PHASE NAME]
Status: in_progress | complete
```

Your section must contain:

- [Required field 1]
- [Required field 2]
- [Required field 3]
...

When you finish, update the status line to `complete` and add a timestamp.

# Environment Context

- Working directory: the repo root
- State file location: `production/youtube/[slug]/video-state.md`
- Kallaway reference files: `hitl/kallaway/` (read via the read tool if you
  need a section that isn't inlined above)
- You have access to these tools: [LIST FROM PERMISSION MATRIX]
- You do NOT have access to: bash, shell execution, arbitrary file editing
```

### 7.1 Director prompt shape

The Director prompt is different in three ways:

1. It **does** reference other phases, because that's its job.
2. Its "Process" section is about idea validation and dispatch, not content production.
3. Its "Refusals" are about keeping the user inside the proven system at the meta level (rejecting non-standard formats, non-Human-in-the-Loop topics, videos that violate the channel's content principles).

Skeleton:

```markdown
# Identity
You are the Human in the Loop video production Director...

# Your Job
1. Help the user shape a video idea that fits the channel
2. Validate the idea against CAF (Channel Alignment Framework)
3. Confirm prerequisites before dispatching to each phase
4. Dispatch to the right specialist at the right time
5. Maintain the video state file's orchestrator notes section
6. NEVER produce phase content yourself — always dispatch

# The 8-Phase Pipeline
[Names + one-line descriptions only. NOT template-level.]

# Dispatch Rules
When the user is ready for phase X, say exactly:
"Dispatching to @X. Hand off."

[...]

# Refusals
If the user proposes a non-standard format: [...]
If the user wants to skip a phase: [...]
If the topic doesn't fit the channel: [...]
```

---

## 8. Tool Permission Matrix

Opencode uses a permission ruleset per agent. This is the initial matrix — we'll tighten as we learn.

| Agent           | read | write | edit | glob | grep | bash | webfetch | websearch | dispatch |
|-----------------|:----:|:-----:|:----:|:----:|:----:|:----:|:--------:|:---------:|:--------:|
| @director       | ✅   | state only | ❌   | ✅   | ❌   | ❌   | ❌       | ❌        | ✅       |
| @format-lead      | ✅   | section    | ❌   | ✅   | ✅   | ❌   | ✅       | ✅        | ❌       |
| @packager        | ✅   | section    | ❌   | ✅   | ❌   | ❌   | ✅       | ✅        | ❌       |
| @outliner        | ✅   | section    | ❌   | ✅   | ✅   | ❌   | ✅       | ✅        | ❌       |
| @hook-writer           | ✅   | section    | ❌   | ✅   | ❌   | ❌   | ✅       | ✅        | ❌       |
| @setup-writer  | ✅   | section    | ❌   | ✅   | ❌   | ❌   | ❌       | ❌        | ❌       |
| @body-writer           | ✅   | section    | ❌   | ✅   | ✅   | ❌   | ✅       | ✅        | ❌       |
| @outro-writer          | ✅   | section    | ❌   | ✅   | ❌   | ❌   | ❌       | ❌        | ❌       |
| @script-editor  | ✅   | report only| ❌   | ✅   | ✅   | ❌   | ❌       | ❌        | ❌       |

**"section"** means the agent can write but the write tool requires approval and should be configured to restrict writes to the agent's specific section of `video-state.md`. Opencode's permission system supports this via per-tool confirmation prompts; the specific configuration syntax will be validated against opencode's docs during build-out.

**No agent gets `bash`.** Shell access is a shortcut for "I'm stuck" behavior — we want the agent to refuse or ask for help instead of improvising.

**No agent gets `edit` on arbitrary files.** `write` is append/overwrite with approval. `edit` (in-place string replacement) invites the kind of micro-surgery that causes drift.

**Only the orchestrator can dispatch.** Phase agents never call other phase agents. All handoffs go through the user or back to the orchestrator.

---

## 9. State Management

### 9.1 The state file

Every video has one file: `production/youtube/[slug]/video-state.md`. This is the single source of truth. No agent maintains internal state between invocations; all persistence lives in this file.

**Template** (`hitl/templates/video-state.md`):

```markdown
# Video State: [TITLE]

Slug: [slug]
Created: [ISO date]
Status: in_progress

## Meta

Topic:
Target viewer:
Why this video:
Blueprint (Kallaway): [TBD by @format-lead]

---

## Phase 1: Structure
Status: not_started

[@format-lead writes here]

---

## Phase 2: Package
Status: not_started

[@packager writes here]

---

[...phases 3-7...]

---

## Phase 8: Review Report
Status: not_started

[@script-editor writes here]

---

## Director Notes

[Director writes here — user-facing conversation log, decisions made,
why we picked what we picked]
```

### 9.2 Section contract

Each phase has a required schema for its section. The phase agent is responsible for writing the required fields. The review agent checks that all fields are populated before passing.

**Example — Phase 4: Hook:**

```markdown
## Phase 4: Hook
Status: complete
Completed: 2026-04-09T14:32Z

### Key visual
[description]

### Hook archetype
[which of the 7 archetypes from Kallaway's library]

### Spoken hook (3 parts)
1. [line 1]
2. [line 2]
3. [line 3]

### 4-layer alignment check
- Visual: [X]
- Spoken: [Y]
- Text overlay: [Z]
- Title harmony: [W]

### Validation notes
[what was considered and rejected, why this version won]
```

### 9.3 Handoff protocol

When a phase agent finishes:

1. It writes its section of the state file
2. It sets `Status: complete` and adds `Completed: [timestamp]`
3. It returns control to the user (not to another agent)
4. The user decides whether to continue, revise, or return to the orchestrator

The orchestrator, when asked what to do next, reads the state file and looks for the first `Status: not_started` section — that's the next phase to dispatch to.

---

## 10. Migration Roadmap

Six phases. The goal is to ship a real video through the new system as fast as possible, not to build everything before shipping anything.

### Phase 1 — Foundation (Day 1)

**Goal:** opencode runs locally, one agent prompt exists, one test session works.

- [ ] Fork `sst/opencode` to `HumanInTheLoopReal/opencode-hitl`
- [ ] Clone locally, set upstream remote
- [ ] Install and run opencode once against a throwaway test prompt
- [ ] Create `hitl/` directory structure (empty files OK)
- [ ] Write `hitl/README.md` explaining the directory
- [ ] Create `opencode.jsonc` with ONE agent registered: `@hook-writer`
- [ ] Write a minimal placeholder `hitl/agents/hook.md` (just identity + scope, no template bank yet)
- [ ] Verify you can invoke `@hook-writer` and it responds with the right identity

**Exit criterion:** `opencode` starts, `@hook-writer` agent is dispatchable, it responds as itself.

### Phase 2 — First Real Agent: @hook-writer (Days 2-3)

**Goal:** the hook agent is production-quality. This is the hardest agent to get right, so we do it first.

**Why hook first:** it has the most constrained output, the most opinionated Kallaway rules, and it's also the highest-leverage phase for a video's performance. If we can make the hook agent behave, the others will be easier.

- [ ] Read Anthropic's published Claude Code system prompt (user to provide link)
- [ ] Read the current `.claude/skills/hook/SKILL.md` and its checklist
- [ ] Read the relevant guide files in `youtube-framework/guides/` for hooks
- [ ] Write `hitl/agents/hook.md` following the canonical template in §7
  - [ ] Inline the 7 hook archetypes
  - [ ] Inline 10 worked examples (good)
  - [ ] Inline 5 bad examples with analysis
  - [ ] Write refusal library (min 5 refusals)
  - [ ] Write the output format spec
- [ ] Set up tool permissions for `@hook-writer` in `opencode.jsonc`
- [ ] Run `@hook-writer` against a known topic (pick one from the idea backlog)
- [ ] Compare output to what current Claude Code + `/hook` skill produces
- [ ] Document every place the new agent drifts or refuses wrongly
- [ ] Tighten prompt based on observations

**Exit criterion:** `@hook-writer` produces output that Fahad would ship, without drifting, for at least one topic.

### Phase 3 — Orchestrator + State (Day 4)

**Goal:** the orchestrator works end-to-end with one specialist.

- [ ] Write `hitl/templates/video-state.md`
- [ ] Write `hitl/agents/orchestrator.md` following §7.1
  - [ ] Channel blueprint inlined
  - [ ] Phase map (names only, not template-level)
  - [ ] Dispatch rules
  - [ ] CAF validation logic
- [ ] Register `@director` as primary agent in `opencode.jsonc`
- [ ] Test end-to-end: user launches orchestrator → shapes an idea → orchestrator dispatches to `@hook-writer` → hook runs → returns → orchestrator acknowledges
- [ ] Verify state file is written correctly by both agents

**Exit criterion:** a user can have a conversation with the orchestrator, get dispatched to `@hook-writer`, complete the hook phase, and return to the orchestrator with the state file properly updated.

### Phase 4 — Remaining Specialists (Days 5-7)

**Goal:** all 8 phase agents exist at production quality.

Port in this order (chosen for dependency + difficulty):

1. `@format-lead` (sets everything up, others depend on it)
2. `@outliner` (next dependency)
3. `@setup-writer` (smaller scope, quick win)
4. `@outro-writer` (smaller scope, quick win)
5. `@body-writer` (hardest — has per-point iteration, dual examples, most content)
6. `@packager` (can run in parallel with others since it's about thumbnails/titles)
7. `@script-editor` (last — it validates all the others)

For each agent:
- Follow the same process as Phase 2 (read current skill, read guides, write prompt, test, iterate)
- Target 4-6 hours per agent for the first pass
- Do not try to get every agent perfect before moving on — ship something that works and iterate after seeing a full run

**Exit criterion:** all 9 agents are registered, callable, and produce non-embarrassing output on a test topic.

### Phase 5 — First Full Video (Day 8)

**Goal:** run one real video through the entire new system, end to end.

- [ ] Pick a validated topic from the idea backlog
- [ ] Create the video directory and state file from the template
- [ ] Work through all 8 phases using the orchestrator + specialists
- [ ] At every phase, note: what drifted, what refused wrongly, what felt slow, what felt magical
- [ ] Finish with a production-ready script at `production/youtube/[slug]/script.md`

**Exit criterion:** we have ONE finished script produced entirely by the new system, ready to record.

### Phase 6 — Second Video + Decommission (Days 9-10)

**Goal:** validate consistency, decommission the old system.

- [ ] Run a second video through the new system
- [ ] If quality holds: move `.claude/skills/` to `backup-skills/pre-opencode-skills-2026-04/`
- [ ] Update `CLAUDE.md` to point at the new system
- [ ] Update `youtube-framework/SYSTEM.md` to reflect the new pipeline
- [ ] Archive the current `/structure`, `/hook`, etc. skill invocations from the repo
- [ ] If quality doesn't hold: do NOT decommission; instead diagnose which agents are the weakest and iterate on their prompts

**Exit criterion:** two shipped videos through the new system, OR a clear understanding of which prompts need more work before shipping.

---

## 11. Success Criteria

We're successful if, after the first two videos through the new system:

1. **No phase drift.** No agent tried to advance to the next phase without explicit user direction.
2. **No template violations.** All outputs match Kallaway blueprints and template banks.
3. **No identity collapse.** No agent broke character and started behaving like a general-purpose assistant mid-session.
4. **Fewer corrective turns.** The number of "no, redo that" interactions drops significantly compared to Claude Code + skills.
5. **Faster end-to-end.** Full video produced in less total wall-clock time than the current system (because the agent isn't fighting us).
6. **Fahad reports higher trust.** Subjective but critical — does it feel like working with a specialist, or like babysitting a generalist?

### Anti-goals (explicitly NOT trying to achieve)

- **Not trying to eliminate the user from the loop.** The user is the director. The agents are specialists. Human in the loop is the product.
- **Not trying to run the pipeline unattended or in batch.** This is interactive creative work.
- **Not trying to automate video production end-to-end.** The goal is better specialists, not fewer humans.
- **Not trying to build a general-purpose video agent.** Every agent is Kallaway-specific.

---

## 12. Open Decisions (to resolve as we go)

1. **Fork branding.** `opencode-hitl` for now. Decide final name once we have divergence.
2. **Kallaway knowledge: inline vs on-demand.** Starting with "inline the critical 5-10k tokens per agent, load deep references on-demand via `read`." Revisit after first video — if agents are over-budget, move more to on-demand; if they're under-referencing, inline more.
3. **Perplexity integration.** Current skills use Perplexity MCP for research. Options: (a) add Perplexity as a custom tool in opencode, (b) use opencode's built-in `webfetch`/`websearch`, (c) pre-research outside the agent and pass results via state file. Decide during Phase 2 build-out.
4. **Phase gate enforcement in code.** Current plan: enforce via prompt refusals only. If prompt-level refusals prove insufficient after 3 videos, add ~100 lines of dispatch-loop patches to reject out-of-order phase dispatches. This is the first place we'd diverge from upstream.
5. **Multi-provider.** Opencode supports Anthropic, OpenAI, Google, local. Start with `claude-opus-4-6` for all agents. Experiment with `claude-haiku-4-5` for `@script-editor` later (it's a diagnostic pass, not a creative pass — cheaper model might suffice).
6. **State file location.** Currently planned as `production/youtube/[slug]/video-state.md`. Matches existing convention in the repo. Confirm this survives after opencode takes over.
7. **Upstream contribution.** Phase gates (if we build them) might be worth contributing back to opencode. Revisit after we have a working version and see how general the feature is.
8. **Skills API on the side.** Today Anthropic launched a Skills API (see `plans/` and today's research). We could upload our agent prompts as versioned skills for cross-tool portability. Park this — it's a "nice to have" for after migration is done.
9. **TUI customization.** Opencode's TUI is excellent but not branded. Keep as-is for now; revisit if we ever want a HitL-branded experience for a potential course/community.
10. **Backup strategy.** Before migrating, take a full snapshot of `.claude/skills/` into `backup-skills/pre-opencode-snapshot/` so we can roll back if needed.

---

## 13. Next Concrete Steps

Right now, today:

1. **User: find and share** Anthropic's Claude Code system prompt article link. This is the single most important reference for writing the agent prompts in Phase 2.
2. **User: confirm branding** — `opencode-hitl` as working name, or an alternative.
3. **User: confirm migration order** — do we agree `@hook-writer` goes first in Phase 2, or does Fahad want to start with the agent that drifted worst yesterday? (Possibly `@format-lead`, depending on where the observed drift happened.)
4. **Assistant: execute Phase 1** — fork opencode, set up `hitl/` directory skeleton, write the placeholder `@hook-writer` agent, verify the runtime works. Estimate: 2-3 hours of interactive work with Fahad.

---

## 14. References

**OpenCode:**
- Upstream repo: https://github.com/sst/opencode
- Local clone (already present): `/Users/fahadkaleem/Documents/Workspace/gitrepos/opencode/`
- Key source files (from Haiku survey):
  - `packages/opencode/src/agent/agent.ts` — agent definition model
  - `packages/opencode/src/agent/prompt/*.txt` — prompt loading pattern
  - `opencode.jsonc` — config format

**Claude Code reference (the prompt we're modeling after):**
- `framework/system-prompt.md` — the complete, verbatim Claude Code context window, captured live from a running Claude Opus 4.6 session on 2026-04-09. 1,182 lines covering all 8 layers of a production Claude Code session (tool definitions, static system prompt, dynamic system prompt, session-start hooks, per-turn context). **This is the canonical reference for §6 and §7 of this plan.** Every agent prompt we write should be held to the standard this artifact establishes.

**Human in the Loop internal references:**
- `CLAUDE.md` (at the openloop repo root) — brand operating instructions, identity-transfer rule, Kallaway 100% hard gate, interaction style
- `framework/README.md` — directory guide for everything under `framework/`
- `framework/youtube-framework/CHANNEL.md` — channel blueprint
- `framework/youtube-framework/SYSTEM.md` — the legacy 8-phase pipeline documentation
- `framework/youtube-framework/guides/` — 34 Kallaway reference files with template banks (source for inlined knowledge)
- `framework/voice-references/kallaway/` — 79 Kallaway transcripts across YouTube, shorts, socialmedia, case-studies, monetization (read on-demand for voice reference)
- `framework/legacy-skills/` — the 8 legacy skills we're porting from (source material, do not run)
- `framework/legacy-skills/_shared/channel-blueprint.md` — channel identity as inlined into every legacy skill

**Related plans:**
- (None yet — this is the first plan under `framework/`)

---

## 15. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Prompt-level refusals aren't strong enough, agents drift anyway | Medium | High | Budget 1 day after Phase 5 for a "tighten pass." If still drifting, add code-level phase gates. |
| Opencode upstream makes a breaking change during our migration | Low | Medium | Pin to a specific commit during Phase 1-4. Only rebase after Phase 5. |
| Inlining Kallaway knowledge blows past token budget | Medium | Medium | Start with critical content inlined, move to on-demand via `read` if prompts exceed 15k tokens. |
| Orchestrator becomes a general-purpose assistant instead of a dispatcher | Medium | High | Lock orchestrator tools to `read` + dispatch only. No `write` except state notes. No `webfetch`. |
| Migration takes longer than estimated, ship bias kicks in | Medium | High | After Phase 2 (first real agent), assess: if `@hook-writer` took more than 6 hours to dial in, re-estimate the remaining 7. Don't build all 8 before testing the first 2. |
| Opencode's permission system doesn't support per-section writes | Low | Medium | Fall back to: agent writes the whole state file, with a refusal in the prompt that says "only modify your section." Verify this in Phase 1. |
| Fahad still doesn't ship videos despite the new system | Medium | Highest | This whole plan fails if it becomes another infrastructure project with no video output. **Phase 5 is a hard gate — no further agent work until one real video ships.** |

---

## Document history

- 2026-04-09: Initial draft by Claude, pending Fahad's review and sign-off.
