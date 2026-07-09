# E68 WIZARD OF OZ — COMPLETE DESIGN
**Date:** 2026-07-09 | **Author:** Claude (wizard) | **Status:** CANONICAL DESIGN  
**Sources:** WIZARD_OF_OZ_ARCHITECTURE_FOR_CLAUDE_2026-06-10 · E68_WIZARD_VISUAL_SPEC_v1_2026-07-07 · E68_WIZARD_VISUAL_SPEC_v2_DELTA_2026-07-08 · E68_WIZARD_VISUAL_SPEC_v1_REVIEW_2026-07-08 · E68_SCREENING_ROOM_DOCTRINE_2026-07-06 · E68_COMPLETE_BUILD_SPEC_2026-06-07 · CANDIDATE_AI_DIALOG_CANON_13_2026-06-16

---

## PART I — WHAT THE WIZARD IS

### The Metaphor (Canonical)

E68 "Wizard of Oz" is the campaign composition and launch interface for BroyhillGOP.

| Metaphor | Meaning |
|---|---|
| **Oz / the curtain** | Hides all machinery — E20 Brain, LP solver (:8082), 16 guns, Brain Worker daemons, agent chain. Candidate never sees hydraulics. |
| **Genie in the bottle** | E68 **serves candidate money** — EVNA forecast, funnel revenue, ask tiers. Genie answers in dollars, not platform plumbing. |
| **Invisible factory** | All outbound carries **candidate brand only**: "Dave Boliek for Auditor." BroyhillGOP is invisible. |
| **Lamp → ask loop** | Candidate rubs the lamp (opens overlay, seeds context) → Brain yells optimal ask → candidate Accept/Deviate/Budget-cap → Step 9 authorize → genie delivers money via 16 guns. |

**Agent servant doctrine:** Agents (Nexus, Claude, Cursor, Brain Worker) serve Ed and the candidate; they do not rule. Outbound follows **Brain proposes → candidate Step 9 authorize → GO/NO-GO ≥70**. No agent deploys sovereignly.

---

### Two Audiences, One Engine (v2 Delta — 2026-07-08)

Ed's ruling (2026-07-08): v1 is not user-friendly enough for clients, BUT "for AI composition we need the level of complexity."

**Resolution:** ALL v1 complexity survives. It moves from the required path into the engine and into progressive-disclosure layers. The candidate's required path shrinks to **three taps**.

| Audience | Experience |
|---|---|
| **Tier B — Candidate** | Conversation + one Recommendation Card + Showtime. Three taps. Zero jargon. |
| **Tier A — Staff / Admin** | Full Casting Call, Cannon Deck, Playbill — dense tables, raw scores, variable names. Reachable via one toggle from any Tier B screen. |
| **The AI / Brain** | Needs all the complexity: play genome, gear semantics, bandit arms, gate matrices, why-vectors, variance ledger. Engine sees everything; candidate sees the card. |

---

### Two Worlds

