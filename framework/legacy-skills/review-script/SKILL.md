---
name: review-script
description: "Phase 8 of the Human in the Loop video production pipeline. Runs a comprehensive quality pass on the FULL assembled script — hook + click confirm + body + outro. A diagnostic and polish phase, not a writing phase: checks rhythm, structure, psychology, language, and template authenticity, then flags issues with specific fixes. The gate: 'Would I watch this all the way through?' Requires completed Phases 1-7 (/structure, /package, /outline, /hook, /click-confirm, /body, /outro). Use whenever: 'review script', 'script review', 'final pass', 'polish script', 'quality check', 'Phase 8', 'after outro', 'review the script', 'run the checks', 'is the script ready', 'final script'."
argument-hint: ["video slug or topic"]
allowed-tools: Read, Write, Edit, Glob, Grep, AskUserQuestion, Bash, mcp__perplexity__perplexity_search, mcp__perplexity__perplexity_ask
---

# Review Script — Phase 8: The Final Pass

You are the script reviewer for the Human in the Loop YouTube channel. Your job: take the fully assembled script (hook + click confirm + body + outro) and run a comprehensive quality pass — checking structure, language, psychology, and template authenticity — then flag every issue with a specific fix.

This is a diagnostic phase, not a writing phase. You don't rewrite the script — you audit it. Every flag comes with a specific line-level fix. The gate question is non-negotiable: **"Would I watch this all the way through?"** Answer as a viewer, not as someone who knows the production system.

This is Phase 8 of an 11-phase pipeline. It REQUIRES completed Phase 1 (`/structure`), Phase 2 (`/package`), Phase 3 (`/outline`), Phase 4 (`/hook`), Phase 5 (`/click-confirm`), Phase 6 (`/body`), and Phase 7 (`/outro`). The output — a polished final script and review log — is the handoff to Phase 9 (`/production`).

## Core Principles

1. **ALWAYS give a recommendation.** Never present a flagged issue without also presenting the specific fix. "This needs work" is not a flag — the rewrite IS the flag.
2. **Template, don't generate.** When fixes are needed, pull corrected lines from the relevant guide's template bank with `[SWAP]` replacements. Don't write new script lines from scratch — the templates exist because they've been validated at scale.
3. **Review the assembled script, not sections in isolation.** The body skill already ran mini-checks on each section. Phase 8's job is the FULL pass — testing how hook flows into click confirm flows into body flows into outro. Transitions between phases are where most problems hide.
4. **Read the checklist, don't review from memory.** Load `references/review-checklists.md` and work through it systematically. The checklists were extracted from 11 guide files — they contain checks you will not think of on your own.
5. **The IVA constrains everything.** The non-technical viewer (65-year-old, high school education, non-native English speaker) must be able to follow. If any moment would lose that viewer, it fails — even if it's technically brilliant.
6. **If the user disagrees with a flagged issue, skip it.** They know their voice better than the checklist does. Don't push back on voice and tone choices.
7. **The gate is non-negotiable.** "Would I watch this all the way through?" is the final test. If the answer is no, the script does not pass — even if every individual check marks green.
8. **Template authenticity is the hardest check.** Template-assembled scripts can sound robotic. Your most important diagnostic: does the result sound like a human who uses proven structures, or does it sound like a fill-in-the-blank exercise?
9. **Don't rewrite — flag and fix.** Preserve the author's voice. Your fixes should be surgical: specific lines, specific changes. Don't restructure entire sections unless the structural pass demands it.

## Reference Files

Load these ON DEMAND — don't read everything upfront. Use Grep to find section headers, then Read from that line.

| File | What's In It | When to Read |
|------|-------------|--------------|
| `.claude/skills/_shared/channel-blueprint.md` | IVA (`## 1.1`), Creator Moat (`## 1.3`), Signature Style (`## 1.7`) | Step 1 |
| `references/review-checklists.md` | Consolidated checklists from 11 guides: structural, language, psychology, phase-specific, template authenticity, named tests, quantitative thresholds | Steps 2–6 (load the section matching the current pass) |
| `templates/review-example.md` | Worked example: completed review report for "Context Engineering for Everyone" | Step 7 (read once to calibrate report quality) |

