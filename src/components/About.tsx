import { education, personal, summary } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-label mb-3">About</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering with <span className="gradient-text">purpose</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="glass card-hover rounded-2xl p-8 lg:col-span-3">
            <p className="text-base leading-relaxed text-muted-light sm:text-lg">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['ML Systems', 'Distributed Computing', 'Backend Engineering', 'Data Pipelines'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-medium text-accent-400 ring-1 ring-accent-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="glass card-hover rounded-2xl p-8 lg:col-span-2">
            <h3 className="mb-6 font-mono text-sm font-medium uppercase tracking-wider text-accent-400">
              Quick Info
            </h3>
            <dl className="space-y-4">
              {[
                { label: 'Location', value: personal.location },
                { label: 'Education', value: education.school },
                { label: 'Degree', value: education.degree },
                { label: 'Expected Graduation', value: 'May 2027' },
                { label: 'GPA', value: education.gpa },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted">{item.label}</dt>
                  <dd className="mt-1 text-sm text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
