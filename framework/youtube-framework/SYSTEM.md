# Human in the Loop — Production System

The complete operating system for the Human in the Loop YouTube channel. Two systems, one pipeline, one goal: produce videos that reach people and establish Fahad as the authority on AI engineering.

Built on 14K lines of consolidated teachings from Kallaway's 79 videos (`youtube-framework/guides/`). The delivery mechanics are his. The content, voice, and credibility are ours. We call this the **Human in the Loop System**.

## Core Principle: Template, Don't Generate

We follow Kallaway's production system 100%. The approach is **assembly from proven templates, not writing from scratch.** Every video is built by:

1. Picking a structural blueprint from the video structures guide
2. Walking through each production phase using the guide checklists
3. Pulling verbatim sentence skeletons from the template banks
4. Swapping domain keywords (`[SWAP]` markers) for our topic
5. The result sounds human because IT IS human — Kallaway wrote these lines, they were validated by millions of views

This is not "inspired by" Kallaway. This is his system, adopted wholesale, applied to AI engineering content. The differentiation is the CONTENT (real systems, real data, practitioner depth), not the delivery structure. The delivery structure is proven. We use it as-is.

AI is terrible at writing scripts that sound human. The solution: don't ask it to generate — give it templates to assemble from. The template banks in every guide file ARE the production system.

---

## How This Document Works

**System 1** is the channel blueprint — decisions made once, revisited quarterly. These constrain everything downstream. If you skip this, every video is a coin flip.

**The Idea Pipeline** runs continuously between System 1 and System 2. It's how strategy becomes specific videos.

**System 2** is the repeatable video production pipeline — the step-by-step flow for turning a validated idea into a published video. This is where the Kallaway guides power every phase.

---

## System 1: Channel Blueprint

These decisions define WHO we are, WHO we serve, WHAT we make, and HOW we show up. Answer each section once. Write it down. Every future decision checks against this.

### 1.1 Ideal Viewer Avatar (IVA)

> Reference: `guides/02-strategy/01-audience-targeting.md`

The IVA is ONE specific person — not a demographic bucket. Every video is made for THIS person.

```
┌─────────────────────────────────────────────────┐
│  IDEAL VIEWER AVATAR                             │
├─────────────────────────────────────────────────┤
│                                                  │
│  WHO are they?                                   │
│  ├─ Age / career stage / role                    │
│  ├─ What tools do they use daily?                │
│  ├─ Are they a developer? Vibe coder? PM?        │
│  │   Designer learning AI? Student?              │
│  └─ What do they already know?                   │
│                                                  │
│  WHAT do they want?                              │
│  ├─ Dream outcome (what does success look like?) │
│  ├─ Pain point (what's frustrating them NOW?)    │
│  └─ What would they pay to learn?                │
│                                                  │
│  WHERE are they?                                 │
│  ├─ YouTube (primary — fish where fish are)      │
│  ├─ Twitter/X (derivative)                       │
│  └─ What channels do they already watch?         │
│                                                  │
│  PSYCHOGRAPHICS                                  │
│  ├─ What do they believe about AI right now?     │
│  ├─ What misconceptions do they hold?            │
│  ├─ What would make them share a video?          │
│  └─ What would make them subscribe?              │
│                                                  │
│  ★ Write a paragraph about this ONE person.      │
│    Give them a name. Reference them when writing. │
└─────────────────────────────────────────────────┘
```

**Decision needed:** [x] IVA defined and written → See `CHANNEL.md` §1.1

### 1.2 The Game We're Playing

> Reference: `guides/02-strategy/02-game-theory.md`

