import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import {
  ActivityIcon,
  AlertTriangleIcon,
  GaugeIcon,
  GitBranchIcon,
  LayoutDashboardIcon,
  RadioIcon,
  RefreshCwIcon,
  ScrollTextIcon,
  ShieldCheckIcon
} from 'lucide-react'
import RequestLoggingVisual from '@/components/layouts/Radar/visuals/RequestLoggingVisual.jsx'
import ErrorTrackingVisual from '@/components/layouts/Radar/visuals/ErrorTrackingVisual.jsx'
import DistributedTracingVisual from '@/components/layouts/Radar/visuals/DistributedTracingVisual.jsx'
import MetricsVisual from '@/components/layouts/Radar/visuals/MetricsVisual.jsx'
import LogForwardingVisual from '@/components/layouts/Radar/visuals/LogForwardingVisual.jsx'
import GDPRPrivacyVisual from '@/components/layouts/Radar/visuals/GDPRPrivacyVisual.jsx'
import DashboardVisual from '@/components/layouts/Radar/visuals/DashboardVisual.jsx'

const ACCENT_CLASSES = {
  sky: {
    icon: 'text-sky-500 dark:text-sky-400',
    bar: 'from-sky-500/80 to-sky-400/40'
  },
  amber: {
    icon: 'text-amber-500 dark:text-amber-400',
    bar: 'from-amber-500/80 to-amber-400/40'
  },
  violet: {
    icon: 'text-violet-500 dark:text-violet-400',
    bar: 'from-violet-500/80 to-violet-400/40'
  },
  emerald: {
    icon: 'text-emerald-500 dark:text-emerald-400',
    bar: 'from-emerald-500/80 to-emerald-400/40'
  },
  rose: {
    icon: 'text-rose-500 dark:text-rose-400',
    bar: 'from-rose-500/80 to-rose-400/40'
  }
}

const VISUAL_MAP = {
  'Request Logging': RequestLoggingVisual,
  'Error Tracking': ErrorTrackingVisual,
  'Distributed Tracing': DistributedTracingVisual,
  'Metrics & Latency': MetricsVisual,
  'App Log Forwarding': LogForwardingVisual,
  'GDPR Privacy': GDPRPrivacyVisual,
  Dashboard: DashboardVisual
}

const FEATURES = [
  {
    Icon: ActivityIcon,
    title: 'Request Logging',
    description:
      'Every HTTP request is captured automatically — method, path, status, duration, sizes, IP, and user agent. No manual instrumentation needed.',
    accent: 'sky',
    span: 2
  },
  {
    Icon: AlertTriangleIcon,
    title: 'Error Tracking',
    description:
      'Errors with status >= 400 are fingerprinted and tracked with full stack traces, endpoint context, and trace correlation.',
    accent: 'amber'
  },
  {
    Icon: GitBranchIcon,
    title: 'Distributed Tracing',
    description:
      'Each request gets a unique trace ID propagated via AsyncLocalStorage. Spans track handler execution with OpenTelemetry-style IDs.',
    accent: 'violet'
  },
  {
    Icon: GaugeIcon,
    title: 'Metrics & Latency',
    description:
      'Track response times, payload sizes, request volume per endpoint, and status code distribution — all captured automatically with every request.',
    accent: 'emerald'
  },
  {
    Icon: ScrollTextIcon,
    title: 'App Log Forwarding',
    description:
      'Forward TejLogger calls to Radar with automatic trace correlation. Filter by log level — only capture what matters.',
    accent: 'emerald'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'GDPR Privacy',
    description:
      'Client-side field masking plus non-bypassable server-side GDPR scrubbing on the collector. Sensitive data never reaches storage.',
    accent: 'rose',
    span: 2
  },
  {
    Icon: RefreshCwIcon,
    title: 'Retry & Batching',
    description:
      'Events are batched in memory and flushed on interval or threshold. Failed sends retry automatically up to 3 times with queue overflow protection.',
    accent: 'sky'
  },
  {
    Icon: LayoutDashboardIcon,
    title: 'Dashboard',
    description:
      'A full web dashboard for browsing projects, searching logs, inspecting traces, and drilling into errors — all powered by ClickHouse.',
    accent: 'sky',
    span: 2
  },
  {
    Icon: RadioIcon,
    title: 'Real-time Live Tail',
    description:
      'Stream incoming requests and errors in real time via Redis-powered live tail. Debug production issues as they happen without waiting for batch flushes.',
    accent: 'violet'
  }
]

function CardVisual({ feature }) {
  const Visual = VISUAL_MAP[feature.title]
  if (Visual) return <Visual />

  const Icon = feature.Icon
  const accent = ACCENT_CLASSES[feature.accent] || ACCENT_CLASSES.sky
  return (
    <div
      className='bento-placeholder w-full h-full flex items-center justify-center'
      aria-hidden
    >
      {Icon && (
        <div className={cn('rounded-2xl p-4 ring-1', accent.icon)}>
          <Icon className='h-10 w-10' strokeWidth={1.4} aria-hidden />
        </div>
      )}
    </div>
  )
}

const RadarFeatures = () => {
  const [sectionRef, sectionInView] = useInView()

  return (
    <section className='w-full' id='features'>
      <div className='mx-auto px-6 sm:px-10 lg:px-16 py-24'>
        <div
          ref={sectionRef}
          className={cn(
            'relative flex flex-col gap-10',
            'scroll-in-up',
            sectionInView && 'in-view'
          )}
        >
          <HudFrame callsign='RDR-01 // SYSTEMS' size='lg' />

          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
              What Radar Tracks
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-xl mx-auto'>
              Full-stack observability from a single middleware call.
            </p>
            <div className='bento-dark-divider mt-2' aria-hidden />
          </div>

          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 list-none p-0 m-0'>
            {FEATURES.map((feature, index) => {
              const accent = ACCENT_CLASSES[feature.accent]
              return (
                <li
                  key={feature.title}
                  data-accent={feature.accent}
                  className={cn(
                    'bento-card bento-dark-card group flex flex-col rounded-xl overflow-hidden transition-all duration-300',
                    feature.span === 2 ? 'sm:col-span-2' : 'sm:col-span-1'
                  )}
                  style={{
                    transitionDelay: `${Math.min(index * 60, 300)}ms`
                  }}
                >
                  <div
                    className={cn(
                      'h-[2px] w-full bg-gradient-to-r',
                      accent.bar
                    )}
                  />

                  <div className='relative z-10 p-6 pb-3 flex flex-col gap-2'>
                    <div className='flex items-center gap-2.5'>
                      <feature.Icon
                        className={cn('h-5 w-5 shrink-0', accent.icon)}
                        strokeWidth={2}
                      />
                      <h3 className='text-base font-bold text-foreground sm:text-lg'>
                        {feature.title}
                      </h3>
                    </div>
                    <p className='text-sm leading-relaxed text-muted-foreground'>
                      {feature.description}
                    </p>
                  </div>

                  <div className='bento-dark-visual relative flex-1 min-h-[200px] overflow-hidden'>
                    <CardVisual feature={feature} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RadarFeatures