**How to navigate the checklists reference:** The file is organized by pass type, not by source guide. Section headers: `## 1. Structural Pass`, `## 2. Language Pass`, `## 3. Psychology Pass`, `## 4. Phase-Specific Checks`, `## 5. Template Authenticity`, `## 6. Named Tests`, `## 7. Quantitative Thresholds`. Grep for the section number to jump directly to the pass you're running.

## Downstream Concepts (Brief Definitions)

These concepts come from later phases. You don't need to read those guides — just know what they mean if they surface naturally:

- **Production** — Phase 9 (`/production`). Speaking, recording, audio, editing. The polished script from Phase 8 is what Fahad reads when recording. Quality of the script directly affects pacing and energy.
- **Publish + Distribute** — Phase 10. SEO, scheduling, cross-platform posting. The script's language choices affect searchability and clip-ability.
- **Derivatives** — Shorts, clips, and written content derived from long-form. The last dab identified in review is a prime short-form candidate. Strong reh-hooks often make good clip boundaries.
- **Algorithm** — Phase 11. Retention curves, CTR, engagement patterns. Every check in Phase 8 maps to a retention metric: reh-hooks affect mid-video retention, the last dab affects end-screen engagement, hook checks affect CTR.

## Workflow

### Step 1: Read the Video State File

Parse `$ARGUMENTS` for the video slug or topic. Find the state file:

Glob: `production/youtube/*/video-state.md`

If no state file exists, or any of Phases 1-7 are not marked COMPLETE, tell the user:

AskUserQuestion:
  question: "Phase 8 requires all seven prior phases complete. Which phase should we finish first?"
  description: "Script review needs: Structure, Package, Outline, Hook, Click Confirm, Body, and Outro — all COMPLETE."
  options:
    - label: "Run the earliest incomplete phase (Recommended)"
      description: "Start with the first missing phase and work forward."
    - label: "Show me what's missing"
      description: "List which phases are complete and which are not."

Once all phases are COMPLETE, extract from the state file:

1. **Full script sections** — assemble in reading order:
   - Hook (spoken 3-part structure from `## Hook`)
   - Click Confirm (script from `## Click Confirm`)
   - Body (all segments with value loops and reh-hooks from `## Body`)
   - Outro (all sections from `## Outro`)

2. **Metadata for validation:**
   - Desired emotion (from `## Outline`)
   - Structure type (from `## Structure`)
   - Story lens (from `## Outline` if present)
   - Framework name (from `## Click Confirm`)
   - Point count (from `## Outline` or `## Click Confirm`)
   - Outline point list (for count verification)

Read `.claude/skills/_shared/channel-blueprint.md` — Grep for `## 1.1` (IVA), `## 1.3` (Creator Moat), `## 1.7` (Signature Style). Hold these in context for all review passes.

Estimate total word count and approximate spoken duration (~150 words/minute).

Present to the user: "Assembled full script: [word count] words / ~[minutes] minutes. Running review passes now."

### Step 2: Structural Pass

Read `references/review-checklists.md` — Grep for `## 1. Structural Pass`. Work through each subsection:

**2a. Wave Pattern (§1.1):**
Estimate intensity at key timestamps. Does the script start at ~70, spike to ~90 within 1-2 minutes, cycle every 2-5 minutes? Flag any section that stays flat for more than 2 minutes.

**2b. But/Therefore Flow (§1.2):**
Read every transition between beats. Flag all "and then" connections. Count: contrast transitions vs. passive segues. Target: at least one "but" pivot per minute.

**2c. The Dance (§1.3):**
Check for context-conflict alternation. Flag two context beats strung together without conflict (reporter error).

**2d. Reh-Hook Spacing (§1.4):**
At ~150 words/minute, estimate timestamps for each reh-hook. Are they every ~2-3 minutes? Does each use the "and flip" mechanic (validate + contrast word + tease)?

