# Audio: Complete Guide

> Kallaway's creator-audio system for making spoken words cut through: prioritize clarity over fancy visuals, use a simple vocal chain, and keep background music out of the voice's way.

## Overview

This is the narrowest file in the Production guide, and it should stay that way. Kallaway's explicit audio teaching is concentrated in one core delivery transcript, but the signal is strong: he is very clear about what matters, what his own chain is, and how he prevents music from muddying the vocal.

The core concepts in this guide are:

1. Audio Clarity First
2. Vocal Chain
3. Low Pass Filter on Music

**Where this fits:** after the script is written and before or during recording/editing. This file is about audio capture and audio processing choices. Speaking performance lives in `10-production/01-speaking.md`. Camera anxiety, studio setup, and recording-state management live primarily in `10-production/02-recording.md`. Visual comprehension and edit decisions live in `10-production/04-editing.md`.

**Scope note:** most of the direct teaching here comes from *How to Master the Art of Speaking (and blow up your content)*. Rather than inventing a full home-studio curriculum, this guide stays tight and extracts the practical system he actually teaches.

---

## 1. Audio Clarity First

**What it is:** Audio is not a polish layer. It is a gating factor. Kallaway's framing is blunt: if the vocal is unclear, strong visuals will not rescue the video. He is also explicit that this is not mainly a spending problem. The goal is not "most expensive mic wins." The goal is intelligibility.

**How to apply:**
1. Judge your audio by one standard first: can the viewer hear and understand every word easily?
2. Prioritize vocal clarity before camera upgrades, fancy edits, or other cosmetic improvements.
3. If your sound is muddy, boomy, or hard to parse, treat that as a production blocker.
4. Optimize for clear cut-through, not for sounding "studio rich" at all costs.

**When to use:** Every talking-head educational video, podcast-style explanation, voiceover, or A-roll-heavy YouTube piece.

**Teaching layer:**

> "it's not about how much money you spend on your mic but you've got to sound clear"

> "the most important part of video is actually the audio because if you have bad audio there's no amount of great video that can save it"

— Source: *How to Master the Art of Speaking (and blow up your content)*

**What he does but doesn't teach:** The hidden standard is not "premium sound." It is verbal intelligibility. Across his explanation, the repeated priority is that the vocal should cut through cleanly enough that comprehension stays high. That makes this an authority problem, not just an aesthetic one.

---

## 2. Vocal Chain

**What it is:** The audio path from microphone to final spoken track. Kallaway teaches a simple creator chain, not a complicated studio rig: microphone into an interface with preamps, separate raw recording into a DAW, then a very small plugin stack to shape the voice.

For his own setup, the chain is:

`Shure SM7B -> XLR -> RODECaster Pro 2 audio interface -> MacBook Pro -> Logic Pro -> two EQs + compressor`

The important lesson is not that everyone should copy his exact gear. It is that the voice should move through a deliberate chain and then get shaped lightly for clarity.

**How to apply:**
1. Build a repeatable signal path from mic to computer instead of treating audio as an afterthought.
2. If you want more control over tone, use an audio interface rather than plugging a USB mic straight into the computer.
3. Record the vocal as its own track in a DAW when possible, instead of relying only on camera audio.
4. Start with a small processing stack:
   - cut low rumble below roughly `80 Hz`
   - add only a little top-end lift if your voice needs more cut
   - use reductive EQ to remove ugly frequencies
   - use compression to smooth dynamics
5. Stop before the vocal gets harsh, sibilant, or overly processed.

**When to use:** Any repeatable creator setup where spoken clarity is central: sit-down YouTube videos, podcast-style solo delivery, educational breakdowns, and voiceover-heavy videos.

**Teaching layer:**

Setup and interface logic:

> "preamps are digital amplifiers that are built into your audio interface ... if you're plugging your mic through USB directly into your computer you're not going to have any preamps because you're not using an audio interface"

> "I record into this which is the Shure SM7B ... connected via an XLR cable running into a RODECaster Pro 2 audio interface"

Raw recording plus simple chain:

> "I record this audio raw into logic pro instead of pairing it with the camera I record it separately directly into logic pro"

> "super simple vocal chain three plugins make a huge difference"

EQ and reductive EQ:

> "that red Arc is cutting everything below 80 HZ ... I don't want that in my voice I want my voice to cut through"

> "this is called reductive EQ ... anytime you hear a honk or a sharp sound bring that down and drop it 3 to four DBS"

Compression:

> "the last plugin is a compressor and this just helps with Dynamics ... it compresses the wide range of the vocals into a tighter band"

— Source: *How to Master the Art of Speaking (and blow up your content)*

**What he does but doesn't teach:** His real lesson is workflow, not preset worship. He explicitly says different voices will need different treatment. The repeatable pattern is:

1. get into a clean signal path
2. record separately
3. subtract bad frequencies before chasing "better" tone
4. smooth dynamics lightly

That is a very different mindset from endlessly stacking plugins or hunting for magical settings.

---

## 3. Low Pass Filter on Music

