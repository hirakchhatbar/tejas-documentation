import { Button } from '@/components/ui/button.jsx'
import {
  ActivityIcon,
  ExternalLink,
  GaugeIcon,
  ShieldCheckIcon,
  GitBranchIcon,
  ScrollTextIcon,
  AlertTriangleIcon,
  BookOpen
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RADAR_URL = 'https://radar.usetejas.com'

const FEATURE_PILLS = [
  { Icon: ActivityIcon, label: 'Logs' },
  { Icon: GaugeIcon, label: 'Metrics' },
  { Icon: GitBranchIcon, label: 'Traces' },
  { Icon: AlertTriangleIcon, label: 'Errors' },
  { Icon: ScrollTextIcon, label: 'Spans' },
  { Icon: ShieldCheckIcon, label: 'Privacy' }
]

const HEADING_TICKS = [120, 150, 180, 210, 240, 270, 300]

const RadarHero = () => {
  const navigate = useNavigate()

  return (
    <section className='relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24'>
      <div
        className='absolute inset-0 -z-10 overflow-hidden pointer-events-none hero-grid opacity-50'
        aria-hidden
      />

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

      {/* HUD brackets */}
      <div className='absolute inset-0 -z-10 pointer-events-none' aria-hidden>
        <div className='absolute top-[8%] left-[4%] w-6 h-6 sm:w-9 sm:h-9 border-l border-t border-sky-400/[0.22]' />
        <div className='absolute top-[8%] right-[4%] w-6 h-6 sm:w-9 sm:h-9 border-r border-t border-sky-400/[0.22]' />
        <div className='absolute bottom-[8%] left-[4%] w-6 h-6 sm:w-9 sm:h-9 border-l border-b border-sky-400/[0.22]' />
        <div className='absolute bottom-[8%] right-[4%] w-6 h-6 sm:w-9 sm:h-9 border-r border-b border-sky-400/[0.22]' />

        <div className='hidden sm:block absolute top-[12%] left-[7%] w-4 h-4 sm:w-5 sm:h-5 border-l border-t border-sky-400/[0.12]' />
        <div className='hidden sm:block absolute top-[12%] right-[7%] w-4 h-4 sm:w-5 sm:h-5 border-r border-t border-sky-400/[0.12]' />
        <div className='hidden sm:block absolute bottom-[12%] left-[7%] w-4 h-4 sm:w-5 sm:h-5 border-l border-b border-sky-400/[0.12]' />
        <div className='hidden sm:block absolute bottom-[12%] right-[7%] w-4 h-4 sm:w-5 sm:h-5 border-r border-b border-sky-400/[0.12]' />

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
                className={`font-mono text-[8px] sm:text-[10px] tracking-[0.35em] tabular-nums ${tick === 210 ? 'text-sky-500/25' : 'text-sky-500/15'}`}
              >
                {String(tick).padStart(3, '0')}
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

      {/* Radar sweep watermark */}
      <svg
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] pointer-events-none opacity-[0.04] dark:opacity-[0.06]'
        viewBox='0 0 100 100'
        aria-hidden
      >
        <circle cx='50' cy='50' r='40' fill='none' stroke='hsl(199 89% 58%)' strokeWidth='0.5' />
        <circle cx='50' cy='50' r='28' fill='none' stroke='hsl(199 89% 58%)' strokeWidth='0.4' />
        <circle cx='50' cy='50' r='16' fill='none' stroke='hsl(199 89% 58%)' strokeWidth='0.3' />
        <line x1='50' y1='10' x2='50' y2='90' stroke='hsl(199 89% 58%)' strokeWidth='0.3' />
        <line x1='10' y1='50' x2='90' y2='50' stroke='hsl(199 89% 58%)' strokeWidth='0.3' />
        <path d='M 50 50 L 50 10 A 40 40 0 0 1 82 30 Z' fill='hsl(199 89% 58%)' opacity='0.15' />
      </svg>

      <div className='flex max-w-4xl flex-col items-center gap-10 text-center'>
        <img
          src='/tejas-logo.svg'
          alt='Tejas'
          className='h-28 w-28 shrink-0 opacity-0 animate-fade-in sm:h-36 sm:w-36 md:h-40 md:w-40'
          style={{ animationDelay: '0ms' }}
          width={160}
          height={160}
        />

        <div
          className='flex flex-col gap-5 opacity-0 animate-fade-in-up'
          style={{ animationDelay: '100ms' }}
        >
          <div className='flex flex-col items-center gap-3'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-medium tracking-wide text-sky-600 dark:text-sky-300 uppercase'>
              <ActivityIcon className='h-3 w-3' />
              Tejas Radar
            </span>
            <h1 className='font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap'>
              10+ Tools, One Line of Code.
            </h1>
          </div>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Logs, metrics, errors, traces, spans, privacy — everything you need
            to observe your production API, replacing Datadog, Sentry, Grafana,
            and more. Just add <code className='text-sky-500 dark:text-sky-400'>withRadar()</code> and
            you&apos;re done. No infra. No DevOps. No config files.
          </p>
        </div>

        <div
          className='flex flex-wrap items-center justify-center gap-2.5 opacity-0 animate-fade-in-up'
          style={{ animationDelay: '180ms' }}
        >
          {FEATURE_PILLS.map(({ Icon, label }) => (
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
            onClick={() => navigate('/docs/radar')}
          >
            <BookOpen className='mr-2 h-4 w-4' />
            Get Started
          </Button>
          <Button variant='outline' size='lg' className='border-border' asChild>
            <a href={RADAR_URL} target='_blank' rel='noopener noreferrer'>
              Sign Up
              <ExternalLink className='ml-2 h-4 w-4' />
            </a>
          </Button>
        </div>

        {/* Telemetry strip */}
        <div
          className='flex items-center justify-center gap-3 sm:gap-5 select-none opacity-0 animate-fade-in'
          style={{ animationDelay: '380ms' }}
          aria-hidden
        >
          <span className='font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase'>
            RDR ACTIVE
          </span>
          <span className='text-muted-foreground/25 text-[10px]'>|</span>
          <span className='font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase'>
            SWEEP 360
          </span>
          <span className='text-muted-foreground/25 text-[10px]'>|</span>
          <span className='font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground/40 uppercase'>
            ALL CLEAR
          </span>
        </div>
      </div>

      <div className='horizon-line mt-8' aria-hidden />
    </section>
  )
}

export default RadarHero
