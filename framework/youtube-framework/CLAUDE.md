# YouTube Framework

Production operating system for the Human in the Loop YouTube channel. This is the **delivery engine** — everything about HOW videos are structured, scripted, and produced.

## Core Principle

**Template, don't generate.** We follow Kallaway's production system 100%. Scripts are assembled from proven sentence skeletons with `[SWAP]` markers, not written from scratch by AI. The delivery structure is his (validated by 250K+ subs in one year). The content is ours (AI for everyone — deep engineering knowledge made radically accessible).

When writing or helping write any script, video outline, hook, or body section: pull from the template banks in the guide files first. Only write original lines when no template fits.

## Key Documents

| File | Purpose |
|------|---------|
| `CHANNEL.md` | **Channel blueprint.** IVA, game type, moat, content mix, formats, cadence, signature style. All System 1 decisions. |
| `SYSTEM.md` | **Production pipeline.** System 1 framework, idea pipeline, System 2 (11-phase video pipeline). |
| `guides/` | **The knowledge base.** 34 guide files, ~15K lines. Every production phase covered. |

## Guide Structure (Layer 2)

34 guide files across 14 folders, numbered in production order:

```
guides/
├── 00-video-structures/   1 file   — 7 structural blueprints (listicle, explainer, etc.)
├── 01-mindset/            1 file   — creator psychology, reps, mental blockers
├── 02-strategy/           4 files  — audience, game theory, positioning, creator moat
├── 03-packaging/          3 files  — titles, thumbnails, validation
├── 04-idea-development/   1 file   — 360 mapping, shock score, outlier research
├── 05-outline/            1 file   — ordering, direction, last dab
├── 06-hooks/              5 files  — structure, types, layers, psychology, mistakes
├── 07-click-confirm/      1 file   — proof hierarchy, framework naming, promise
├── 08-body/               9 files  — value loop, reh-hooking, storytelling, psychology
├── 09-outro/              1 file   — close loop, recap, CTA
├── 10-production/         4 files  — speaking, recording, audio, editing
├── 11-distribution/       1 file   — platform strategy, cross-posting, virality
├── 12-algorithm/          1 file   — how algos work, growth levers
└── 13-monetization/       1 file   — revenue models, funnels, business strategy
```

## Each Guide File Contains

1. **Teaching layer** — Concept definitions, step-by-step application, when to use
2. **Meta-analysis** — How Kallaway demonstrates each technique in his own videos (proof it works)
3. **Template bank** — Verbatim sentence skeletons with `[SWAP]` markers, organized by production moment
4. **Checklist** — Actionable steps for that phase (becomes the skeleton of Layer 3 skills)

## Video Production Pipeline (System 2)

When producing a video, work through these phases in order. Each phase references specific guide files:

1. **Structure** → `00-video-structures/` — pick blueprint
2. **Package** → `03-packaging/` — title + thumbnail + validation
3. **Outline** → `05-outline/` — end first, shock ordering, jumbled W's
4. **Hook** → `06-hooks/` — key visual, archetype, 3-part structure, alignment
5. **Click Confirm** → `07-click-confirm/` — proof, framework name, promise
6. **Body** → `08-body/` — value loop per point, reh-hook every ~90s, but/therefore
7. **Outro** → `09-outro/` — close loop, recap, last dab, CTA
8. **Script Review** — jagged line test, contrast words, active voice, emotion check
9. **Production** → `10-production/` — speaking, recording, audio, editing
10. **Publish** → `11-distribution/`, `12-algorithm/` — platform strategy
11. **Analyze** — what worked, feed back into system

## Rules

- Every script line should be traceable to a template or explicitly marked as original
- Preserve Kallaway's terminology (reh-hooking, not re-engagement; scroll stop, not attention grab)
- Never paraphrase template bank entries — use them verbatim and swap only the `[SWAP]` markers
- When a guide file is loaded for a production phase, follow its checklist
- Don't load all guides at once — use progressive disclosure, load only what the current phase needs
- The audience is broad (developers, vibe coders, Gen Z, anyone using AI) — never assume developer-only
- Content must always be grounded: real data, real systems, real trade-offs. Never hype.

## Source Material

79 Kallaway transcripts in `voice-references/transcripts/kallaway/` organized by:
- `youtube/` (37) — primary corpus, videos about making videos
- `socialmedia/` (26) — strategy, algorithm, psychology
- `monetization/` (9) — business models, funnels
- `case-studies/` (7) — growth stories, real examples

These are Layer 1. Never reference directly in production — always go through the Layer 2 guides.
