# Body Example: Context Engineering for Everyone

> Worked example of 3 completed body points. Read this once to calibrate the quality and format of your output.
> This continues from the click confirm in `.claude/skills/click-confirm/templates/click-confirm-example.md`.
> Video: "Why Prompting Is the Least Important AI Skill" (working title from /package)
> Structure: Layered Framework — "The Context Ladder" (5 levels + Integration + Dad proof = 7 outline points)
> Desired emotion: Empowered
> Outline ordering: Progressive disclosure (accessibility-constrained shock ordering from /outline)

---

## Body

### Body Architecture
```
Click Confirm (Phase 5 — already written, ~30 seconds)
→ Point 1: Level 1 — Conversation Context [~150 words, ~60s] (Shock Score: 30 — Reframable)
→ Reh-hook 1
→ Point 2: Level 2 — Reference Context [~250 words, ~100s] (Shock Score: 72 — Novel, first high-shock)
→ Reh-hook 2
→ Point 3: Level 3 — Memory Context [~150 words, ~60s] (Shock Score: 55 — Reframable)
→ Reh-hook 3
→ Point 4: Level 4 — Tool Context [~200 words, ~80s] (Shock Score: 78 — Novel, second major shock)
→ Reh-hook 4
→ Point 5: Level 5 — System Context [~250 words, ~100s] (Shock Score: 88 — Novel, climax)
→ Reh-hook 5
→ Point 6: Integration — How the levels multiply [~150 words, ~60s] (Shock Score: 65 — Novel)
→ Reh-hook 6
→ Point 7: Dad proof — Full framework walkthrough [~200 words, ~80s] (Shock Score: 70 — Novel, unique to HitL)
→ Outro (Phase 7)
```
Total: ~1350 words, ~9 minutes spoken
Long-term loop: "Level 5 changes everything" — teased in Point 1 framing, reminded in Reh-hook 3
Ordering note: Progressive disclosure takes precedence for this Layered Framework — L1-L5 must be sequential because each level builds on the previous. Shock ordering (L5 first) would confuse the viewer. Scores from /outline state file used verbatim.

### Body Script

#### Point 1: Level 1 — Conversation Context (Shock Score: 30 — Reframable)

**Value Loop:**

> **Context:** Conversation context is the simplest form — it's what you type into a single chat session. Every message you send and every response you get becomes part of the context. Most people treat this as "just chatting." It's not. It's the first building block.
>
> **Application (tech):** When you're debugging a function in Claude Code, everything you've said in that session — the error message, the file you pasted, your description of the expected behavior — that's your conversation context. The more structured you make it, the better the response. I tested this: a structured bug report with steps to reproduce gets a fix in one shot 70% of the time. A vague "it's broken" gets there maybe 20%.
>
> **Application (non-tech):** Say you're asking ChatGPT to help plan a family reunion. If you just say "plan a reunion," you get generic garbage. But if you say "My family is 25 people, ages 8-75, we have a $2000 budget, half the family is vegetarian, and we want something outdoors in Texas in October" — now the AI has real context. Same question. Wildly different answer.
>
> **Framing:** That's Level 1. It sounds basic. But here's the thing — 90% of people never get past this level. They think AI quality is about finding the right magic words. It's not. It's about what information the AI has access to. And we're just getting started. Wait until we get to Level 5 — that one changes everything.

**Storytelling techniques applied:** Embedded truths ("When you're debugging" not "If you're debugging" — removes uncertainty). Feeling smart (the viewer realizes "oh, I can just be more structured" — empowerment, not intimidation). Long-term loop opened ("Level 5 changes everything" — The Hunt tease for the final point).

**Templates used:**
- Context leg: "Point structure — Value Loop frame" template (Context leg) → "[SWAP: Conversation context] is [SWAP: what you type into a single chat session]. Most people [SWAP: treat this as just chatting]. It's not. It's [SWAP: the first building block]."
- Application leg: Example pattern with real numbers → "I tested this: [SWAP: structured bug report] gets [SWAP: a fix in one shot 70% of the time]. [SWAP: A vague 'it's broken'] gets there [SWAP: maybe 20%]."
- Framing leg: "Zoom out + escalation" template → "That's [SWAP: Level 1]. It sounds [SWAP: basic]. But [SWAP: 90% of people never get past this level]. They think [common misconception]. It's not. It's about [reframe]."
- Long-term loop: The Hunt template → "Wait until we get to [SWAP: Level 5] — that one [SWAP: changes everything]."

