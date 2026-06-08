import { skillGroups } from '../data/portfolio'

const categoryIcons: Record<string, string> = {
  Languages: '</>',
  Data: '◈',
  'Data Engineering': '⬡',
  'BI & Visualization': '▤',
  'Cloud & Tools': '☁',
  Backend: '⚙',
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="glow-orb top-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-purple-500/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical <span className="gradient-text">expertise</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Skills spanning data engineering, analytics, backend development, and cloud tooling — with a focus on
            translating business needs into reliable solutions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass card-hover rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 font-mono text-sm text-accent-400">
                  {categoryIcons[group.category] ?? '●'}
                </span>
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-surface-800 px-3 py-1.5 text-xs font-medium text-muted-light ring-1 ring-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
