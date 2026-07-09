import { motion } from 'motion/react'
import type { RecommendationCard } from '../lib/types'
import { CANDIDATE } from '../lib/mock'
import { HonestRange, MarqueePill, Money } from '../components/primitives'

const SEQUENCE = ['Preview', 'Price', 'Deploy', 'Pay', 'Log'] as const

export function ScreenShowtime({
  card,
  busy,
  onConfirm,
  onBack,
}: {
  card: RecommendationCard
  busy: boolean
  onConfirm: () => void
  onBack: () => void
}) {
  return (
    <div className="mx-auto max-w-xl px-5 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="stage-panel curtain p-6"
      >
        <div className="flex items-center justify-between">
          <MarqueePill>Showtime</MarqueePill>
          <div className="flex items-center gap-1.5 text-xs text-[var(--color-mist)]">
            {SEQUENCE.map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[var(--color-mist-2)]">→</span>}
                {step}
              </span>
            ))}
          </div>
        </div>

        <h2 className="mt-4 text-2xl">One approval. Then the guns fire.</h2>
        <p className="mt-1 text-[var(--color-mist)]">
          This is the only place anything leaves the building.
        </p>

        <div className="mt-6 divide-y divide-[var(--color-line)] rounded-xl border border-[var(--color-line)]">
          <Row k="Campaign">{card.title}</Row>
          <Row k="Audience">
            <span className="text-white">{card.who.count}</span> supporters
          </Row>
          <Row k="Channels">
            {card.what.channels.map((c) => c.label).join(' · ')}
          </Row>
          <Row k="Cost to send">
            <Money value={card.cost} />
          </Row>
          <Row k="Likely to raise">
            <HonestRange range={card.expected} />
          </Row>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
          <button
            type="button"
            disabled={busy}
            onClick={onConfirm}
            className="touch flex-1 rounded-xl px-4 text-lg font-semibold text-white transition-opacity disabled:opacity-60"
            style={{ background: 'linear-gradient(140deg,var(--color-armed),var(--color-armed-deep))' }}
          >
            {busy ? 'Raising the curtain…' : `Deploy · pay ${'$' + card.cost}`}
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={onBack}
            className="touch rounded-xl border border-[var(--color-line)] px-4 font-medium text-[var(--color-mist)] hover:text-white disabled:opacity-50"
          >
            Back
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-[var(--color-mist-2)]">
          Paid for by {CANDIDATE.committee} · logged to loop.* on deploy
        </p>
      </motion.div>
    </div>
  )
}

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <span className="text-sm text-[var(--color-mist)]">{k}</span>
      <span className="text-right">{children}</span>
    </div>
  )
}