**Reh-hook to Point 2:**

> Now conversation context is powerful. But honestly — if you're rebuilding your context from scratch every single session, you're wasting hours. And that's where most people hit the wall. There's a level above this that solves it completely.

**Reh-hook template:** "And-flip, consequence variant" → "Now [SWAP: conversation context] was [SWAP: powerful]. But honestly, if you [SWAP: don't figure out the next level], [SWAP: you're wasting hours rebuilding from scratch every session]."

---

#### Point 2: Level 2 — Reference Context (Shock Score: 72 — Novel, first high-shock)

**Value Loop:**

> **Context:** Reference context is information you prepare BEFORE the conversation starts and feed to the AI as source material. Documents, files, examples, specs — anything the AI can read alongside your question. This is the single biggest upgrade most people will ever make to their AI results.
>
> **Application (tech):** In Claude Code, this is your CLAUDE.md file. It's a document that sits in your project root and tells the AI everything about your codebase — the tech stack, the coding conventions, the architecture decisions. I measured the difference: without a CLAUDE.md, the AI suggests generic patterns. With one, it writes code that actually fits your project. My CLAUDE.md is 200 lines and it saves me hours every single day.
>
> **Application (non-tech):** My dad — 65 years old, no coding background — built himself an expense tracker app. But before he started, I helped him write a one-page document: what the app should do, what his phone is, that he prefers large buttons and simple navigation. He pasted that document into every ChatGPT session. The AI stopped suggesting complicated features and started building exactly what he needed. One page of context changed everything.
>
> **Framing:** This is where "prompting is the least important AI skill" actually lands. You can write a perfect prompt — and if the AI doesn't have reference context, it's guessing. You can write a terrible prompt — and if the AI has the right documents loaded, it still performs. The context is doing the work. Not the prompt.

**Storytelling techniques applied:** The dad story (Level 4 proof — makes the concept tangible for non-technical viewers). But/Therefore ("You can write a perfect prompt — and if..." / "You can write a terrible prompt — and if..." — contrast structure from the South Park Rule). Term branding ("Reference context" as the branded name for the level). Feeling smart (the viewer connects "oh — the context matters more than the prompt" — they feel the insight land).

**Templates used:**
- Context leg: "Point structure — Value Loop frame" template (Context leg) → "[SWAP: Reference context] is [SWAP: information you prepare BEFORE the conversation starts and feed to the AI]."
- Application leg (tech): Practitioner proof with measurement → "I measured the difference: [without A], [result]. [With A], [result]. [Specific number] and it [SWAP: saves me hours every single day]."
- Application leg (non-tech): Dad story pattern → "My dad — [SWAP: 65 years old, no coding background] — [SWAP: built himself an expense tracker]. But before he started, [setup]. [Result]. [SWAP: One page of context changed everything]."
- Framing leg: But/therefore contrast → "You can [SWAP: write a perfect prompt] — and if [SWAP: the AI doesn't have reference context], [bad outcome]. You can [SWAP: write a terrible prompt] — and if [SWAP: the AI has the right documents], [good outcome]. [Reframe: the context is doing the work]."

**Reh-hook to Point 3:**

> So reference context is the haymaker. That alone will transform how you use AI. But here's the problem — what happens when you close the chat window? All that conversation context? Gone. Every session starts from zero. Unless you figure out the next level.

**Reh-hook template:** "Casino Royale mechanic" → "[Deliver payoff: SWAP: reference context is the haymaker]. But [SWAP: what happens when you close the chat window? All that context — gone. Every session starts from zero. Unless you figure out the next level]."

---

#### Point 3: Level 3 — Memory Context (Shock Score: 55 — Reframable)

**Value Loop:**