**What it is:** A tactical fix for the moment background music starts competing with the vocal. Kallaway's point is that the problem is not just volume. The problem is frequency collision. If the music and the voice are fighting in the same upper range, the words lose clarity.

**How to apply:**
1. If a vocal gets muddy after you add background music, assume masking before assuming the vocal take is bad.
2. Add a low pass filter to the music track.
3. Pull down the top end until the music supports the scene without competing with the vocal.
4. Judge the result by intelligibility: can the spoken words cut through immediately?
5. Use this as the first fix before over-processing the voice.

**When to use:** Any YouTube video, short, or voiceover edit that runs background music under spoken narration.

**Teaching layer:**

> "when you add a vocal to a video and you also add music it can cause some muddiness because the vocals in the music are clashing in the upper frequency range"

> "add a low pass filter ... drag that onto the music"

> "it carves a pocket that your vocals in the the high frequency range 3 to 7,000 HZ can cut through unobstructed"

— Source: *How to Master the Art of Speaking (and blow up your content)*

**What he does but doesn't teach:** The deeper principle is subtractive support. When two layers fight, simplify the supporting layer first. Instead of making the vocal more aggressive and more processed, he removes competing information from the music so the main signal can stay natural and readable.

---

## Template Bank by Production Moment

### Audio-over-video priority line

**Original (source: How to Master the Art of Speaking (and blow up your content)):**
> the most important part of video is actually the audio because if you have bad audio there's no amount of great video that can save it

**Template:**
> the most important part of [SWAP: format / system] is actually [SWAP: bottleneck layer] because if [SWAP: failure mode] there's no amount of [SWAP: secondary strength] that can save it

**What makes it work:** It forces a priority decision. The sentence reframes a "nice to have" into the actual gate that determines whether the rest matters.

---

### Clarity-over-cost framing

**Original (source: How to Master the Art of Speaking (and blow up your content)):**
> it's not about how much money you spend on your mic but you've got to sound clear

**Template:**
> it's not about [SWAP: expensive gear / fancy setup] but you do have to [SWAP: core functional outcome]

**What makes it work:** It cuts through gear obsession and re-centers the audience on the actual job the setup needs to do.

---

### Chain declaration

**Original (source: How to Master the Art of Speaking (and blow up your content)):**
> I go Shure SM7B into the RODECaster Pro 2 and then the RODECaster Pro 2 plugs directly into my MacBook Pro

**Template:**
> I go [SWAP: mic] into [SWAP: interface / preamp] and then [SWAP: interface / recorder] plugs directly into [SWAP: computer / capture device]

**What makes it work:** It gives a clean, confidence-building way to state a signal path without over-explaining it.

---

### Separate raw recording line

**Original (source: How to Master the Art of Speaking (and blow up your content)):**
> I record this audio raw into logic pro instead of pairing it with the camera I record it separately directly into logic pro

**Template:**
> I record this audio raw into [SWAP: DAW / recorder] instead of pairing it with the camera

**What makes it work:** It signals an intentional workflow upgrade in one sentence and frames separate recording as a quality decision, not a luxury.

---

### Reductive EQ routine

**Original (source: How to Master the Art of Speaking (and blow up your content)):**
> anytime you hear a honk or a sharp sound bring that down and drop it 3 to four DBS

**Template:**
> if you hear [SWAP: ugly frequency character], pull it down [SWAP: amount] instead of boosting more top end

**What makes it work:** It teaches a practical corrective move. The line is useful because it turns "EQ your voice" into an actionable listening habit.

---

### Simple processing-stack line

**Original (source: How to Master the Art of Speaking (and blow up your content)):**
> super simple vocal chain three plugins make a huge difference

**Template:**
> super simple [SWAP: processing chain]: [SWAP: small number] plugins make a huge difference

**What makes it work:** It legitimizes restraint. The sentence gives permission to use a tiny, repeatable chain instead of building an overcomplicated stack.

---

### Music-masking fix

**Original (source: How to Master the Art of Speaking (and blow up your content)):**
> add a low pass filter ... drag that onto the music ... it carves a pocket that your vocals ... can cut through unobstructed

**Template:**
> add a [SWAP: subtractive filter] to the [SWAP: supporting layer] so the [SWAP: primary signal] can cut through unobstructed

**What makes it work:** It gives a reusable way to describe conflict management between layers: subtract from the support track so the main message stays readable.

---

## Checklist

- [ ] Before recording, ask whether the vocal is clear, not just whether the setup looks professional
- [ ] If your mic is going straight in by USB, decide whether you need an interface for more control over the signal path
- [ ] Build one repeatable chain from mic to computer instead of improvising your audio setup each session
- [ ] Record the vocal separately into a DAW when possible
- [ ] Start your vocal chain simple: low cut, light top shaping, reductive EQ, compressor
- [ ] Sweep for ugly frequencies and subtract them before stacking more boosts
- [ ] If the vocal starts sounding harsh or too sibilant, back off the high-end shaping
- [ ] When music muddies the voice, low-pass the music before over-processing the vocal
- [ ] Judge every audio choice by one question: do the words cut through immediately?
