import { useState } from 'react'
import { motion } from 'motion/react'
import { MarqueePill } from '../components/primitives'
import { MARQUEE_CHIPS, ASK_SUGGESTIONS, CANDIDATE } from '../lib/mock'

export function ScreenAsk({ onSubmit }: { onSubmit: (ask: string) => void }) {
  const [value, setValue] = useState('')

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <MarqueePill>Compose campaign</MarqueePill>
        <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">What do you want to do?</h1>
        <p className="mt-3 text-[var(--color-mist)]">
          Tell the wizard in your own words. It composes the whole campaign behind the
          curtain and answers with one card.
        </p>

        <form
          className="mt-7"
          onSubmit={(e) => {
            e.preventDefault()
            if (value.trim()) onSubmit(value.trim())
          }}
        >
          <div className="stage-panel flex items-center gap-3 p-2 pl-5">
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <input
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="I need to raise $15k before the filing deadline"
              className="touch w-full bg-transparent py-3 text-lg text-white outline-none placeholder:text-[var(--color-mist-2)]"
              aria-label="What do you want to do?"
            />
            <button
              type="submit"
              disabled={!value.trim()}
              className="touch shrink-0 rounded-xl px-5 font-semibold text-white transition-opacity disabled:opacity-40"
              style={{ background: 'linear-gradient(140deg,var(--color-armed),var(--color-armed-deep))' }}
            >
              Ask the wizard
            </button>
          </div>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          {ASK_SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setValue(s)}
              className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-sm text-[var(--color-mist)] transition-colors hover:border-[var(--color-armed)] hover:text-white"
            >
              {s}
            </button>
          ))}
        </div>

        {/* The nine Marquee categories survive as chips, not a gate (canon Screen A). */}
        <div className="mt-9">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mist-2)]">
            or start from a category
          </div>
          <div className="flex flex-wrap gap-2">
            {MARQUEE_CHIPS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setValue((v) => (v ? v : `${c}: `))}
                className="rounded-lg border border-[var(--color-line)] bg-[var(--color-stage)] px-3 py-2 text-sm font-medium text-[#dbe2f0] transition-colors hover:border-[var(--color-marquee)] hover:text-white"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-[var(--color-mist-2)]">
          {CANDIDATE.name} {CANDIDATE.office} · everything you send carries your name only
        </p>
      </motion.div>
    </div>
  )
}
