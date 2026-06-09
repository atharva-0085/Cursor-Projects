import type { KeyboardEvent } from 'react'

interface PromptInputProps {
  value: string
  onChange: (value: string) => void
  onGenerate: () => void
  isLoading?: boolean
}

export default function PromptInput({ value, onChange, onGenerate, isLoading }: PromptInputProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onGenerate()
    }
  }

  return (
    <div className="space-y-4">
      <label htmlFor="audience-goal" className="block text-sm font-medium text-slate-200">
        Describe your audience targeting goal
      </label>
      <div className="relative">
        <textarea
          id="audience-goal"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Find parents interested in travel"
          className="w-full resize-none rounded-xl border border-white/10 bg-surface-800/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
        />
      </div>
      <button
        type="button"
        onClick={onGenerate}
        disabled={!value.trim() || isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none sm:w-auto"
      >
        {isLoading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Analyzing…
          </>
        ) : (
          <>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Generate Recommendations
          </>
        )}
      </button>
    </div>
  )
}
