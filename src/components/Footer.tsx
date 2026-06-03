import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {personal.name}. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent-400"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent-400"
          >
            LinkedIn
          </a>
          <a
            href={personal.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent-400"
          >
            Website
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-muted transition-colors hover:text-accent-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
