# E68 WIZARD OF OZ — ADDENDUM A
## THE 16 CANNON THEATERS
### Disney-Quality Per-Weapon Screening Room UI Design

**Date:** 2026-07-09 | **Author:** Claude (wizard)  
**Amends:** `E68_WIZARD_OF_OZ_COMPLETE_DESIGN_2026-07-09.md` Part V / Screen 3  
**Authority:** Screening Room Doctrine 2026-07-06 (Ed canonized 2026-07-06)  
**Status:** ADDENDUM — Canon pending Ed ratification

---

## THE GAP THIS FILLS

The complete design document (Part V, Screen 3 — The Screening Room) established the three-zone theater as doctrine. What it did NOT do: design each of the 16 cannon weapons as its own individual theater stage — with its own unique left-rail preview thumbnails, center-stage rendering, right-nav AI panel, Box Office forecast, and slide-in edit controls.

This addendum does that. 16 cannons. 16 theaters. Disney-quality.

---

## THE SHARED THEATER CHASSIS (All 16)

Every cannon theater runs the same structural chassis. The channel determines what renders inside each zone.

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [CANNON NAME]  ·  [CANDIDATE]  ·  [AUDIENCE SIZE]  ·  [GEAR BADGE]    │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  LEFT RAIL           CENTER STAGE              RIGHT NAV                 │
│  ────────────────    ──────────────────────    ──────────────────────── │
│                                                                           │
│  Candidate's Cut     ████████████████████      AI Production Panel       │
│  (accepted pieces,   ████████████████████      (Brain variants,          │
│  stacked small       ████████████████████      AI thumbnails,            │
│  thumbnails, live    ████████████████████      ranked by EVNA)           │
│  status chips)       ████████████████████                                │
│                      ████████████████████      Box Office                │
│  Tap any piece →     ████████████████████      ─────────────────         │
│  recalls it to       ████████████████████      Audience:  214           │
│  center              ████████████████████      Cost:      $385          │
│                      ████████████████████      Expected:  $8–12k        │
│  [Edit controls]  ←  [slide-in from left]      Confidence: ▓▓▓▓▓░       │
│                                                                           │
│              Accept · Edit · Regenerate · Delete                         │
└──────────────────────────────────────────────────────────────────────────┘
```

**Left Rail — The Candidate's Cut**
- Stacked small thumbnail cards of every piece the candidate has accepted so far in this cannon's sequence
- Each thumbnail shows: channel icon, variant label, status chip (draft/accepted/live)
- Tap any thumbnail → full-size recall to center stage
- Add button at bottom: "+ Add another [channel] piece"
- Empty state: "Nothing accepted yet — review the AI's options on the right"

**Center Stage — The Theater Screen**
- Full-size, photorealistic rendering of the munition as the voter/donor will receive it
- Real sampled donor's name/data merged in (NEVER lorem ipsum)
- Channel-specific rendering (see per-cannon specs below)
- Curtain-reveal animation on load (< 400ms, ease-out)
- Edit controls appear as channel-specific slide-in panels from the left

**Right Nav — AI Production Panel + Box Office**
- AI Production Panel (top): Brain-generated variant thumbnails, ranked by EVNA score
  - Each thumbnail: channel-specific mini-preview + predicted lift badge
  - Tap thumbnail → previews on center stage (not yet accepted)
  - Accept button on hover/tap: commits to Candidate's Cut
  - Regenerate: "Try again with different angle"
  - Reason line mandatory: "Best performing subject line format for A+ donors in Wake County" (no black-box)
- Box Office (bottom, persistent):
  - Audience size | Cost | Expected revenue range | Confidence band
  - Fatigue warnings ("14 donors in quiet window")
  - Re-forecasts on every accept/reject/edit

**Bottom Rail — Film Strip**
Step progress dots + running thumbnail strip across all cannons selected for this volley.

**Four Action Buttons (per variant, bottom of center stage):**
`[✓ Accept]  [✏ Edit]  [↺ Regenerate]  [✕ Delete]`

---

## THE 16 CANNON THEATERS

---

### THEATER 1 — E30 EMAIL
*"The Inbox"*

**Stage identity:** inbox simulation. The center stage IS a realistic email client rendering — Gmail on mobile or desktop, candidate's choice.

**Left Rail thumbnails:** mini email envelope icons with subject line preview truncated to 40 chars + open-rate badge from past sends of similar subject patterns.

**Center Stage — The Theater Screen:**
```
┌─────────────────────────────────────────────────────────┐
│  ☰  Gmail                                        [Q] [⚙]│
├─────────────────────────────────────────────────────────┤
│  From:  Dave Boliek for Auditor <dave@boliek.com>       │
│  To:    Alice Briggs <alice@briggsfamily.net>           │
│  Subject: Alice — I need your help before Friday        │
│  ────────────────────────────────────────────────────   │
│                                                         │
│  [CANDIDATE HEADER LOGO / BANNER IMAGE]                 │
│                                                         │
│  Dear Alice,                                            │
│                                                         │
│  [Body text rendered at reading size, candidate voice,  │
│   merge fields live — "Alice" / "$2,500" / "Forsyth    │
│   County" pulled from this donor's real record]         │
│                                                         │
│  [DONATE NOW — $2,500]  [Give Another Amount]          │
│                                                         │
│  Paid for by Dave Boliek for Auditor                   │
│  Unsubscribe | Privacy Policy                           │
└─────────────────────────────────────────────────────────┘
```

**Slide-in Edit Controls (from left):**
- Subject line + preheader (live preview updates center stage instantly)
- From name / from email
- Body: Waypoint WYSIWYG block editor OR raw HTML toggle
- Merge tag picker (donor_first_name, ask_amount, candidate_name, district)
- Dynamic content block selector (Block A / B / C by grade tier)
- Ask button editor: label, amount (clamped to FEC headroom), color
- Send time picker with STO suggestion badge

**AI Production Panel (right):**
- 3–5 variant thumbnails: Subject line variants + preview of opening paragraph
- Each carries: predicted open rate vs. this candidate's baseline, predicted click rate, EVNA lift
- One-tap to preview on center stage

**Box Office additions specific to E30:**
- Estimated open rate | Click rate | Unsubscribe risk flag
- FEC disclaimer status: ✅ PRESENT or ⚠ MISSING
- DKIM/SPF: ✅ VALIDATED

---

### THEATER 2 — E31 SMS
*"The Thread"*

**Stage identity:** phone frame showing an iMessage/SMS thread. Live character counter always visible.

**Center Stage:**
```
┌────────────────────────┐
│  ●●●  Sprint  11:34 AM │
│  ───────────────────── │
│                         │
│  ← Dave Boliek          │
│  ─────────────────      │
│  │ Alice — Dave here.   │
│  │ I just sent a letter │
│  │ to NCWRC about fox   │
│  │ hunting rules. Stand  │
│  │ with me: bit.ly/x2k  │
│  │                  ✓✓  │
│  ─────────────────      │
│        [Reply]          │
└────────────────────────┘
```
Character counter beneath: **142 / 160** (green → amber at 150 → red at 160+)
MMS toggle: shows image thumbnail attached above text in thread view.

**Slide-in Edit Controls:**
- Message composer (160-char live counter with multi-part SMS warning at 161+)
- MMS media uploader (image/GIF/video with carrier spec validator)
- Merge tags: first_name, candidate_name, ask_amount, short_link
- Short link generator (tracked per-donor URL)
- Opt-out footer toggle (STOP to opt-out — required placement)

**AI Production Panel:** 3–5 message variants with predicted click-through on the short link, ranked by EVNA.

---

### THEATER 3 — E31 MMS (VISUAL)
*"The Gallery"*

**Stage identity:** phone frame showing image-first message thread. Visual focus — the image IS the campaign.

**Center Stage:** Same phone frame but image occupies top 60% of the bubble. Below image: short caption text.

**Slide-in Edit Controls:** Image uploader, crop/resize tool (auto-fits to MMS carrier spec), caption editor, overlay text tool (for "DONATE NOW" callout on the image).

**AI Production Panel:** 3–5 image + caption combinations. Each thumbnail shows the visual at stamp size + predicted engagement vs. SMS-only for this audience.

---

### THEATER 4 — E17 RVM (RINGLESS VOICEMAIL)
*"The Voicemail"*

**Stage identity:** audio-first. The center stage IS a voicemail player — waveform + transcript.

**Center Stage:**
```
┌──────────────────────────────────────────────────────┐
│  📱  New Voicemail                                    │
│  From: Dave Boliek (919) 555-0100                    │
│  ─────────────────────────────────────────────────── │
│                                                       │
│  ▶  ████████████░░░░░░░░░░░░░░   0:23 / 0:45        │
│                                                       │
│  "Hi Alice, this is Dave Boliek. I'm running for     │
│   NC State Auditor and I'm calling because you've    │
│   been a strong supporter of conservative values     │
│   in Forsyth County.                                 │
│                                                       │
│   I need your help before Friday's deadline — any    │
│   amount makes a difference. Call me back at         │
│   919-555-0100 or visit DaveBoliek.com.              │
│                                                       │
│   Thank you, Alice. God bless."                      │
│                                                       │
│  [▶ Play]  [Transcript]  [Callback: 919-555-0100]   │
└──────────────────────────────────────────────────────┘
```

**Slide-in Edit Controls:**
- Script editor with word-by-word playback sync highlighting
- Voice selector: Candidate voice clone (ElevenLabs) | Staff voice | AI voice
- Audio tags: `[excited]` `[warm]` `[urgent]` `[pauses]` — bracket-inserted inline in script
- Speed, pitch, stability sliders (for cloned voice)
- IVR tree builder: "Press 1 to donate · Press 2 for event info · Press 3 to opt out"
- Merge field: `{{first_name}}`, `{{candidate_name}}`, `{{city}}`

**AI Production Panel:** 3–5 script variants. Each shows: listen-through rate prediction, callback rate prediction, EVNA lift vs. email for this audience segment.

**Box Office additions:** Estimated listen-through %, callback rate, cost per completed listen.

---

### THEATER 5 — E32 PHONE BANK
*"The Call Sheet"*

**Stage identity:** script card view — what the volunteer sees when a call connects. NOT an inbox. NOT audio. A structured call interface.

**Center Stage:**
```
┌──────────────────────────────────────────────────────┐
│  CALLING: Alice Briggs  ·  (910) 555-0147            │
│  Grade: A+ · $7,400 total · Last gave: 34 days ago   │
│  ─────────────────────────────────────────────────── │
│                                                       │
│  OPENING (say this):                                  │
│  "Hi, may I speak with Alice? ... Hi Alice, I'm      │
│   [volunteer name] calling on behalf of Dave Boliek  │
│   for Auditor — do you have a quick minute?"         │
│                                                       │
│  If YES → continue  |  If NO → go to Callback node   │
│                                                       │
│  THE ASK:                                             │
│  "Dave is making his final push before the filing    │
│   deadline. Would you consider a gift of $2,500     │
│   today to help us close strong?"                    │
│                                                       │
│  OBJECTION: "I need to think about it"               │
│  → "Of course — what questions can I answer? ..."    │
│                                                       │
│  [YES → Thank You node]  [NO → Soft close]           │
│  [CALLBACK]  [HOSTILE]  [WRONG NUMBER]  [VM]        │
└──────────────────────────────────────────────────────┘
```

**Slide-in Edit Controls:**
- Script node editor (branching tree view — each node editable inline)
- Talk track tip editor (coaching prompt per node — shown to volunteer, not read)
- Dynamic variable editor: `{{first_name}}`, `{{last_gift_amount}}`, `{{ask_amount}}`
- Dialing mode selector: Preview / Power / Predictive / P2P
- Caller ID: dynamic local match toggle + callback number

**AI Production Panel:** 3–5 script opening variants. Each shows: predicted answer rate, predicted ask-yes rate, EVNA lift for this caller–donor pairing.

**Box Office additions:** Predicted answer rate, calls-per-hour at selected dialing mode, cost per completed ask.

---

### THEATER 6 — E33 DIRECT MAIL
*"The Print Studio"*

**Stage identity:** 3D postcard/letter studio. Center stage IS a photorealistic, flippable postcard or letter mock. The candidate can see front, back, fold lines, bleed marks.

**Center Stage (postcard mode):**
```
┌────────────────────────────────────────────┐
│                                            │
│   ╔══════════════════════════════════╗    │
│   ║  [CANDIDATE PHOTO — FULL BLEED]  ║    │
│   ║                                  ║    │
│   ║  DAVE BOLIEK                     ║    │
│   ║  For NC State Auditor            ║    │
│   ║                                  ║    │
│   ║  "Protecting Your Tax Dollars"   ║    │
│   ║                                  ║    │
│   ║  DaveBoliek.com  |  [QR CODE]   ║    │
│   ╚══════════════════════════════════╝    │
│            [FRONT]    [BACK ↻]            │
└────────────────────────────────────────────┘
```

Tap "BACK ↻" → smooth 3D flip animation reveals back:
- Personalized ask text with `{{first_name}}`, `{{ask_amount}}`
- Return address, indicia (postage indicator)
- FEC disclaimer block
- WinRed QR code + vanity URL

**Slide-in Edit Controls:**
- pdfme v5.3.16 embedded composer (full drag-and-drop zones)
- Bleed/safe-area guides toggle
- Image uploader with auto-crop to bleed spec
- Text editor per zone: font, size, color (brand-locked: navy #062d47 + crimson #990000)
- Ask amount editor (from LP per-grade recommendation)
- QR code target URL editor
- Paper stock selector: Gloss / Matte / Premium Matte
- Format selector: 4×6 / 6×9 / 6×11 postcard · Letter · Trifold self-mailer

**AI Production Panel:** 3–5 design variants (front layout only — back is data-driven). Each shows: predicted response rate from direct mail performance history for this audience, estimated delivery date range.

**Box Office additions:** Print cost per piece, postage class (First Class / Marketing Mail), estimated delivery window (days), expected response rate, expected donation per piece.

---

### THEATER 7 — E19 SOCIAL MEDIA
*"The Feed"*

**Stage identity:** in-feed social post preview. Platform tabs let the candidate switch between Facebook / Instagram / X / LinkedIn. Each renders the same content in that platform's visual style.

**Center Stage (Facebook tab active):**
```
┌─────────────────────────────────────────────────────┐
│  [👤] Dave Boliek for Auditor                       │
│       Sponsored · 🌐                               │
│  ────────────────────────────────────────────────── │
│                                                     │
│  Today I sent a letter to NCWRC demanding           │
│  a review of the fox hunting regulation changes.   │
│  Onslow County deserves better.                     │
│                                                     │
│  Stand with me → [link]                             │
│                                                     │
│  [CAMPAIGN IMAGE / VIDEO THUMBNAIL]                 │
│                                                     │
│  ─────────────────────────────────────────────────  │
│  👍 Like   💬 Comment   ↗ Share                    │
└─────────────────────────────────────────────────────┘
```

Platform tabs: [Facebook] [Instagram] [X/Twitter] [LinkedIn]
Each tab re-renders with that platform's visual chrome and format rules.

**Slide-in Edit Controls:**
- Caption editor with per-platform character counter (Facebook: 63k / X: 280 / LinkedIn: 3k / Instagram: 2.2k)
- Hashtag tool: auto-suggest based on issue code + location
- Media uploader: image / video / carousel / document (LinkedIn)
- Instagram-specific: Story vs. Feed vs. Reel toggle; first comment scheduling
- Boost toggle: convert organic post to paid dark ad (audience targeting reveals)
- AI Voice Match indicator: "This draft matches candidate's voice profile at 94%"

**AI Production Panel:** 3–5 caption variants per platform (platform shown in tab follows selection). Predicted engagement rate and EVNA lift shown on each.

---

### THEATER 8 — E45 AI VIDEO
*"The Studio"*

**Stage identity:** video player with candidate avatar on screen. The center stage IS a video player — play button, timeline scrubber, the full experience.

**Center Stage:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   [CANDIDATE AVATAR — talking head, lip-synced      │
│    to generated script, photorealistic]             │
│                                                     │
│   "Alice — I'm calling on you personally            │
│    because what NCWRC did to fox hunters            │
│    in Onslow County was wrong..."                   │
│                                                     │
│   [LOWER THIRD: Dave Boliek | Candidate, NC Aud.]  │
│   [CHYRON: Paid for by Dave Boliek for Auditor]    │
│                                                     │
│  ▶  ───────────────────────────────   0:34 / 1:12  │
│  [CC]  [Quality ▾]  [⛶ Full Screen]               │
└─────────────────────────────────────────────────────┘
```

**Slide-in Edit Controls:**
- Script editor with emotional tone tags: `[warm]` `[urgent]` `[grateful]` `[firm]`
- Avatar selector: Candidate avatar / Surrogate avatar / Neutral presenter
- Background scene: Office / American flag / Outdoor / Solid color
- Lower third editor: name, title, party indicator
- FEC disclaimer overlay: auto-placement, font size, duration (minimum 4s per FCC)
- Closed captions: auto-generated, editable transcript sync
- Video length control: 15s / 30s / 60s / 2 min (HeyGen Enterprise)
- Export format: MP4 / WebM / ProRes (for broadcast trafficking)

**AI Production Panel:** 3–5 script variants with opening line previewed. HeyGen generates thumbnail still of each variant. Predicted view-through rate + EVNA lift.

**Box Office additions:** Render time estimate, per-video cost (GPU), predicted completion rate, estimated donation conversions from video traffic.

---

### THEATER 9 — E46 BROADCAST HUB (Digital Ads)
*"The Screening Room"*

**Stage identity:** digital ad preview. Toggle between placements: Facebook Feed / Instagram Stories / YouTube Pre-roll / Google Display.

**Center Stage (YouTube Pre-roll mode):**
```
┌─────────────────────────────────────────────────────┐
│  YouTube                                            │
│  ─────────────────────────────────────────────────  │
│  [AD — 30 seconds · Skip in 5s]                    │
│                                                     │
│  [CAMPAIGN VIDEO / IMAGE — full bleed]             │
│                                                     │
│  Dave Boliek for NC Auditor                         │
│  DaveBoliek.com                                     │
│                                                     │
│  ▶  ──────────────────────  0:08 / 0:30            │
└─────────────────────────────────────────────────────┘
```

Placement tabs: [Facebook Feed] [Instagram Story] [YouTube Pre-roll] [Google Display]

**Slide-in Edit Controls:**
- Ad copy: headline, description, CTA button label
- Creative uploader: image (1080×1080 / 1080×1920) or video (up to 60s)
- Audience targeting display (read from LP-selected segment — not editable here; edit in Casting Call)
- Bidding strategy: Max reach / Max conversions / Target CPA
- Daily budget cap

**AI Production Panel:** 3–5 ad creative variants. Predicted CTR and EVNA donation lift per variant.

---

### THEATER 10 — E16 TV / RADIO
*"The Broadcast Booth"*

**Stage identity:** TV set or radio studio mock. Two sub-theaters: TV (video) and Radio (audio-only).

**Center Stage — TV mode:**
```
┌─────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────┐   │
│  │  [30-SECOND TV SPOT — broadcast frame]       │   │
│  │                                              │   │
│  │  [B-roll: Forsyth County courthouse]         │   │
│  │                                              │   │
│  │  VO: "North Carolinians deserve an auditor  │   │
│  │  who puts taxpayers first..."                │   │
│  │                                              │   │
│  │  [Candidate on screen: direct-to-camera]    │   │
│  │  "I'm Dave Boliek, and I approved this      │   │
│  │   message."                                  │   │
│  │                                              │   │
│  │  [SUPER: Paid for by Dave Boliek for Aud.]  │   │
│  └─────────────────────────────────────────────┘   │
│  ▶  ─────────────────────────  0:22 / 0:30         │
│  FCC: ✅ Disclaimer present · ✅ Duration ≥ 4s      │
└─────────────────────────────────────────────────────┘
```

**Center Stage — Radio mode:**  
Audio waveform player, transcript visible below, EQ/loudness indicator.

**Slide-in Edit Controls (TV):**
- Script + storyboard editor (side by side): timecode-locked text per scene
- B-roll uploader with clip trimmer
- Lower third editor
- Audio mix: VO level, music bed level, ducking toggle
- FCC disclaimer: position (beginning/end), duration slider (≥ 4s required), font size (≥ 4% screen height)
- WideOrbit traffic order builder: station selector, daypart, dates, ISCI code assignment
- Export: MP4 (digital), ProRes 422 (broadcast delivery)

**Slide-in Edit Controls (Radio):**
- Descript-powered script editor with Overdub (voice clone correction)
- ElevenLabs voice parameter sliders (stability, pitch, speed)
- Music bed uploader with auto-duck toggle
- LUFS normalization target selector (−23 LUFS broadcast / −16 LUFS streaming)
- Station delivery: WideOrbit upload, direct station FTP, or MP3 export

**AI Production Panel:** 3–5 script variants with audio preview snippet. Predicted recall rate + EVNA for TV/radio-active audience.

---

### THEATER 11 — E17 RVM / PHONE BANK COMBINED — see Theaters 4 & 5

*(E17 and E32 are separate cannons with separate theaters as designed above.)*

---

### THEATER 11 — E34 EVENTS (Community Events)
*"The Marquee Board"*

**Stage identity:** event invitation / RSVP page preview. What the invitee sees when they receive the invite.

**Center Stage (email invite mode):**
```
┌─────────────────────────────────────────────────────┐
│  [EVENT HEADER IMAGE — candidate + venue]           │
│                                                     │
│  DAVE BOLIEK FOR AUDITOR                           │
│  ─────────────────────────────────────────────────  │
│  Forsyth County Business Leaders Roundtable         │
│                                                     │
│  📅 Thursday, August 14 · 6:30 PM                  │
│  📍 Kimpton Cardinal Hotel, Winston-Salem           │
│  💵 Suggested: $500 · Sponsor: $2,500              │
│                                                     │
│  [RSVP NOW]    [Learn More]                        │
│                                                     │
│  Paid for by Dave Boliek for Auditor                │
└─────────────────────────────────────────────────────┘
```

Toggle views: Email invite / SMS invite / Event landing page / Check-in kiosk

**Slide-in Edit Controls:**
- Event name, date/time, venue, virtual URL
- Ticket tiers: name, price, quantity (FEC fundraiser trigger auto-flags compliance)
- Suggested donation amounts (3 tiers + "other amount")
- Agenda builder: time + agenda item rows
- Speaker list: name, title, photo
- RSVP deadline + waitlist toggle
- Reminder schedule: 7 days / 1 day / 2 hours before
- WinRed/Anedot link injection (co-admin ticket processing)

**AI Production Panel:** 3–5 subject line / invite copy variants for the email blast. Predicted RSVP rate + estimated revenue per attendee.

---

### THEATER 12 — E37 EVENTS ENTERPRISE (VIP / Headliner)
*"The Gala Curtain"*

**Stage identity:** premium event experience — the VIP dinner, headliner fundraiser, Harris Gala aesthetic. Richer than E34.

**Center Stage:** Printed formal invitation preview (letterpress / engraved card style) OR digital luxury invite with motion header.

```
┌─────────────────────────────────────────────────────┐
│         ╔═══════════════════════════════╗           │
│         ║   J. Edgar Broyhill II        ║           │
│         ║   requests the pleasure of    ║           │
│         ║   your company at             ║           │
│         ║                               ║           │
│         ║   An Evening in Support of    ║           │
│         ║   MARK HARRIS                 ║           │
│         ║   for U.S. Congress           ║           │
│         ║                               ║           │
│         ║   Saturday, October 17, 2026  ║           │
│         ║   Black tie suggested         ║           │
│         ║   $5,000 per person           ║           │
│         ╚═══════════════════════════════╝           │
└─────────────────────────────────────────────────────┘
```

**Slide-in Edit Controls:**
- Invitation text editor (formal register — AI voice match tuned to formal)
- Ticket tier builder: VIP reception / General dinner / Sponsor table (10)
- Guest management: RSVP tracking, seating chart link, dietary notes
- Finance committee member list (who's co-hosting — FEC disclosure)
- Cvent integration: large event registration flow
- Speaker brief builder: VIP guest briefing card per attendee with suggested talking points

**AI Production Panel:** Invitation copy variants. Predicted attendance at price point based on comparable events in the BGOP network.

---

### THEATER 13 — E19 SOCIAL (ADVOCACY / P2P SOCIAL)
*"The Podium"* *(Note: distinct from Theater 7 organic social — this is volunteer-driven P2P)*

**Stage identity:** volunteer-facing share card. What the volunteer sends from their personal social account or via P2P texting to their own network.

**Center Stage:** Preview of a Facebook/text share from volunteer's persona, NOT the candidate's official page. "My friend Dave Boliek is running for Auditor and I'm proud to support him — here's why..."

**Slide-in Edit Controls:**
- Volunteer message template editor (volunteer-voice, first person, NOT campaign official voice)
- Shareable image card builder (Canva-style: headline + photo + URL)
- P2P SMS template for volunteer text blast
- Opt-in required disclosure for P2P texting

---

### THEATER 14 — GUN #14 — CANDIDATE DIRECTIVE
*"The Briefing Room"*

**Stage identity:** the candidate's personal action card. This is a directive TO the candidate — what they need to DO personally.

**Center Stage:**
```
┌─────────────────────────────────────────────────────┐
│  🎯 PERSONAL ACTION REQUIRED                        │
│  ─────────────────────────────────────────────────  │
│  CALL: Robert Sykes  ·  (910) 555-0147             │
│  Your 3rd largest donor  ·  $7,400 total giving     │
│  Last gave: 45 days ago  ·  Grade: A+               │
│                                                     │
│  WHY NOW:                                           │
│  • ISPE score for School Choice hit 91 in Onslow   │
│  • Robert gave $3,000 last time we called on this  │
│  • FEC deadline in 6 days                          │
│                                                     │
│  TALKING POINTS:                                   │
│  1. "Robert, I sent a letter to NCWRC today..."    │
│  2. "Your land access was specifically in the      │
│     letter..."                                      │
│  3. Ask: $3,000 ("Would you be able to match your │
│     last gift?")                                    │
│                                                     │
│  [✓ I Called]  [📅 Schedule Callback]  [Skip]     │
└─────────────────────────────────────────────────────┘
```

**Slide-in Edit Controls:**
- Talking points editor (candidate can annotate before making the call)
- Ask amount editor (LP default shown; candidate can override)
- Note field: "add context before calling"
- Outcome log: Yes / No / Callback / Hostile / VM — drives `loop.*` update

**AI Production Panel:** Brain's ranked alternative donors if this one is unavailable + alternative ask strategy.

**Box Office:** Predicted probability of gift at ask amount, EVNA for personal call vs. email for this donor.

---

### THEATER 15 — GUN #15 — MANAGER DIRECTIVE
*"The Task Board"*

**Stage identity:** the campaign manager's action queue. Same structure as Theater 14 but aimed at staff.

**Center Stage:** Looks like a task card (Trello/Monday aesthetic) with donor brief, assigned cannon, deadline, and outcome logging.

```
┌─────────────────────────────────────────────────────┐
│  📋 STAFF ACTION ITEM                               │
│  Assigned to: Campaign Manager                      │
│  Due: Today, 5:00 PM                               │
│  ─────────────────────────────────────────────────  │
│  ACTION: Email Alice Briggs a personalized ask     │
│  Cannon: E30 Email (personal from candidate)       │
│                                                     │
│  DONOR BRIEF:                                       │
│  Alice Briggs · A+ · $12,400 total · Forsyth       │
│  • Fox hunting property owner (340 acres)           │
│  • Hot on NCWRC issue (ISPE: 89)                   │
│  • Last contact: 34 days ago (in window)           │
│                                                     │
│  DRAFT EMAIL: [attached by Brain — ready to edit]  │
│                                                     │
│  [✓ Done]  [✏ Edit & Send]  [📅 Reschedule]       │
└─────────────────────────────────────────────────────┘
```

**Slide-in Edit Controls:**
- Draft editor (loads Brain-composed email, fully editable)
- Reassign to: different staff member
- Due date/time adjustment
- Monday.com sync toggle (creates linked task in Monday board)

---

### THEATER 16 — SLOT RESERVED
*"The Curtain"*

Placeholder theater. Renders as a dark stage with drawn curtain and a single line:  
*"Coming soon — the next weapon in the arsenal."*

No edit controls. No AI panel. Box Office shows: "— / — / —"

---

## THE MASTER THEATER (E68 WIZARD STEP 6)

When the full Wizard is running a multi-cannon volley, the master Screening Room orchestrates all active cannon theaters in sequence — or in a **split-view** where the candidate can see two theaters side by side:

```
┌─────────────────────────────────────────────────────────────────┐
│  STEP 6: SCREENING ROOM · Volley: 3 cannons armed               │
│  [◀ Email]  [SMS ●]  [Direct Mail]                              │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [Per-cannon theater renders in the center based on tab]        │
│                                                                  │
│  Bottom film strip:                                              │
│  [📧 Email v2] ✓  →  [💬 SMS v1] ✓  →  [✉ Mail v1] ⏳         │
│                                                                  │
│  Box Office (right nav, persistent):                            │
│  TOTAL: 214 audience  ·  $385 cost  ·  $8–12k expected         │
└─────────────────────────────────────────────────────────────────┘
```

The candidate walks through each cannon's theater in sequence. The film strip shows their progress. All three theaters must reach "Accept" state before Showtime becomes available.

---

## HOMEPAGE INTEGRATION (PER-ECOSYSTEM)

Every cannon ecosystem's **homepage / dashboard** inside the Inspinia admin shell carries a permanent **Theater Entry Point** — a tile or card that launches that cannon's Screening Room directly, without running the full 9-step Wizard.

**Homepage tile structure (per cannon):**
```
┌─────────────────────────────────────┐
│  📧  EMAIL CAMPAIGN                 │
│  E30 · 2,847 sends last 30 days     │
│                                     │
│  Last campaign: "Filing deadline"   │
│  Open: 34%  Click: 8.2%  Rev: $12k │
│                                     │
│  [🎬 Compose New Campaign]         │
│  [▶ View Last Campaign]             │
│  [📊 Analytics]                     │
└─────────────────────────────────────┘
```

"Compose New Campaign" → launches that cannon's Screening Room theater directly (single-cannon fire flow). This is the standalone product path — the candidate or staff fires one weapon without running the full Wizard.

---

## DESIGN STANDARDS (ALL 16 THEATERS)

**Shared visual rules:**
- Curtain-reveal animation on center stage load: < 400ms, ease-out
- All previews use a REAL sampled donor from the locked audience
- Slide-in editors: enter from left, < 300ms, ease-in-out; retreat on save or dismiss
- No modals over modals — one slide-in at a time
- Reduced motion respected (CSS prefers-reduced-motion)
- Touch targets: 44px minimum for all interactive elements
- Color: amber = money/forecast, purple = accepted/armed, teal = outcomes/favorable, red = gate failure only

**Tier split (every theater):**
- Tier B (candidate): large type (16px+ body), plain language ("likely to give $8–12k"), simplified controls visible by default
- Tier A (staff): toggle reveals dense table rows, raw scores, provider API status, full variable names
- Toggle always available in top-right of theater; one tap; state remembered per session

**Degraded-data states (Law 7, R4):**
- Why-line empty state: "The wizard doesn't know this donor's motivation well yet — more engagement will improve this"
- EVNA empty state: "Forecast available after first send — using segment average for now"
- No blank cells; no fabricated data

---

*PRODUCED: E68_ADDENDUM_A_16_CANNON_THEATERS_2026-07-09.md*  
*LIVES AT: /mnt/user-data/outputs/E68_ADDENDUM_A_16_CANNON_THEATERS_2026-07-09.md*  
*TO PERSIST: Commit to `docs/canonical/E68_ADDENDUM_A_16_CANNON_THEATERS_2026-07-09.md` via Cursor*  
*PARENT DOC: `E68_WIZARD_OF_OZ_COMPLETE_DESIGN_2026-07-09.md`*
