import { Button } from '@/components/ui/button.jsx'
import {
  BotIcon,
  BrainCircuitIcon,
  ExternalLink,
  FileCodeIcon,
  Github,
  SparklesIcon,
  ZapIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const GITHUB_URL = 'https://github.com/hirakchhatbar/te.js'

const AI_HIGHLIGHTS = [
  { Icon: ZapIcon, label: 'LLM Error Handling' },
  { Icon: FileCodeIcon, label: 'Auto-Documentation' },
  { Icon: BotIcon, label: 'MCP Server' },
  { Icon: BrainCircuitIcon, label: 'AI Provider' }
]

const CONSTELLATION_NODES = [
  { x: 10, y: 15, r: 2.5, delay: 0 },
  { x: 25, y: 10, r: 2, delay: 0.6 },
  { x: 42, y: 18, r: 3, delay: 1.2 },
  { x: 60, y: 12, r: 2, delay: 0.9 },
  { x: 78, y: 17, r: 2.5, delay: 1.5 },
  { x: 90, y: 28, r: 2, delay: 0.3 },
  { x: 15, y: 78, r: 2, delay: 1.0 },
  { x: 32, y: 83, r: 2.5, delay: 0.4 },
  { x: 52, y: 80, r: 2, delay: 1.4 },
  { x: 70, y: 85, r: 3, delay: 0.2 },
  { x: 87, y: 75, r: 2, delay: 0.8 },
  { x: 5, y: 45, r: 2, delay: 1.1 },
  { x: 95, y: 52, r: 2.5, delay: 0.7 }
]

const CONSTELLATION_LINES = [
  { x1: 10, y1: 15, x2: 25, y2: 10, delay: 0 },
  { x1: 25, y1: 10, x2: 42, y2: 18, delay: 0.5 },
  { x1: 42, y1: 18, x2: 60, y2: 12, delay: 1.0 },
  { x1: 60, y1: 12, x2: 78, y2: 17, delay: 0.3 },
  { x1: 78, y1: 17, x2: 90, y2: 28, delay: 0.8 },
  { x1: 15, y1: 78, x2: 32, y2: 83, delay: 0.6 },
  { x1: 32, y1: 83, x2: 52, y2: 80, delay: 1.2 },
  { x1: 52, y1: 80, x2: 70, y2: 85, delay: 0.2 },
  { x1: 70, y1: 85, x2: 87, y2: 75, delay: 0.9 },
  { x1: 5, y1: 45, x2: 10, y2: 15, delay: 1.3 },
  { x1: 90, y1: 28, x2: 95, y2: 52, delay: 0.4 },
  { x1: 95, y1: 52, x2: 87, y2: 75, delay: 1.1 }
]

const HEADING_TICKS = [270, 300, 330, '000', '030', '060', '090']

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className='relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24'>
      <div
        className='absolute inset-0 -z-10 overflow-hidden pointer-events-none hero-grid opacity-50'
        aria-hidden
      />

      {/* Dual glow orbs */}
      <div
        className='absolute inset-0 -z-10 overflow-hidden pointer-events-none'
        aria-hidden
      >
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-sky-500/15 via-sky-400/8 to-transparent rounded-full blur-3xl animate-glow-pulse' />
        <div
          className='absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-br from-violet-500/8 via-violet-400/5 to-transparent rounded-full blur-3xl animate-glow-pulse'
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Neural constellation */}
      <svg
        className='absolute inset-0 -z-10 w-full h-full pointer-events-none opacity-25 dark:opacity-[0.18]'
        aria-hidden
      >
        <defs>
          <linearGradient
            id='hero-neural-grad'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop offset='0%' stopColor='hsl(199 89% 58%)' stopOpacity='0.5' />
            <stop
              offset='100%'
              stopColor='hsl(263 70% 58%)'
              stopOpacity='0.3'
            />
          </linearGradient>
        </defs>
        {CONSTELLATION_LINES.map((line, i) => (
          <line
            key={`l${i}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke='url(#hero-neural-grad)'
            strokeWidth='0.5'
            className='motion-safe:animate-line-pulse'
            style={{ animationDelay: `${line.delay}s` }}
          />
        ))}
        {CONSTELLATION_NODES.map((node, i) => (
          <circle
            key={`n${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.r}
            fill='hsl(199 89% 58%)'
            className='motion-safe:animate-pulse-slow'
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>

      {/* ── Aviation HUD overlay ── */}
      <div className='absolute inset-0 -z-10 pointer-events-none' aria-hidden>
        {/* Targeting brackets — larger & more visible */}
        <div className='absolute top-[8%] left-[4%] w-6 h-6 sm:w-9 sm:h-9 border-l border-t border-sky-400/[0.22]' />
        <div className='absolute top-[8%] right-[4%] w-6 h-6 sm:w-9 sm:h-9 border-r border-t border-sky-400/[0.22]' />
        <div className='absolute bottom-[8%] left-[4%] w-6 h-6 sm:w-9 sm:h-9 border-l border-b border-sky-400/[0.22]' />
        <div className='absolute bottom-[8%] right-[4%] w-6 h-6 sm:w-9 sm:h-9 border-r border-b border-sky-400/[0.22]' />

        {/* Inner secondary brackets (double-bracket lock-on) */}
        <div className='hidden sm:block absolute top-[12%] left-[7%] w-4 h-4 sm:w-5 sm:h-5 border-l border-t border-sky-400/[0.12]' />
        <div className='hidden sm:block absolute top-[12%] right-[7%] w-4 h-4 sm:w-5 sm:h-5 border-r border-t border-sky-400/[0.12]' />
        <div className='hidden sm:block absolute bottom-[12%] left-[7%] w-4 h-4 sm:w-5 sm:h-5 border-l border-b border-sky-400/[0.12]' />
        <div className='hidden sm:block absolute bottom-[12%] right-[7%] w-4 h-4 sm:w-5 sm:h-5 border-r border-b border-sky-400/[0.12]' />

        {/* HUD crosshair */}
        <div className='absolute top-1/2 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-sky-400/[0.10] to-transparent' />
        <div className='absolute left-1/2 top-[12%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-sky-400/[0.10] to-transparent' />
      </div>

      {/* Heading compass tape */}
      <div
        className='absolute top-[3%] left-0 right-0 flex items-center justify-center overflow-hidden pointer-events-none select-none'
        aria-hidden
      >
        <div className='flex items-center gap-4 sm:gap-8'>
          {HEADING_TICKS.map((tick, i) => (
            <div key={i} className='flex items-center gap-2 sm:gap-4'>
              <span
                className={`font-mono text-[8px] sm:text-[10px] tracking-[0.35em] tabular-nums ${String(tick) === '000' ? 'text-sky-500/25' : 'text-sky-500/15'}`}
              >
                {tick}
              </span>
              {i < HEADING_TICKS.length - 1 && (
                <span className='w-4 sm:w-8 h-px bg-sky-500/10' />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contrail traces */}
      <svg
        className='absolute inset-0 -z-10 w-full h-full pointer-events-none opacity-[0.12] dark:opacity-[0.10]'
        aria-hidden
      >
        <line
          x1='0'
          y1='60%'
          x2='100%'
          y2='18%'
          stroke='hsl(199 89% 58%)'
          strokeWidth='0.5'
          strokeDasharray='6 20'
          className='motion-safe:animate-flow-dash'
        />
        <line
          x1='4%'
          y1='68%'
          x2='96%'
          y2='24%'
          stroke='hsl(199 89% 58%)'
          strokeWidth='0.3'
          strokeDasharray='4 22'
          className='motion-safe:animate-flow-dash'
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      {/* Delta-wing watermark behind logo */}
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] pointer-events-none opacity-[0.05] dark:opacity-[0.07]'
        viewBox='0 0 100 100'
        aria-hidden
      >
        <path
          d='M 50 8 L 82 88 L 50 68 L 18 88 Z'
          fill='none'
          stroke='hsl(199 89% 58%)'
          strokeWidth='0.6'
          strokeLinejoin='round'
        />
        <path
          d='M 50 8 L 82 88 L 50 68 L 18 88 Z'
          fill='hsl(199 89% 58%)'
          opacity='0.15'
        />
      </svg>

      <div className='flex max-w-4xl flex-col items-center gap-10 text-center'>
        <img
          src='/tejas-logo.svg'
          alt='Tejas'
          className='h-32 w-32 shrink-0 opacity-0 animate-fade-in sm:h-40 sm:w-40 md:h-48 md:w-48'
          style={{ animationDelay: '0ms' }}
          width={192}
          height={192}
        />

        <div
          className='flex flex-col gap-5 opacity-0 animate-fade-in-up'
          style={{ animationDelay: '100ms' }}
        >
          <div className='flex flex-col items-center gap-3'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-600 dark:text-violet-300 uppercase'>
              <SparklesIcon className='h-3 w-3' />
              AI-Powered
            </span>
            <h1 className='font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent'>
              The AI-Native Node.js Framework
            </h1>
          </div>
        </div>

        {/* AI feature highlights */}
        <div
          className='flex flex-wrap items-center justify-center gap-2.5 opacity-0 animate-fade-in-up'
          style={{ animationDelay: '180ms' }}
        >
          {AI_HIGHLIGHTS.map(({ Icon, label }) => (
            <span
              key={label}
              className='inline-flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/[0.06] px-3 py-1.5 text-sm text-sky-700 dark:text-sky-300 transition-colors hover:bg-sky-500/10 hover:border-sky-500/30'
            >
              <Icon className='h-3.5 w-3.5 opacity-70' strokeWidth={2} />
              {label}
            </span>
          ))}
        </div>

        <div
          className='flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in-up'
          style={{ animationDelay: '260ms' }}
        >
          <Button
            size='lg'
            className='bg-sky-500 hover:bg-sky-600 text-white border-0 glow-sky'
            onClick={() => navigate('/docs')}
          >
            Get Started
            <ExternalLink className='ml-2 h-4 w-4' />
          </Button>
          <Button variant='outline' size='lg' className='border-border' asChild>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Github className='mr-2 h-4 w-4' />
              View on GitHub
            </a>
          </Button>
        </div>

        {/* Aviation telemetry strip */}
        <div
          className='flex items-center justify-center gap-3 sm:gap-5 select-none opacity-0 animate-fade-in'
          style={{ animationDelay: '480ms' }}
          aria-hidden
        >
          <span className='font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase'>
            MACH 1.8
          </span>
          <span className='text-muted-foreground/25 text-[10px]'>|</span>
          <span className='font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase'>
            FL 500
          </span>
          <span className='text-muted-foreground/25 text-[10px]'>|</span>
          <span className='font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase'>
            AI ARMED
          </span>
        </div>
      </div>

      <div className='horizon-line mt-8' aria-hidden />
    </section>
  )
}

export default HeroSection
