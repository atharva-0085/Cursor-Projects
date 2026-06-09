import ConfidenceBadge from './ConfidenceBadge'
import type { Recommendation } from '../types/audience'

interface RecommendationResultsProps {
  grouped: Map<string, Recommendation[]>
  selectedIds: Set<string>
  onToggle: (rec: Recommendation) => void
  hasSearched: boolean
}

const categoryIcons: Record<string, string> = {
  Demographics: '👤',
  Geography: '📍',
  Interests: '✨',
  Income: '💰',
  Homeownership: '🏠',
  Automotive: '🚗',
  'Purchase Behavior': '🛒',
}

export default function RecommendationResults({
  grouped,
  selectedIds,
  onToggle,
  hasSearched,
}: RecommendationResultsProps) {
  if (!hasSearched) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-surface-800/30 p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
          <svg className="h-7 w-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <h3 className="text-base font-medium text-slate-200">Ready to build your audience</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Enter a targeting goal in plain English and we&apos;ll recommend relevant audience attributes from our
          marketing taxonomy.
        </p>
      </div>
    )
  }

  if (grouped.size === 0) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface-800/30 p-8 text-center">
        <p className="text-sm text-muted">No matching attributes found. Try rephrasing your goal or use a sample prompt.</p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">Recommended Attributes</h2>
        <span className="text-xs text-muted">Click to add to audience</span>
      </div>
      {Array.from(grouped.entries()).map(([category, recs]) => (
        <div key={category} className="rounded-xl border border-white/8 bg-surface-800/40 p-4">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-violet-300">
            <span>{categoryIcons[category] ?? '📋'}</span>
            {category}
          </h3>
          <ul className="space-y-2">
            {recs.map((rec) => {
              const isSelected = selectedIds.has(rec.attribute.id)
              return (
                <li key={rec.attribute.id}>
                  <button
                    type="button"
                    onClick={() => onToggle(rec)}
                    className={`flex w-full items-start justify-between gap-3 rounded-lg border px-3 py-2.5 text-left transition-all ${
                      isSelected
                        ? 'border-violet-500/40 bg-violet-500/15 text-violet-100'
                        : 'border-white/5 bg-surface-900/50 text-slate-200 hover:border-violet-500/25 hover:bg-violet-500/8'
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        {isSelected && (
                          <svg className="h-4 w-4 shrink-0 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {rec.attribute.label}
                      </span>
                      <span className="mt-1 block text-xs leading-snug text-slate-400">{rec.reason}</span>
                    </span>
                    <ConfidenceBadge level={rec.confidence} />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
