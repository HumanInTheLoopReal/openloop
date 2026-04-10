# OpenLoop

OpenLoop is a fork of [`sst/opencode`](https://github.com/sst/opencode) being transformed into a content production studio for the Human in the Loop brand. It runs a team of specialist agents — one per phase of content production — that work with Fahad to ship videos, shorts, posts, and other content across every social platform.

This is not a general-purpose coding assistant. This is not a research tool. It's a creative collaborator built around focused specialists, each with a locked identity and a precise role in the pipeline.

**Master plan:** `framework/opencode-migration.md` — architecture, canonical prompt template, tool permission matrix, rollout roadmap. Read it before proposing any work in this repo.

---

## Human in the Loop

Human in the Loop is Fahad's AI education brand. The mission: **make AI accessible to everyone**. Not AI for engineers, not AI for experts — AI for the 65-year-old dad who wants to build an app for his neighborhood, the marketer automating a boring workflow, the student shipping their first project.

The proof point: Fahad's father, 65, high school education, non-native English speaker, vibe-coded his own apps. That's what the brand teaches — genuinely good AI use, responsibly, by regular people.

**Voice:** calm, confident, anti-hype. "I know my shit, I got you." Confidence without arrogance. Practitioner-first — "I measured this" beats "research suggests."

---

## The Current Work in This Repo

The work right now is **converting the legacy Kallaway-based skills in `framework/legacy-skills/` into focused agent system prompts** for the opencode runtime. Each of the 8 phases of the existing YouTube pipeline becomes one specialist agent with its own system prompt, its own tool surface, and its own locked identity. Together, these specialists plus an orchestrator form the OpenLoop creative team.

**Source material:**
- `framework/youtube-framework/` — structural knowledge (blueprints, beats, checklists). What content should **do**.
- `framework/voice-references/kallaway/` — 79 Kallaway transcripts organized by topic. How content should **sound**.
- `framework/legacy-skills/` — the 8 phase skills from the old Claude Code pipeline. Source material for writing new agent prompts, not runtime assets.

**Destination:**
- `hitl/agents/*.md` — new agent system prompts (to be created during migration Phase 1-4).
- `opencode.jsonc` — agent registry at the repo root.

---

## The Identity-Transfer Rule

This is the most important rule when writing prompts. Get it wrong and the agents feel like derivatives.

The agent prompts are being built using Kallaway's framework as scaffolding. But **the final agent does not know it's built on Kallaway.** The Hook Writer doesn't reference Kallaway. The Format Lead doesn't cite Kallaway. The knowledge becomes each specialist's own identity.

**Wrong:**
> You are the Hook Writer. You use Kallaway's 7 hook archetypes to maximize retention...

**Right:**
> You are the Hook Writer. You use 7 hook archetypes to maximize retention. They are: 1. [X], 2. [Y], ...

**Wrong:**
> Following Kallaway's framework, a great hook has three parts...

**Right:**
> A great hook has three parts...

**Wrong (in a refusal):**
> "That's not in Kallaway's system. The Kallaway-compliant version is..."

**Right (in a refusal):**
> "That's not how this works. The proven move for this situation is..."

**Internal provenance is different.** This file, `framework/opencode-migration.md`, READMEs, and other internal documentation can and should cite Kallaway as the source. Attribution matters for honesty and traceability. The stripping applies **only to the agent prompts themselves and anything the agent says to the user.** Everything in `framework/` that's read by humans (not agents speaking to users) can name Kallaway freely.

---

## Agent Naming

Every agent has two names:

- **Display identity** (what the agent calls itself in prompts and to the user): `Hook Writer`, `Format Lead`, `Body Writer`, `Script Editor`, etc. Title case. Human-readable. Names use creator / YouTube vocabulary.
- **Dispatch ID** (what the user types to invoke it): `hook-writer`, `format-lead`, `body-writer`, `script-editor`. Kebab case. Matches opencode's agent registry conventions. User invokes with `@hook-writer`.

In prompts, the agent refers to itself by its display identity. In `opencode.jsonc`, it's registered by its dispatch ID.

**The Director is the exception** — no role suffix, just `Director` (display) and `@director` (dispatch). It's a coordinator, not a writer or specialist.

The full roster: `@director`, `@format-lead`, `@packager`, `@outliner`, `@hook-writer`, `@setup-writer`, `@body-writer`, `@outro-writer`, `@script-editor`.

---

## Prompt-Writing Methodology

Every agent prompt follows the canonical template in `framework/opencode-migration.md §7`. Every section of that template must be present. No shortcuts.

**Model after Claude Code's real, live context window.** The complete 8-layer Claude Code context — captured verbatim from a running Claude Opus 4.6 session — is at `framework/system-prompt.md`. This is not a blog post summary or an abstract example. It's the actual bytes Claude sees on every turn: tool definitions, static system prompt (identity, rules, doing-tasks guidance), dynamic system prompt (session guidance, memory, environment), session-start hook injections, per-turn user context. Read this file before writing any agent prompt. It's the canonical reference for what a production-grade system prompt looks like — imperative second-person throughout, clear identity, explicit refusals, worked examples of good and bad output, environment context at the end, and deliberate attention to what's cacheable vs. dynamic.

**Rules for writing prompts:**

- **Imperative second-person throughout.** "You do X. You never do Y." Never "The agent should..." or "The agent tries to..."
- **No hedging language.** "Try to avoid" → "Never." "Generally prefer" → "Always." "Consider" → "Do." Soft words produce soft behavior.
- **Refusal wording is exact.** If there's a known pushback pattern, write out the exact sentence the agent says. Don't let the model improvise refusals in real time — it will soften them.
- **Examples are concrete, not descriptive.** Don't write "the agent produces hook-style output" — write out what that output looks like, verbatim, as if it were real.
- **Include bad examples with explanations.** Show the failure modes. Explain why each one fails. This is how the agent learns what NOT to do.
- **Environment context goes at the end.** Working directory, state file location, tool whitelist, reference paths. The agent needs to know what's available and where.
- **Length is not a constraint.** A precise 30k-token prompt is better than a vague 5k-token prompt. Opus-class models handle long prompts well, and the prompt IS the product. Write as much as the role needs. Inline the critical knowledge. Let voluminous references (like the 79 Kallaway transcripts) be loaded on-demand via the `read` tool.

---

## Hard Rules

These are non-negotiable. Violating any of them produces incorrect work.

1. **Never edit upstream opencode code for the first 4 weeks.** All HitL-specific work lives in `framework/` and `hitl/`. Upstream files stay exactly as `sst/opencode` ships them so we can rebase cleanly. If a limitation is hit, document it in `framework/opencode-migration.md` as a deferred decision — do not patch core.

2. **Never inline Kallaway's name into an agent's user-facing voice or identity.** See §The Identity-Transfer Rule. The agent has its own identity. Kallaway is scaffolding, not attribution.

3. **Never reference sibling phases inside a phase agent's prompt.** A phase agent that knows the next phase exists will try to advance to it. Each specialist knows only its own phase. Coordination happens through the orchestrator, not through the specialists.

4. **Never use hedging language in agent prompts.** Every rule is imperative. Every refusal is exact. "Should" is banned. "Must" and "never" are preferred.

5. **Never skip human-in-the-loop gates.** The user is the director. Agents request approval before writing to the state file, before advancing within their phase, before making creative calls. "Human in the loop" is the brand and the architecture — it's non-negotiable.

6. **Never delete legacy skill files without first porting them.** The legacy skills in `framework/legacy-skills/` are the provenance record. Even after the replacement agent exists, the legacy skill stays as historical context for why the agent behaves the way it does.

7. **Never propose non-Kallaway structural moves or custom formats.** Fahad has wasted time and money inventing custom formats in the past. If Fahad proposes a structural move that isn't in Kallaway's system, flag it immediately, point to the closest Kallaway equivalent, and refuse to proceed until Fahad explicitly confirms he wants to override the hard gate. Do not politely accommodate. Do not treat custom ideas as "interesting alternatives."

8. **Never add complexity beyond what was asked.** No speculative abstractions. No "while I'm in here" refactors. No backward-compat shims. No feature flags. If the task is to write an agent prompt, write the agent prompt — don't also refactor the config schema, add a prompt loader, or build a test harness. The right amount of complexity is exactly what the task requires, no more.

9. **Never claim work is done without verification.** Before saying an agent is ready, read the prompt from top to bottom, check it against the canonical template in the migration plan, and verify it registers correctly in `opencode.jsonc`. Evidence before assertions.

---

## Content Principles

When writing any prompt, any user-facing text, or any example inside a prompt, these principles set the voice:

- **Calm, friendly, anti-hype.** "I know my shit, I got you." Confidence without arrogance.
- **AI is for everyone.** Never assume the user has a coding background. Every concept gets explained from the ground up when it's introduced.
- **Dual examples are a hard gate.** Every video teaches through BOTH a technical example AND a non-technical example of the same concept. This is the channel's signature format — not a suggestion, a requirement. Agents that write video content enforce this.
- **Practitioner voice.** "I measured this." "I ran this on my machine for 3 months." "I tried this and it broke here." Beats "research suggests" every time.
- **Real numbers, real failure modes, real trade-offs.** Vague is death. Concrete always wins.
- **Responsible AI.** Don't waste tokens. Environment matters. Build things that help.
- **Every piece teaches: feature → concept → edge.** Start with what the thing is. Explain why it works. End with the edge cases where it breaks.

---

## How to Interact with Fahad

- **Terse responses.** Fahad is a senior engineer with 15+ years of experience. He reads fast, has strong taste, and doesn't need hand-holding. Lead with the decision or the answer. Skip the preamble. Skip trailing summaries of what you just did — he can read the diff.
- **Push back on framework shopping.** If Fahad proposes a custom format, a novel structural move, or a hybrid that isn't in Kallaway's system, push back hard. Point at the closest Kallaway equivalent. Ask him to explicitly confirm he wants to override the hard gate before proceeding. This is a durable instruction — it has cost time and money before.
- **Ship bias enforcement.** Zero videos have been posted yet. The real risk is infrastructure sprawl — building new systems instead of producing content. When a task could be done in the existing system vs. building something new, default to the existing system. Surface the trade-off explicitly.
- **Don't over-explain, don't preach.** If there's a mistake, fix it. If there's a decision to make, state the options and your recommendation in one pass. Long-winded explanations waste his time and drift from the work.
- **Confidence without arrogance.** If you know the answer, give it. If you don't, say so. Don't hedge.
- **When uncertain, point to the migration plan.** `framework/opencode-migration.md` is the source of truth. If there's a conflict between what Fahad says and what the plan says, surface the conflict — don't silently pick one.

---

## Key Paths

| What | Where |
|---|---|
| Master plan — start here | `framework/opencode-migration.md` |
| Structural knowledge (what content does) | `framework/youtube-framework/` |
| Voice/tone source (how content sounds) | `framework/voice-references/kallaway/` |
| Legacy skills (reference only, do not run) | `framework/legacy-skills/` |
| New agent prompts (to be created) | `hitl/agents/*.md` |
| Agent registry | `opencode.jsonc` (repo root) |
| Per-video state files | `production/[platform]/[slug]/video-state.md` |

---

## What This File Is NOT

- **NOT the master plan.** That's `framework/opencode-migration.md`. Read it before any significant work.
- **NOT video production instructions.** Those live inside each agent's own system prompt under `hitl/agents/`.
- **NOT a code style guide for opencode.** Upstream handles that.
- **NOT the full Kallaway framework.** That's in `framework/youtube-framework/guides/` and `framework/voice-references/kallaway/`.
- **IS:** the operating context for any Claude session working in this repo on prompt-writing, agent configuration, or framework migration work.

---

## Repo State (snapshot — 2026-04-09)

- Fresh fork of `sst/opencode` at `HumanInTheLoopReal/openloop`
- `framework/` populated with migration plan, youtube-framework, voice-references/kallaway, legacy-skills
- No new agent prompts written yet — Phase 1 of the migration plan is pending
- Upstream opencode runtime code not yet pulled into this working copy

Update this section as the repo state meaningfully changes.

---

## Git & GitHub

Use the `HumanInTheLoopReal` account:

```bash
gh auth switch --user HumanInTheLoopReal
```

Upstream remote for rebasing:

```bash
git remote add upstream https://github.com/sst/opencode.git
git fetch upstream
```
