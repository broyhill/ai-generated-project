# E68 Wizard of Oz — Tier B web app

The candidate-facing composition & launch interface, built to the canonical
design (`docs/canonical/E68_WIZARD_OF_OZ_COMPLETE_DESIGN_2026-07-09.md` and
`…_ADDENDUM_A_16_CANNON_THEATERS_2026-07-09.md`).

**Stack:** Vite + React + TypeScript + Tailwind v4 + [`motion`](https://motion.dev).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
```

## What's built (Tier B required path — canon Part III + Addendum A)

| Screen | File | Canon |
|---|---|---|
| **The Ask** — conversational input + 9 Marquee chips | `src/screens/ScreenAsk.tsx` | Screen A |
| **The Recommendation Card** — WHO / WHAT / COST-EXPECTED, 3 actions, below-fold disclosures, conversational edit | `src/screens/ScreenCard.tsx` | Screen B |
| **Showtime** — single approval gate (Preview → Price → Deploy → Pay → Log) | `src/screens/ScreenShowtime.tsx` | Screen C / §5.5 |
| **The Playbill card** — post-launch, same register | `src/screens/PlaybillCard.tsx` | Part V |
| **Screening Room** — 3-zone theater chassis, cannon tabs, Candidate's Cut, AI Production panel, Box Office, film strip | `src/screens/screeningroom/` | Screen 3 + Addendum A |

The 16 cannons are registered in `src/screens/screeningroom/cannons.ts`. Email
("The Inbox") and SMS ("The Thread") have bespoke center-stage renderers
(`stages.tsx`); the rest render on the shared chassis and are ready for their
own renderers.

## Design language (canon Part XIV) — encoded in `src/index.css`

- **Amber** = money / forecast / marquee · **Purple** = cast / armed / live ·
  **Teal** = telemetry / outcomes / suggested ask · **Red** = gate failure only ·
  **Dashed purple** = proposed, not yet real.
- 16px body floor, serif stage titles, sentence case.
- Motion: curtain-reveal < 400ms, slide-ins, `prefers-reduced-motion` respected.
- Honest ranges never promises; previews merge a **real sampled donor**, never
  lorem ipsum; every AI proposal carries a visible reason; gates shown, not hidden.

## Backend integration points (STUBBED — wire on Hetzner)

All live logic is isolated in `src/lib/brain.ts`. It currently fakes the
Brain ↔ Wizard handshake (canon Part IX). Replace the function bodies with real calls:

- `composeVolley()` → E20 Brain recommended-funnel + LP solver `:8082`
  (`scripts/lp-wizard-solver.py`), cache to `wizard.lp_recommendations`.
- `editCard()` → re-forecast on Deviate / Budget-cap.
- `authorize()` → Step 9 → Brain GO/NO-GO (≥ 70) → gun fire → `brain.action_log`.

Mock donor spine lives in `src/lib/mock.ts` (replace with
`core.context_donor_360` / `core.v_donor_full_context`).

> This app composes and previews only. Nothing external fires from any state but
> Showtime authorize, and firing is the Brain's job — never the Wizard's.
