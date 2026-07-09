import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Range, Tier } from '../lib/types'

export function MarqueePill({ children }: { children: ReactNode }) {
  return <span className="marquee-pill">{children}</span>
}

/** Money band — honest ranges, never promises (canon UX Law 5). */
export function HonestRange({ range, prefix = '$' }: { range: Range; prefix?: string }) {
  const fmt = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `${n}`
  return (
    <span className="money font-semibold">
      {prefix}
      {fmt(range.low)}–{prefix === '$' ? '' : prefix}
      {fmt(range.high)}
    </span>
  )
}

export function Money({ value }: { value: number }) {
  return <span className="money font-semibold">${value.toLocaleString()}</span>
}

export function GradeBadge({ grade, score, tier }: { grade: string; score?: number; tier: Tier }) {
  return (
    <span
      className="inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-bold"
      style={{ color: 'var(--color-marquee)', background: 'var(--color-marquee-soft)' }}
    >
      {grade}
      {tier === 'A' && score != null ? <span className="opacity-70">·{score}</span> : null}
    </span>
  )
}

/** Box Office confidence band meter — amber, 5 pips. */
export function ConfidenceMeter({ value }: { value: number }) {
  const pips = 5
  const lit = Math.round(value * pips)
  return (
    <span className="inline-flex items-center gap-1" aria-label={`confidence ${Math.round(value * 100)}%`}>
      {Array.from({ length: pips }).map((_, i) => (
        <span
          key={i}
          className="h-2 w-4 rounded-sm"
          style={{
            background: i < lit ? 'var(--color-marquee)' : 'var(--color-line)',
            boxShadow: i < lit ? '0 0 10px -2px var(--color-marquee)' : 'none',
          }}
        />
      ))}
    </span>
  )
}

/** Below-the-fold disclosure (collapsed by default), canon Screen B. */
export function Disclosure({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-[var(--color-line)]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="touch flex w-full items-center gap-2 py-3 text-left text-sm text-[var(--color-mist)] hover:text-white"
      >
        <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          ▸
        </motion.span>
        {label}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-[#c7d0e2]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Tier A / Tier B toggle — every Tier B screen has a Tier A twin (canon Part XIV). */
export function TierToggle({ tier, onChange }: { tier: Tier; onChange: (t: Tier) => void }) {
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-[var(--color-line)] text-xs">
      {(['B', 'A'] as Tier[]).map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onChange(t)}
          className="px-3 py-1.5 font-semibold transition-colors"
          style={{
            background: tier === t ? 'var(--color-armed)' : 'transparent',
            color: tier === t ? '#fff' : 'var(--color-mist)',
          }}
        >
          {t === 'B' ? 'Candidate' : 'Staff'}
        </button>
      ))}
    </div>
  )
}

export function Avatar({ initials }: { initials: string }) {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white"
      style={{ background: 'linear-gradient(140deg,var(--color-armed),var(--color-armed-deep))' }}
    >
      {initials}
    </span>
  )
}
