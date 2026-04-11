# Prompt Plan: How to Write Agent System Prompts for OpenLoop

This document captures the exact process, reasoning, and methodology used to write the Hook Writer system prompt (`hitl/agents/hook-writer.md`). Follow this plan to write every remaining agent prompt in the OpenLoop pipeline. Give this file to any Claude session that will help write or review agent prompts.

**Canonical exemplars:** `hitl/agents/hook-writer.md` (single-file agent, ~36k tokens) and `hitl/agents/format-lead.md` + `hitl/agents/format-lead/` (folder agent, ~55k tokens total). Read both before starting any new agent. Hook-writer is the quality bar for voice and depth. Format-lead is the reference for folder-based agents with large source material.

**Master plan:** `framework/opencode-migration.md` — architecture, roster, tool matrix, rollout phases. Read before proposing any work.

**Channel blueprint:** `framework/legacy-skills/_shared/channel-blueprint.md` — IVA, moat, voice, content principles. Every agent prompt inlines a subset of this.

**Claude Code system prompt reference:** `framework/system-prompt.md` — the complete, verbatim Claude Code context window. This is the CONTAINER pattern every agent prompt follows. Also: the Claude Code system prompt is loaded into every Claude Code session's context — the assistant can reference its own system prompt directly as a formatting exemplar.

---

# The Core Principle: Container vs Content

This is the single most important concept in this entire plan. Get it right and the agents feel like specialists. Get it wrong and they feel like paraphrased summaries wearing a costume.

**Container** = Claude Code's system prompt structure. It teaches:
- How to open with identity (paragraph before any heading)
- Where to put non-negotiables (`IMPORTANT:` lines, immediately after identity, before `# Tone and Style`)
- How to structure sections (`#` for major, `##` for subsections)
- How to state rules (imperative second-person: "You do X. You never do Y.")
- How to format examples (inline, not blockquoted)
- How to handle refusals (inline prose with exact wording in quotes)
- Where to put environment context (last section, always)
- Which keywords the model treats as load-bearing (`IMPORTANT`, `NEVER`, `MUST`, "verbatim", "exactly")