```
┌─────────────────────────────────────────────────┐
│  GAME TYPE                                       │
├─────────────────────────────────────────────────┤
│                                                  │
│  Two games exist:                                │
│                                                  │
│  AWARENESS GAME          CONVERSION GAME         │
│  ├─ Max views            ├─ Ontarget views       │
│  ├─ CPM / brand deals    ├─ Funnel to product    │
│  ├─ Entertainment         ├─ Education            │
│  └─ Monetize via ads     └─ Monetize via offers  │
│                                                  │
│  We play BOTH — but lead with CONVERSION.        │
│  ├─ Education creator at core                    │
│  ├─ Awareness tactics for reach (Kallaway's      │
│  │   delivery mechanics give us this for free)   │
│  ├─ Ontarget virality > pure virality            │
│  └─ Future: course, community, products          │
│                                                  │
│  The 6 Players (always running in background):   │
│  Algorithm, Passive Viewers, Active Viewers,     │
│  Entertainment Creators, Education Creators,     │
│  Brands/Advertisers                              │
└─────────────────────────────────────────────────┘
```

**Decision needed:** [x] Game type confirmed, monetization path sketched → See `CHANNEL.md` §1.2

### 1.3 Creator Moat

> Reference: `guides/02-strategy/04-creator-moat.md`

The 5 elements that make Human in the Loop unreplicable:

```
┌─────────────────────────────────────────────────┐
│  CREATOR MOAT — 5 Elements                       │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. TOPIC NICHE                                  │
│     AI engineering, context engineering,         │
│     agentic systems, building real software      │
│     with AI                                      │
│                                                  │
│  2. VISUAL FORMAT                                │
│     [ ] Define — what does our content LOOK      │
│     like? (screen recordings? slides? talking    │
│     head? hybrid? what's the signature look?)    │
│                                                  │
│  3. STORYTELLING STYLE                           │
│     Practitioner voice. "I measured this."       │
│     Real data, real trade-offs, real failures.   │
│     Never hype. The content is grounded in       │
│     reality — always.                            │
│                                                  │
│  4. PERSONALITY / VIBE                           │
│     [ ] Define — how do viewers FEEL watching?   │
│     (smart friend? professor? colleague?         │
│     excited builder? calm expert?)               │
│                                                  │
│  5. X FACTOR                                     │
│     Senior engineer (10+ years) who actually     │
│     builds production AI systems daily.          │
│     Not a prompt blogger. Not a tutorial         │
│     regurgitator. A practitioner with receipts.  │
└─────────────────────────────────────────────────┘
```

**Decisions needed:** [x] Visual format defined [x] Personality/vibe defined → See `CHANNEL.md` §1.3

### 1.4 Content Mix

> Reference: `guides/02-strategy/03-positioning.md`

```
┌─────────────────────────────────────────────────┐
│  CONCENTRIC CIRCLES + 40-40-20 MIX               │
├─────────────────────────────────────────────────┤
│                                                  │
│  CORE (40% of videos)                            │
│  The bullseye — exactly what the channel is.     │
│  [ ] Define 5-8 core topics                      │
│  e.g., context engineering, agentic workflows,   │
│  CLAUDE.md design, tool use, multi-agent...      │
│                                                  │
│  INNER (40% of videos)                           │
│  One step wider — still on-brand, reaches more.  │
│  [ ] Define 5-8 inner topics                     │
│  e.g., AI coding tools, prompting techniques,    │
│  vibe coding, AI productivity, Claude/Cursor...  │
│                                                  │
│  OUTER (20% of videos)                           │
│  Broadest circle — occasional reach plays.       │
│  [ ] Define 3-5 outer topics                     │
│  e.g., future of software engineering, AI        │
│  industry analysis, tech career with AI...       │
│                                                  │
│  NEVER                                           │
│  Topics that don't connect back to the channel.  │
│  Completely off-topic = audience mismatch =      │
│  algo confusion.                                 │
│                                                  │
│  CONTROLLED CHAOS                                │
│  One video per month from the outer circle that  │
│  swings wider for serendipitous cross-shares.    │
└─────────────────────────────────────────────────┘
```

**Decision needed:** [x] Content circles defined with specific topics → See `CHANNEL.md` §1.4

### 1.5 Video Formats (Structure Library)

> Reference: `guides/00-video-structures/video-structures.md`

We don't use fixed named series (no more "X Levels" or "Under the Hood" as series brands). Instead, we pick from Kallaway's proven structural blueprints based on what the TOPIC needs:

```
┌─────────────────────────────────────────────────┐
│  STRUCTURE LIBRARY (7 blueprints from guide)     │
├─────────────────────────────────────────────────┤
│                                                  │
│  Pick the structure that fits the topic:         │
│                                                  │
│  1. NUMBERED      "7 levels of context eng"      │
│     LISTICLE ──── N parallel items               │
│  2. LAYERED       "how AI agents actually        │
│     FRAMEWORK ───  think" (named mental model)   │
│  3. SEQUENTIAL    "set up CLAUDE.md in 10 min"   │
│     PROCESS ───── ordered steps, causal deps     │
│  4. PROBLEM-      "why your AI keeps failing"    │
│     SOLUTION ──── diagnose root causes + fix     │
│  5. CASE STUDY    "how we shipped X with agents" │
│     DEEP DIVE ─── real example → lessons         │
│  6. CONTRARIAN    "prompting is the least        │
│     REFRAME ─────  important AI skill"           │
│  7. TREND/        "everything that just changed  │
│     FORECAST ────  in AI coding"                 │
│                                                  │
│  [x] Pick 2-3 primary formats to start with      │
│  [ ] Define the signature "Human in the Loop"    │
│      look/feel for each                          │
└─────────────────────────────────────────────────┘
```

**Decision needed:** [x] Primary formats selected → See `CHANNEL.md` §1.5

### 1.6 Publishing Cadence

```
┌─────────────────────────────────────────────────┐
│  CADENCE                                         │
├─────────────────────────────────────────────────┤
│                                                  │
│  [ ] How many long-form videos per week/month?   │
│  [ ] How many shorts/derivatives per video?      │
│  [ ] What day do you publish?                    │
│  [ ] How much production time per video?          │
│                                                  │
│  Kallaway says: don't plan for outliers.         │
│  Plan for zero viral hits. If your cadence       │
│  requires virality to be sustainable, it will    │
│  break.                                          │
└─────────────────────────────────────────────────┘
```

**Decision needed:** [x] Realistic cadence set → See `CHANNEL.md` §1.6

### 1.7 Signature Style

> Reference: `guides/02-strategy/04-creator-moat.md`

The combination of elements that makes a Human in the Loop video instantly recognizable:

```
┌─────────────────────────────────────────────────┐
│  SIGNATURE STYLE                                 │
├─────────────────────────────────────────────────┤
│                                                  │
│  VISUAL SIGNATURE                                │
│  [ ] Color palette / thumbnail style             │
│  [ ] On-screen text style                        │
│  [ ] Recurring visual elements                   │
│                                                  │
│  AUDIO SIGNATURE                                 │
│  [ ] Intro pattern (do you have one?)            │
│  [ ] Music style / no music                      │
│  [ ] Any signature phrase? ("check this out"     │
│      is Kallaway's — what's ours?)               │
│                                                  │
│  DELIVERY SIGNATURE                              │
│  [ ] Energy level (calm expert? animated?)       │
│  [ ] Pacing (fast like Fireship? measured?)      │
│  [ ] How do you open videos?                     │
│  [ ] How do you close videos?                    │
└─────────────────────────────────────────────────┘
```

**Decision needed:** [x] Signature elements defined → See `CHANNEL.md` §1.7

---

## The Idea Pipeline

> References: `guides/04-idea-development/idea-development.md`, `guides/03-packaging/03-validation.md`

This runs CONTINUOUSLY — not per video. You're always capturing, always scoring. When it's time to make a video, you pull from a validated backlog instead of starting from zero.

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ CAPTURE  │ →  │ VALIDATE │ →  │ BACKLOG  │ →  │ SCHEDULE │
│          │    │          │    │          │    │          │
│ Sources: │    │ Filters: │    │ Tagged:  │    │ Pulled:  │
│ • Built  │    │ • Shock  │    │ • Circle │    │ • 40-40  │
│   today  │    │   score  │    │   (C/I/O)│    │   -20    │
│ • Trend  │    │ • Key    │    │ • Format │    │   mix    │
│ • Pain   │    │   visual │    │ • Score  │    │ • Timely │
│ • 360    │    │ • Peer   │    │          │    │   events │
│   map    │    │   share  │    │          │    │          │
│          │    │ • Outlier│    │          │    │          │
│          │    │   gap    │    │          │    │          │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

