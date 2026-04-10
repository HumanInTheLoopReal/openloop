# Pipeline Skill Conventions Reference

**Purpose:** Exact patterns used across all 6 existing pipeline skills (structure, package, outline, hook, click-confirm, body) to ensure perfect consistency when building new skills.

**Source Skills Analyzed:**
1. `/structure` — Phase 1
2. `/package` — Phase 2
3. `/outline` — Phase 3
4. `/hook` — Phase 4
5. `/click-confirm` — Phase 5
6. `/body` — Phase 6

---

## 1. FRONTMATTER FORMAT

### Fields (All 6 skills present these identical fields)

```yaml
---
name: [skill-name]
description: "[structured description following the pattern below]"
argument-hint: ["[type of argument], separated if multiple types"]
allowed-tools: [tool list, comma-separated]
---
```

### Description Structure (Exact Pattern)

Each description contains these elements in order:

1. **Phase identifier:** "Phase N of the Human in the Loop video production pipeline."
2. **Primary job statement:** "Your job: [specific action]."
3. **Signature action or feature:** One sentence highlighting what makes this phase unique (e.g., "Use when starting a new video, choosing a video structure...")
4. **What it delivers + downstream phase:** "The output — [state file section] — is the handoff to Phase X (`/[phase-name]`)."
5. **Trigger phrases:** "Triggers: '[phrase1]', '[phrase2]', ..." (comma-separated natural language phrases that invoke the skill)

**Example (from `/structure`):**
> "Phase 1 of the Human in the Loop video production pipeline. Picks the right structural blueprint for a video topic and maps content to the beat-by-beat skeleton. Use when starting a new video, choosing a video structure, or running /structure. Everything downstream (packaging, outline, hook, body, outro) depends on the structure choice made here. Triggers: 'structure', 'new video', 'start a video', 'pick a format', 'which structure', 'video blueprint', 'beat map', 'first phase', 'start production'."

**Example (from `/body`):**
> "Phase 6 of the Human in the Loop video production pipeline. Writes the full body — the teaching section between click confirm and outro. Expands each outline point into a value loop (context, application, framing) with dual tech/non-tech examples, inserts reh-hooks between segments, and weaves in storytelling and psychology techniques on demand. The largest and most complex phase — draws from 9 guide files using a tiered loading strategy. Requires completed Phases 1-5 (/structure, /package, /outline, /hook, /click-confirm). Use whenever: 'body', 'write the body', 'value loop', 'reh-hook', 'reh-hooking', 'body script', 'Phase 6', 'after click confirm', 'teaching section', 'write the points', 'expand the outline', 'body segments'."

**Key patterns:**
- Phase number always comes first
- Always names the job explicitly ("Your job:")
- Always lists downstream triggers/when to use
- If dependencies exist, states them ("Requires Phase X")
- Trigger list uses lowercase phrases, comma-separated
- Description is 2-5 sentences total

### Argument-Hint Format

```
argument-hint: ["general form", "alternate form if applicable"]
```

**Examples:**
- `["topic or idea for the video"]` (structure)
- `["video slug or topic"]` (package, outline, hook, click-confirm, body)
- `["title", "thumbnail concept"]` (package)

**Pattern:** Array with 1-2 string entries. Single quotes inside. Generic descriptors, not examples.

### Allowed-Tools Format

```
allowed-tools: Read, Write, Edit, Glob, Grep, AskUserQuestion, Bash, mcp__perplexity__perplexity_search, mcp__perplexity__perplexity_ask
```

**Pattern (All 6 skills are identical):**
- Always includes: `Read, Write, Edit, Glob, Grep, AskUserQuestion, Bash`
- Always includes: `mcp__perplexity__perplexity_search, mcp__perplexity__perplexity_ask`
- Comma-separated, space after each comma
- No line breaks
- No tool variations across skills

---

## 2. OPENING SECTION PATTERN

### Title (H1)

Format: `# [Skill Name] — Phase N: [Subtitle]`

**Examples:**
- `# Structure — Phase 1: Pick the Blueprint`
- `# Package — Phase 2: Title + Thumbnail System`
- `# Outline — Phase 3: Build the Skeleton`
- `# Hook — Phase 4: Craft the First 5-15 Seconds`
- `# Click Confirm — Phase 5: Earn the Watch`
- `# Body — Phase 6: Deliver the Value`

**Pattern:**
- Skill name (capitalized), dash, phase number (Roman: "Phase N"), colon, descriptive subtitle
- Subtitle is short (2-5 words) and action-oriented

