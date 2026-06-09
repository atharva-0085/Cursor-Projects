import { samplePrompts } from '../data/samplePrompts'

interface SamplePromptsProps {
  onSelect: (prompt: string) => void
}

export default function SamplePrompts({ onSelect }: SamplePromptsProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-wider text-muted">Try a sample prompt</p>
      <div className="flex flex-wrap gap-2">
        {samplePrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onSelect(prompt)}
            className="rounded-lg border border-white/8 bg-surface-800/60 px-3 py-1.5 text-left text-xs text-slate-300 transition-all hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-200"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