**File location:** Idea backlog lives at `production/idea-backlog.md` — a running list of validated ideas with scores, circles, and format tags.

---

## System 2: Video Production Pipeline

This is the repeatable flow for every single video. Each phase has a corresponding skill (Layer 3) and references specific guide files (Layer 2).

```
┌─────────────────────────────────────────────────────────────┐
│                   VIDEO PRODUCTION PIPELINE                  │
│                                                              │
│  Every video flows through these phases in order.            │
│  Each phase has a gate — don't proceed unless it passes.     │
│  Skills reference the guides. You focus on YOUR content.     │
└─────────────────────────────────────────────────────────────┘

  IDEA (pulled from backlog)
    │
    ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 1: STRUCTURE                                          │
│  Skill: /structure                                           │
│  Guide: guides/00-video-structures/video-structures.md       │
│                                                              │
│  → Pick which structural blueprint fits this topic           │
│  → Map your content to the beat-by-beat skeleton             │
│  → Decide: how many points? what order? what arc?            │
│                                                              │
│  Gate: "I know the skeleton of this video"                   │
│  Output: structure type + beat map                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 2: PACKAGE                                            │
│  Skill: /package                                             │
│  Guides: guides/03-packaging/01-titles.md                    │
│          guides/03-packaging/02-thumbnails.md                │
│          guides/03-packaging/03-validation.md                │
│                                                              │
│  → Write title options (pain point OR dream outcome)         │
│  → Design thumbnail concept (three item rule, key visual)    │
│  → Run trust score gut-check                                 │
│                                                              │
│  Gate: "Would I click this?" + peer share filter             │
│  Output: working title + thumbnail concept                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 3: OUTLINE                                            │
│  Skill: /outline                                             │
│  Guide: guides/05-outline/outline.md                         │
│                                                              │
│  → Write the ending FIRST (last dab)                         │
│  → List all points, score by shock value                     │
│  → Order: 2nd best first, best second (escalating)           │
│  → Apply jumbled W's (what/why → who/how → when/where)      │
│  → Set desired emotion at top of page                        │
│                                                              │
│  Gate: "Is this unique or am I regurgitating?"               │
│  Output: ordered bullet outline with last dab                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 4: HOOK                                               │
│  Skill: /hook                                                │
│  Guides: guides/06-hooks/01-hook-structure.md                │
│          guides/06-hooks/02-hook-types.md                    │
│          guides/06-hooks/03-hook-layers.md                   │
│          guides/06-hooks/04-hook-psychology.md               │
│          guides/06-hooks/05-hook-mistakes.md                 │
│                                                              │
│  → Identify your key visual                                  │
│  → Pick hook archetype (max contrast with visual)            │
│  → Write 3-part structure:                                   │
│    Context Lean → Scroll Stop → Contrarian Snapback          │
│  → Check 4-layer alignment (visual + text + audio + spoken)  │
│  → Gut-check against 4 mistakes                              │
│                                                              │
│  Gate: "Does this achieve max comprehension?"                │
│  Output: hook script + visual/audio/text notes               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 5: CLICK CONFIRM                                      │
│  Skill: /click-confirm                                       │
│  Guide: guides/07-click-confirm/click-confirm.md             │
│                                                              │
│  → Confirm what they clicked is what they're getting         │
│  → Establish credibility (pick from proof hierarchy)         │
│  → Name your framework ("I call this the...")                │
│  → State number of points ("There are 14 levels...")         │
│  → Promise outcome ("and by the end you'll...")              │
│                                                              │
│  Gate: "Would a skeptic stay after this?"                    │
│  Output: click confirm script (10-30 seconds)                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 6: BODY                                               │
│  Skill: /body                                                │
│  Guides: guides/08-body/01-value-loop.md                     │
│          guides/08-body/02-reh-hooking.md                    │
│          guides/08-body/03-storytelling-structure.md          │
│          guides/08-body/04-storytelling-language.md           │
│          guides/08-body/05-storytelling-memorability.md       │
│          guides/08-body/06-psychology-attention.md            │
│          guides/08-body/07-psychology-emotion.md              │
│          guides/08-body/08-psychology-trust.md                │
│          guides/08-body/09-character-stakes.md                │
│                                                              │
│  For each point in outline:                                  │
│  → Write value loop (Context → Application → Framing)        │
│  → Insert reh-hook before next point (~every 90 seconds)     │
│  → Check but/therefore flow between beats                    │
│  → Apply storytelling techniques where natural               │
│  → Run psychology checklist (6 checkpoints)                  │
│                                                              │
│  Gate: "Would I keep watching at minute 8?"                  │
│  Output: full body script with reh-hook markers              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 7: OUTRO                                              │
│  Skill: /outro                                               │
│  Guide: guides/09-outro/outro.md                             │
│                                                              │
│  → Close the loop (remind them the pain is solved)           │
│  → Numbered recap (one line per point)                       │
│  → Unexpected surprise (bonus value they didn't expect)      │
│  → Last dab (final line memorable enough to share)           │
│  → Native embed CTA (soft, contextual, layered)              │
│                                                              │
│  Gate: "Is the last dab worth sharing alone?"                │
│  Output: outro script                                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 8: SCRIPT REVIEW                                      │
│  Skill: /review-script                                       │
│  Guides: all body + storytelling guides                       │
│                                                              │
│  Full script assembled. Review pass:                         │
│  → Jagged line test (sentence length variation)              │
│  → But/therefore check (no "and then" beats)                 │
│  → Reh-hook spacing (~90 second intervals)                   │
│  → Contrast words present throughout                         │
│  → Active voice dominant                                     │
│  → Desired emotion maintained                                │
│  → Template bank lines sound natural in context              │
│                                                              │
│  Gate: "Would I watch this all the way through?"             │
│  Output: polished final script                               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 9: PRODUCTION                                         │
│  Guides: guides/10-production/01-speaking.md                 │
│          guides/10-production/02-recording.md                │
│          guides/10-production/03-audio.md                    │
│          guides/10-production/04-editing.md                  │
│                                                              │
│  → Print script, prep line-by-line delivery                  │
│  → Emotional state check (HTBT — happy to be there?)        │
│  → Throwaway reps to warm up                                 │
│  → Record: one close friend energy, 50% more than feels      │
│    natural, downspeak at sentence ends                        │
│  → Edit: visual stun gun moments, comprehension alignment,   │
│    signature pattern elements                                │
│                                                              │
│  Output: recorded and edited video                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 10: PUBLISH + DISTRIBUTE                              │
│  Guides: guides/11-distribution/distribution.md              │
│          guides/12-algorithm/algorithm.md                    │
│                                                              │
│  → Upload with optimized title/description/tags              │
│  → First caption line = above the fold hook                  │
│  → Derive shorts/clips (if applicable)                       │
│  → Cross-post derivatives at correct MPH speeds              │
│                                                              │
│  Output: published video + derivatives                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 11: ANALYZE + FEED BACK                               │
│                                                              │
│  → Review: AVD, engagement rate, outlier multiple            │
│  → What worked? What didn't?                                 │
│  → Content diagnostic: where did viewers drop off?           │
│  → Feed learnings back into:                                 │
│    • Channel blueprint (quarterly)                           │
│    • Idea pipeline (always)                                  │
│    • Production skills (when a pattern emerges)              │
│                                                              │
│  Output: learnings documented, system improved               │
└─────────────────────────────────────────────────────────────┘
```