### Intro Paragraph (2-3 sentences)

**Structure:**
1. **Role statement:** "You are the [role] for the Human in the Loop YouTube channel. Your job: [job statement]."
2. **Amplification:** One sentence clarifying the scope or signature action
3. **Phase positioning:** One sentence naming it as Phase N and describing the handoff

**Example (structure):**
> "You are the structure advisor for the Human in the Loop YouTube channel. Your job: help the user pick the right structural blueprint for their video topic and map their content to its beat-by-beat skeleton.
>
> This is Phase 1 of an 11-phase pipeline. The output — a video state file — is the handoff to Phase 2 (`/package`). If you don't create the state file, the next skill starts from zero."

**Example (body):**
> "You are the body writer for the Human in the Loop YouTube channel. Your job: take the ordered outline from Phase 3 and expand each point into a scripted body segment using the value loop (context -> application -> framing), insert reh-hooks between segments to prevent drop-off, and apply storytelling and psychology techniques where they naturally fit. Every point gets dual examples — one technical, one non-technical — because that is the channel's signature.
>
> The body is where the actual value lives. The hook earns the click. Click confirm earns the watch. The body delivers the promise. If the body fails, the viewer drops off at minute 8 — and no amount of hook craft saves a video that doesn't teach.
>
> This is Phase 6 of an 11-phase pipeline. It REQUIRES completed Phase 1 (`/structure`), Phase 2 (`/package`), Phase 3 (`/outline`), Phase 4 (`/hook`), and Phase 5 (`/click-confirm`). The output — a full body script with reh-hook markers and quality checks — is the handoff to Phase 7 (`/outro`)."

**Pattern:**
- Opens with role + job
- If complex, adds depth paragraph
- Always states phase number + pipeline position
- Always names dependencies in caps ("REQUIRES")
- Uses backticks for phase names (`/structure`)

---

## 3. CORE PRINCIPLES SECTION

### Format

```
## Core Principles

1. **[Principle name]** [Statement]
2. **[Principle name]** [Statement]
...
```

### Number of Principles

- `/structure`: 5 principles
- `/package`: 6 principles
- `/outline`: 7 principles
- `/hook`: 7 principles (note: "No hard gates" explanation appended)
- `/click-confirm`: 8 principles
- `/body`: 8 principles

**No fixed count.** Range is 5-8 depending on skill complexity.

### Wording Pattern (Consistent across all skills)

1. **Always Recommendation Principle:**
   > "ALWAYS give a recommendation. Never present options without saying which one you'd pick and why."

2. **Template Principle:**
   > "Template, don't generate. [Specific details about where to pull from] Don't write original [thing] from scratch."

3. **Read Guide Principle:**
   > "Read the guide, don't summarize from memory. [Specific file details + scope] Use `[SWAP]` markers. Don't write original lines from scratch."

4. **IVA Constraint Principle:**
   > "The IVA constrains everything. [Specific IVA characteristic]. [What this means for decisions]."

5. **User Disagreement Principle:**
   > "If the user disagrees with your recommendation, proceed with their choice. [Why — audience knowledge, instinct]. Don't push back [except for specific gates]."

6. **Structure-specific variations:**
   - `/outline` adds: "The uniqueness gate is NON-NEGOTIABLE. Do not soften it. If the outline is generic, say so and stop."
   - `/hook` adds: "No hard gates in this phase (unlike /outline's uniqueness gate). But DO flag strongly if: [specific conditions]"
   - `/click-confirm` adds: "No fake metrics. Never suggest inflating credentials. Use what's honestly available."
   - `/body` adds: "Write one point at a time. Present each completed body segment (value loop + technique + reh-hook) for user approval before moving to the next. Don't write the entire body in one pass." + "Reh-hooks are non-optional. Every body segment boundary gets one. [Details]" + "Don't force techniques. [Details]"

### Tone

- Bold principle names only (e.g., `**ALWAYS give a recommendation**`)
- Statements are direct and prescriptive
- Often begin with imperative verbs: ALWAYS, Template, Read, Use, Match, Check, If
- Final sentence often explains the "why" or consequence

---

## 4. CRITICAL CONSTRAINT SECTION

### When Present

- `/package`: YES — "Critical Constraint: No Face on Camera"
- `/hook`: YES — "Critical Constraint: No Face on Camera"
- `/click-confirm`: YES — "Critical Constraint: New Channel, No Social Proof Metrics"
- Others: NO

