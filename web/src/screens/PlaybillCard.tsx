import { motion } from 'motion/react'
import type { PlaybillState } from '../lib/types'
import { HonestRange, MarqueePill, Money } from '../components/primitives'

/** Post-launch Playbill card — same register as the recommendation (canon Screen B / Part V). */
export function PlaybillCard({
  playbill,
  goScore,
  onOpenPlaybill,
  onNew,
}: {
  playbill: PlaybillState
  goScore: number
  onOpenPlaybill: () => void
  onNew: () => void
}) {
  const pct = Math.round((playbill.sentOut / playbill.sentTotal) * 100)
  return (
    <div className="mx-auto max-w-xl px-5 py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="stage-panel p-6 text-center"
      >
        <div className="flex items-center justify-center gap-2">
          <MarqueePill>Live · the playbill</MarqueePill>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 220, damping: 18 }}
          className="mx-auto mt-5 grid h-14 w-14 place-items-center rounded-full text-2xl"
          style={{ background: 'var(--color-tele-soft)', color: 'var(--color-tele)' }}
        >
          ✓
        </motion.div>

        <h2 className="mt-4 text-2xl">{playbill.title} is on stage</h2>
        <p className="mt-2 text-lg text-[#e7ecf6]">
          {playbill.sentOut} of {playbill.sentTotal} sends out ·{' '}
          <Money value={playbill.raisedSoFar} /> raised so far ·{' '}
          <span style={{ color: 'var(--color-tele)' }}>on track</span>
        </p>

        <div className="mx-auto mt-5 h-2 max-w-sm overflow-hidden rounded-full bg-[var(--color-line)]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg,var(--color-armed),var(--color-tele))' }}
          />
        </div>

        <p className="mt-3 text-sm text-[var(--color-mist)]">
          against a forecast of <HonestRange range={playbill.forecast} /> · GO/NO-GO score{' '}
          <span className="text-white">{goScore}</span>
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={onOpenPlaybill}
            className="touch flex-1 rounded-xl px-4 font-semibold text-white"
            style={{ background: 'linear-gradient(140deg,var(--color-armed),var(--color-armed-deep))' }}
          >
            Open full Playbill
          </button>
          <button
            type="button"
            onClick={onNew}
            className="touch flex-1 rounded-xl border border-[var(--color-line)] px-4 font-medium text-[var(--color-mist)] hover:text-white"
          >
            Compose another
          </button>
        </div>
      </motion.div>
    </div>
  )
}
