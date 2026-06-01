import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Projects</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Production-minded projects spanning machine learning pipelines, big data processing, and full-stack
            applications.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass card-hover group rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-xs text-accent-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-muted">{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent-400 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-light">{project.subtitle}</p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-800 px-3 py-1 text-xs font-medium text-accent-400/80 ring-1 ring-accent-500/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 flex-col gap-4 lg:w-48">
                  {project.metrics && (
                    <div className="flex gap-3 lg:flex-col">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex-1 rounded-xl bg-surface-800/80 p-4 text-center ring-1 ring-white/5"
                        >
                          <div className="text-2xl font-bold text-accent-400">{metric.value}</div>
                          <div className="mt-1 text-xs text-muted">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-600 px-4 py-3 text-sm font-medium text-white transition-all hover:border-accent-500/50 hover:bg-accent-500/5"
                  >
                    View on GitHub
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