### Format

```
## Critical Constraint: [Constraint Name]

[Explanation paragraph(s)]

**[Available/Unavailable options presented as table or bullets]**

**The strategy:** [How to work within the constraint]
```

### Examples

**Package (No Face):**
> "CHANNEL.md §1.3 establishes the visual format as **"voice-only with screen + motion graphics"** — no face on camera initially. This massively constrains thumbnail design:
> - No face in thumbnails (at least initially)
> - Cannot use facial expression match...
> - Thumbnails must be stronger on: graphics, text, color science, end state visuals
> 
> **Adapted three-element default:** graphic + text + color science (instead of face + text + graphic)"

**Click-Confirm (New Channel Metrics):**
> "This is the single biggest constraint on this phase. Kallaway's click confirm formula relies on "I have a million followers, billions of views." HitL has none of that.
>
> **Available proof hierarchy for HitL (right now):**
> [Table with 6 levels showing which are available/not yet]
>
> **The strategy:** Stack levels 2 + 4 + 6. Lead with engineering experience (level 2 — hard credential) or the dad story (level 4 — emotionally resonant and unique)..."

### Key Patterns

- Opens with a direct statement of the constraint
- Explains why it's critical (what it blocks)
- Lists available vs unavailable options (as table or bullets)
- Provides explicit strategy for working within it
- Always includes a final line about what happens when constraint lifts

---

## 5. REFERENCE FILES TABLE

### Format

```markdown
## Reference Files

Load these ON DEMAND — don't read everything upfront. Use Grep to find section headers, then Read from that line.

| File | What's In It | When to Read |
|------|-------------|--------------|
| `.claude/skills/_shared/channel-blueprint.md` | [Section contents] | [Phase steps] |
| `references/[guide-name].md` | [Section contents] | [Phase steps] |
| `templates/[template-name].md` | [Template description] | [Which step] |
```

### Columns (Always these 3)

1. **File** — Full path including `.claude/skills/` prefix for shared, relative for skill-specific
2. **What's In It** — Concise description of contents, sometimes with `## section` notation
3. **When to Read** — Which step(s) load this file (e.g., "Steps 2–3" or "Step 7 (read once to calibrate quality)")

### File Path Patterns

- Shared files: `.claude/skills/_shared/channel-blueprint.md`
- Guide files: `references/[guide-name].md`
- Template files: `templates/[template-name].md`
- Example files: `templates/[skill]-example.md`

### Channel Blueprint References

Every skill references `.claude/skills/_shared/channel-blueprint.md` with Grep hints for:
- `## 1.1 Ideal Viewer Avatar` (IVA)
- `## 1.3 Creator Moat` (contrarian beliefs, X factor)
- `## 1.4 Content Mix` (content circles, CAF audit)
- `## 1.5 Signature Style` (color palette, format)

### When to Read Syntax

- Specific steps: "Steps 2–3"
- One-time calibration: "Step 7 (read once to calibrate quality)"
- Multiple access points: "Steps 4–6" or "When a specific technique fits"
- Optional re-reading: "Also read" for supplementary sections

### Navigation Instructions (After the table)

Every skill includes a "How to navigate" paragraph:
> "**How to navigate the [guide] guide:** Each [concept type] lives under a `## [header pattern]` header. Sub-[concepts] use `###`. Templates are under `## Template Bank` or inline `**Templates:**` blocks. Checklists are under `## Checklist`. Always Grep for the header first, then Read from that position."

**Variations by skill:**
- `/structure`: mentions section headers like `## Structure N:` and `### What It Is`
- `/body`: mentions "tiered loading strategy" for Tier 1/2/3
- `/package`: mentions template banks by production moment

---

## 6. ON-DEMAND LOADING MAP (Tier System)

### When Used

- **Only in `/body`** — the most complex skill with 9 reference files

### Format

```markdown
## On-Demand Loading Map

When you need a specific technique, use this lookup to find it:

| If you need... | Grep for this header | In this file |
|---|---|---|
| [Concept name] | `## [Exact header]` | `references/[file].md` |
```

### Structure

- Three columns: need → grep header → file location
- Each row is one concept/technique
- Exact header provided in backticks (matches the guide's actual header)
- ~120+ rows in `/body` for full coverage

### Purpose

Stated explicitly:
> "This skill uses a **tiered loading strategy**. Load Tier 1 for every point. Load Tier 2-3 only when a specific technique fits."

Then defines:
- **TIER 1** — Always load (with table of files and "When to Read")
- **TIER 2** — Load for storytelling decisions (with table)
- **TIER 3** — Load for psychology checks (with table)

---

## 7. DOWNSTREAM CONCEPTS SECTION

### Format

```markdown
## Downstream Concepts (Brief Definitions)

