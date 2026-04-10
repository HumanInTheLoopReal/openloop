# Video State: Context Engineering for Everyone

> Production state file. Created by `/structure`, read by all downstream skills.
> Last updated: 2026-04-09

---

## Meta

- **Working Title:** Context Engineering for Everyone
- **Slug:** context-engineering-for-everyone
- **Content Circle:** core
- **Desired Emotion:** Empowered — "I finally understand what matters when talking to AI, and I can fix my conversations today"
- **Created:** 2026-04-09

## Phase Status

| Phase | Status | Date |
|-------|--------|------|
| Structure | COMPLETE | 2026-04-09 |
| Package | PENDING | |
| Outline | PENDING | |
| Hook | PENDING | |
| Click Confirm | PENDING | |
| Body | PENDING | |
| Outro | PENDING | |
| Script Review | PENDING | |
| Production | PENDING | |
| Publish | PENDING | |
| Analyze | PENDING | |

## CAF Audit

- **Pain point:** PASS — Everyone using AI hits the wall of "why does it give me garbage answers?" The IVA (nurse, junior dev, Fahad's dad) all have this problem daily.
- **Solve:** PASS — Existing "prompt engineering" videos teach surface tricks. Nobody explains what the context window actually is, why it matters more than the prompt, and how to structure it. Our practitioner depth + accessibility is genuinely better.
- **Right teacher:** PASS — Fahad builds production AI systems daily and can explain context to his 65-year-old dad. The combination of deep expertise + radical accessibility is exactly what this topic needs.

## Structure

- **Type:** The Layered Framework
- **Variation:** Ladder variant — levels that build cumulatively, implying mastery progression
- **Arc:** Progressive disclosure — start with "what is a context window?" (accessible to everyone), build to "how to architect context for multi-agent systems" (advanced). Each level unlocks the next.

### Beat Map

1. **Hook:** "There's one skill that separates people who get amazing results from AI from people who don't. It's not prompting. It's not which model you use. It's what you put IN the conversation before you ever ask a question. I call this context engineering."
2. **Click-confirm:** "I'm a senior engineer with 15 years of experience, and I build AI systems every day. But my dad — 65, no coding background — also uses AI daily. And when I taught him this one concept, his results transformed overnight."
3. **Framework introduction:** Name the framework: "The Context Ladder" — 5 levels of context engineering, from basic to advanced. Visualize as a ladder.
3b. **Define precisely:** Before walking the levels, nail down what "context" actually means in AI. "Context isn't your prompt — it's everything the AI can see when it answers. Your prompt, the conversation history, any files you've shared, its memory of you, and the tools it can reach. Most people only control one of those. The Context Ladder teaches you to control all five."
4. **Level 1 — Conversation context:** What you say in the chat. (Non-tech: organizing your ChatGPT conversation. Tech: structuring a prompt with role + task + constraints.)
5. **Level 2 — Reference context:** Giving AI documents, examples, data to work with. (Non-tech: pasting your resume before asking for cover letter help. Tech: feeding a CLAUDE.md file with project context.)
6. **Level 3 — Memory context:** What AI remembers across sessions. (Non-tech: ChatGPT memory settings. Tech: persistent project files, custom instructions.)
7. **Level 4 — Tool context:** Giving AI the ability to look things up and take actions. (Non-tech: ChatGPT with web browsing. Tech: MCP servers, tool use, function calling.)
8. **Level 5 — System context:** Designing the entire environment AI operates in. (Non-tech: setting up your AI workspace with templates and shortcuts. Tech: CLAUDE.md, agent harnesses, multi-agent orchestration.)
9. **Integration:** How the levels interact — each level multiplies the effectiveness of the ones below it. A great prompt (L1) in a well-structured system (L5) is 100x more effective than a great prompt alone.
10. **Full-framework example:** Walk through a real AI conversation — Fahad's dad building his expense tracker — and show which levels he used (L1: described what he wanted; L2: pasted his bank statement format; L5: set up a project file). Prove the ladder works on a real, non-technical use case.
11. **Outro:** Recap all 5 levels → "Start at level 1 today — reorganize your next AI conversation. You'll see results immediately." → Forever loop transition.

**Dual examples marked:** Levels 1-5 all have both tech + non-tech examples explicitly paired.

### Template Selections

**Opening template:** Opening — Script writing blueprint (Structure 2 template bank)
> Today we're talking about context engineering. If you want your AI results to perform better, this is going to be one of the most helpful videos you ever watch. Cuz the truth is, when it comes to AI, most people really struggle with getting consistent results, structuring their conversations, and knowing what to feed the model. And the reason is you don't have a system for converting your intent into great AI outputs. Now, I've spent 15 years building production software and the last two years building AI systems every day, and it turns out the people who get the best results are all using the exact same context architecture. It's the same system I've personally used to build AI agents, automate workflows, and teach my 65-year-old dad to build his own apps. So, in this video, I'm going to walk you through the whole thing. This is the five-level Context Ladder for getting dramatically better results from any AI.

**First point delivery:** Teaching — Story ladder, level one reporter description
> Level one of the Context Ladder is conversation context. This is the most basic level — it's literally what you type into the chat. And most people never get past this level. They just start typing and hope for the best. But there's a massive difference between asking AI a question and giving AI the context it needs to give you a great answer.

**Outro template:** Outro — Rapid recap, four-step blueprint
> So, those are the five levels of the Context Ladder. Level one, organize your conversation context. Level two, give AI reference material to work with. Level three, set up memory so it knows you across sessions. Level four, give it tools to look things up and take action. And level five, design the entire system it operates in. Start at level one today — just reorganize your next AI conversation. You'll see results immediately.

## Forever Loop

- **Leads into:** "How to Write a CLAUDE.md That Actually Works" (planned)
- **Transition line:** "Now that you understand the 5 levels, the single most powerful thing you can do at level 5 is write a CLAUDE.md file. I made a video showing you exactly how to set one up in 10 minutes."
- **Video exists?** No — added to idea backlog

## Outlier Research

### Videos Found

| Video | Creator | Views | Structure Used |
|-------|---------|-------|---------------|
| "Prompt Engineering Full Course" | freeCodeCamp | 2.1M | Tutorial (sequential) |
| "ChatGPT Prompt Engineering for Developers" | DeepLearning.AI | 1.8M | Tutorial (sequential) |
| "Master the Perfect ChatGPT Prompt Formula" | Jeff Su | 3.2M | Listicle (formula steps) |
| "Context Window Explained" | AssemblyAI | 89K | Explainer (single concept) |

### Gap Analysis

The space is saturated with "prompt engineering" tutorials — all focused on writing better prompts (Level 1 only). Nobody frames the full picture: that prompting is the least important part, and context architecture is the real skill. The ladder framework differentiates by reframing the entire topic. AssemblyAI's video is the closest competitor but is developer-only and doesn't cover levels 3-5.

## Notes

- **Early shock signal:** "Prompting is the least important part of getting good results from AI" — high shock value, contrarian, backs up the framework's structure.
- **Potential key visual:** A literal ladder graphic with 5 rungs, each labeled. Could animate climbing it as we progress through levels.
- Dad's expense tracker story fits naturally at Level 2 or Level 5 — real proof that this works for non-technical people.

---

## Package
<!-- Filled by /package — working title, thumbnail concept, trust score -->

## Outline
<!-- Filled by /outline — ordered bullet outline, last dab, shock ordering -->

## Hook
<!-- Filled by /hook — key visual, hook archetype, 3-part structure, 4-layer alignment -->

## Click Confirm
<!-- Filled by /click-confirm — proof hierarchy, framework name, promise -->

## Body
<!-- Filled by /body — value loops, reh-hook markers, storytelling per point -->

## Outro
<!-- Filled by /outro — close loop, recap, last dab, CTA, forever loop script -->

## Script Review
<!-- Filled by /review-script — jagged line test, contrast words, active voice, emotion check -->