> **Context:** Memory context is persistence — the AI remembering things across sessions. Not just what you said today, but what you said last week. Your preferences. Your project history. Your past mistakes. This is where AI goes from a tool you use to a tool that knows you.
>
> **Application (tech):** Claude Code's memory system stores project decisions across sessions. I told it once: "We use TypeScript strict mode, we prefer composition over inheritance, and we never use any." Three months later, it still enforces those rules in every session. I didn't prompt for it. The memory did the work.
>
> **Application (non-tech):** Imagine your dad uses ChatGPT every week to manage his medications. Without memory, he has to re-explain his conditions, his allergies, his dosages every time. With memory enabled, the AI already knows he's allergic to penicillin and takes blood pressure medication. It just... remembers. The same way a good doctor remembers your history without you repeating it every visit.
>
> **Framing:** Levels 1 and 2 make AI useful. Level 3 makes it personal. And when AI is personal — when it remembers YOUR context, YOUR preferences, YOUR history — that's when it stops feeling like a tool and starts feeling like something that actually works for you.

**Storytelling techniques applied:** Embedded truths ("When AI is personal" — not "if"). Hawkeye narrative (broad concept of persistence → narrow to the specific medication example → back to broad "makes it personal"). Feeling smart (viewer realizes memory is the missing piece — "that's why my AI keeps asking me the same things").

**Templates used:**
- Context leg: "Point structure — Value Loop frame" template (Context leg) → "[SWAP: Memory context] is [SWAP: persistence — the AI remembering things across sessions]."
- Application leg (tech): Practitioner proof → "I told it once: [specific instruction]. [SWAP: Three months later], it still [result]. I didn't [action]. The [SWAP: memory] did the work."
- Application leg (non-tech): Analogy pattern → "Imagine [SWAP: your dad uses ChatGPT every week]. Without [SWAP: memory], he has to [pain]. With [SWAP: memory], [relief]. The same way [relatable analogy]."
- Framing leg: "Ascending value" template → "[SWAP: Levels 1 and 2] make AI [SWAP: useful]. [SWAP: Level 3] makes it [SWAP: personal]. And when [embedded truth], that's when [reframe]."

**Reh-hook to Point 4:**

> Memory is where AI gets personal. That's powerful. But right now, the AI is still limited to what it can think about. It can't DO anything in the real world. It can't check your calendar, search your files, or run your code. That's the next wall — and the next level breaks through it.

**Reh-hook template:** "And-flip transition" → "[SWAP: Memory] is where [SWAP: AI gets personal]. That's powerful. But [SWAP: the AI is still limited to what it can think about — it can't DO anything]. That's [SWAP: the next wall — and the next level breaks through it]."

---

### Quality Checks
- **Wave pattern:** Verified — Point 1 starts low at shock 30 (accessible foundation, reframed as "most people stop here"), Point 2 jumps to 72 (first "oh I never thought of that" moment with dad story + measurement data), Point 3 eases to 55 (reframable — memory as a strategic layer, not a toggle). Progressive disclosure wave matches the outline's accessibility-constrained ordering. Shock peaks escalate across the full body: 30→72→55→78→88.
- **But/therefore flow:** All transitions use contrast: "But honestly — if you're rebuilding..." / "But here's the problem — what happens when..." / "But right now, the AI is still limited..."
- **Jagged line test:** Pass — sentence lengths vary: "It's not." (2 words) vs. "The more structured you make it, the better the response." (10 words) vs. "If you just say 'plan a reunion,' you get generic garbage." (11 words) vs. "That's Level 1." (3 words)
- **Active voice:** Pass — "I tested this," "I measured the difference," "I told it once" — practitioner voice throughout
- **Contrast words:** "But" appears 6 times across 3 segments. "Honestly" once. "Unless" once. Distributed throughout, not just in reh-hooks.
- **Embedded truths:** "When you're debugging" (not "if"), "When AI is personal" (not "if") — confidence throughout
- **Dual examples:** All 3 points have tech + non-tech: (1) debugging function / family reunion, (2) CLAUDE.md / dad's expense tracker, (3) TypeScript strict mode / dad's medications
- **Six checkpoints:** 4 likability ✓ (genuine passion, real measurements, dad story = warmth), 5 attention ✓ (reh-hooks at ~80s intervals, long-term loop open for Level 5)
- **Audience of one:** "you" throughout — "when you're debugging," "if you're rebuilding your context," "that works for you"
- **Desired emotion:** Empowered — each level builds the viewer's sense of capability. By Point 3, they feel "I can do this at every level."
- **Anti-patterns:** No Reporter sections (every point has contrast). No Prince-in-Forest detours (no unnecessary backstory).