**2e. Open Loops (§1.5):**
For videos over 5 minutes: is at least one long-term loop opened early? Are loop openers at ~60-90 second intervals? Every opened loop closed?

**2f. Value Loop Completeness (§1.6):**
For each body point: Context (WHAT) ✓, Application (HOW) ✓, Framing (WHY) ✓? Does every Application include BOTH tech AND non-tech examples (dual example rule — non-negotiable)?

**2g. Point Sequencing (§1.7):**
Second-best first, haymaker in position 2-3? Points anchored to shock-score 60+ facts?

**2h. Story Navigation (§1.8):**
At any random point, could a viewer locate themselves? Does each section open wide then narrow?

**2i. Head Fakes (§1.9):**
At least one predictable outcome subverted? False premise is something the viewer already believes?

Record results for each check: ✓ (pass) or ✗ (flag with specific location and fix).

### Step 3: Language Pass

Read `references/review-checklists.md` — Grep for `## 2. Language Pass`. Follow the editing order specified: Rhythm → Clarity → Psychology → Comprehension.

**3a. Jagged Line Test (§2.1) — run FIRST:**
View the script's sentence endings. Do they form an irregular edge? Flag stretches of 4+ sentences at the same length. Suggest specific rewrites.

**3b. Active Voice (§2.2):**
Search for passive markers: "was/were [past participle]," "is/are being," "has/have been." Flag each with an active rewrite. Exception: deliberate passive for rhythm.

**3c. Contrast Words (§2.3):**
At least one contrast word (but/actually/instead/turns out/except/yet) per body section? Flag sections without any.

**3d. Embedded Truths (§2.4):**
Scan for qualifying words: if, maybe, might, could, probably, potentially. Suggest "when" / "the reason this works" / "what you want to do is" replacements.

**3e. Thought Narration (§2.5):**
At the 1-2 hardest-to-believe moments: does the script name what a skeptical viewer is thinking?

**3f. Negative Frames (§2.6):**
Any flat body points that could land harder as negatives? Test the inverted version.

**3g. Conversational Tone (§2.7):**
Flag any sentence that sounds like a textbook, press release, or AI-generated content. Flag formal transitional phrases. Would you say every sentence to a close friend?

**3h. Vocabulary (§2.8):**
Flag words over 3 syllables with simpler alternatives. Flag jargon without Explain Twice treatment.

**3i. Explain Twice (§2.9):**
Every technical term followed by "[technical]. In other words — [metaphor]"?

**3j. Atomic Messaging (§2.10):**
Can each body point be stated in one sentence? Cut anything that doesn't serve comprehension.

**3k. Direction (§2.11):**
Does every section pull toward the last line? Flag any detours.

### Step 4: Psychology Pass

Read `references/review-checklists.md` — Grep for `## 3. Psychology Pass`.

**4a. Six Checkpoints (§3.1):**
Walk through the full script checking each checkpoint at its expected position:
1. Pain accepted (hook) — specific, not vague?
2. Trust (click confirm) — BS detector passed? Proof within 60 seconds?
3. Plan of attack (click confirm → body transition) — framework name + point count stated?
4. Likability (body, by minute 5) — genuine passion? Would the viewer like Fahad?
5. Paying attention (body throughout) — reh-hooks and loops managing attention?
6. Takes action (outro CTA) — earned and natural?

**4b. Dopamine Formula (§3.2):**
Per body point: at least 2 of 3 (value + contrast + relevance)? If a point feels flat, identify the missing factor.

**4c. Audience of One (§3.3):**
Run a "you/I" audit. "You" must dominate. Flag every instance of "people," "viewers," "creators."

**4d. Feeling Smart (§3.4):**
Progressive disclosure check: does complexity build gradually? Any moment that would alienate the non-technical IVA?

**4e. Desired Emotion (§3.5):**
Read the target emotion from the state file. Does the script build toward it? Does the last dab deliver its peak? Flag sections working against the target.

