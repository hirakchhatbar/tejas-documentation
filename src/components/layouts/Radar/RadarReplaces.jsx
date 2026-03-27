import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import {
  ActivityIcon,
  AlertTriangleIcon,
  BarChart3Icon,
  BellRingIcon,
  GitBranchIcon,
  MonitorIcon,
  ArrowRightIcon
} from 'lucide-react'

const REPLACED_TOOLS = [
  {
    Icon: ActivityIcon,
    category: 'Log Aggregation',
    examples: 'Datadog Logs, Logtail, Papertrail'
  },
  {
    Icon: AlertTriangleIcon,
    category: 'Error Tracking',
    examples: 'Sentry, Bugsnag, Rollbar'
  },
  {
    Icon: GitBranchIcon,
    category: 'APM & Tracing',
    examples: 'New Relic, Jaeger, Zipkin'
  },
  {
    Icon: BarChart3Icon,
    category: 'Metrics & Dashboards',
    examples: 'Grafana, Prometheus, Datadog APM'
  },
  {
    Icon: MonitorIcon,
    category: 'Request Inspection',
    examples: 'LogRocket, Treblle, Requestly'
  },
  {
    Icon: BellRingIcon,
    category: 'Alerting & On-call',
    examples: 'PagerDuty, Opsgenie, Better Stack'
  }
]

const CODE_LINE = 'app.withRadar({ apiKey })'

const RadarReplaces = () => {
  const [sectionRef, sectionInView] = useInView()

  return (
    <section className='w-full'>
      <div className='mx-auto px-6 sm:px-10 lg:px-16 py-24'>
        <div
          ref={sectionRef}
          className={cn(
            'relative flex flex-col gap-12',
            'scroll-in-up',
            sectionInView && 'in-view'
          )}
        >
          <HudFrame callsign='RDR-00 // CONSOLIDATE' size='lg' />

          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
              Replace Your Entire Stack
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto'>
              Engineers typically stitch together 6+ paid services to get
              production visibility. Radar does it all.
            </p>
            <div className='bento-dark-divider mt-2' aria-hidden />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto'>
            {/* Left: tools being replaced */}
            <div className='flex flex-col gap-3'>
              {REPLACED_TOOLS.map((tool, i) => (
                <div
                  key={tool.category}
                  className='bento-card bento-dark-card group flex flex-col rounded-xl overflow-hidden transition-all duration-300'
                  data-accent='rose'
                  style={{ transitionDelay: `${Math.min(i * 60, 300)}ms` }}
                >
                  <div className='h-px w-full bg-gradient-to-r from-rose-500/40 to-rose-400/20' />
                  <div className='flex items-center gap-4 p-4'>
                    <tool.Icon
                      className='h-5 w-5 shrink-0 text-muted-foreground/40'
                      strokeWidth={1.8}
                    />
                    <div className='flex-1 min-w-0'>
                      <span className='text-sm font-medium text-muted-foreground/60 line-through decoration-muted-foreground/30'>
                        {tool.category}
                      </span>
                      <p className='text-xs text-muted-foreground/30 truncate'>
                        {tool.examples}
                      </p>
                    </div>
                    <span className='text-xs text-muted-foreground/20 font-mono'>
                      $$$
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: the one line */}
            <div className='flex flex-col items-center gap-6'>
              <ArrowRightIcon className='h-8 w-8 text-sky-500/40 hidden lg:block' />

              <div className='relative w-full'>
                <div
                  className='bento-dark-card rounded-xl overflow-hidden'
                  data-accent='sky'
                >
                  <div className='h-[2px] w-full bg-gradient-to-r from-sky-500/80 to-sky-400/40' />
                  <div className='p-8 text-center'>
                    <p className='font-mono text-sm text-muted-foreground/50 mb-3'>
                      All replaced by:
                    </p>
                    <code className='font-mono text-lg sm:text-xl md:text-2xl font-semibold text-sky-400'>
                      {CODE_LINE}
                    </code>
                    <p className='font-mono text-xs text-muted-foreground/30 mt-4'>
                      One line &middot; Zero config &middot; Full observability
                    </p>
                  </div>
                </div>

                <div className='absolute -inset-1 rounded-xl bg-sky-500/5 blur-xl -z-10' />
              </div>

              <div className='flex flex-col items-center gap-1 text-center'>
                <span className='text-sm font-medium text-foreground'>
                  Free tier included
                </span>
                <span className='text-xs text-muted-foreground'>
                  No credit card &middot; No vendor lock-in &middot; GDPR
                  compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RadarReplaces