### Video State File

Each video in production gets ONE coordination file that tracks state across phases:

```
production/youtube/[video-slug]/video-state.md

Contains:
- Current phase (structure / package / outline / hook / etc.)
- Decisions made in previous phases
- Working title + thumbnail concept
- Outline
- Hook draft
- Links to script sections as they're written
```

Skills read and write to this file. `/hook` knows what structure you picked because it reads the state file. `/body` knows what hook you wrote. No skill starts from zero.

---

## Today's Plan

### Step 1: Define the Channel Blueprint (System 1)

Work through each section of System 1 above. Answer every `[ ]` decision. This is a brainstorm — we'll talk through each one and write the answers directly into a `youtube-framework/CHANNEL.md` file.

Sections to complete:
- [x] 1.1 — Write the IVA paragraph ✓ (2026-04-08)
- [x] 1.2 — Confirm game type + monetization path ✓ (2026-04-08)
- [x] 1.3 — Define visual format + personality/vibe ✓ (2026-04-08)
- [x] 1.4 — Define content circles with specific topics ✓ (2026-04-08)
- [x] 1.5 — Pick 2-3 primary video formats ✓ (2026-04-08)
- [x] 1.6 — Set publishing cadence ✓ (2026-04-08)
- [x] 1.7 — Define signature style elements ✓ (2026-04-08)