**Content** = the domain source material (Kallaway's teachings, reference files, transcripts). It provides:
- The exact vocabulary the agent uses to think and talk about its domain
- The named concepts, structural metaphors, and decision frameworks
- The template banks with `[SWAP: ...]` markers
- The worked examples showing what good output looks like
- The failure modes showing what bad output looks like
- The refusal patterns for when the user pushes off-system

**The rule:** You do not paraphrase the content into your own voice. You use the source's exact vocabulary and idiom, organized into the container's structure, with attribution stripped. The agent's voice IS the source material's voice. Your job as prompt-writer is to organize and format, not to rephrase.

---

# The Identity Transfer Rule

The agent prompts are built using Kallaway's framework as scaffolding. But the final agent does not know it was built on Kallaway. The knowledge becomes the agent's own identity.

**What this means in practice:**

Every teaching layer, every named concept, every structural metaphor from the Kallaway transcripts and reference files goes into the agent prompt VERBATIM — but with Kallaway's name stripped. "Kallaway's golden approach to hooks" becomes "the golden approach to hooks." "Kallaway's 7 hook archetypes" becomes "the 8 hook archetypes." The words stay. The attribution goes.

**Where attribution IS allowed:** This file, `framework/opencode-migration.md`, `CLAUDE.md`, and any internal documentation read by humans (not agents speaking to users). The stripping applies ONLY to the agent prompts themselves and anything the agent says to the user.

**Grep test:** After writing any agent prompt, grep for `[Kk]allaway`. If there are any matches, fix them. Zero tolerance.

---

# The Process (8 steps)

This is the exact sequence used for the Hook Writer. Follow it for every agent.

## Step 1: Read the source material

Every agent is porting a legacy skill from `framework/legacy-skills/[phase]/`. Each legacy skill has:
- `SKILL.md` — the workflow definition, core principles, reminders
- `references/` — numbered reference files with the framework knowledge
- `templates/` — worked examples of completed output

Additionally, the framework knowledge lives in:
- `framework/youtube-framework/guides/` — organized by topic (hooks, structure, body, etc.)
- `framework/voice-references/kallaway/` — 79 transcripts organized by platform (youtube, shorts, socialmedia, etc.)

**You must read ALL of these files for the relevant phase before writing a single line.** Not skim. Not summarize. Read in full. The source material IS the content of the prompt.

**Dispatch parallel Explore subagents** to gather and extract:

**Subagent A — Source material extraction:**
- Read every reference file and SKILL.md for the phase
- Return full verbatim content with section boundaries preserved
- Preserve every named concept, template, checklist, worked example, and quoted transcript
- Do NOT paraphrase into the subagent's own voice

**Subagent B — Voice mining from transcripts:**
- Read 5-8 relevant Kallaway transcripts from `framework/voice-references/kallaway/youtube/`
- Extract 50-70 verbatim phrases organized by category:
  1. Identity statements — what the concept IS and DOES
  2. Structural metaphors — vivid named imagery
  3. Imperative rules — hard commands ("you always X", "you never Y")
  4. Diagnostic questions — self-audit language
  5. Failure-mode callouts — how bad output gets named
  6. Voice signatures — transitional and emphasis phrases
- Verbatim only. No paraphrasing. No cleaning up grammar.

**Subagent C — Channel blueprint:**
- Read `framework/legacy-skills/_shared/channel-blueprint.md`
- Return the sections relevant to this agent's phase (IVA, moat, voice, constraints)

## Step 2: Understand the formatting template

Before writing, study two things:

**A. The Claude Code system prompt** (loaded in your context or at `framework/system-prompt.md`). Focus on:
- How the identity paragraph is structured (before any heading)
- How `IMPORTANT:` lines are placed (after identity, before `# Tone and Style`)
- How `# Tone and Style` establishes runtime behavior and communication style
- How rules are stated (imperative: "You do X. You never do Y." — never "The agent should...")
- How the `# Environment` section is structured (last, always)
- The absence of `---` horizontal rules
- The absence of `>` blockquotes
- The use of inline prose for everything

**B. The Hook Writer prompt** (`hitl/agents/hook-writer.md`). This is the exemplar. Every new agent prompt follows the same structural skeleton:

```
[YAML frontmatter — name, display, phase, description (NO model field — agents inherit the user's default model)]

[Identity paragraph — who you are, what you do, nothing else]

IMPORTANT: [non-negotiable 1]
IMPORTANT: [non-negotiable 2]
IMPORTANT: [non-negotiable 3]
...3-5 IMPORTANT lines, each tied to a specific failure mode

# Tone and Style
[Communication style, output behavior, dispatch scope, system-reminder handling]

# Core Principles
[Consolidated list of the agent's operating principles from SKILL.md]

# Scope
## What you produce
## What you do not produce

# [Domain Framework — the big section]
[All framework knowledge inlined verbatim]
[Named concepts with Teaching layer: subsections]
[Templates with [SWAP: ...] markers]
[Worked examples under Original: labels]
[Checklists at the end of each major subsection]

# [The Channel You Write For]
[IVA, dual example rule, no-face, voice, contrarian beliefs, moat weights]

# Process
[Step-by-step workflow with numbered steps]
[Approval checkpoints marked with ⚠ CHECKPOINT N]

# Refusals
[12-15 exact refusal patterns as inline prose]
["When X happens, respond with exactly this: '...'"]

# Examples of Great Output
[1 full worked example matching the output format, ~100% verbatim from source]
[2-3 shorter examples showing different archetypes/approaches]

# Examples of Bad Output (and why)
[5-6 bad examples with failure mode analysis and "what to produce instead"]

# Output Format
[Exact state file section schema with required fields]

# Reminders
[Consolidated list of load-bearing rules — the things the agent will be tempted to drift on]

# Environment Context
[Working directory, state file location, tools available/denied, dispatch mode]
[What you never do — final list of absolute prohibitions]
```

## Step 3: Write the first draft

Write the full prompt in one pass using the Write tool. Compose section by section, pulling content from the source material gathered in Step 1.

**Critical rules for the first draft:**

**On vocabulary:**
- Use the source material's exact words, not your paraphrase. If the source says "stun gun," write "stun gun." If the source says "the golden approach to hooks that nobody talks about at this level," write that exact phrase minus the attribution.
- Every named concept gets a `**Teaching layer:**` subsection with the verbatim transcript text. The teaching layer is NOT a blockquote — it is plain text under the label. This is the source voice becoming the agent's voice.
- Template banks with `[SWAP: ...]` markers are copied exactly from source. Show the `**Original:**` worked example BEFORE the `**Template:**` extraction. This shows the methodology.

**On formatting (the mistakes made on hook-writer that you must not repeat):**
- **No `---` horizontal rules.** Use `#` headings as section dividers. The model doesn't benefit from horizontal rules and Claude Code's own system prompt never uses them.
- **No `>` blockquotes for teaching layers.** Use plain text under a `**Teaching layer:**` label. Blockquotes cause the model to treat the text as "quoted material to potentially repeat" rather than "knowledge to internalize." The teaching layers are the agent's OWN knowledge, not someone else's words it's citing.
- **No `>` blockquotes for refusals.** Write refusals as inline prose: "When X happens, respond with exactly this: '[exact sentence]'." The refusal wording goes in double quotes inside the paragraph, not in a blockquote.
- **`>` blockquotes ARE used for:** template lines with `[SWAP: ...]` markers, original worked examples, and actual output the agent produces (spoken hook lines in examples, script content).
- **YAML frontmatter is required** for opencode agent registration. Every agent file starts with `---` frontmatter containing name, display, phase, description (no model field — agents inherit default).

**On structure:**
- Identity paragraph first (before any heading). Short. Declarative. What you are, what you do, what you don't do.
- `IMPORTANT:` lines next (3-5 only). Each one tied to a specific failure mode. Used sparingly — if everything is IMPORTANT, nothing is.
- `# Tone and Style` section mirrors Claude Code's own (output behavior, dispatch scope, tag handling, communication style).
- The domain framework section is the LARGEST section. This is where all the inlined knowledge lives. It is the product.
- Process section is step-by-step with numbered steps and explicit approval checkpoints.
- Refusals section has 12-15 patterns. Each is a specific scenario → exact response wording.
- Examples section shows 1 full worked example (from the `templates/` directory in the legacy skill) plus 2-3 shorter ones plus 5-6 bad examples.
- Reminders section consolidates the load-bearing rules from SKILL.md's reminders section — the things the agent will be tempted to drift on during operation.
- Environment context is always last.

**On length:**
- Length is not a constraint. A 25k-token prompt that is precise and verbatim beats a 5k-token prompt that is vague and paraphrased. Opus-class models handle long prompts well. The prompt IS the product.
- Do not summarize source material to save tokens. Inline it. If the source has a 200-word teaching layer, inline the full 200 words.
- The hook-writer prompt is ~1,836 lines / ~25k tokens. Other agents may be shorter (Setup Writer, Outro Writer) or longer (Body Writer has per-point iteration and dual-example enforcement). Let the content dictate the length.

**On the Identity Transfer Rule:**
- Every time you write a sentence that references where a concept came from, stop and rewrite it. The agent does not know where its knowledge comes from. It just knows things.
- Grep for `[Kk]allaway` after writing. Zero matches required.
- Do not use phrases like "based on the framework" or "according to the system" — the agent IS the system. It says "this is how hooks work" not "the framework says this is how hooks work."

## Step 4: Audit pass 1 (parallel subagents)

After writing the first draft, dispatch 3 parallel Haiku subagents to compare the draft against every source file. Each subagent gets:
- The path to the newly written agent file
- The paths to 2-3 source files to compare against
- A clear audit mandate: find missing content, paraphrased content that should be verbatim, drift or errors

**Audit report format for each source file:**

```
### A. Missing content
[Every concept, template, rule, example, or teaching layer from the source that is NOT in the agent file]
[For each: what's missing, the exact verbatim text from the source, which section it should go into]

### B. Paraphrased content that should be verbatim
[Every place the agent file has content from the source but reworded]
[For each: the agent file version, the source verbatim version, whether restoration is critical]

### C. Drift or errors
[Every place the agent file says something factually different from the source]
```

**What to look for specifically:**
- Every teaching layer quote from every reference file must be present in the agent file as plain text under a `**Teaching layer:**` label
- Every template with `[SWAP: ...]` markers must match the source exactly
- Every worked example ("Original:" callout) must be present before its template
- Every checklist from the end of each source file must be present in the agent file
- Every "What he does but doesn't teach" insight from the source (reframe as "Signature move:" with attribution stripped)
- The 50,000 test, the growth ambiguity example, the acne/Accutane example, the plasma comparison, the bank robber analogy, the skin problems reframe, the journaling before/after, the "craziest thing" opener — these are signature worked examples that appear across multiple sections and must all be present
- Zero Kallaway references

## Step 5: Fix everything from the audit

Apply all fixes. For a small number of fixes (5-10), use Edit calls. For extensive fixes (20+), do a full rewrite via Write — it's cleaner and avoids stale-content conflicts between many overlapping Edits.

When rewriting, preserve everything from the first draft that passed audit. Only modify what was flagged.

## Step 6: Audit pass 2 (verification)

Dispatch 3 parallel Haiku subagents again, this time with explicit checklists of what should now be fixed. Each subagent verifies:
- ✅ PRESENT if verbatim or near-verbatim
- ⚠ PARAPHRASED if reworded significantly (flag if critical)
- ❌ MISSING if not present

After the subagent reports come back, do targeted greps to verify any items the subagents flagged as "uncertain" or "needs manual verification." Subagent grep output often truncates long lines, causing false-positive "missing" flags. A direct grep with the exact phrase resolves this.

## Step 7: Formatting review

Compare the finished prompt against the Claude Code system prompt's formatting conventions. Verify:
- [ ] No `---` horizontal rules (except YAML frontmatter and inside fenced code blocks)
- [ ] No `>` blockquotes for teaching layers (plain text under `**Teaching layer:**` labels)
- [ ] No `>` blockquotes for refusals (inline prose with exact wording in double quotes)
- [ ] `>` blockquotes used ONLY for: templates with `[SWAP]` markers, original worked examples, and actual agent output (spoken lines, script content)
- [ ] `#` for major sections, `##` for subsections
- [ ] `IMPORTANT:` used sparingly (3-5 times) and only for non-negotiables
- [ ] Imperative second-person throughout ("You do X" not "The agent should X")
- [ ] No hedging language ("try to avoid" → "never"; "generally prefer" → "always"; "consider" → "do")
- [ ] Identity paragraph before any heading
- [ ] Environment context as the last section
- [ ] YAML frontmatter present with name, display, phase, description (no model field — agents inherit default)

## Step 8: Final verification

- Grep for `[Kk]allaway` — zero matches
- Grep for `---` outside frontmatter and code blocks — zero matches
- Grep for `^> ` — only template/original/output lines, nothing else
- Count lines — sanity check that nothing was accidentally deleted
- Read the identity paragraph — does it sound like a specialist, not a summary?
- Read 3 random refusals — are they exact wording, not vague guidance?
- Read the worked example — does it match the output format schema exactly?
- Read the reminders section — are all reminders from SKILL.md present?

---

# Learnings from Writing Hook Writer (apply to all future agents)

These are mistakes made during the hook-writer process that cost time. Each one is a trap the next prompt-writer will fall into if not warned.

## 1. Paraphrasing is the default failure mode

The natural instinct when writing a system prompt is to read the source material, understand it, and then write your own version in clean, organized prose. This is wrong. The model pattern-matches better against the original idiom than against a paraphrase. If the source says "the viewer is seeing first then hearing and then looking back at the visual to match what they heard so it's visual audio visual that sandwich is how people actually take in videos at the subconscious level" — that exact sentence goes into the prompt. Your job is to organize it under the right heading, not to rephrase it as "The comprehension model follows a visual-audio-visual pattern."

**The test:** After writing a section, compare it word-by-word against the source. If you changed words, ask: did the change add clarity that the source lacked, or did it just make the prose "cleaner"? If the latter, revert to the source wording.

## 2. Teaching layers are the agent's voice, not quoted material

The first draft of hook-writer used `>` blockquotes for teaching layers. This is wrong because:
- Blockquotes signal "this is someone else's words that I'm citing"
- The agent's prompt should signal "this is how I think about hooks"
- When the model sees blockquoted text in its system prompt, it may treat it as suggested output to parrot rather than knowledge to internalize
- Plain text under a label (`**Teaching layer:**`) makes the model treat the content as part of its own operating knowledge

**The rule:** Teaching layers are plain text. Templates and originals are blockquotes. The distinction matters for how the model processes the content.

## 3. Horizontal rules add noise for the model

`---` horizontal rules are a human-readability affordance. The model doesn't benefit from them — it parses `#` headings as section boundaries. Adding `---` between every section creates visual noise in the prompt that the model has to process without gaining any structural information it doesn't already have from headings.

**The rule:** Use `#` headings as the only section dividers. No `---` except in YAML frontmatter and inside fenced code blocks.

## 4. The first draft will miss ~30% of the source material

No matter how carefully you read the source files, the first draft will miss teaching layers, worked examples, checklists, and "What he does but doesn't teach" insights. This is not a failure of attention — it's the nature of the task. Source material is organized by topic; the prompt is organized by function. The translation always loses things.

**The fix:** Expect to audit and iterate. Budget for 2 audit passes. The first pass catches the 30% you missed. The second pass verifies the fixes landed.

## 5. Audit subagents lie by omission

When an audit subagent uses grep to verify content is present, long lines get truncated in the grep output as `[Omitted long matching line]`. The subagent then interprets this as "uncertain whether present" or even "missing." In reality, the content IS present — the grep tool just didn't show it inline.

**The fix:** After an audit pass, do targeted greps yourself for any item flagged as "uncertain" or "needs manual verification." A direct grep for the exact verbatim phrase is cheap and definitive. Cross-reference across parallel audits: if 2 of 3 agents say it's present and 1 says "uncertain," it's almost always present.

## 6. Refusals must be inline prose, not blockquotes

Claude Code's system prompt handles refusal-adjacent patterns (e.g., "don't commit unless asked") as inline imperative rules. It never blockquotes a refusal sentence. The hook-writer's refusals are exact sentences the agent says verbatim — but they should be formatted as inline prose: "When X happens, respond with exactly this: '[sentence]'."

The reason: blockquoted refusals look like "output templates" the model might modify. Inline prose with "respond with exactly this:" signals that the wording is fixed.

## 7. "No hard gates" vs "approval checkpoints" — terminology matters

The legacy SKILL.md for the hook phase says "No hard gates in this phase (unlike /outline's uniqueness gate)." This means no quality-refusal gates (e.g., "refuse to proceed if the uniqueness score is below 7"). It does NOT mean no user-approval pauses. The hook-writer prompt has 2 approval checkpoints where the agent pauses for user approval — these are workflow pauses, not quality gates. The distinction must be explicit in the prompt to avoid confusion.

## 8. The channel section is smaller than you think

The IVA, moat, voice, contrarian beliefs, and content principles are important context. But the channel section should be ~500-800 tokens, not 2,000. The agent's primary knowledge is its DOMAIN framework, not the channel description. Inline the minimum channel context the agent needs to calibrate its output — IVA description, dual-example rule, no-face constraint, voice adjectives, moat weights. Do not inline the full channel blueprint.

## 9. The worked example IS the calibration artifact

The model calibrates its own output quality against the worked example in the prompt more reliably than against any abstract rule. If the worked example shows a 4-layer alignment table with detailed comprehension-sandwich analysis, the agent will produce that level of detail. If the worked example shows a shallow 2-line validation, the agent will produce that.

**The rule:** The worked example must be the BEST possible output for this phase. It sets the quality floor. Read the source `templates/` directory for the phase — the worked example there is the one to inline (~100% verbatim, with any attribution stripped).

## 10. Source file checklists are operational tools, not appendices

Every reference file (`01-hook-structure.md`, `02-hook-types.md`, etc.) ends with a `## Checklist` section. These checklists are not decorative — they are the operational validation tools the agent runs during its process. Inline them in the prompt at the end of the relevant section. The hook-writer has two: the 3-part structure checklist (10 items) and the archetype selection checklist (9 items). Every agent will have equivalent checklists from its source files.

# Learnings from Writing Format Lead (apply to all future agents)

These are learnings from porting the structure/format-lead agent — the widest-scope agent in the roster.

## 11. When source material is too large, use a folder

The format-lead's source material (`video-structures.md`) is ~45k tokens — 7 complete structural blueprints with full template banks. Inlining all of it produces a ~55k token prompt. The fix: split into a folder.

```
hitl/agents/format-lead.md          ← main prompt (~10.5k tokens)
hitl/agents/format-lead/
  structure-1-listicle.md           ← loaded on-demand after user picks
  structure-2-layered-framework.md
  ...
  structure-7-trend-forecast.md
```

The main prompt carries **selection-level knowledge** (What It Is, When to Use, beat flow summary, signature moves) for all 7 structures — enough to make a strong recommendation. The full detail (complete template banks, all originals, variations) loads via `read` after the user picks.

**The rule:** If a phase's reference material exceeds ~15k tokens, split it. The main prompt carries selection/decision knowledge. Deep reference loads on-demand. Write the files so they COULD be appended into one flat prompt if needed — no cross-references between the split files.

**Token budget guidance:** The main prompt should be ~10-15k tokens. Each reference file should be ~3-8k tokens (structure-2 is an outlier at ~17k because it has 18 videos). The hook-writer at ~36k tokens is the upper bound for a single-file agent — anything larger than that needs the folder pattern.

## 12. The legacy skill IS the source of truth for scope

When the migration plan and the legacy skill disagree on who owns a responsibility, the legacy skill wins. The migration plan is a draft proposal. The legacy skills are the tested, working system.

Example: The migration plan §5.1 says the Director "validates ideas against CAF." But the legacy `/structure` skill owns the full CAF audit (Step 2). There is no Director in the legacy system — users invoke phases directly. The format-lead inherited the full CAF audit because that is where it has always lived and because the format-lead needs the CAF results (content circle tag) to inform structure selection.

**The rule:** Read the legacy SKILL.md first. Read the migration plan second. If there is a conflict, follow the legacy skill and note the divergence so the migration plan can be updated.

## 13. sed for attribution stripping, then manual cleanup

Bulk `sed` replacements for Kallaway/Callaway references are fast but produce broken grammar ("The proven move is to always introduces a framework name first"). The two-pass approach works:

1. **sed pass:** Strip all `Kallaway`, `Callaway`, `He never`, `He almost always`, `His` references across all files in one command
2. **Manual pass:** Read the "Signature Moves" sections (formerly "What He Does But Doesn't Teach") and fix broken sentences. Transform third-person analysis ("he does X") into imperative instruction ("do X" or "always X").

Budget 15-20 minutes for the manual pass. It is not skippable — broken grammar in the agent's knowledge base confuses the agent.

## 14. Rename "What He Does But Doesn't Teach" to "Signature Moves"

The source material's section header is literally "What He Does But Doesn't Teach" — which violates the Identity Transfer Rule. Rename to "Signature Moves (Advanced Techniques)" in every structure reference file. The content stays verbatim; only the header changes.

## 15. The state file format comes from the legacy templates, not the migration plan

The migration plan §9.1 proposes a state file schema (`## Phase 1: Structure` with per-phase status). The legacy skill's actual templates use a different format (centralized `## Phase Status` table + named sections like `## Structure`, `## Package`). The legacy format is the one that has been tested and used in the worked example.

**The rule:** Use the legacy template format (`framework/legacy-skills/structure/templates/video-state.md`) as the canonical state file schema. Update the migration plan §9.1 to match.

## 16. Three parallel audit subagents catch different things

The format-lead was audited by three parallel Haiku subagents, each comparing against a different source:
1. **vs legacy skill** — catches missing workflow steps, reminders, gate checks
2. **vs prompt-plan template** — catches structural/formatting violations
3. **vs migration plan** — catches tool matrix mismatches, hard rule violations, schema drift

Each audit caught things the others missed. The legacy audit found the missing `source: [slug]` tagging and the calendar anchoring data point. The template audit confirmed formatting compliance. The migration audit flagged the state file schema divergence (which turned out to be the migration plan that needed updating, not the prompt).

**The rule:** Always run all three audits in parallel. Do not skip any of them. Fix everything they flag — even items that seem "minor" or "acceptable." 100% is the bar.

## 17. "5 pillars taxonomy" is a topic taxonomy, not a structure tool

The migration plan §5.2 says format-lead "knows the 5 pillars taxonomy." The 5 pillars (Model, Context, Prompt, Tools, Workflows) are an internal curriculum taxonomy from the channel blueprint — they organize topics for course design, not for structure selection. Format-lead handles topic fitness through content circle tagging (Core/Inner/Outer), which directly maps to structure tendencies. The 5 pillars are not referenced in the legacy skill and are not needed in the agent prompt.

## 18. Voice mine the transcripts BEFORE writing

Launch a Haiku subagent to mine 50-70 verbatim phrases from Kallaway transcripts before writing the first draft. Categories: identity statements, structural metaphors, imperative rules, diagnostic questions, failure-mode callouts, voice signatures, teaching moments. This vocabulary becomes the agent's voice.

The format-lead's source material is more analytical (the guide files) than conversational (the transcripts), so the transcript mining yielded fewer usable phrases than hook-writer. But the phrases it DID yield — "content is basically a race to see if you can signal value before they lose interest," "great storytelling is like hypnosis," "the Lego brick combination stack" — are exactly the kind of idiom that makes the agent sound like a specialist, not a summary.

**The rule:** Mine transcripts for every agent, even if the primary source material is guide files. The guide files provide structure; the transcripts provide voice.

## 19. Agent prompts reference the user's working directory, not the openloop source

OpenLoop is an installed CLI tool — like Claude Code. The agent prompts are bundled with the tool and loaded by the runtime. But the agent OPERATES in the user's current working directory, which is their content production project.

This means:
- **Production paths** (`production/youtube/[slug]/video-state.md`, `production/idea-backlog.md`) are correct — they are relative to the user's working directory.
- **Installation paths** (`hitl/agents/*.md`, `framework/legacy-skills/`, `framework/youtube-framework/`) must NEVER appear in the agent's runtime instructions, Environment Context, or Process steps. Those files are part of the tool's installation, not the user's project.
- **The working directory line** in Environment Context must say "the user's current directory" — never "the repo root" or a hardcoded absolute path.
- **Self-references** to the agent's own prompt file (`hitl/agents/outliner.md`) are unnecessary and imply the working directory contains `hitl/`. Remove them.
- **Bundled reference files** (like format-lead's `structure-*.md`) are loaded by the runtime, not from the user's directory. The prompt says "bundled with this agent — the runtime resolves the path" rather than specifying a filesystem path.
- **Quality calibration examples** from legacy skills (`framework/legacy-skills/*/templates/`) must NOT be referenced at runtime. Inline the worked example in the Examples of Great Output section instead.

**The grep test:** After writing any agent prompt, grep for `hitl/`, `framework/`, and `/Users/`. Zero matches required.

---

# The Agent Roster and Source Material Map

For each remaining agent, here is where the source material lives. Follow the same Step 1-8 process for each.

| Agent | Display Name | Legacy Skill | Reference Files | Guides | Key Transcripts |
|---|---|---|---|---|---|
| `@format-lead` | Format Lead | `framework/legacy-skills/structure/` | `references/` in that directory | `framework/youtube-framework/guides/00-video-structures/` | Glob for "structure", "format", "blueprint" in voice-references | **DONE** — `hitl/agents/format-lead.md` + `hitl/agents/format-lead/structure-*.md` |
| `@packager` | Packager | `framework/legacy-skills/package/` | `references/` | `framework/youtube-framework/guides/05-packaging/` | Glob for "title", "thumbnail", "package" |
| `@outliner` | Outliner | `framework/legacy-skills/outline/` | `references/` | `framework/youtube-framework/guides/05-outline/` | Glob for "outline", "bullet", "shock value" | **DONE** — `hitl/agents/outliner.md` |
| `@setup-writer` | Setup Writer | `framework/legacy-skills/click-confirm/` | `references/` | `framework/youtube-framework/guides/08-click-confirm/` | Glob for "click confirm", "setup", "credibility" |
| `@body-writer` | Body Writer | `framework/legacy-skills/body/` | `references/` | `framework/youtube-framework/guides/09-body/` | Glob for "body", "value loop", "reh-hook" |
| `@outro-writer` | Outro Writer | `framework/legacy-skills/outro/` | `references/` | `framework/youtube-framework/guides/10-outro/` | Glob for "outro", "CTA", "last dab" |
| `@script-editor` | Script Editor | `framework/legacy-skills/review-script/` | `references/` | All guides (editor validates against everything) | All hook/structure/body transcripts |

**Note:** The directory names in `framework/legacy-skills/` may differ slightly from the agent names. Glob for the phase name to find the right directory. Read the SKILL.md in each to understand the mapping.

---

# Quick Reference: Formatting Rules

```
ALWAYS:
- YAML frontmatter (---) at the top with name, display, phase, description (no model field — agents inherit default)
- Identity paragraph before any # heading
- IMPORTANT: lines (3-5) after identity, before # Tone and Style
- # for major sections, ## for subsections
- Imperative second-person throughout ("You do X" not "The agent should X")
- Teaching layers as plain text under **Teaching layer:** labels
- Templates and originals as > blockquotes
- Refusals as inline prose ("respond with exactly this: '...'")
- Checklists from source files inlined at end of relevant sections
- Environment context as last section
- Reminders as second-to-last section (consolidated from SKILL.md)

NEVER:
- --- horizontal rules between sections (except YAML frontmatter, fenced code blocks)
- > blockquotes for teaching layers or refusals
- Hedging language ("try to", "consider", "generally")
- "Kallaway" or any external creator attribution in the agent's voice
- Paraphrasing source material when the verbatim version is available
- Summarizing teaching layers to save tokens
- Skipping checklists from source files
- Writing "Original:" examples without the full original before the template
```

---

# How to Use This Document

1. **Before starting a new agent:** Read this document, read `hitl/agents/hook-writer.md` (the exemplar), and read `framework/opencode-migration.md` (the master plan).

2. **When writing:** Follow Steps 1-8 in order. Do not skip the audit passes.

3. **When reviewing:** Use this document's checklists and formatting rules to verify any agent prompt. The Quick Reference section is the final checklist before declaring an agent prompt complete.

4. **When iterating:** If an agent drifts in testing, identify which teaching layer or refusal pattern is too weak, tighten it with more verbatim source material, and re-audit.

5. **When in doubt:** Open `hitl/agents/hook-writer.md` (for voice/depth) or `hitl/agents/format-lead.md` (for workflow/folder structure) and find the equivalent section. Match its structure, depth, and formatting.
