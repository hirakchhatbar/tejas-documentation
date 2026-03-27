import { Button } from '@/components/ui/button.jsx'
import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import {
  ActivityIcon,
  AlertTriangleIcon,
  ArrowRight,
  ExternalLink,
  GaugeIcon,
  GitBranchIcon,
  ShieldCheckIcon,
  ScrollTextIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RADAR_URL = 'https://radar.usetejas.com'

const HIGHLIGHTS = [
  {
    Icon: ActivityIcon,
    title: 'Request Logging',
    desc: 'Every HTTP request captured automatically — method, path, status, latency.',
    accent: 'sky'
  },
  {
    Icon: AlertTriangleIcon,
    title: 'Error Tracking',
    desc: 'Fingerprinted errors with full stack traces and trace correlation.',
    accent: 'amber'
  },
  {
    Icon: GitBranchIcon,
    title: 'Distributed Tracing',
    desc: 'Unique trace IDs per request with OpenTelemetry-style span tracking.',
    accent: 'violet'
  },
  {
    Icon: GaugeIcon,
    title: 'Metrics & Latency',
    desc: 'Response times, payload sizes, volume per endpoint — all automatic.',
    accent: 'emerald'
  },
  {
    Icon: ScrollTextIcon,
    title: 'Log Forwarding',
    desc: 'Forward TejLogger calls to Radar with automatic trace correlation.',
    accent: 'emerald'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'GDPR Privacy',
    desc: 'Client-side masking plus server-side scrubbing. PII never reaches storage.',
    accent: 'rose'
  }
]

const ACCENT = {
  sky: 'text-sky-500 dark:text-sky-400',
  amber: 'text-amber-500 dark:text-amber-400',
  violet: 'text-violet-500 dark:text-violet-400',
  emerald: 'text-emerald-500 dark:text-emerald-400',
  rose: 'text-rose-500 dark:text-rose-400'
}

const RadarSection = () => {
  const navigate = useNavigate()
  const [ref, inView] = useInView()

  return (
    <section className='w-full' id='radar'>
      <div className='mx-auto px-6 sm:px-10 lg:px-16 py-24'>
        <div
          ref={ref}
          className={cn(
            'relative flex flex-col gap-12',
            'scroll-in-up',
            inView && 'in-view'
          )}
        >
          <HudFrame callsign='TX-04 // RADAR' size='lg' />

          {/* Radar sweep watermark */}
          <svg
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] pointer-events-none opacity-[0.03] dark:opacity-[0.04]'
            viewBox='0 0 100 100'
            aria-hidden
          >
            <circle
              cx='50'
              cy='50'
              r='40'
              fill='none'
              stroke='hsl(199 89% 58%)'
              strokeWidth='0.5'
            />
            <circle
              cx='50'
              cy='50'
              r='28'
              fill='none'
              stroke='hsl(199 89% 58%)'
              strokeWidth='0.4'
            />
            <circle
              cx='50'
              cy='50'
              r='16'
              fill='none'
              stroke='hsl(199 89% 58%)'
              strokeWidth='0.3'
            />
            <line
              x1='50'
              y1='10'
              x2='50'
              y2='90'
              stroke='hsl(199 89% 58%)'
              strokeWidth='0.3'
            />
            <line
              x1='10'
              y1='50'
              x2='90'
              y2='50'
              stroke='hsl(199 89% 58%)'
              strokeWidth='0.3'
            />
            <path
              d='M 50 50 L 50 10 A 40 40 0 0 1 82 30 Z'
              fill='hsl(199 89% 58%)'
              opacity='0.15'
            />
          </svg>

          <div className='text-center space-y-3'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-medium tracking-wide text-sky-600 dark:text-sky-300 uppercase'>
              <ActivityIcon className='h-3 w-3' />
              Tejas Radar
            </span>
            <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
              Full Observability, One Line of Code
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto'>
              Logs, metrics, errors, traces, and privacy — everything you need
              to observe your production API. Replace Datadog, Sentry, Grafana,
              and more.
            </p>
            <div className='bento-dark-divider mt-2' aria-hidden />
          </div>

          {/* withRadar() showcase */}
          <div className='relative max-w-lg mx-auto w-full'>
            <div
              className='bento-dark-card rounded-xl overflow-hidden'
              data-accent='sky'
            >
              <div className='h-[2px] w-full bg-gradient-to-r from-sky-500/80 to-sky-400/40' />
              <div className='p-6 sm:p-8 text-center'>
                <code className='font-mono text-lg sm:text-xl md:text-2xl font-semibold text-sky-400'>
                  app.withRadar({'{ apiKey }'})
                </code>
                <p className='font-mono text-xs text-muted-foreground/40 mt-3'>
                  One line &middot; Zero config &middot; Full observability
                </p>
              </div>
            </div>
            <div className='absolute -inset-1 rounded-xl bg-sky-500/5 blur-xl -z-10' />
          </div>

          {/* Feature highlights grid */}
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0'>
            {HIGHLIGHTS.map((item, index) => (
              <li
                key={item.title}
                className='bento-card bento-dark-card group flex items-start gap-3.5 rounded-xl p-5 transition-all duration-300'
                style={{ transitionDelay: `${Math.min(index * 50, 250)}ms` }}
              >
                <item.Icon
                  className={cn('h-5 w-5 shrink-0 mt-0.5', ACCENT[item.accent])}
                  strokeWidth={2}
                />
                <div className='flex flex-col gap-1'>
                  <h3 className='text-sm font-bold text-foreground'>
                    {item.title}
                  </h3>
                  <p className='text-xs leading-relaxed text-muted-foreground'>
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Button
              size='lg'
              className='bg-sky-500 hover:bg-sky-600 text-white border-0'
              onClick={() => navigate('/radar')}
            >
              Learn More
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-border'
              asChild
            >
              <a href={RADAR_URL} target='_blank' rel='noopener noreferrer'>
                Sign Up Free
                <ExternalLink className='ml-2 h-4 w-4' />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RadarSection
