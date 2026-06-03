import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Experience</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional <span className="gradient-text">experience</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Building products at the intersection of data, AI, and cross-functional collaboration.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="glass card-hover rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-400">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="mt-2 shrink-0 font-mono text-xs text-muted sm:mt-0">{job.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
