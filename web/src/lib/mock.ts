import type { Donor } from './types'

/*
  Mock spine. In production these come from the donor spine
  (core.context_donor_360 / core.v_donor_full_context) and the LP solver.
  Every preview here uses a REAL sampled donor — never lorem ipsum (canon UX Law 2).
*/

// The canonical sampled donor used across the addendum's theater previews.
export const SAMPLE_DONOR: Donor = {
  id: 'rnc-4471902',
  first: 'Alice',
  last: 'Briggs',
  initials: 'AB',
  grade: 'A+',
  gradeScore: 88,
  whyLine: 'Insurance exec, hot on HB-114',
  ask: 2500,
  county: 'Forsyth',
  email: 'alice@briggsfamily.net',
  phone: '(336) 555-0147',
  totalGiving: 12400,
  lastGaveDays: 34,
  gate: { ok: true, reason: 'Clear to contact on all channels' },
}

export const SUPPORTING_DONORS: Donor[] = [
  {
    id: 'rnc-3310771',
    first: 'Robert',
    last: 'Sykes',
    initials: 'RS',
    grade: 'A+',
    gradeScore: 91,
    whyLine: 'Land owner, gave $3,000 last NCWRC push',
    ask: 3000,
    county: 'Onslow',
    email: 'rsykes@sykesland.com',
    phone: '(910) 555-0147',
    totalGiving: 7400,
    lastGaveDays: 45,
    gate: { ok: true, reason: 'Clear to contact on all channels' },
  },
  {
    id: 'rnc-9920134',
    first: 'Marguerite',
    last: 'Devlin',
    initials: 'MD',
    grade: 'A',
    gradeScore: 82,
    whyLine: 'Retired judge, reliable deadline giver',
    ask: 1000,
    county: 'Forsyth',
    email: 'm.devlin@outlook.com',
    phone: '(336) 555-0188',
    totalGiving: 5600,
    lastGaveDays: 61,
    gate: { ok: true, reason: 'Clear to contact on all channels' },
  },
  {
    id: 'rnc-5540098',
    first: 'Curtis',
    last: 'Nolan',
    initials: 'CN',
    grade: 'B',
    gradeScore: 74,
    whyLine: 'Small-business owner, school-choice motivated',
    ask: 500,
    county: 'Guilford',
    email: 'curtis.nolan@nolanhvac.com',
    phone: '(336) 555-0202',
    totalGiving: 1850,
    lastGaveDays: 12,
    gate: { ok: false, reason: 'Resting — asked 12 days ago' },
  },
]

export const CANDIDATE = {
  name: 'Dave Boliek',
  office: 'for NC State Auditor',
  fromName: 'Dave Boliek for Auditor',
  fromEmail: 'dave@daveboliek.com',
  committee: 'Dave Boliek for Auditor',
}

// The nine Marquee categories survive as suggestion chips (canon Screen A).
export const MARQUEE_CHIPS = [
  'Raise',
  'Events',
  'Message',
  'Mobilize',
  'Cultivate',
  'Broadcast',
  'Directives',
  'My Campaigns',
  'The Vault',
] as const

// A few example prompts to seed the Ask.
export const ASK_SUGGESTIONS = [
  'I need to raise $15k before the filing deadline',
  'Fill the Forsyth County business roundtable on August 14',
  'Thank everyone who gave last month',
]
