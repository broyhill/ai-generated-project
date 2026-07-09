import type { RecommendationCard, PlaybillState, Range } from './types'
import { SAMPLE_DONOR, CANDIDATE } from './mock'

/*
  ────────────────────────────────────────────────────────────────────────
  STUBBED BRAIN ↔ WIZARD HANDSHAKE  (canon Part IX)
  ────────────────────────────────────────────────────────────────────────
  In production, E68 does NOT compose or fire. It:
    1. asks E20 Brain for the LP-optimized funnel (cost + banded forecast),
    2. lets the candidate Accept / Deviate / Budget-cap,
    3. sends the deploy authorization to the Brain (GO/NO-GO >= 70),
    4. the Brain fires the 16 guns and writes outcomes back.

  WIRE THESE ON HETZNER — replace the bodies below with real calls:
    • LP solver:        POST http://<host>:8082/solve        (scripts/lp-wizard-solver.py)
    • Brain compose:    E20 recommended-funnel endpoint       (brain.wizard_sessions)
    • Deploy authorize: Step 9 -> Brain GO/NO-GO -> gun fire  (brain.action_log)
    • LP cache:         wizard.lp_recommendations (6h, debounced)
  Everything here is a faithful shape, not a live forecast.
*/

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

// Honest-forecast doctrine: a band, never a point promise.
function band(center: number, spread = 0.22): Range {
  return {
    low: Math.round((center * (1 - spread)) / 500) * 500,
    high: Math.round((center * (1 + spread)) / 500) * 500,
  }
}

function parseGoal(ask: string): { intent: string; target: number } {
  const money = ask.match(/\$?\s?(\d[\d,]*)\s?k?/i)
  const hasK = /k\b/i.test(ask)
  let target = 15000
  if (money) {
    const n = Number(money[1].replace(/,/g, ''))
    target = hasK ? n * 1000 : n
  }
  const intent = /event|dinner|roundtable|rally|gala|town ?hall/i.test(ask)
    ? 'event'
    : /thank|welcome|cultivat/i.test(ask)
      ? 'cultivate'
      : 'raise'
  return { intent, target }
}

/** Step 1–3: the Wizard composes the entire volley silently and answers with ONE card. */
export async function composeVolley(ask: string): Promise<RecommendationCard> {
  await wait(1400) // the curtain — Brain composing behind it
  const { intent, target } = parseGoal(ask)

  const count = 214
  const smsReachable = 182

  const channels = [
    { cannon: 'E30', label: 'Email', reachable: count, total: count, when: 'tonight' },
    { cannon: 'E31', label: 'Text', reachable: smsReachable, total: count, when: '+2–4 h' },
    { cannon: 'E17', label: 'Voicemail', reachable: count - smsReachable, total: count, when: '+24–48 h' },
  ]

  const title =
    intent === 'event'
      ? 'Forsyth roundtable — fill the room'
      : intent === 'cultivate'
        ? 'Thank-you wave to last month’s givers'
        : 'Filing-deadline push'

  return {
    campaignId: 'draft-' + Math.random().toString(36).slice(2, 8),
    title,
    who: {
      count,
      plain:
        '214 of your strongest supporters — mostly past donors in your county who are warm on school issues right now.',
      sample: SAMPLE_DONOR,
      whyLines: [
        'Gave during your last two deadline pushes',
        'Warm on school issues in Forsyth this week',
        'In the giving window — last gift 30–60 days ago',
      ],
    },
    what: {
      plain:
        'An email tonight, a text to the 182 we can text, and a voicemail to the rest over 2 days.',
      channels,
    },
    cost: 385,
    expected: intent === 'raise' ? band(target * 0.66) : band(target * 0.5),
    held: [
      '18 donors are resting (asked in the last 12 days) — held from the text',
      '3 donors capped at their FEC limit — held from the ask',
    ],
    confidence: 0.72,
  }
}

/** "Change something" — conversational edit re-runs gates + Box Office in place. */
export async function editCard(
  card: RecommendationCard,
  instruction: string,
): Promise<RecommendationCard> {
  await wait(900)
  const next: RecommendationCard = structuredClone(card)
  const say = instruction.toLowerCase()

  if (/smaller|cut cost|cheaper|less/.test(say)) {
    next.what.channels = next.what.channels.filter((c) => c.cannon === 'E30')
    next.what.plain = 'Just the email tonight — leaner and cheaper.'
    next.cost = 120
    next.expected = band((card.expected.low + card.expected.high) / 2 * 0.7)
  } else if (/no voicemail|not the voicemail|drop.*voicemail|no rvm/.test(say)) {
    next.what.channels = next.what.channels.filter((c) => c.cannon !== 'E17')
    next.what.plain = 'An email tonight and a text to the 182 we can text.'
    next.cost = 300
  } else if (/softer|warmer|gentle/.test(say)) {
    next.title = card.title + ' (softer tone)'
    next.expected = band((card.expected.low + card.expected.high) / 2 * 0.92)
  } else if (/bigger|more|push harder|add/.test(say)) {
    next.what.plain = card.what.plain + ' Plus a phone-bank follow-up to your A+ list.'
    next.cost = card.cost + 220
    next.expected = band((card.expected.low + card.expected.high) / 2 * 1.18)
  }
  return next
}

/** Step 9 / Showtime authorize — the ONE place anything external fires (canon UX Law 6). */
export async function authorize(
  card: RecommendationCard,
): Promise<{ ok: boolean; score: number; playbill: PlaybillState }> {
  await wait(1600)
  // TODO(hetzner): POST authorize -> E20 GO/NO-GO gate (>= 70) -> gun fire.
  const score = 78 // stub GO score
  return {
    ok: score >= 70,
    score,
    playbill: {
      title: card.title,
      sentOut: 3,
      sentTotal: card.what.channels.length + 2,
      raisedSoFar: 4210,
      onTrack: true,
      forecast: card.expected,
    },
  }
}

export const CANDIDATE_META = CANDIDATE
