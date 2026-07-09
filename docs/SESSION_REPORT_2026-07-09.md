# Session Report — 2026-07-09

**Project:** BroyhillGOP · E68 "Wizard of Oz"
**Branch:** `claude/studio-website-setup-gtmro4`
**Repo:** `broyhill/ai-generated-project`

---

## 1. What was requested

1. Set up a Claude Code environment for building studio-grade websites (plugin
   marketplace, three plugins, two MCP servers, Motion).
2. Build the E68 "Wizard of Oz" candidate interface from the uploaded canon
   design + the 16 Cannon Theaters addendum.
3. Produce a viewable link.
4. Deploy to Vercel.

---

## 2. What was delivered ✅

### Environment setup
| Step | Result |
|---|---|
| Add `anthropics/claude-plugins-official` marketplace | ✅ Added |
| Install `frontend-design` plugin | ✅ Installed & enabled |
| Install `claude-design` | ❌ **Does not exist** in the official marketplace |
| Install `impeccable` | ❌ **Does not exist** in the official marketplace |
| Add Magic MCP (`@21st-dev/magic`) | ✅ In `.mcp.json` — needs approval + 21st.dev API key |
| Add Higgsfield MCP (HTTP) | ✅ In `.mcp.json` — needs login/OAuth |
| `npm install motion` | ✅ Installed in the web app (v12) |

Project config committed: `.mcp.json`, `.claude/settings.json`.

### Canon persisted (`docs/canonical/`)
- `E68_WIZARD_OF_OZ_COMPLETE_DESIGN_2026-07-09.md`
- `E68_ADDENDUM_A_16_CANNON_THEATERS_2026-07-09.md`

### The app (`web/`) — Vite + React + TypeScript + Tailwind v4 + Motion
Tier B required path, faithful to the canon design language (Part XIV):

- **The Ask** → **Recommendation Card** (WHO / WHAT / COST-EXPECTED, 3 actions,
  below-fold disclosures, conversational edit) → **Showtime** (single approval
  gate) → **Playbill** card.
- **Screening Room** ("Show me everything"): three-zone theater chassis
  (Candidate's Cut rail · center stage · AI Production panel + Box Office ·
  film strip), 16-cannon roster, with Email ("The Inbox") and SMS ("The
  Thread") bespoke renderers; the other 14 render on the shared chassis.
- Design law honored: amber = money/forecast, purple = armed/live, teal =
  telemetry, red = gate-fail; honest ranges never promises; real sampled donor
  (Alice Briggs) in every preview, never lorem ipsum; every AI proposal carries
  a visible reason line; motion respects `prefers-reduced-motion`.

**Verified:** clean `tsc + vite` production build; full end-to-end flow driven
with Playwright across all five screens — **zero console errors**.

### Live preview (works right now)
Claude-hosted, self-contained single-file build:
**https://claude.ai/code/artifact/21329f1b-9f50-4ac5-981e-a1b332942865**

---

## 3. What's blocked / open

| Item | Status | What's needed |
|---|---|---|
| `claude-design`, `impeccable` plugins | Not installed | The real marketplace source (`owner/repo`) — they aren't in the Anthropic one |
| Magic + Higgsfield MCP | Configured, not active | Approve in an interactive `claude` session; Magic needs a 21st.dev API key, Higgsfield needs login |
| Vercel deploy (automated) | **Blocked** | The `deploy_to_vercel` MCP tool returns "requires approval" with no clear approval UI on the user side; could not complete from here |
| Backend (Brain, LP solver :8082, `wizard.*`) | Stubbed | Lives on Hetzner, unreachable from this sandbox. All stubs isolated in `web/src/lib/brain.ts` with `TODO(hetzner)` markers |

---

## 4. Open decision — hosting target (for tomorrow)

Presented four options; **user is deciding tomorrow.** Options on the table:

1. **Hetzner (own server)** — serve next to the Brain + LP solver. *Recommended:*
   the frontend belongs with its backend. Deliverable: production build + nginx
   config + deploy script; needs server access.
2. **Vercel** — `vercel.app` URL, auto-deploy on push. Needs either the 5-click
   dashboard import (Root Directory = `web`) or the connector approval to fix
   the blocked automated path.
3. **Netlify / Cloudflare Pages** — same idea, different provider.
4. **Keep the Claude preview link** — already live, no custom domain.

---

## 5. Recommended next steps

1. **Decide hosting** (above). If Hetzner, grant SSH or run the deploy script;
   if Vercel, do the dashboard import or approve the connector.
2. **Wire the backend**: replace the three functions in `web/src/lib/brain.ts`
   (`composeVolley`, `editCard`, `authorize`) with real calls to the E20 Brain,
   LP solver `:8082`, and Step 9 GO/NO-GO gun fire.
3. **Next build pass** (pick priority): bespoke renderers for more cannons
   (RVM, Direct Mail 3D flip, Phone Bank, AI Video); the World 1 accordion
   directory; the full Cannon Deck + gear dial; or the Tier A dense-table twins.
4. **Plugins/MCP**: supply the marketplace source for `claude-design` /
   `impeccable` if they're real; add the 21st.dev API key for Magic.

---

## 6. Where everything lives

- **Branch:** `claude/studio-website-setup-gtmro4` (all work pushed)
- **App:** `web/` — run with `cd web && npm install && npm run dev`
- **Single-file build:** `cd web && SINGLE=1 npm run build` → `dist/index.html`
- **Canon:** `docs/canonical/`
- **Live preview:** https://claude.ai/code/artifact/21329f1b-9f50-4ac5-981e-a1b332942865

---

## 7. Note on process

The deploy step was handled poorly — I committed to one automated Vercel path,
hit an unclear approval wall, and did not surface the full range of hosting
options up front. Going forward: present the platform choices at each decision
point instead of railroading a single path.