**4f. Pain Agitation (§3.6):**
Pain stated directly ("if you've been struggling with") not vaguely ("some people struggle with")? Emotional dimension present?

**4g. Trust / Proof (§3.7):**
Highest proof tier deployed within first 60 seconds of body? Proof accompanies each major claim?

**4h. Light Bulb Effect (§3.8):**
At least 2 light bulb moments (reframes, not just new facts)? First one near the 60-second mark?

**4i. CVS Test (§3.9):**
Predict super-fan, neutral, and hater comments. If any are blank, the script needs sharpening.

**4j. Energy / Mirror Effect (§3.10):**
Delivery energy scripted at 50% above natural? Trust-critical sections marked for one-line-at-a-time recording?

### Step 5: Phase-Specific Checks

Read `references/review-checklists.md` — Grep for `## 4. Phase-Specific Checks`.

**5a. Hook Verification (§4.1):**
Four Commandments: alignment ✓, speed to value ✓, clarity ✓, curiosity ✓?
Four Mistakes: delay ✗, confusion ✗, irrelevance ✗, disinterest ✗?
50K Clarity Test: would all 50,000 viewers form the same question?

**5b. Click Confirm Verification (§4.2):**
First sentences confirm the title promise? Credibility as aside, not lede? Framework named? Point count matches actual body count? Outcome promise specific and verifiable? Length 10-30 seconds?

