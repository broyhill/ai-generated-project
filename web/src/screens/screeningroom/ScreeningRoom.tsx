import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { RecommendationCard, Tier } from '../../lib/types'
import { CANDIDATE } from '../../lib/mock'
import { ConfidenceMeter, HonestRange, MarqueePill, Money, TierToggle } from '../../components/primitives'
import { CANNONS } from './cannons'
import { CenterStage } from './stages'

const AI_VARIANTS = [
  { label: 'Deadline urgency', lift: '+18% open', reason: 'Best subject format for A+ donors in Forsyth County' },
  { label: 'Personal appeal', lift: '+11% click', reason: 'Names the donor’s issue in line one' },
  { label: 'Matching frame', lift: '+9% give', reason: 'Match language lifts repeat gifts this cycle' },
]

export function ScreeningRoom({
  card,
  onBack,
  onShowtime,
}: {
  card: RecommendationCard
  onBack: () => void
  onShowtime: () => void
}) {
  const armed = CANNONS.filter((c) => ['E30', 'E31', 'E17'].includes(c.id))
  const [active, setActive] = useState(armed[0])
  const [accepted, setAccepted] = useState<Record<string, boolean>>({ E30: true })
  const [tier, setTier] = useState<Tier>('B')

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Header: cannon · candidate · audience · gear badge */}
      <div className="stage-panel flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
        <MarqueePill>Step 6 · Screening Room</MarqueePill>
        <span className="text-sm text-[var(--color-mist)]">
          {CANDIDATE.name} · <span className="text-white">{card.who.count}</span> in the audience
        </span>
        <span
          className="rounded-md px-2 py-0.5 text-xs font-bold"
          style={{ background: 'var(--color-armed-soft)', color: 'var(--color-armed)' }}
        >
          Gear · Matinée
        </span>
        <div className="ml-auto flex items-center gap-2">
          <TierToggle tier={tier} onChange={setTier} />
          <button
            type="button"
            onClick={onBack}
            className="touch rounded-lg border border-[var(--color-line)] px-3 text-sm text-[var(--color-mist)] hover:text-white"
          >
            Back to card
          </button>
        </div>
      </div>

      {/* Cannon tabs (armed for this volley) */}
      <div className="mt-3 flex flex-wrap gap-2">
        {armed.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c)}
            className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors"
            style={{
              borderColor: active.id === c.id ? 'var(--color-armed)' : 'var(--color-line)',
              background: active.id === c.id ? 'var(--color-armed-soft)' : 'transparent',
              color: active.id === c.id ? '#fff' : 'var(--color-mist)',
            }}
          >
            <span>{c.icon}</span>
            <span className="font-semibold">{c.name}</span>
            {accepted[c.id] && <span style={{ color: 'var(--color-tele)' }}>✓</span>}
          </button>
        ))}
      </div>

      {/* Three-zone theater chassis */}
      <div className="mt-3 grid gap-3 lg:grid-cols-[180px_1fr_260px]">
        {/* Left rail — Candidate's Cut */}
        <aside className="stage-panel p-3">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-mist-2)]">
            Candidate’s Cut
          </div>
          <div className="space-y-2">
            {armed.filter((c) => accepted[c.id]).map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-house-2)] px-2 py-2 text-sm"
              >
                <span>{c.icon}</span>
                <span className="text-white">{c.name}</span>
                <span className="ml-auto text-xs" style={{ color: 'var(--color-tele)' }}>
                  accepted
                </span>
              </div>
            ))}
            {!armed.some((c) => accepted[c.id]) && (
              <p className="text-xs text-[var(--color-mist-2)]">
                Nothing accepted yet — review the AI’s options on the right.
              </p>
            )}
          </div>
        </aside>

        {/* Center stage */}
        <section className="stage-panel flex flex-col items-center justify-center p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="mb-3 text-center text-sm text-[var(--color-mist)]">
                {active.icon} {active.id} · <span className="italic">“{active.nickname}”</span>
              </div>
              <CenterStage cannon={active} />
            </motion.div>
          </AnimatePresence>

          {/* Four action buttons per variant (Addendum A) */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setAccepted((a) => ({ ...a, [active.id]: true }))}
              className="touch rounded-lg px-4 text-sm font-semibold text-white"
              style={{ background: 'var(--color-armed)' }}
            >
              ✓ Accept
            </button>
            {['✏ Edit', '↺ Regenerate', '✕ Delete'].map((b) => (
              <button
                key={b}
                type="button"
                className="touch rounded-lg border border-[var(--color-line)] px-4 text-sm text-[var(--color-mist)] hover:text-white"
              >
                {b}
              </button>
            ))}
          </div>
        </section>

        {/* Right nav — AI Production panel + Box Office */}
        <aside className="flex flex-col gap-3">
          <div className="stage-panel p-3">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-mist-2)]">
              AI Production
            </div>
            <div className="space-y-2">
              {AI_VARIANTS.map((v) => (
                <div key={v.label} className="rounded-lg border border-[var(--color-line)] bg-[var(--color-house-2)] p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{v.label}</span>
                    <span className="text-xs" style={{ color: 'var(--color-tele)' }}>{v.lift}</span>
                  </div>
                  {/* Reason line mandatory — no black box (canon UX Law 4) */}
                  <p className="mt-1 text-xs text-[var(--color-mist)]">{v.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stage-panel p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-mist-2)]">
                Box Office
              </span>
              <ConfidenceMeter value={card.confidence} />
            </div>
            <dl className="space-y-1.5 text-sm">
              <BO k="Audience"><span className="text-white">{card.who.count}</span></BO>
              <BO k="Cost"><Money value={card.cost} /></BO>
              <BO k="Expected"><HonestRange range={card.expected} /></BO>
            </dl>
            <p className="mt-2 flex items-start gap-1.5 text-xs" style={{ color: 'var(--color-marquee)' }}>
              <span>⚑</span> 18 donors in a quiet window — held from the text.
            </p>
          </div>
        </aside>
      </div>

      {/* Bottom rail — film strip */}
      <div className="stage-panel mt-3 flex flex-wrap items-center gap-2 px-4 py-3">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-mist-2)]">
          Film strip
        </span>
        {armed.map((c, i) => (
          <span key={c.id} className="flex items-center gap-2 text-sm">
            {i > 0 && <span className="text-[var(--color-mist-2)]">→</span>}
            <span className="text-white">{c.icon} {c.name}</span>
            <span style={{ color: accepted[c.id] ? 'var(--color-tele)' : 'var(--color-mist-2)' }}>
              {accepted[c.id] ? '✓' : '⏳'}
            </span>
          </span>
        ))}
        <button
          type="button"
          onClick={onShowtime}
          disabled={!armed.every((c) => accepted[c.id])}
          title={armed.every((c) => accepted[c.id]) ? '' : 'Accept every cannon to reach Showtime'}
          className="touch ml-auto rounded-lg px-4 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          style={{ background: 'linear-gradient(140deg,var(--color-armed),var(--color-armed-deep))' }}
        >
          To Showtime →
        </button>
      </div>
    </div>
  )
}

function BO({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-[var(--color-mist)]">{k}</dt>
      <dd>{children}</dd>
    </div>
  )
}