These concepts come from later phases. You don't need to read those guides — just know what they mean if they surface naturally:

- **[Concept name]** — [1-2 sentence definition, including phase number]
```

### Number of Concepts

- `/structure`: None (it's the first phase)
- `/package`: 4 concepts
- `/outline`: 4 concepts
- `/hook`: 4 concepts
- `/click-confirm`: 3 concepts
- `/body`: 4 concepts

**Typical: 3-4 concepts per skill**

### Definition Pattern

Each includes:
1. **Concept name** (bold)
2. **Brief definition** (1-2 sentences)
3. **When it's decided** (phase number and parenthetical)
4. **Relevance to this phase** (how it connects)

**Example (from `/outline`):**
> "- **Hook key visual** — the single strongest image in the first 3 seconds of the video. Decided in Phase 4 (`/hook`). If a visual candidate surfaces during outlining, note it."

**Example (from `/click-confirm`):**
> "- **Value loop** — the three-part structure for each body point in Phase 6: context (what) -> application (how) -> framing (why). The click confirm's outcome promise is what the value loops deliver on."

### Tone

- Helpful, not prescriptive
- Acknowledges "you don't need to read the full guide"
- Explains why the concept matters to THIS phase

---

## 8. WORKFLOW STEPS

### Format

```markdown
## Workflow

### Step 1: [Action Title]

[Narrative introduction — what and why]

[If file reading needed:]
Glob/Read: [exact command syntax]

[If user input needed:]
AskUserQuestion:
  question: "[The question]"
  description: "[Context or criteria]"
  options:
    - label: "[Option label]"
      description: "[Why this option]"
```

### Step Numbering

- Numbered sequentially: Step 1, Step 2, etc.
- Typically 6-10 steps per skill
- Each step is self-contained (can be understood independently)

### State File Read Pattern (First step always)

```
Parse `$ARGUMENTS` for the [what]. Find the state file:

