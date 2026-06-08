import ConfidenceBadge from './ConfidenceBadge'
import type { SelectedAttribute } from '../types/audience'

interface SuggestedAudienceProps {
  attributes: SelectedAttribute[]
  onRemove: (id: string) => void
  onClear: () => void
}

export default function SuggestedAudience({ attributes, onRemove, onClear }: SuggestedAudienceProps) {
  const grouped = attributes.reduce<Map<string, SelectedAttribute[]>>((acc, attr) => {
    const list = acc.get(attr.category) ?? []
    list.push(attr)
    acc.set(attr.category, list)
    return acc
  }, new Map())

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface-800/50">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold text-white">Suggested Audience</h2>
          <p className="mt-0.5 text-xs text-muted">
            {attributes.length === 0
              ? 'Select attributes to build your audience'
              : `${attributes.length} attribute${attributes.length === 1 ? '' : 's'} selected`}
          </p>
        </div>
        {attributes.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-slate-400 transition-colors hover:text-red-400"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        {attributes.length === 0 ? (
          <div className="flex h-full min-h-[200px] flex-col items-center justify-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
              <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-muted">Your audience segments will appear here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Array.from(grouped.entries()).map(([category, attrs]) => (
              <div key={category}>
                <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-violet-400/80">{category}</h3>
                <ul className="space-y-2">
                  {attrs.map((attr) => (
                    <li
                      key={attr.id}
                      className="flex items-center justify-between gap-2 rounded-lg border border-violet-500/20 bg-violet-500/8 px-3 py-2"
                    >
                      <div className="flex min-w-0 flex-col gap-1">
                        <span className="truncate text-sm text-slate-100">{attr.label}</span>
                        <ConfidenceBadge level={attr.confidence} />
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(attr.id)}
                        aria-label={`Remove ${attr.label}`}
                        className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {attributes.length > 0 && (
        <div className="border-t border-white/8 p-5">
          <button
            type="button"
            className="w-full rounded-xl border border-white/10 bg-surface-900/80 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-violet-500/30 hover:text-white"
          >
            Export Audience Definition
          </button>
        </div>
      )}
    </div>
  )
}
