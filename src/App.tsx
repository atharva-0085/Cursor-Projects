import { useCallback, useMemo, useState } from 'react'
import Header from './components/Header'
import PromptInput from './components/PromptInput'
import RecommendationResults from './components/RecommendationResults'
import SamplePrompts from './components/SamplePrompts'
import SuggestedAudience from './components/SuggestedAudience'
import type { Recommendation, SelectedAttribute } from './types/audience'
import { generateRecommendations, groupByCategory } from './utils/recommendationEngine'

export default function App() {
  const [goal, setGoal] = useState('')
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [selected, setSelected] = useState<SelectedAttribute[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const selectedIds = useMemo(() => new Set(selected.map((s) => s.id)), [selected])
  const grouped = useMemo(() => groupByCategory(recommendations), [recommendations])

  const handleGenerate = useCallback(() => {
    const trimmed = goal.trim()
    if (!trimmed) return

    setIsLoading(true)
    setHasSearched(true)

    window.setTimeout(() => {
      setRecommendations(generateRecommendations(trimmed))
      setIsLoading(false)
    }, 400)
  }, [goal])

  const handleSampleSelect = useCallback((prompt: string) => {
    setGoal(prompt)
  }, [])

  const handleToggle = useCallback((rec: Recommendation) => {
    setSelected((prev) => {
      const exists = prev.find((s) => s.id === rec.attribute.id)
      if (exists) {
        return prev.filter((s) => s.id !== rec.attribute.id)
      }
      return [
        ...prev,
        {
          id: rec.attribute.id,
          label: rec.attribute.label,
          category: rec.category,
          confidence: rec.confidence,
          reason: rec.reason,
        },
      ]
    })
  }, [])

  const handleRemove = useCallback((id: string) => {
    setSelected((prev) => prev.filter((s) => s.id !== id))
  }, [])

  const handleClear = useCallback(() => {
    setSelected([])
  }, [])

  return (
    <div className="min-h-screen bg-surface-950">
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none fixed -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <Header />

      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="mb-10 text-center lg:mb-12">
          <p className="section-label mb-3">AI-Assisted Audience Building</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Turn marketing goals into{' '}
            <span className="gradient-text">targeting attributes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
            Describe who you want to reach in plain English. We&apos;ll analyze your goal and recommend relevant
            audience segments from predefined marketing categories.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-surface-800/50 p-5 sm:p-6">
              <PromptInput
                value={goal}
                onChange={setGoal}
                onGenerate={handleGenerate}
                isLoading={isLoading}
              />
              <div className="mt-6 border-t border-white/8 pt-6">
                <SamplePrompts onSelect={handleSampleSelect} />
              </div>
            </div>

            <div className="lg:hidden">
              <SuggestedAudience
                attributes={selected}
                onRemove={handleRemove}
                onClear={handleClear}
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-surface-800/50 p-5 sm:p-6">
              <RecommendationResults
                grouped={grouped}
                selectedIds={selectedIds}
                onToggle={handleToggle}
                hasSearched={hasSearched}
              />
            </div>
          </div>

          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-6">
              <SuggestedAudience
                attributes={selected}
                onRemove={handleRemove}
                onClear={handleClear}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-white/5 py-6 text-center text-xs text-muted">
        AudienceAI Demo · Keyword-based matching · No external APIs
      </footer>
    </div>
  )
}
