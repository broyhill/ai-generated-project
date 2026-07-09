// E68 Wizard — shared Tier B types (canon Parts III, IX, XV)

export type Tier = 'B' | 'A'

/** A single dollar band — honest-forecast doctrine: ranges, never promises. */
export interface Range {
  low: number
  high: number
}

/** Gate state for a donor / channel (visibility doctrine — never silently dropped). */
export interface GateNote {
  ok: boolean
  reason: string // plain language, e.g. "resting — asked 12 days ago"
}

/** A real, sampled donor from the locked audience. NEVER lorem ipsum. */
export interface Donor {
  id: string
  first: string
  last: string
  initials: string
  grade: string // e.g. "A+"
  gradeScore: number // Tier A raw
  whyLine: string // Intent Engine why-vector, plain language
  ask: number // suggested ask from the ask-ladder
  county: string
  email: string
  phone: string
  totalGiving: number
  lastGaveDays: number
  gate: GateNote
}

/** The single Recommendation Card the Wizard answers with (Screen B). */
export interface RecommendationCard {
  campaignId: string
  title: string
  who: {
    count: number
    plain: string // "214 of your strongest supporters — mostly past donors…"
    sample: Donor // the real donor used in previews
    whyLines: string[] // top 3 why-lines
  }
  what: {
    plain: string // "An email tonight, a text to the 182 we can text, …"
    channels: ChannelPlan[]
  }
  cost: number
  expected: Range
  held: string[] // "what's held back" — gate summary, summarized not itemized
  confidence: number // 0..1 for the Box Office band meter
}

export interface ChannelPlan {
  cannon: string // cannon id, e.g. "E30"
  label: string // "Email"
  reachable: number
  total: number
  when: string // "tonight" / "+2–4 h" / "morning"
}

/** Post-launch Playbill summary card. */
export interface PlaybillState {
  title: string
  sentOut: number
  sentTotal: number
  raisedSoFar: number
  onTrack: boolean
  forecast: Range
}
