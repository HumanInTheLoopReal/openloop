# OpenLoop Framework

This directory holds the **content and knowledge** that drives OpenLoop's agents. It is deliberately separated from the upstream opencode runtime (which lives in `packages/`, `sdks/`, etc. at the repo root) so that rebases from upstream never touch this content.

**Rule of thumb:** anything in `framework/` is Human in the Loop material. Anything outside `framework/` is upstream opencode and should be kept in sync with `sst/opencode` via rebase.

---

## Layout

```
framework/
├── README.md                # this file
├── opencode-migration.md    # the master migration plan
├── system-prompt.md         # Claude Code's live context window, verbatim (prompt-writing reference)
├── youtube-framework/       # Kallaway production operating system (structural knowledge)
│   ├── CHANNEL.md           # channel blueprint: IVA, creator moat, signature style
│   ├── CLAUDE.md            # brand operating instructions and hard gates
│   ├── SYSTEM.md            # the current 8-phase pipeline documentation
│   └── guides/              # 34 Kallaway reference files (template banks, checklists)
├── voice-references/        # voice, style, and tone source material (platform-agnostic)
│   └── kallaway/            # 79 Kallaway transcripts, the primary voice reference
│       ├── youtube/         # long-form YouTube videos
│       ├── shorts/          # short-form vertical content
│       ├── socialmedia/     # cross-platform social media wisdom
│       ├── case-studies/    # growth stories and retrospectives
│       └── monetization/    # making money from content
└── legacy-skills/           # the old Claude Code skills we're porting FROM
    ├── _conventions/        # pipeline skill build conventions
    ├── _shared/             # shared infrastructure (channel blueprint inlined, etc.)
    ├── structure/           # Phase 1 skill (→ becomes @format-lead)
    ├── package/             # Phase 2 skill (→ becomes @packager)
    ├── outline/             # Phase 3 skill (→ becomes @outliner)
    ├── hook/                # Phase 4 skill (→ becomes @hook-writer)
    ├── click-confirm/       # Phase 5 skill (→ becomes @setup-writer)
    ├── body/                # Phase 6 skill (→ becomes @body-writer)
    ├── outro/               # Phase 7 skill (→ becomes @outro-writer)
    └── review-script/       # Phase 8 skill (→ becomes @script-editor)
```

---

## What each folder is for

### `opencode-migration.md`

The master migration plan. Explains why we're forking opencode, what we're building, the agent roster, the system prompt design philosophy, the tool permission matrix, and the 6-phase rollout roadmap.

**Start here if you're new to the project.** This doc is the single source of truth for what OpenLoop is and how it gets built.

### `system-prompt.md`

The complete, verbatim Claude Code context window — captured live from a running Claude Opus 4.6 session on 2026-04-09. Not a blog post, not a summary, not an abstracted example. It's the actual 1,182-line artifact showing every byte Claude sees on every turn of a Claude Code session, across all 8 layers:

1. Tool definitions (JSONSchema)
2. Static system prompt (identity, rules, doing-tasks guidance)
3. The `SYSTEM_PROMPT_DYNAMIC_BOUNDARY` marker
4. Dynamic system prompt (session guidance, memory, environment, MCP instructions)
5. Harness tool-use notes (multi-tool calls, JSON structure)
6. Session-start hook injections (output style, skills, deferred tools, MCP header)
7. Per-turn user context (CLAUDE.md memory, current date)
8. The user's first message

**This is the canonical reference for writing OpenLoop agent prompts.** When you write a new specialist, read this file first. It shows exactly what a production-grade system prompt from Anthropic looks like — imperative voice, clear identity, explicit refusals, worked examples, environment context at the end, and deliberate attention to what's cacheable versus dynamic. Every OpenLoop agent prompt should be held to the same standard.

### `youtube-framework/`

The Kallaway production operating system — the canonical content and structural knowledge that every YouTube agent must follow. Includes:

- The 7 structural blueprints (listicle, layered framework, sequential process, etc.)
- 34 reference guide files covering template banks, checklists, and worked examples
- The channel blueprint (Ideal Viewer Avatar, creator moat, signature style)
- The current 8-phase system doc (what we're replacing with agents)

This is **read-only source material**. Agents reference it (via the `read` tool) or we inline critical sections into agent system prompts. We don't edit it to fit the agent architecture — the agent architecture fits it.

YouTube is the first platform. Shorts, X, and future platforms will get their own sibling folders (`shorts-framework/`, `x-framework/`, etc.) as they come online.

### `voice-references/`

Source material for **how content should sound** — tone, pacing, sentence shapes, rhetorical moves. Separate from `youtube-framework/`, which covers **what content should do** (structure, beats, gates).

Currently contains:

- **`kallaway/`** — 79 transcripts of Kallaway videos, organized by topic:
  - `youtube/` — long-form YouTube videos (hooks, scripts, storytelling mechanics)
  - `shorts/` — short-form vertical content
  - `socialmedia/` — cross-platform social media strategy and commentary
  - `case-studies/` — growth stories, experiments, retrospectives
  - `monetization/` — making money from content, business breakdowns

These are **read by agents on-demand** when they need to reference Kallaway's voice on a specific topic (e.g., `@hook-writer` reading `kallaway/youtube/how-to-create-a-killer-hook-impossible-to-skip.md` when writing a new hook). They should NOT be inlined into every agent system prompt — the combined transcript corpus is too large. Instead, each agent knows the transcripts exist, knows the folder structure, and uses the `read` tool + filename patterns to pull the relevant transcript when it needs a specific pattern.

**This folder is platform-agnostic.** Kallaway's YouTube videos inform the YouTube agents. His `socialmedia/` and `shorts/` transcripts will inform the future Shorts and X agents. As other voice references arrive (Fahad's own recordings, transcripts from other creators, etc.), they become siblings of `kallaway/` — not subfolders under any specific platform.

### `legacy-skills/`

The 8 phase skills from the old Claude Code pipeline. These are **source material for writing the new agent prompts**, not runtime assets. Each legacy skill contains:

- Identity and scope (copy into new agent's `# Identity` section)
- Process steps (adapt into new agent's `# Process` section)
- Template banks (inline into new agent's framework section)
- Refusal rules (copy into new agent's `# Refusals` section)
- Output format (copy into new agent's `# Output Format` section)

When we port a phase, we read the legacy skill, distill its substance, and rewrite it as a proper focused system prompt following the canonical template in `opencode-migration.md` §7. Then the legacy skill becomes a historical reference.

**Do not run legacy skills.** They were designed for Claude Code's skills system, which OpenLoop is replacing. They exist here only as source material.

---

## How this connects to the rest of OpenLoop

The migration plan in `opencode-migration.md` describes the target architecture:

- **New agent prompts** will live at `hitl/agents/*.md` (not yet created — Phase 1 of the roadmap)
- **Agent registry** will live in `opencode.jsonc` at the repo root
- **Runtime state files** (one per video) will live at `production/youtube/[slug]/video-state.md`
- **Kallaway knowledge** that agents read on-demand lives here at `framework/youtube-framework/`

So the flow is:

```
framework/youtube-framework/   →  source knowledge (read by agents)
framework/legacy-skills/       →  reference material (read by humans writing new prompts)
hitl/agents/                   →  new agent system prompts (TBD, created during Phase 1-4)
opencode.jsonc                 →  registers the agents with the opencode runtime
```

---

## Future platforms

OpenLoop is platform-agnostic by design. As new platforms come online, expect sibling folders alongside `youtube-framework/`:

- `framework/shorts-framework/` — vertical short-form (YouTube Shorts, TikTok, Reels)
- `framework/x-framework/` — long-form X/Twitter threads and posts
- `framework/newsletter-framework/` — email / written long-form

Each platform gets its own operating system, its own agent roster, its own legacy-skills area if we're porting from something that existed before. The orchestrator agent will route between platforms as the user specifies which one they're working on.

---

## Rules for editing

1. **Never delete anything under `legacy-skills/` without first porting it.** Even after the new agent exists, the legacy skill is the provenance record for why the agent behaves the way it does.
2. **`youtube-framework/` is the canonical Kallaway reference.** Only edit it if a Kallaway rule itself changes — not to make it easier for an agent to consume.
3. **`opencode-migration.md` is a living document.** Update it as decisions are made. Mark superseded sections rather than deleting them.
4. **Keep this directory out of upstream rebases.** Nothing in `framework/` should ever be touched by a `git merge upstream/main`.

---

## Status

- Created: 2026-04-09
- Migration phase: pre-Phase-1 (directory moved into place, agent work not yet started)
- Next step: execute Phase 1 of `opencode-migration.md` — fork opencode runtime is already here; write the first agent prompt (`@hook-writer`) following the canonical template