**World 1 — The Accordion Directory**  
Browsable 5-level hierarchy of pre-loaded campaign options organized by category (Today's Matrix, Donor Fundraising, Finance Committee, etc.). Each node shows the Gun + EVNA score + yield estimate. Candidate picks a campaign like picking a dish. Requires `wizard_nodes` table.

**World 2 — The 3-Trail Composer (9 steps)**  
Four simultaneous panes: Trail 1 (Manual), Trail 2 (AI Assist), Trail 3 (Full AI), and a permanent ROI panel. Candidate chooses rendering mode and builds or approves.

---

## PART II — UI ARCHITECTURE

### Layer 0 — Inspinia Admin Shell (Persistent)

| Property | Spec |
|---|---|
| Template | Inspinia Bootstrap 5 admin (`frontend/inspinia/Inspinia HTML/Full/`) |
| Nav | 7-category left nav + mega-menu tiles |
| Role | Persistent command center — donor lists, pipeline boards, microsegment tabs, gun dashboards, analytics, settings |
| Shell | `frontend/inspinia/commander-portal/` (nav.js, index.html, admin.html) |

Layer 0 **owns**: navigation, read-only spine views, segment browsing, pipeline stage display, gun status tiles, battle hub (`race.competitive_state`). It does NOT fire weapons or write `wizard.campaigns` without the overlay.

### Layer 1 — Wizard of Oz Overlay (On Trigger)

| Property | Spec |
|---|---|
| Surface | Dynamic HTML overlay — modal, slide-over, or full-screen — mounted above Layer 0 without tearing down Inspinia chrome |
| Entry copy | "Compose Campaign" / "Launch Campaign" — same 9-step machine regardless of entry point |
| Persistence | Overlay dismisses after Step 9 authorize or explicit cancel; Layer 0 state preserved underneath |
| Host | Single `#wizard-overlay-host` + dynamic step loader |

Layer 1 **owns**: 9-step state machine, 3-Trail composer (World 2), accordion directory (World 1), EVNA live estimator, Accept/Deviate/Budget-cap intent logic, Step 9 authorize → Brain handshake.

### Trigger Contexts (Layer 0 → Overlay Seed)

| Trigger Surface | Layer 0 Location | Payload into Wizard |
|---|---|---|
| Microsegment tab | E59 primary ~50 tabs, bespoke library, AI ad-hoc lane | `microsegment_id[]`, filter JSON, compiled `rnc_regid[]` |
| Bespoke library | Saved segment definitions / office packs | `profile_definition_id`, office+district scope |
| Pipeline stage | Prospect pipeline board | `pipeline_stage`, stage cohort `rnc_regid[]` |
| Historical file slice | Donor search saved view | `saved_view_id`, date range, geography |
| Opponent delta | `race.shared_donor` gave-to-opponent / swing universes | `universe=opponent\|swing`, opponent profile id |

---

## PART III — THE REQUIRED PATH (v2 — THREE TAPS)

### Screen A — The Ask

"What do you want to do?"

- Conversational text input (large, single line, autofocus)
- Nine Marquee categories as suggestion chips below the input (Marquee survives as chips, not a gate)
- Candidate types or taps: "I need to raise $15k before the filing deadline"
- On submit → compose endpoint fires silently using full v1 machinery

**Chips (9 Marquee categories):**
1. Raise
2. Events
3. Message
4. Mobilize
5. Cultivate
6. Broadcast
7. Directives
8. My Campaigns
9. The Vault

### Screen B — The Recommendation Card

The Wizard composes the ENTIRE volley silently using the full v1 machinery (play selection, casting, artifact drafts per cannon, gear choice, gate pre-checks, Box Office forecast) and answers with **ONE CARD** in plain language:

```
┌──────────────────────────────────────────────────────────────┐
│  Campaign: [Generated title]                                  │
│                                                               │
│  WHO                                                          │
│  214 of your strongest supporters — mostly past donors       │
│  in your county who are warm on school issues right now.     │
│                                                               │
│  WHAT                                                         │
│  An email tonight, a text to the 182 we can text, and a     │
│  voicemail to the rest over 2 days.                          │
│                                                               │
│  COST / EXPECTED                                             │
│  $385 to send · likely to raise $8–12k                      │
│                                                               │
│  [Approve & Launch]  [Change something]  [Show me everything]│
│                                                               │
│  ▼ Why these people (top 3 why-lines)                        │
│  ▼ What they'll receive (artifact previews, real donor)      │
│  ▼ What's held back (gate summary)                           │
└──────────────────────────────────────────────────────────────┘
```

**Three primary actions:**
- **Approve & Launch** → goes to Screen C (Showtime)
- **Change something** → opens conversational edit: "make it smaller" / "not the voicemail" / "softer ask" → re-runs gates + Box Office → updates card in place
- **Show me everything** → drops into full v1 surfaces (Casting Call → Cannon Deck → Screening Room)

**Below the fold (collapsed by default):**
- "Why these people" — top 3 why-lines from Intent Engine why-vector
- "What they'll receive" — artifact previews with a real sampled donor (NEVER lorem ipsum)
- "What's held back" — gate summary (visibility doctrine intact, summarized not itemized)

**Honest-forecast doctrine:** ranges, never promises. "likely to raise $8–12k" not "$10,000."

### Screen C — Showtime (Single Approval Gate)

v1 §5.5 confirmation sheet:  
**full campaign preview → price → Deploy → Pay → Log**

One approval. Nothing external fires from any state but this.

On confirm: artifacts flip to approved, volley row written, gates run, fires schedule. Everything logs to `loop.*`.

### Post-Launch — The Playbill Card

One card, same register as Screen B:  
"3 of 5 sends out · $4,210 raised so far · on track."  
Tap to open full Playbill.

---

## PART IV — FULL V1 SURFACES (Progressive Disclosure / Staff Default)

These are reached via "Show me everything" from the card, or are the Tier A default. Nothing here is deleted — it's repositioned from required path to drill.

### The 9-Step State Machine

```
Step 1 — Goal          (Raise Money / Fill Event / Recruit Volunteers / Build Awareness / Drive Turnout)
Step 2 — Weapons       (Email / SMS / MMS / RVM / Phone Bank / Direct Mail / Social / Video / AI Video)
Step 3 — Microsegment  (which donors — by grade, geography, category)
Step 4 — Issue/Theme   (top ISPE heat scores for that candidate's district today)
Step 5 — Rendering     (Manual / AI Assist / Full AI)
Step 6 — Content       (The Screening Room — AI drafts, candidate directs)
Step 7 — Schedule      (Now / Scheduled / Waterfall across channels)
Step 8 — Compliance    (FEC, TCPA, CAN-SPAM, grade checks — auto)
Step 9 — Deploy        (Billing summary → Showtime → authorize)
```

State machine:  
`marquee_selected → casting (Act I) → screening (Step 6) → armed (Deck) → showtime_confirmed → live (Playbill) → wrapped (curtain call)`

Back-navigation allowed until `showtime_confirmed`. Post-showtime edits are Tier A change-orders only.

---

## PART V — SCREEN DESIGNS (FULL V1 SURFACES)

### SCREEN 1 — THE MARQUEE

Nine category cards covering every campaign Oz can compose:

| # | Category | Scope |
|---|---|---|
| 1 | **Raise** | Fundraising: donation asks, matching drives, deadline pushes, recurring/sustainer |
| 2 | **Events** | Town halls, house parties, rallies, VIP dinners, headliner events |
| 3 | **Message** | Persuasion & awareness: issue statements, rapid response, opponent contrast, endorsements |
| 4 | **Mobilize** | GOTV, volunteer recruitment, petition/survey drives, precinct organizing |
| 5 | **Cultivate** | Welcome series, thank-yous, birthday/holiday, upgrade ladders, election-lifetime sequences |
| 6 | **Broadcast** | TV/radio (E16), digital ads (E70), AI video (E45), social waves (E19) |
| 7 | **Directives** | Personal-touch queue: candidate directives (gun #14) + manager follow-ups (gun #15) |
| 8 | **My Campaigns** | Live/drafts/history, Box Office actuals vs forecast, logs |
| 9 | **The Vault** | Assets: photos, logos, scripts, templates, brand kit |

Selecting a category + goal seeds the play recommendation and opens the Casting Call.

---

### SCREEN 2 — THE CASTING CALL (Act I: Audience)

Three vertical zones on mobile, three columns on desktop:

**2.1 The Bill (Header)**  
Marquee pill (amber, "Now casting"), campaign title, act indicator ("Act I of II — choose your stars").

**2.2 Filter Row**  
Chips: grade tier, county/district, faction, heat tag, lapse window, + add-filter.  
- Chips are purple-tinted when active
- Multi-select is LAW
- Every chip change live-updates the eligible pool count and the Director's picks

**2.3 Casting Cards (Manual Layer)**

One card per donor:
```
┌────────────────────────────────────────────────┐
│  [AB]  Alice Briggs                     [A+88] │  ← headshot circle + grade badge (amber)
│  Insurance exec, hot on HB-114                  │  ← why line (Intent Engine why-vector)
│                                    Ask: $2,500  │  ← teal, from ask-ladder
│                               [ ] Cast          │  ← 44px touch target
└────────────────────────────────────────────────┘
```

**Gate state:** if a donor fails consent/fatigue pre-check, small amber shield icon + plain-language reason ("resting — asked 12 days ago"). They can be cast but the Deck will show which guns are suppressed for them. **Never silently droppable.**

Card border: **solid purple** when cast, hairline neutral when not.  
Swipe left (mobile) / hover kebab (desktop): view full profile (Tier A drill), exclude with reason.

**2.4 The Cast Tray (Sticky)**  
Ticket icon · "N cast in tonight's bill" · projected gifts (live sum of suggested asks). Persistent while scrolling.

**2.5 Director's Picks (Wizard Layer)**

Distinct panel, wand icon, "wizard layer" tag:
- sparkle icon · name · **reason line** (mandatory — co-giving graph, timing window, capacity gap; NO black-box segments)
- Cast button
- Dashed purple border until cast → animates into casting list when cast
- Toggle: "Let the wizard keep casting while I review" → picks stream in as intent shifts
- Empty state: "All picks reviewed — the wizard will bring more as intent shifts."

**Data contracts (§3.6):**  
Reads: `core.context_donor_360` (stub: `core.v_donor_full_context`) — grade, stage, heat, fatigue/consent snapshot, intent snapshot incl. why-vector + suggested ask.  
Writes: audience slice (frozen at Showtime), every exclude-with-reason, every Director's-pick accept/reject → `loop.*` (training signal).

---

### SCREEN 3 — THE SCREENING ROOM (Step 6 — Canonized 2026-07-06)

The candidate watches the premiere of his campaign before it ships.

#### Three-Zone Theater Layout

**Left Rail — The Candidate's Cut**  
The candidate's manual choices stacked as larger previews, one after another. Selecting any one recalls it to the center screen.

**Center — The Theater Screen**  
The larger movie screen showing the current-stage composition.  
Edit controls are **channel-specific slide-in views** — sliding in from the left, doing their job, retreating. Never cluttering the screen.

**Right Nav — The AI Production Panel**  
Per-stage AI production: best machine-learning results for the selected audience, generated under LP constraints.  
- Presented as thumbnails
- Candidate picks AI thumbnail → screens on center → edits with slide-in controls → Save
- Saving changes LP estimates → Box Office re-forecasts
- Saved piece joins the left rail (Candidate's Cut)

#### Center Stage — Realistic Previews

| Channel | Preview Form |
|---|---|
| Direct Mail / Printed Cards (E33) | Photoreal postcard mock, front/back, flippable 3D |
| SMS/MMS (E31) | Phone frame showing live message thread |
| Email (E30) | Inbox-accurate preview — light/dark, mobile/desktop |
| RVM / Calls (E17/E32) | Audio waveform + transcript player |
| Social (E19) | In-feed post mock |
| Candidate Directive (gun #14) | Donor brief + suggested call script |
| Manager Directive (gun #15) | Action card with deadline |

Previews merge fields from a **real sampled donor** in the locked audience. NEVER lorem ipsum.

#### AI Rendering Carousel

Brain generates 3–5 variants per channel. Candidate swipes with cinematic transitions:

**Accept · Edit · Regenerate · Delete**

- *Edit* drops into embedded composer (pdfme/Polotno for print, Waypoint email builder for E30) pre-loaded with that variant
- Every accept/reject logged to `loop.*` as training signal

#### The Box Office (Right Nav, Persistent Across Steps)

Live EVNA forecast re-computes as choices change:
- audience size · per-channel cost · projected response rate
- forecast revenue · net · confidence band · fatigue warnings
- **AI assist chat** ("make it warmer" / "cut cost 20%" / "what if I drop direct mail?") that mutates composition and re-forecasts in place

Honest-forecast doctrine: ranges, never promises.

**Bandit visibility (§4.1 — Tier B read-only):**  
When a channel carries 2+ accepted variants, AI Production panel shows live allocation split:  
"Variant A 60% · B 40% · auto-winner in 3 days"  
Editable weights are Tier A only.

**Reachability strip (per channel):**  
"182 of 200 reachable by SMS — 18 will receive the RVM path instead."  
Fallback branches visible before arming, not discovered after.

#### The Bottom Rail — Film Strip

Step progress + running thumbnail strip of every accepted piece across all channels. Candidate sees the whole multi-channel wave at a glance before Step 8 (compliance) and Step 9 (launch).

#### The Finale

After all stages: **full campaign preview → price → Deploy → Pay → Log**  
One approval. Everything logged to `loop.*`.

---

### SCREEN 4 — THE CANNON DECK (Act II: Arming)

**4.1 The Battery Board**  
16 cannon tiles, 4×4 grid (mobile) — icon + short name.

Three tile states:
- **Lit** (purple fill) — armed at this gear
- **Dark** (hairline) — not in this volley
- **Gated** (amber dashed) — armed but partially suppressed by consent/fatigue for some of the cast; tap shows count + reason

Roster: 16 cannons (4×4 board). Cannon roster + order comes from the play genome.

**The 16 Cannons:**

| # | Cannon | Ecosystem |
|---|---|---|
| 1 | Email | E30 |
| 2 | SMS | E31 |
| 3 | MMS | E31 |
| 4 | RVM | E17 |
| 5 | Phone Bank | E32 |
| 6 | Direct Mail | E33 |
| 7 | Social Media | E19 |
| 8 | AI Video | E45 |
| 9 | Broadcast Hub | E46 |
| 10 | TV/Radio | E16 |
| 11 | Digital Ads | E70 |
| 12 | Events | E34/E37 |
| 13 | P2P Outreach | E71 |
| 14 | Candidate Directive | Gun #14 |
| 15 | Manager Directive | Gun #15 |
| 16 | [Reserved] | — |

**4.2 The Gear Dial**  
Horizontal slider, 4 named stops:

| Gear | Name | Description |
|---|---|---|
| 1 | Whisper | Email-only; lowest cost; test audiences |
| 2 | Matinée | Email + SMS ± RVM; standard multi-touch |
| 3 | Première | Full multi-channel wave; most cannons lit |
| 4 | The 1812 Overture | All 16 guns; maximum reach and spend |

Moving the gear: re-lights the board AND re-forecasts Box Office in place.

**4.3 The Running Order**  
Firing timeline (vertical) — numbered fires with relative timing chips:
- "tonight" → "+2–4 h" → "morning" → "+24–48 h"
- Off-sequence clocks noted in the margin ("mail posts now / lands day 3–5")
- Generated from the volley plan; per-donor timing collapsed to modal schedule with "varies by donor" hint

**4.4 The Box Office** (persistent right nav / bottom sheet on mobile — same component as Screening Room)

**4.5 Showtime**  
Single full-width button, play icon.  
Tap → confirmation sheet: cast count, gear name, total price, the Finale sequence.  
On confirm: artifacts flip to approved, volley row written, gates run, fires schedule. Everything logs to `loop.*`.

---

### SCREEN 5 — THE PLAYBILL (Post-Launch Monitor)

Same theatrical register as the card. Answer to "how's it going?"

**Header:**  
Campaign title · gear badge · elapsed time · kill switch (Tier A permission-gated; Tier B shows "pause requests go to your manager" if silo config says so).

**The Running Order, Live:**  
§4.3 timeline with per-fire status chips:
- scheduled (gray) / fired (purple) / landed-engaged (teal) / bounced-fallback (amber)
- Tap a fire → per-donor breakdown (Tier A drill)

**Box Office, Actuals vs Forecast:**  
Projected vs realized side-by-side. Variance chip:
- Teal = favorable variance
- Red = unfavorable variance

This IS the Intent Engine variance ledger, candidate-readable.

**The Cast Board:**  
Casting cards reduced to status rows — RSVP'd (teal tick), engaged, resting, no-response — with cascade branch labels ("re-invite Thursday").

**Curtain Call:**  
When play's exit criteria wrap:
- Totals, top-performing variant
- One wizard suggestion for the next act (feeds Daily CTA)

---

## PART VI — THE SCREENING ROOM (PER-CANNON WIZARDS)

Every weapon-cannon ecosystem implements its own Screening Room, channel-branded but structurally identical:

1. **Main Curtained Screen** — center stage, curtain-reveal of final rendered munition as voter will receive it
2. **Edit buttons / controls** — channel-specific (print bleed/fold for E33, subject/preheader for E30, segment-length for E31, script/voice for E17/E32, crop/caption for E19) — each opens the channel's embedded composer
3. **AI rendering right-nav panel** — Brain's generated variants; candidate selects, edits, accepts → integrates into funnel sequence

Each cannon is a standalone product. A candidate may fire a single cannon without running the full Wizard. A single-cannon fire still passes consent/fatigue/compliance gates and feeds engagement back to the spine.

---

## PART VII — THE MOLECULAR EDITORS (Step 6, Per Weapon)

### E30 Email Molecular Editor

**Envelope controls:**
- Subject line + emoji picker + character counter (≤50 chars green, Gmail/iOS preview)
- Preheader text (max 140 chars)
- From name: dynamic "Dave Boliek for Auditor" (BroyhillGOP never appears)
- From email: verified sending domain only
- Reply-to, CC, BCC

**Body editor:**
- Waypoint `@usewaypoint/email-builder` embedded
- 9 block types: Image / Heading / Text / Button / Container / ColumnsContainer / Divider / Html / EmailLayout
- 6 pre-built BroyhillGOP branded templates (navy #062d47 + crimson #990000)
- Liquid merge tags: `{{donor_first_name}}`, `{{grade}}`, `{{ask_amount}}`, `{{candidate_name}}`
- Dynamic content blocks (SFMC-style): Block A for A++/A+ donors, Block B for B, Block C for C
- Connected Content: live API call at send time to inject current ask amount from LP
- Per-grade ask buttons: low/anchor/high clamped to FEC headroom

**Preview:**
- Preview as specific donor (enter cluster_id or name)
- Preview in Gmail / Apple Mail / Outlook / Mobile / Dark mode
- Spam score check

**Send intelligence:**
- Send time optimization per donor (delay up to 24 hours to hit peak open window)
- Smart sending frequency cap (configurable lookback window)
- Quiet hours by donor timezone

**A/B testing:**
- Up to 3 variants (subject line / from name / body / send time)
- Automatic winner at configurable confidence threshold

**Compliance (auto):**
- FEC disclaimer auto-injected: "Paid for by [Committee Name]"
- CAN-SPAM unsubscribe link required
- DKIM/SPF/DMARC validation indicator
- Suppression list check before send

---

### E31 SMS/MMS Molecular Editor

**Message composer:**
- 160-character counter with phone screen preview updating live
- MMS toggle — enables media upload (image, video, GIF, PDF)
- Carrier spec validator — blocks if file exceeds limits
- Merge tags: `{{first_name}}`, `{{candidate_name}}`, `{{ask_amount}}`, `{{short_link}}`

**Compliance:**
- 10DLC campaign registration status indicator
- Brand trust score display
- STOP keyword — auto-honored, platform-wide opt-out < 60 seconds
- Quiet hours — enforced by donor timezone (no SMS outside 9AM-8PM local)
- Carrier blacklist scrub before send
- TCPA compliance check

**Short link:**
- Auto-generated tracked short link per donor
- UTM parameters auto-appended
- Redirects to candidate WinRed/Anedot page (BroyhillGOP invisible)

---

### E32 Phone Bank Molecular Editor

**Script builder:**
- Branching script editor — adapts mid-conversation based on donor responses
- Script nodes: Opening / Objection Handler / Ask / Thank You / Callback / Refusal
- Dynamic variables: `{{donor_first_name}}`, `{{candidate_name}}`, `{{last_gift_amount}}`, `{{district}}`
- Talk track tips per node (coaching prompts visible to volunteer, not read aloud)
- Script preview as conversation flow diagram

**Dialing mode:**
- Preview / Power / Predictive / P2P (TCPA safe harbor for cell phones)

**Caller ID:**
- Dynamic local caller ID — auto-presents area code matching donor's phone (increases answer rate 4x)

**Compliance:**
- Political campaign DNC exemption configuration
- Calling hour enforcement by donor timezone
- Abandoned call rate monitoring
- Disclosure trigger on recording start

**PatchThru:**
- Transfer donor to candidate live while volunteer stays on line

---

### E17 RVM Molecular Editor

- Voice recording (upload WAV/MP3 or record in-browser)
- Script with merge tags
- Listen-through length recommendation from LP
- Quiet hours enforcement
- TCPA-compliant delivery timing

---

### E33 Direct Mail Molecular Editor

- pdfme v5.3.16 (open source, MIT) — print composer
- Bleed/fold controls for postcards, letters, trifolds
- Real-time print spec validator
- Per-grade personalization (ask amounts)
- FEC disclaimer auto-placement
- Proof PDF generation before send

---

## PART VIII — MATHEMATICAL SPEC (LP SOLVER)

### The EVNA Formula

The Brain's optimization objective:

```
MAXIMIZE: Σ [BG/NBD × Gamma-Gamma × P_channel_response × two_tower_match × ISPE_salience − CPDR × x_{i,j,t}]

SUBJECT TO:
  fatigue_cap[i]      — contact frequency per donor
  FEC_remaining[i]    — legal contribution limit hard cap
  capacity[j][t]      — 10DLC limits per channel
  opt_out[i][j] = 0   — hard constraint
  grade[i] ≠ 'D-'     — grade enforcement
  Σ cost ≤ budget      — campaign budget
```

LP solver lives at **port :8082** (`scripts/lp-wizard-solver.py`). Returns:
- Recommended weapons and record counts
- Optimal timing (email Tue 9AM, SMS +3 days, RVM +5 days)
- Ask amounts per grade tier
- Projected revenue with confidence bands
- Shadow prices and sensitivity analysis

**Channel costs (CPDR):**
- Email: $0.002 | SMS: $0.012 | RVM: $0.035 | Phone: $0.25 | Video: free

### LP results cache
`wizard.lp_recommendations` — cached 6 hours, debounced on every overlay change.

---

## PART IX — THE BRAIN ↔ WIZARD HANDSHAKE

### Division of Labor (Hard Contract)

**E68 Wizard Owns:**
- All 9-step UI state machine
- Reading `wizard.drafts` (auto-save per step)
- Writing `wizard.campaigns` (final campaign record)
- Calling LP solver at :8082
- `wizard_nodes` accordion directory navigation
- 3-trail composition panes (UI only)
- Invisible factory branding layer (candidate's name/email only)
- Compliance preflight display (showing E10 gate results)
- The deploy button (sends authorization to Brain; does NOT fire weapons directly)
- Writing `wizard.lp_recommendations` cache
- **READING** `brain.next_best_donor` (READ ONLY — NEVER write from Wizard)
- Reading `e30.templates`, `e30.sequences`, `e30.sender_identities`

**E20 Brain Owns:**
- `brain.wizard_sessions` (session management)
- GO/NO-GO scoring (threshold: score ≥ 70)
- Actual weapon firing (E30, E31, E17, etc.)
- **WRITING** `brain.next_best_donor` (Wizard never writes here)
- IFTTT rule evaluation (`ifttt.rules`)
- Post-deploy outcome collection
- Learning / model upgrades (silently improves future recommendations)
- E10 compliance gate (FEC, TCPA, CAN-SPAM)

### 5-Step Handshake Protocol

```
Step 1: Candidate opens Wizard
        → E68 asks E20 for recommended funnel
        → Brain returns LP-optimized funnel: cost + banded forecast

Step 2: Candidate accepts / deviates / caps budget
        → E68 sends chosen parameters to E20

Step 3: Brain forecasts chosen version (cost + banded return)
        → Brain runs E10 compliance preflight
        → Returns side-by-side: Brain recommendation vs. candidate choice

Step 4: Candidate approves
        → Brain GO/NO-GO gate (score ≥ 70 required)
        → Brain deploys through weapon APIs
        → Outcomes write back to wizard.campaign_performance

Step 5: Brain's learning silently upgrades next recommendation
```

### Accept / Deviate / Budget-cap Intent Controls

| Candidate Choice | Effect on Brain | Overlay Behavior |
|---|---|---|
| **Accept** | Brain deploys LP recommendation as-is | ROI panel locks to Brain bands; Step 9 shows side-by-side match |
| **Deviate** | Brain re-forecasts with candidate's changes | Side-by-side shows delta vs Brain recommendation; Brain may warn if below threshold |
| **Budget-cap** | Brain re-solves LP within new budget | Channel mix may shift; Brain re-yells optimal within cap |

### Step 9 → CRM Handshake

On Step 9 authorize (after Brain GO/NO-GO ≥70 and `wizard.campaigns` INSERT):

1. **Opportunity update** — advance `brain.prospect_pipeline.stage` (Captured → Asked); refresh `brain.next_best_donor` evna/p_give for campaign cohort
2. **Task creation** — stamp `next_action` / `next_action_at` on pipeline rows; parallel Monday task via Weaver relay (:8080)
3. **Gun fire** — `/create-from-wizard` per weapon runs independently; outcomes write to `brain.action_log`

Hetzner remains truth. D365 and Monday are workflow mirrors only.

---

## PART X — DATABASE SCHEMA (LIVE ON HETZNER)

### Wizard Schema (`wizard.*`)

**`wizard.campaigns`** — 10-step campaign object  
Key columns: `campaign_id`, `candidate_id`, `wizard_session_id` (FK → brain.wizard_sessions), `goal`, `weapons` (JSONB), `microsegment_ids` (JSONB), `issue_code`, `rendering_mode`, `per_grade_asks` (JSONB), `approved_by`, `status`, `channel_waterfall_json` (JSONB — E26 sequencing, added 2026-07-08)

**`wizard.drafts`** — auto-saved sessions per step  
`wizard_session_id → brain.wizard_sessions.session_id`

**`wizard.campaign_performance`** — post-deploy tracking + disaster memory  
`wizard_session_id → brain.wizard_sessions.session_id`

**`wizard.campaign_notes`** — candidate personal notes

**`wizard.lp_recommendations`** — LP solver results cached 6 hours

### Brain Schema (`brain.*`)

**`brain.wizard_sessions`** — session management (created when candidate opens Wizard)  
Key columns: `session_id`, `candidate_id`, `session_type`, `current_stage`, `max_stages`, `stage_data` (JSONB), `go_nogo_score`, `lp_recommendation_id`, `campaign_id`, `status`, `session_token`

**FK Contract:** `wizard.campaigns.wizard_session_id → brain.wizard_sessions.session_id`  
`wizard.drafts.wizard_session_id → brain.wizard_sessions.session_id`

### Missing Schema (R2 — Required Before Deck Build)

**`salesbook.*`** — play genome (play, genome, arms, audience_filter); gun roster + gear mapping  
**`loop.*`** — training signal spine; accept/reject events from Casting Call, Screening Room, Playbill

Both need dryrun migration authorization before Deck work begins.

---

## PART XI — DISASTER MEMORY

`wizard.campaign_performance` tracks every campaign result.

Before Step 2 (weapons) or Step 4 (issue), Wizard checks prior results for that combination.

**Disaster thresholds:**
- Email: unsub > 2%, open < 8%, spam complaint > 0.1%
- SMS: STOP rate > 3%, conversion < 0.5%
- RVM: listen-through < 50%
- Phone: answer rate < 10%, hostile rate > 5%

**Disaster warning shows:**
- What failed and why
- What worked instead (from LP analysis)
- Candidate's own note if they wrote one

**Portal Reset Button:**  
Restores configurable state to 2AM nightly snapshot. NEVER touches: `raw.ncboe_donations` (sacred/immutable), `core.donor_profile` (historical giving — immutable), deployed campaigns (already sent), FEC filing data (legal record).

---

## PART XII — THE BILATERAL NERVOUS SYSTEM (SPINE)

Every channel reads from the donor spine AND writes back after firing. No channel operates in isolation.

### What Every Weapon Reads Before Firing

```
core.donor_profile            — grade, giving history, capacity
lp.engagement_queue           — what was sent, opened, clicked (all 22 event types)
brain.triggers                — what's already queued (prevent duplicate)
wizard.campaign_performance   — what worked/failed for this donor
lp.chat_sessions              — prior chat transcript
ISPE heat tensor              — today's issue salience for their district
```

### What Each Weapon Writes Back After Firing

```
E30 Email  → email_sent, email_open, email_click, email_bounce, email_unsub
E31 SMS    → sms_sent, sms_reply, sms_stop, sms_click
E17 RVM    → rvm_sent, rvm_listened, rvm_listen_pct, rvm_callback
E32 Phone  → call_completed, call_disposition, answer_rate
E33 Mail   → mail_sent, mail_delivered (postal scan)
```

All feeds `wizard.campaign_performance` → disaster memory → next wizard session briefing.

---

## PART XIII — UX LAWS (Non-Negotiable, Day One)

From Braze's G2 sins + E68 doctrine:

1. **Multi-select everywhere** — filters, cast, variants
2. **Live preview everywhere** — no blind saves; previews merge a REAL sampled donor; never lorem ipsum
3. **Results on the same screen** — Box Office is persistent; Playbill needs no external BI
4. **Every AI proposal carries a visible reason** — every gate carries a plain-language explanation
5. **Honest ranges, never promises** — EVNA doctrine; refusal states shown, not hidden
6. **Nothing external fires from any state but approved** — one approval, at Showtime
7. **Degraded-data states are designed** (Law 7, R4 addition) — every AI-derived field has a designed empty state ("the wizard doesn't know this donor well yet"); NEVER blank, NEVER fabricated reason

---

## PART XIV — DESIGN LANGUAGE (TIER B)

**Typography:** 16px body minimum, 20px+ stage titles, sentence case, zero jargon on screen.

Tier B language examples:
| Tier A (staff) | Tier B (candidate) |
|---|---|
| "Intent score 0.83" | "likely to give this week" |
| "grade=A+88" | "A+ donor" |
| "EVNA $340" | "Expected to give about $340" |
| "fatigue_cap exceeded" | "resting — asked 12 days ago" |

**Color motifs:**
- **Amber** — marquee pill headers, grade badges, money/forecasts, Box Office
- **Purple (solid)** — cast/armed/live; lit cannon tiles
- **Teal** — telemetry, outcomes, favorable variance, suggested ask amounts
- **Red** — gate failures and unfavorable variance only
- **Dashed purple border** — proposed, not yet real (Director's picks, un-gated fires)

**Motion:** slide-in panels only — controls enter from left, do their job, retreat. Carousel transitions cinematic but < 400ms. No modals over modals. Reduced-motion respected.

**Layout:**
- Left rail: Candidate's Cut (accepted pieces)
- Center: Theater Screen (active composition)
- Right nav: AI Production panel + Box Office

**Tier A/Tier B split:** every Tier B screen has a Tier A twin (Inspinia clients.html/donors.html pattern) reachable via toggle. This spec designs Tier B; Tier A twins are dense-table Inspinia builds.

---

## PART XV — COMPONENT INVENTORY (TIER B)

| Component | Screens | Notes |
|---|---|---|
| Marquee pill header | All | Amber tint, letterspaced label |
| Suggestion chips | Screen A (v2) | 9 Marquee categories |
| Recommendation card | Screen B (v2) | WHO / WHAT / COST EXPECTED + 3 buttons |
| Casting card | Casting Call, Screening Room | Avatar + grade badge + why line + ask + checkbox; states: default/cast/gated/proposed |
| Filter chip row | Casting Call | Multi-select, live counts |
| Cast tray (sticky) | Casting Call, Cannon Deck | Ticket icon, live sums |
| Director's picks panel | Casting Call | Dashed-proposed rows, reason mandatory, stream-in |
| Variant carousel | Screening Room | Canonized (doctrine 2.2) + bandit split readout |
| Reachability strip | Screening Room, Cannon Deck | Per-channel counts + fallback line |
| Cannon tile | Cannon Deck, Playbill | Lit/dark/gated; icon + name; 44px touch |
| Gear dial | Cannon Deck | 4 named stops; re-lights board; re-forecasts |
| Firing timeline | Cannon Deck, Playbill | Numbered fires, timing chips, margin clocks; live status on Playbill |
| Box Office panel | Cannon Deck, Screening Room, Playbill | Honest ranges; adds actuals-vs-forecast mode on Playbill |
| Showtime button + Finale sheet | Cannon Deck | Preview → price → Deploy → Pay → Log |
| Status chips | Playbill | Scheduled/fired/engaged/fallback; variance teal/red |
| Slide-in editors | Screening Room | Channel-specific; slide left, job done, retreat |
| Degraded-data empty state | Casting Call, Screening Room | "The wizard doesn't know this donor well yet" |

---

## PART XVI — BUILD ORDER (PHASED — R1)

### Wave 1 — Buildable NOW (READY)

**Scope:** Casting Call + Box Office skeleton against `core.v_donor_full_context` + live fatigue/consent gates + grade/heat joins → Showtime writes `wizard.campaigns` + queues `email.send` events → E30 lane end-to-end at gear 1 (whisper = email-only).

**Target:** Harris gala runway (P-501) at gear 1 on 3 MUP silos.  
**Value:** A real, live, single-cannon Wizard beats a 16-cannon mockup.

**Live today:**
- `wizard.campaigns`, `wizard.drafts`, `wizard.campaign_performance`, `wizard.lp_recommendations` — schema deployed
- `brain.wizard_sessions` — schema deployed
- `channel_waterfall_json` column on `wizard.campaigns` — deployed 2026-07-08
- LP solver at :8082 — live
- E30 worker — LIVE (FIRE mode)
- E26 waterfall daemon — LIVE (OBSERVE mode)
- `campaign-wizard.html`, `campaign-wizard-step1.html`, `campaign-wizard-review.html` — committed
- `wizard-lp-bridge.js`, `wizard-briefing.js`, `wizard-context-reader.js`, `wizard-disaster.js` — committed, not yet wired
- `backend/python/api/campaign_wizard_api.py` (726 lines) — committed
- Fatigue/consent gate: `brain.channel_fatigue_ledger`, `e30.consent_ledger`/`suppression_list` — LIVE

**Wave 1 gaps (to close):**
- Steps 2–8 HTML (not built)
- Overlay host (`#wizard-overlay-host`) — currently hard page redirect, needs overlay mount
- Wire four JS bridges into wizard HTML pages
- `core.context_donor_360` view (stub: `core.v_donor_full_context` with grade/heat/fatigue joins)

### Wave 2 — After Genome Schema

**Prerequisite:** `salesbook.*` schema (dryrun migration → Ed authorization)  
**Scope:** Cannon Deck + gear dial + full play genome-driven roster + Screening Room channel deltas

### Wave 3 — After Fire/Volley Tables + Intent Serving

**Prerequisite:** `loop.*` schema + volley/fire tables + `brain.wizard_sessions` outbox events  
**Scope:** Playbill (needs fire rows + outbox status events) + Director's picks streaming (needs Intent serving endpoint)

### Enabling Migrations Needed (R2 — Ed Authorization Required)

1. **`salesbook.*`** — play, genome, arms tables (the gun roster and gear→gun mapping)
2. **`loop.*`** — training-signal spine (4 spec sections depend on it)

Both are dryrun migrations per two-phase protocol.

---

## PART XVII — OPEN QUESTIONS FOR ED

1. **Canonize new lexicon** from v1 §1: "The Casting Call," "casting card," "Director's picks," "the cast," "The Cannon Deck," gear names (whisper/matinée/première/the 1812 Overture), "The Playbill"
2. **Cannon roster count** — confirm **16** (R3): 4×4 board works at 16; reconcile against any "18" references in MUP
3. **Kill-switch default** — confirm: candidate role = request-pause (routes to staff), silo-configurable to direct kill
4. **Wave-1 scope** — confirm: Casting Call → Showtime → live email lane at gear 1 on 3 MUP silos, Harris gala (P-501) as pilot
5. **Authorize salesbook.* and loop.* dryrun migrations** when presented

---

## PART XVIII — CURRENT LIVE STATE SUMMARY

| Component | Location | Status |
|---|---|---|
| Wizard schema (5 tables) | Hetzner `wizard.*` | ✅ LIVE |
| `wizard.campaigns.channel_waterfall_json` | Hetzner | ✅ LIVE (2026-07-08) |
| `brain.wizard_sessions` | Hetzner `brain.*` | ✅ LIVE |
| LP solver | Hetzner :8082 | ✅ LIVE |
| Flask wizard API | `backend/python/api/campaign_wizard_api.py` | ✅ LIVE (726 lines) |
| Main wizard shell HTML | `frontend/candidate-portal/campaign-wizard.html` | ✅ LIVE (33KB) |
| Step 1 HTML | `frontend/candidate-portal/campaign-wizard-step1.html` | ✅ LIVE (48KB) |
| Step 9 review HTML | `frontend/candidate-portal/campaign-wizard-review.html` | ✅ LIVE (42KB) |
| Steps 2–8 HTML | — | ❌ NOT BUILT (P0) |
| JS bridges (4 files) | `frontend/wizard/scripts/` | ✅ COMMITTED — ❌ NOT WIRED |
| Overlay host | — | ❌ NOT BUILT (page redirect today) |
| E30 fire lane | Hetzner | ✅ LIVE (FIRE mode) |
| E26 waterfall daemon | Hetzner | ✅ LIVE (OBSERVE mode) |
| Fatigue/consent gates | `brain.channel_fatigue_ledger` | ✅ LIVE |
| `core.context_donor_360` view | — | ❌ NOT BUILT (stub: `v_donor_full_context`) |
| `loop.*` schema | — | ❌ NOT BUILT (Wave 3 gate) |
| `salesbook.*` schema | — | ❌ NOT BUILT (Wave 2 gate) |
| `wizard.campaigns` rows | — | 0 rows (Brain Worker blocked) |

---

*PRODUCED: E68_WIZARD_OF_OZ_COMPLETE_DESIGN_2026-07-09.md*  
*LIVES AT: /mnt/user-data/outputs/E68_WIZARD_OF_OZ_COMPLETE_DESIGN_2026-07-09.md*  
*TO PERSIST: Commit to `docs/canonical/E68_WIZARD_OF_OZ_COMPLETE_DESIGN_2026-07-09.md` via Cursor*