Glob: production/youtube/*/video-state.md

If no state file exists or [phase not marked COMPLETE], tell the user:

AskUserQuestion:
  question: "Phase X requires completed [preceding phases]. What would you like to do?"
  options:
    - label: "Run /[earlier-phase] first"
      description: "[What that phase does]. Requires [its dependencies]."
```

**Pattern:**
- Glob for state file with exact path
- If missing/incomplete, offer AskUserQuestion with options for dependency phases
- Option labels use `/[phase-name]` format
- Each option description restates what that phase does

### AskUserQuestion Format (Consistent across all skills)

```
AskUserQuestion:
  question: "[Direct question — 1 sentence, no punctuation if it's a label]"
  description: "[Optional context, criteria, or explanation — plain text or formatted]"
  options:
    - label: "[Option A] (Recommended)"
      description: "[Why choose this — specific reasoning or next steps]"
    - label: "[Option B]"
      description: "[Assessment or consequence]"
```

**Consistent patterns:**
- Backticks around file paths and commands: `` `/structure` ``
- One and only one option marked `(Recommended)` (unless explicitly not recommending)
- Descriptions are active voice, specific
- If showing a code block as recommendation, format it clearly
- Label ends with period UNLESS it's a standalone label (varies by context)

### Step-by-Step Reading Pattern

For steps that require reading guides:

1. **Grep for header first:** `Grep: references/[guide].md for [header pattern]`
2. **Then Read:** `Read from that line` (implicit — use Read from offset)
3. **Pull from template bank:** Name exact template section (e.g., "Template Bank")
4. **Show template + filled version:** Always both are shown to user

### Recommended Recommendation Format

When presenting the best choice in AskUserQuestion:

```
- label: "[Best option] (Recommended)"
  description: "[Specific reasoning that justifies the recommendation] — [Why this works for THIS specific context / video / topic]"
```

**Key:** Recommendation reasoning must be context-specific, not generic.

### Final State File Write Step

All skills end workflow with:

```
### Step [N]: Write to Video State File

Read `templates/[skill]-example.md` once to calibrate the quality and format of your output.

Edit the existing video state file. Replace the `## [Phase Name]` placeholder with:

[Markdown template of the section structure]

Update the Phase Status table: set [Phase Name] = **COMPLETE** with today's date.

Confirm to the user:
- What was written and where
- Phase status: **[Phase Name] = COMPLETE**
- Next phase: **[Phase N+1]** → run `/[phase-name]` to continue
```

**Pattern:**
- Always read the example first (one-time calibration)
- Always show the exact markdown template for the section
- Always update Phase Status table (bolded COMPLETE)
- Always confirm what was written + next phase

---

## 9. STATE FILE WRITE PATTERN

### Section Template Format (Written to video-state.md)

Every state file section follows this structure:

```markdown
## [Phase Name]

### [Subsection 1]
- **[Key]:** [value]
- **[Key]:** [value]

### [Subsection 2]
> [Quoted text content if appropriate]

**[Analysis/Breakdown heading]:**
- [Bullet point]
- [Bullet point]

### [Subsection 3]
[Structured content — usually a list or table]

---
```

### Metadata Always Included

Every written section includes:

1. **A summary line or breakdown** showing what was chosen/decided
2. **Template names** (where the content came from)
3. **Quality checks** (if applicable)
4. **Templates Used section** (references the guide)
5. **Reasoning** (why this choice, why this template)

### Phase Status Table Update

Every skill updates:
```
Update the Phase Status table: set [Phase Name] = **COMPLETE** with today's date.
```

**Pattern:** Phase name is always bolded and set to COMPLETE.

### Example (from structure's Step 7 template)

```markdown
## Video State File Template

## Package

- **Working Title:** [selected title]
- **Title Direction:** [pain point / dream outcome]
- **Title Template Used:** [template name from guide]

### Title-Thumbnail System
- **Title covers:** [vertices]
- **Thumbnail covers:** [vertices]

### Thumbnail Concept
- **Elements (3):** [element 1] + [element 2] + [element 3]
- **Composition:** [type]
- **Visual Type:** [type]
- **Concept description:** [2-3 sentences]

### Validation
**Four Hook Commandments:** [pass/fail for each]
**BS Detector:** [pass/flag]

### Title Alternatives (Saved)
[List of all options — saved for A/B testing or pivoting]
```

---

## 10. REMINDERS SECTION

### Format

```markdown
## Reminders

- **[Reminder title — bold].** [Full statement, often 1-2 sentences or a paragraph]
- **[Next reminder].** [Statement]
```

### Number of Reminders

- `/structure`: 9 reminders
- `/package`: 11 reminders
- `/outline`: 10 reminders
- `/hook`: 12 reminders
- `/click-confirm`: 8 reminders
- `/body`: 13 reminders

**Range: 8-13 reminders per skill. Most have 10-12.**

### Reminder Types (All skills include these categories)

1. **Process reminders** — how to execute the step ("Read before recommending")
2. **Gate reminders** — non-negotiable rules ("The beat map IS the raw outline")
3. **Template reminders** — where to pull from ("Naming frameworks")
4. **Psychology reminders** — viewer impact ("The most powerful framework...")
5. **Meta-technique reminders** — skill-specific tricks ("The meta-demonstration")
6. **Constraint reminders** — limitations to respect ("No face on camera")
7. **Integration reminders** — how this phase connects upstream/downstream ("Forever loop")
8. **Quality reminders** — production standards ("The 1/16th iPhone test")

### Wording Pattern

- **Titles are bold**, pithy (2-4 words usually), imperative or noun form
- **Statements are direct**, often starting with verbs or naming the principle
- **Multi-sentence reminders** use plain text paragraph style (not bullet-heavy)
- **Multi-part reminders** sometimes use sub-bullets for clarity

**Examples:**

> "- **Read before recommending.** Don't recommend a structure without reading its `### When to Use` section from the guide."

> "- **The meta-demonstration.** The most powerful framework and diagnostic videos use their own technique on the viewer while explaining it. Flag this opportunity if applicable."

> "- **Title-thumbnail system, not title + thumbnail.** These are two halves of one thing. Every recommendation must consider both surfaces together. The triangle (pain + solve + proof) must be fully covered across both."

> "- **No face on camera.** Every visual recommendation must work for voiceover + screen + motion graphics."

### Final Reminders Often Include

- Warnings about overcomplication ("Don't force techniques")
- Integration notes ("Title pivots invalidate the original template")
- Constraint reminders (specific to this skill)
- Future-proofing notes ("Templates exist for later")

---

## SUMMARY: ESSENTIAL CONSISTENCY RULES

### Always Present in Every Skill

1. ✓ Frontmatter with 4 fields: name, description, argument-hint, allowed-tools
2. ✓ H1 title in format: "# [Name] — Phase N: [Subtitle]"
3. ✓ Intro role statement (2-3 sentences)
4. ✓ Core Principles (5-8 principles)
5. ✓ Reference Files table (3 columns: File | What's In It | When to Read)
6. ✓ Downstream Concepts (brief definitions, 3-4 items)
7. ✓ Workflow (6-10 numbered steps)
8. ✓ Reminders section (8-13 reminders)

### Allowed-Tools are Identical Across All Skills

```
Read, Write, Edit, Glob, Grep, AskUserQuestion, Bash, mcp__perplexity__perplexity_search, mcp__perplexity__perplexity_ask
```

### Principles Always Include

- ALWAYS give recommendation
- Template, don't generate
- Read guide, don't summarize from memory
- IVA constrains everything
- If user disagrees, proceed (with exception noted for /outline)

### Every First Step

Parses arguments, Globs for state file, offers dependency-phase options if missing.

### Every Last Step

Reads example template, writes to state file, updates Phase Status to COMPLETE, confirms next phase.

### AskUserQuestion Consistency

- Always one `(Recommended)` option (except where deliberate)
- Descriptions are context-specific, not generic
- Backticks for commands/phases: `` `/structure` ``
- Options offer clear paths forward

### Templates Always

- Pulled from guides (never written from scratch per principle 2)
- Shown alongside filled version
- Source cited (e.g., "Template name from guide")
- Use `[SWAP]` markers for variables

### Channel Blueprint Always Greps

- `## 1.1` for IVA
- `## 1.3` for Creator Moat / contrarian beliefs
- `## 1.4` for Content Circles
- `## 1.7` for Signature Style / palette

---

## WORKED EXAMPLE TEMPLATES

### body-example.md Pattern

- Begins with metadata: video title, structure type, desired emotion, ordering note
- Shows full body architecture map (segments → reh-hooks)
- For each point: Value Loop (Context → Application [tech] → Application [non-tech] → Framing)
- Shows "Storytelling techniques applied" (which Tier 2-3 techniques and why)
- Shows "Templates used" (which template from guide and exact `[SWAP]` values)
- Shows reh-hook with template name and adapted version
- Total: 2-3 fully worked points

### click-confirm-example.md Pattern

- Begins with metadata: video title, structure type
- Shows full `## Click Confirm` section
- Includes: Script (10-30 seconds, in > block), Breakdown (each component), Templates Used, Proof Level Notes
- Breakdown shows: Confirmation | Framework | Number | Credibility | Promise | BS Detector status
- Proof Level Notes shows: available levels, used levels with reasoning, upgrade potential

### All Example Files

- Labeled "Worked example of [what]"
- Begin with navigation note: "Read this once to calibrate the quality and format of your output"
- Reference which worked examples they connect to (e.g., "This continues from the click confirm in...")
- Use consistent video: "Why Prompting Is the Least Important AI Skill" (Context Ladder example)
- Include metadata section at top (title, structure, emotion, etc.)
- Show EXACT formatting that matches what should be written to state file

---

## FOR BUILDING /outro SKILL

When building the new `/outro` skill, ensure:

1. **Frontmatter** uses same 4 fields (name: outro, description follows pattern, allowed-tools identical list)
2. **Intro** positions as Phase 7, references Phases 1-6 dependencies, describes handoff to Phase 8
3. **Core Principles** (5-8): ALWAYS recommend, template don't generate, read guide, IVA constrains, user disagreement clause, + 2-3 custom to outro phase
4. **Critical Constraint** section optional (skip if none apply, or add if outro has specific constraints)
5. **Reference Files table** with `.claude/skills/_shared/channel-blueprint.md` + guide files + example template
6. **Downstream Concepts** (3-4) pointing to Phase 8 and beyond
7. **Workflow** (6-10 steps): read state file, [phase-specific steps], write to state file with example calibration
8. **State file template** in Step [N]: exact markdown structure for `## Outro` section
9. **Reminders** (10-12): process, gates, templates, psychology, meta-techniques, constraints
10. **Backticks for phases**: `` `/structure` ``, `` `/package` ``, etc.
11. **Bold for emphasis**: `**COMPLETE**`, `**Recommended**`, principle names
12. **Tables for comparisons**: Reference files table uses pipes, columns are consistent
