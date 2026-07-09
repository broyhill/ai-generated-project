import { useState } from 'react'
import { motion } from 'motion/react'
import type { RecommendationCard } from '../lib/types'
import { CANDIDATE } from '../lib/mock'
import {
  Avatar,
  ConfidenceMeter,
  Disclosure,
  GradeBadge,
  HonestRange,
  MarqueePill,
  Money,
} from '../components/primitives'

export function ScreenCard({
  card,
  busy,
  onApprove,
  onEdit,
  onShowEverything,
}: {
  card: RecommendationCard
  busy: boolean
  onApprove: () => void
  onEdit: (instruction: string) => void
  onShowEverything: () => void
}) {
  const [editing, setEditing] = useState(false)
  const [instruction, setInstruction] = useState('')
  const s = card.who.sample

  return (
    <div className="mx-auto max-w-2xl px-5 py-10">
      <motion.div
        key={card.title + card.cost}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="stage-panel overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <MarqueePill>The recommendation</MarqueePill>
          <ConfidenceMeter value={card.confidence} />
        </div>
        <h2 className="px-6 pt-4 text-2xl">{card.title}</h2>

        <div className="mt-5 space-y-5 px-6">
          <Block label="Who">
            <p className="text-[#e7ecf6]">{card.who.plain}</p>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-house-2)] p-3">
              <Avatar initials={s.initials} />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">
                    {s.first} {s.last}
                  </span>
                  <GradeBadge grade={s.grade} tier="B" />
                </div>
                <div className="truncate text-sm text-[var(--color-mist)]">{s.whyLine}</div>
              </div>
              <div className="ml-auto text-right text-sm">
                <div className="text-[var(--color-mist-2)]">suggested ask</div>
                <div style={{ color: 'var(--color-tele)' }} className="font-semibold">
                  ${s.ask.toLocaleString()}
                </div>
              </div>
            </div>
          </Block>

          <Block label="What">
            <p className="text-[#e7ecf6]">{card.what.plain}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {card.what.channels.map((c) => (
                <span
                  key={c.cannon}
                  className="rounded-lg border border-[var(--color-line)] px-3 py-1.5 text-sm"
                >
                  <span className="font-semibold text-white">{c.label}</span>
                  <span className="text-[var(--color-mist)]">
                    {' '}
                    · {c.reachable}/{c.total} · {c.when}
                  </span>
                </span>
              ))}
            </div>
          </Block>

          <Block label="Cost / expected">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <Money value={card.cost} />
              <span className="text-[var(--color-mist)]">to send ·</span>
              <span className="text-[#e7ecf6]">likely to raise</span>
              <HonestRange range={card.expected} />
            </div>
            <p className="mt-1 text-xs text-[var(--color-mist-2)]">
              A range, not a promise — the wizard never guarantees a number.
            </p>
          </Block>
        </div>

        {/* Three primary actions (canon Screen B) */}
        <div className="mt-6 flex flex-col gap-2 px-6 sm:flex-row">
          <button
            type="button"
            disabled={busy}
            onClick={onApprove}
            className="touch flex-1 rounded-xl px-4 font-semibold text-white transition-opacity disabled:opacity-50"
            style={{ background: 'linear-gradient(140deg,var(--color-armed),var(--color-armed-deep))' }}
          >
            Approve &amp; launch
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => setEditing((e) => !e)}
            className="touch flex-1 rounded-xl border border-[var(--color-line)] px-4 font-semibold text-white hover:border-[var(--color-armed)] disabled:opacity-50"
          >
            Change something
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={onShowEverything}
            className="touch flex-1 rounded-xl border border-[var(--color-line)] px-4 font-medium text-[var(--color-mist)] hover:text-white disabled:opacity-50"
          >
            Show me everything
          </button>
        </div>

        {editing && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="overflow-hidden px-6"
            onSubmit={(e) => {
              e.preventDefault()
              if (instruction.trim()) {
                onEdit(instruction.trim())
                setInstruction('')
                setEditing(false)
              }
            }}
          >
            <div className="mt-3 flex gap-2">
              <input
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                placeholder="make it smaller · not the voicemail · softer ask"
                className="touch w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-house-2)] px-3 text-white outline-none focus:border-[var(--color-armed)]"
                aria-label="Change something"
              />
              <button
                type="submit"
                className="touch rounded-lg bg-white/10 px-4 font-semibold text-white hover:bg-white/15"
              >
                Update
              </button>
            </div>
          </motion.form>
        )}

        <div className="mt-6 px-6 pb-2">
          <Disclosure label="Why these people">
            <ul className="space-y-1.5">
              {card.who.whyLines.map((w) => (
                <li key={w} className="flex gap-2">
                  <span style={{ color: 'var(--color-tele)' }}>›</span>
                  {w}
                </li>
              ))}
            </ul>
          </Disclosure>
          <Disclosure label="What they’ll receive">
            <p>
              Previewed as a real supporter — <strong className="text-white">{s.first} {s.last}</strong>{' '}
              in {s.county} County. Their name and ask are merged live; never placeholder text.
              Open “Show me everything” to watch the full premiere in the Screening Room.
            </p>
          </Disclosure>
          <Disclosure label="What’s held back">
            <ul className="space-y-1.5">
              {card.held.map((h) => (
                <li key={h} className="flex gap-2">
                  <span style={{ color: 'var(--color-marquee)' }}>⚑</span>
                  {h}
                </li>
              ))}
            </ul>
          </Disclosure>
        </div>
      </motion.div>

      <p className="mt-4 text-center text-xs text-[var(--color-mist-2)]">
        Nothing sends until you approve at Showtime · from {CANDIDATE.fromName}
      </p>
    </div>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-mist-2)]">
        {label}
      </div>
      {children}
    </section>
  )
}
