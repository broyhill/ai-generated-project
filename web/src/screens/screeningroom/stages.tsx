import { CANDIDATE, SAMPLE_DONOR } from '../../lib/mock'
import type { Cannon } from './cannons'

const d = SAMPLE_DONOR

/** THEATER 1 — E30 EMAIL · "The Inbox" (Addendum A). Inbox-accurate render on paper. */
function EmailStage() {
  return (
    <div className="curtain mx-auto max-w-md overflow-hidden rounded-xl bg-[var(--color-paper)] text-[var(--color-ink)] shadow-2xl">
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-2 text-sm">
        <span className="font-semibold">✉️ Gmail</span>
        <span className="text-black/40">🔍 ⚙</span>
      </div>
      <div className="space-y-0.5 border-b border-black/10 px-4 py-3 text-sm">
        <div>
          <span className="text-black/50">From: </span>
          {CANDIDATE.fromName} &lt;{CANDIDATE.fromEmail}&gt;
        </div>
        <div>
          <span className="text-black/50">To: </span>
          {d.first} {d.last} &lt;{d.email}&gt;
        </div>
        <div className="font-semibold">
          Subject: {d.first} — I need your help before Friday
        </div>
      </div>
      <div className="px-4 py-4 text-[15px] leading-relaxed">
        <div className="mb-3 rounded-md bg-[var(--color-brand-navy)] px-3 py-4 text-center font-semibold text-white">
          {CANDIDATE.name.toUpperCase()} · {CANDIDATE.office}
        </div>
        <p>Dear {d.first},</p>
        <p className="mt-2">
          You’ve stood with conservative values in {d.county} County for years — and I’m
          asking for your help before Friday’s filing deadline.
        </p>
        <div className="my-4 flex gap-2">
          <span className="rounded-md bg-[var(--color-brand-crimson)] px-4 py-2 text-sm font-bold text-white">
            DONATE ${d.ask.toLocaleString()}
          </span>
          <span className="rounded-md border border-black/20 px-4 py-2 text-sm font-semibold">
            Give another amount
          </span>
        </div>
        <p className="text-xs text-black/50">
          Paid for by {CANDIDATE.committee} · Unsubscribe · Privacy Policy
        </p>
      </div>
    </div>
  )
}

/** THEATER 2 — E31 SMS · "The Thread" (Addendum A). Phone frame + live counter. */
function SmsStage() {
  const body = `${d.first} — Dave here. I just sent a letter to NCWRC about the rules that affect ${d.county} County. Stand with me: bit.ly/x2k`
  const chars = body.length
  const tone = chars <= 150 ? 'var(--color-tele)' : chars <= 160 ? 'var(--color-marquee)' : 'var(--color-fault)'
  return (
    <div className="curtain mx-auto w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border-4 border-black/70 bg-[#0c0f16] shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 text-xs text-white/60">
          <span>●●● Carrier</span>
          <span>11:34 AM</span>
        </div>
        <div className="min-h-[260px] bg-[#0c0f16] px-3 py-4">
          <div className="mb-1 text-center text-[11px] text-white/40">{CANDIDATE.name}</div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-[#26324a] px-3 py-2 text-sm text-white">
            {body}
            <div className="mt-1 text-right text-[10px] text-white/40">✓✓</div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center text-sm font-semibold" style={{ color: tone }}>
        {chars} / 160
      </div>
    </div>
  )
}

/** Generic theater — the shared chassis renders a faithful placeholder for cannons
 *  not yet given a bespoke renderer, honoring the "no blank / no fabrication" law. */
function GenericStage({ cannon }: { cannon: Cannon }) {
  if (cannon.kind === 'reserved') {
    return (
      <div className="curtain grid min-h-[240px] place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-curtain)] text-center">
        <div>
          <div className="text-4xl">🎭</div>
          <p className="mt-3 text-[var(--color-mist)]">
            Coming soon — the next weapon in the arsenal.
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="curtain grid min-h-[240px] place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-house-2)] text-center">
      <div className="px-6">
        <div className="text-4xl">{cannon.icon}</div>
        <h3 className="mt-3 text-xl">
          {cannon.nickname}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-mist)]">
          {cannon.id} · {cannon.name} theater — chassis ready, bespoke renderer pending.
          Previews here will merge {d.first} {d.last}’s real record, never placeholder text.
        </p>
      </div>
    </div>
  )
}

export function CenterStage({ cannon }: { cannon: Cannon }) {
  if (cannon.kind === 'email') return <EmailStage />
  if (cannon.kind === 'sms') return <SmsStage />
  return <GenericStage cannon={cannon} />
}