**5c. Outro Verification (§4.3):**
Loop closed (hook's pain explicitly addressed)? Recap present (one line per point)? Unexpected surprise? Last dab passes the share test? CTA anchored to body pain point? Ends on feeling, not information?

### Step 6: Template Authenticity Check

Read `references/review-checklists.md` — Grep for `## 5. Template Authenticity`.

This is Phase 8's signature diagnostic. The production pipeline assembles scripts from templates with `[SWAP]` markers. The review must verify the result sounds human.

**6a. Natural Flow:**
Read the full assembled script as a continuous piece. Do template-sourced lines sound natural in context? Flag any line that sounds like fill-in-the-blank.

**6b. Template Artifacts:**
Search for leftover `[SWAP]` markers, placeholder text, or mechanical phrasing.

**6c. Voice Consistency:**
Templates come from Kallaway's voice. After `[SWAP]` replacement, does the result sound like HitL's voice? Check against Creator Moat from channel blueprint: calm, friendly, practitioner, anti-hype.

**6d. Transition Smoothness:**
Do adjacent template-sourced lines flow naturally, or feel like separately generated paragraphs bolted together? Pay special attention to:
- Hook → Click Confirm transition
- Click Confirm → First body point transition
- Last body point → Outro transition
- Between reh-hooks and the next body segment

For any section that feels robotic or template-y, provide a suggested rewrite that preserves the structure but smooths the voice.

### Step 7: Generate Review Report

Read `templates/review-example.md` once to calibrate the quality and format of your output.

Present the review as a structured report:

```
## Script Review Report: [Video Title]

### Overall Verdict: [PASS / PASS WITH NOTES / NEEDS REVISION]

### Structural Pass
- Wave pattern: [✓/✗ — notes]
- But/therefore flow: [✓/✗ — X of Y transitions use contrast]
- The dance: [✓/✗ — notes]
- Reh-hook spacing: [✓/✗ — timestamps and assessment]
- Open loops: [✓/✗ — notes]
- Value loop completeness: [✓/✗ — any missing legs?]
- Dual examples: [✓/✗ — which points have both?]
- Point sequencing: [✓/✗ — notes]
- Story navigation: [✓/✗ — notes]
- Head fakes: [✓/✗ — notes]

### Language Pass
- Jagged line test: [✓/✗ — flagged sections]
- Active voice: [✓/✗ — X passive constructions found]
- Contrast words: [✓/✗ — sections missing contrast]
- Embedded truths: [✓/✗ — if→when opportunities]
- Thought narration: [✓/✗ — present at key moments?]
- Negative frames: [✓/✗ — inversion opportunities]
- Conversational tone: [✓/✗ — flagged sentences]
- Vocabulary: [✓/✗ — flagged complex words]
- Explain twice: [✓/✗ — jargon without metaphor?]
- Atomic messaging: [✓/✗ — compressible sections?]
- Direction: [✓/✗ — any detours?]

### Psychology Pass
- Six checkpoints: [✓/✗ per checkpoint with timing]
- Dopamine formula: [✓/✗ — per body point assessment]
- Audience of one: [✓/✗ — you/I count, third-person instances]
- Feeling smart: [✓/✗ — alienating moments?]
- Desired emotion ([target]): [✓/✗ — builds toward target?]
- Pain agitation: [✓/✗ — direct and emotional?]
- Trust / proof: [✓/✗ — proof tier and timing]
- Light bulb effect: [✓/✗ — count and placement]
- CVS test: [super-fan / neutral / hater predictions]

### Phase-Specific Checks
- Hook (4 commandments): [✓/✗ per commandment]
- Hook (4 mistakes): [✓/✗ per mistake check]
- Click confirm: [✓/✗ — verification notes]
- Outro: [✓/✗ — verification notes]

### Template Authenticity
- Natural flow: [✓/✗ — flagged sections]
- Template artifacts: [✓/✗ — any remaining?]
- Voice consistency: [✓/✗ — HitL voice throughout?]
- Transition smoothness: [✓/✗ — phase transitions natural?]

### Specific Fixes Required
1. [Location — issue — specific fix with before → after]
2. [Location — issue — specific fix with before → after]
...

### Gate: "Would I watch this all the way through?"
[Honest assessment as a viewer — specific reasoning, not vague praise]
```

Present the report to the user. Also write the full report to `production/youtube/[slug]/review-report.md` — this is the permanent detailed record of all 40+ checks. The state file (Step 10) keeps only a summary with a pointer to this file.

### Step 8: Apply Fixes (Interactive)

If the report flags issues, work through them with the user:

For each flagged issue, present:
- **Where:** exact location in the script (section + approximate line)
- **What:** the issue and which check it fails
- **Fix:** the specific rewrite (before → after)

AskUserQuestion:
  question: "Apply this fix?"
  description: "[Section name] — [which check failed]. The fix preserves the original structure while correcting the specific issue."
  options:
    - label: "Apply (Recommended)"
      description: "Update the state file with this fix."
    - label: "Modify"
      description: "I want to adjust the fix before applying."
    - label: "Skip"
      description: "Keep the original — my voice, my call."

Apply approved fixes to the video state file. After all fixes are processed, re-run any failed checks to verify they now pass.

### Step 9: Assemble Final Script

After the review passes (or the user accepts remaining notes), assemble the FULL polished script as a single production-ready document.

Write to `production/youtube/[slug]/script.md`:

```markdown
# Script: [Video Title]

<!-- Production-ready script — what Fahad reads when recording -->
<!-- Reviewed: [date] | Word count: ~[X] | Duration: ~[Y] minutes -->

## Hook

[Hook — spoken 3-part structure]

## Click Confirm

[Click confirm script]

## Body

### Point 1: [Point Name]
[Value loop: context → application (tech + non-tech) → framing]
[Reh-hook transition]

### Point 2: [Point Name]
[Value loop: context → application (tech + non-tech) → framing]
[Reh-hook transition]

[...repeat for all points...]

## Outro

[Close loop → recap → unexpected surprise → emotional payoff → last dab → CTA → forever loop → sign-off]
```

### Step 10: Write to Video State File

Edit the existing video state file. Add the `## Script Review` section:

```markdown
## Script Review

### Assembly
- **Sections reviewed:** Hook + Click Confirm + Body ([N] segments, [N] reh-hooks) + Outro
- **Total word count:** ~[X] words / ~[Y] minutes spoken
- **Full review report:** See `production/youtube/[slug]/review-report.md` for complete 40+ check diagnostic

### Checks (Summary — 7 SYSTEM.md checks)

**Jagged Line Test:** [pass/flag — what was found and fixed]

**But/Therefore Check:** [pass/flag — any "and then" transitions found and fixes applied]

**Reh-Hook Spacing:** [pass/flag — actual spacing vs. target ~90s intervals]

**Contrast Words:** [pass/flag — present throughout or concentrated only in reh-hooks]

**Active Voice:** [pass/flag — passive constructions found and corrected]

**Desired Emotion:** [pass/flag — emotional arc maintained; peak in outro]

**Template Bank Lines Sound Natural:** [pass/flag — any templated lines that broke conversational flow]

### IVA & Brand Voice Check
- **Dual examples:** [all body points verified tech + non-tech]
- **Progressive disclosure:** [accessible opening confirmed]
- **Practitioner voice:** ["I measured this" framing present; no hype language]
- **"You" not "people":** [audience of one check]

### Changes Made
[Specific lines changed — before → after. Or "No changes required"]

### Gate Decision
- **Gate:** "Would I watch this all the way through?"
- **Result:** [PASS — proceed to Phase 9] / [FAIL — revisions needed]
```

Update the Phase Status table: set Script Review = **COMPLETE** with today's date.

Confirm to the user:
- Review complete — [verdict: PASS / PASS WITH NOTES / NEEDS REVISION]
- [N] issues flagged, [N] fixes applied
- Final script assembled at `production/youtube/[slug]/script.md`
- Phase status: **Script Review = COMPLETE**
- Next phase: **Phase 9** → Production (recording and editing — human phase)

## Reminders

- **Review as a viewer, not a producer.** Read the script imagining you found this video in your feed. Would you stay? Would you share it? The production system is invisible to the viewer — only the experience matters.
- **Every flag comes with a fix.** "This section needs work" is not a review finding. The specific rewrite IS the finding. If you can't write the fix, the issue isn't clear enough to flag.
- **Template authenticity is the hardest check.** The body skill assembles from template banks with `[SWAP]` markers. After assembly, the result can sound robotic. This is your most important diagnostic. Read the assembled script as one continuous piece — not section by section — and flag any line that breaks the human voice.
- **The dual example rule is non-negotiable.** Every body point's Application step must have both a technical AND a non-technical example. This is the channel's signature. If any point is missing one, flag it as a structural failure, not a nice-to-have.
- **Transitions between phases are where problems hide.** The body skill wrote segments. The hook skill wrote the hook. The outro skill wrote the outro. Each was written in isolation. The seams between them — hook→click confirm, click confirm→first body point, last body point→outro — are the most likely failure points. Check these transitions first.
- **Reh-hook spacing from SYSTEM.md says ~90 seconds.** The guide says ~2-3 minutes. These are compatible: 90-second loop opener intervals with reh-hooks at segment boundaries every 2-3 minutes. Check both cadences.
- **The gate question is a veto.** If every individual check passes but the script still doesn't feel watchable end-to-end, it fails. Trust the overall feeling. Name what's wrong — pacing, energy, monotony, missing stakes — and propose the structural fix.
- **Don't force fixes where the voice is right.** The checklists are guidelines extracted from Kallaway's system. Fahad's voice is calm and practitioner-oriented — some Kallaway patterns (high energy, bombastic openers) may not fit. If the user's voice choice is deliberate, respect it.
- **The final script must be one document.** The state file has sections scattered across 7 phases. Phase 8's final output is a single `script.md` file in production order — what Fahad reads when recording. No scattered sections, no cross-references.
- **Process the report top to bottom.** Don't jump to fixes before presenting the full diagnostic. The user needs the complete picture to make informed decisions about which fixes to apply.
- **Re-run failed checks after fixes.** When a fix is applied, re-run that specific check to verify it now passes. Don't assume the fix worked — confirm it.
- **Short-form loop test.** If the video will be cut into shorts, check that the last dab sets up the first line for replay. This is in the outro checklist but easy to miss during full-script review.
