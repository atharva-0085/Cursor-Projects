import { personal, summary } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="glow-orb -top-32 -left-32 h-96 w-96 bg-accent-500/20" />
      <div className="glow-orb top-1/3 -right-32 h-80 w-80 bg-indigo-500/15" style={{ animationDelay: '2s' }} />
      <div className="grid-bg absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="animate-fade-up section-label mb-6">Portfolio</p>

          <h1 className="animate-fade-up delay-100 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{personal.firstName}</span>
          </h1>

          <p className="animate-fade-up delay-200 mt-6 text-xl font-medium text-muted-light sm:text-2xl">
            {personal.tagline}
          </p>

          <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {summary}
          </p>

          <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 text-sm font-semibold text-surface-950 transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25"
            >
              View Experience
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-surface-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent-500/50 hover:bg-accent-500/5"
            >
              Contact Me
            </a>
            <a
              href="/Atharva_Gangrade_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-surface-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent-500/50 hover:bg-accent-500/5"
            >
              Download Resume
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent-500/50 hover:bg-accent-500/5"
            >
              LinkedIn
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="animate-fade-up delay-500 mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '3.71', label: 'GPA' },
              { value: '28%', label: 'Runtime Reduction' },
              { value: '3+', label: 'Major Projects' },
              { value: '2026', label: 'PM Intern · Stirista' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-accent-400">{stat.value}</div>
                <div className="mt-1 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" aria-label="Scroll to about section" className="text-muted transition-colors hover:text-accent-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