All answers written to `youtube-framework/CHANNEL.md`.

### Step 2: Build Production Skills (Layer 3)

While System 1 is being defined, build the skills that power System 2:

| Skill | What it does | Guide files it loads |
|-------|-------------|---------------------|
| `/structure` | Pick video blueprint, map content to beats | 00-video-structures |
| `/package` | Title + thumbnail + validation | 03-packaging/* |
| `/outline` | Ordered bullet outline with last dab | 05-outline |
| `/hook` | Key visual → archetype → 3-part → alignment | 06-hooks/* |
| `/click-confirm` | Proof + framework name + promise | 07-click-confirm |
| `/body` | Value loop + reh-hooks + storytelling per point | 08-body/* |
| `/outro` | Close loop + recap + last dab + CTA | 09-outro |
| `/review-script` | Full script quality pass | multiple |

Each skill:
1. Reads the video state file to know what's been decided
2. Loads only the relevant guide file(s)
3. Walks through the checklist for that phase
4. Writes output back to the video state file
5. Uses template bank entries where applicable

### Step 3: Pick First Video + Run the Pipeline

Once System 1 is defined and skills are built:

- [ ] Pull first video idea from backlog (context engineering is the obvious first)
- [ ] Run it through every phase of System 2
- [ ] Validate the pipeline works end-to-end
- [ ] Ship by next week

### Step 4: Update Repo Docs

After System 1 is locked:

- [x] Update `CLAUDE.md` — rebranded to "AI for everyone", points to CHANNEL.md ✓ (2026-04-08)
- [x] Update `YOUTUBE-STRATEGY.md` — archived to `archive/legacy-production/`, replaced by CHANNEL.md + SYSTEM.md ✓ (2026-04-08)
- [x] Clean up `production/` structure — updated CLAUDE.md files, archived 01-vision.md, MCGA files ✓ (2026-04-08)

---

## Timeline: Video Out By Next Week

| Day | What gets done |
|-----|---------------|
| **Today** | System 1 decisions (channel blueprint). Start building skills. |
| **Tomorrow** | Finish skills. Pick first video. Run Phase 1-3 (structure, package, outline). |
| **Day 3** | Run Phase 4-7 (hook through outro). Full script draft. |
| **Day 4** | Phase 8 — script review and polish. Production prep. |
| **Day 5-6** | Phase 9 — record and edit. |
| **Day 7** | Phase 10 — publish. Phase 11 — set up analytics tracking. |

---

## File Map

```
youtube-framework/
├── SYSTEM.md              ← you are here (the operating system)
├── CHANNEL.md             ← channel blueprint (System 1 answers)
├── PLAN.md                ← Layer 2 build plan (completed)
├── notes.md               ← raw concept map from 79 videos
├── guides/                ← Layer 2: 30 guide files, 14K lines
│   ├── 00-video-structures/
│   ├── 01-mindset/
│   ├── 02-strategy/
│   │   ... (14 folders, 30 files)
│   └── 13-monetization/
└── scripts/
    └── pull-passage.sh    ← extraction tool for guide building

production/
├── idea-backlog.md        ← validated idea pipeline
└── youtube/
    └── [video-slug]/
        ├── video-state.md ← per-video state file
        ├── script.md      ← assembled script
        └── ...            ← research, assets, etc.
```
