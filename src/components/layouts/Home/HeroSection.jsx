import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const GITHUB_URL = 'https://github.com/hirakchhatbar/te.js'
const NPM_URL = 'https://www.npmjs.com/package/te.js'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Animated background: grid + radial glow with pulse */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none hero-grid opacity-50"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-sky-500/15 via-sky-400/8 to-transparent rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="flex max-w-4xl flex-col items-center gap-10 text-center">
        <img
          src="/tejas-logo.svg"
          alt="Tejas"
          className="h-32 w-32 shrink-0 opacity-0 animate-fade-in sm:h-40 sm:w-40 md:h-48 md:w-48"
          style={{ animationDelay: '0ms' }}
          width={192}
          height={192}
        />
        <div className="flex flex-col gap-5 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Build Backend Services at the Speed of Light
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tejas — a modern Node.js framework built for speed and precision.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white border-0 glow-sky"
            onClick={() => navigate('/docs')}
          >
            Get Started
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-border" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '320ms' }}>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
          >
            <img
              src="https://img.shields.io/npm/v/te.js.svg"
              alt="npm version"
              className="h-5"
            />
          </a>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
          >
            <img
              src="https://img.shields.io/npm/dm/te.js.svg"
              alt="npm downloads"
              className="h-5"
            />
          </a>
        </div>
      </div>
      <div className="horizon-line mt-12" aria-hidden />
    </section>
  )
}

export default HeroSection
