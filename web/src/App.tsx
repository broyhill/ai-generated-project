import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { PlaybillState, RecommendationCard } from './lib/types'
import { authorize, composeVolley, editCard } from './lib/brain'
import { ScreenAsk } from './screens/ScreenAsk'
import { ScreenCard } from './screens/ScreenCard'
import { ScreenShowtime } from './screens/ScreenShowtime'
import { PlaybillCard } from './screens/PlaybillCard'
import { ScreeningRoom } from './screens/screeningroom/ScreeningRoom'

type Phase = 'ask' | 'composing' | 'card' | 'screening' | 'showtime' | 'live'

export default function App() {
  const [phase, setPhase] = useState<Phase>('ask')
  const [busy, setBusy] = useState(false)
  const [card, setCard] = useState<RecommendationCard | null>(null)
  const [live, setLive] = useState<{ playbill: PlaybillState; score: number } | null>(null)

  async function handleAsk(ask: string) {
    setPhase('composing')
    const c = await composeVolley(ask)
    setCard(c)
    setPhase('card')
  }

  async function handleEdit(instruction: string) {
    if (!card) return
    setBusy(true)
    setCard(await editCard(card, instruction))
    setBusy(false)
  }

  async function handleConfirm() {
    if (!card) return
    setBusy(true)
    const res = await authorize(card)
    setBusy(false)
    if (res.ok) {
      setLive({ playbill: res.playbill, score: res.score })
      setPhase('live')
    }
  }

  function reset() {
    setCard(null)
    setLive(null)
    setPhase('ask')
  }

  return (
    <div className="min-h-full">
      <TopBar phase={phase} onHome={reset} />

      <AnimatePresence mode="wait">
        <motion.main
          key={phase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {phase === 'ask' && <ScreenAsk onSubmit={handleAsk} />}
          {phase === 'composing' && <Composing />}
          {phase === 'card' && card && (
            <ScreenCard
              card={card}
              busy={busy}
              onApprove={() => setPhase('showtime')}
              onEdit={handleEdit}
              onShowEverything={() => setPhase('screening')}
            />
          )}
          {phase === 'screening' && card && (
            <ScreeningRoom
              card={card}
              onBack={() => setPhase('card')}
              onShowtime={() => setPhase('showtime')}
            />
          )}
          {phase === 'showtime' && card && (
            <ScreenShowtime
              card={card}
              busy={busy}
              onConfirm={handleConfirm}
              onBack={() => setPhase('card')}
            />
          )}
          {phase === 'live' && live && (
            <PlaybillCard
              playbill={live.playbill}
              goScore={live.score}
              onOpenPlaybill={() => {}}
              onNew={reset}
            />
          )}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

function TopBar({ phase, onHome }: { phase: Phase; onHome: () => void }) {
  const steps: { key: Phase; label: string }[] = [
    { key: 'ask', label: 'The Ask' },
    { key: 'card', label: 'The Card' },
    { key: 'showtime', label: 'Showtime' },
    { key: 'live', label: 'Live' },
  ]
  const order: Phase[] = ['ask', 'composing', 'card', 'screening', 'showtime', 'live']
  const idx = order.indexOf(phase)
  return (
    <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-house)]/80 px-5 py-3 backdrop-blur">
      <button type="button" onClick={onHome} className="flex items-center gap-2">
        <span className="text-lg">🎭</span>
        <span className="font-[var(--font-display)] text-sm font-semibold tracking-wide text-white">
          E68 · Wizard of Oz
        </span>
      </button>
      <nav className="ml-auto hidden items-center gap-1.5 text-xs sm:flex">
        {steps.map((s, i) => {
          const on = order.indexOf(s.key) <= idx
          return (
            <span key={s.key} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-[var(--color-mist-2)]">·</span>}
              <span style={{ color: on ? 'var(--color-marquee)' : 'var(--color-mist-2)' }}>
                {s.label}
              </span>
            </span>
          )
        })}
      </nav>
    </header>
  )
}

function Composing() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-5">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }}
          className="mx-auto grid h-16 w-16 place-items-center rounded-full text-3xl"
          style={{ boxShadow: '0 0 60px -10px var(--color-marquee)', background: 'var(--color-marquee-soft)' }}
        >
          🪄
        </motion.div>
        <h2 className="mt-6 text-2xl">The wizard is composing…</h2>
        <p className="mt-2 max-w-sm text-[var(--color-mist)]">
          Selecting the play, casting the audience, drafting each cannon, running the gates,
          and forecasting the Box Office — all behind the curtain.
        </p>
      </div>
    </div>
  )
}
