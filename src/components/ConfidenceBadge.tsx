import type { ConfidenceLevel } from '../types/audience'

const styles: Record<ConfidenceLevel, string> = {
  High: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Medium: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Low: 'bg-slate-500/15 text-slate-400 border-slate-500/30',
}

interface ConfidenceBadgeProps {
  level: ConfidenceLevel
}

export default function ConfidenceBadge({ level }: ConfidenceBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${styles[level]}`}
    >
      {level}
    </span>
  )
}
