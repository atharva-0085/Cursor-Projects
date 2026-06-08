import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="glow-orb bottom-0 right-0 h-72 w-72 bg-accent-500/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Education</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Academic <span className="gradient-text">foundation</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass card-hover rounded-2xl p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{education.school}</h3>
                <p className="mt-1 text-sm font-medium text-accent-400">{education.degree}</p>
                <p className="mt-1 text-sm text-muted">{education.location}</p>
              </div>
              <span className="shrink-0 rounded-lg bg-accent-500/10 px-3 py-1.5 font-mono text-sm font-semibold text-accent-400 ring-1 ring-accent-500/20">
                GPA {education.gpa}
              </span>
            </div>

            <p className="text-sm text-muted">{education.period}</p>

            <div className="mt-6">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Honors & Recognition</h4>
              <ul className="space-y-2">
                {education.honors.map((honor) => (
                  <li key={honor} className="flex gap-3 text-sm text-muted-light">
                    <span className="text-accent-400">★</span>
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass card-hover rounded-2xl p-8">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="rounded-lg bg-surface-800 px-3 py-2 text-xs font-medium text-muted-light ring-1 ring-white/5"
                >
                  {course}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-surface-800/50 p-5 ring-1 ring-white/5">
              <p className="text-sm leading-relaxed text-muted">
                Coursework spans core CS fundamentals, data mining, cloud computing, machine learning, and visual
                analytics — supporting work across product, data, and software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
