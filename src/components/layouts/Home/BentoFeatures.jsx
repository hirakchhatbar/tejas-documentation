import AINativeVisual from '@/components/layouts/Home/AINativeVisual.jsx'
import AutoDocVisual from '@/components/layouts/Home/AutoDocVisual.jsx'
import DatabaseVisual from '@/components/layouts/Home/DatabaseVisual.jsx'
import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import ZeroConfigErrorVisual from '@/components/layouts/Home/ZeroConfigErrorVisual.jsx'
import RateLimitVisual from '@/components/layouts/Home/RateLimitVisual.jsx'
import SimpleRoutingVisual from '@/components/layouts/Home/SimpleRoutingVisual.jsx'
import featuresData from '@/data/web-content/home/features.js'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'

const VISUAL_MAP = {
  'AI-Native (MCP)': AINativeVisual,
  'Auto-Documentation': AutoDocVisual,
  'Zero-Config Error Handling': ZeroConfigErrorVisual,
  'Built-in Rate Limiting': RateLimitVisual,
  'Simple Routing': SimpleRoutingVisual,
  'Built-in Database': DatabaseVisual
}

const ACCENT_CLASSES = {
  sky: {
    icon: 'text-sky-500 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/10 ring-sky-500/20',
    bar: 'from-sky-500/80 to-sky-400/40'
  },
  amber: {
    icon: 'text-amber-500 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-400/10 ring-amber-500/20',
    bar: 'from-amber-500/80 to-amber-400/40'
  },
  violet: {
    icon: 'text-violet-500 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-400/10 ring-violet-500/20',
    bar: 'from-violet-500/80 to-violet-400/40'
  },
  emerald: {
    icon: 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-400/10 ring-emerald-500/20',
    bar: 'from-emerald-500/80 to-emerald-400/40'
  },
  rose: {
    icon: 'text-rose-500 dark:text-rose-400 bg-rose-500/10 dark:bg-rose-400/10 ring-rose-500/20',
    bar: 'from-rose-500/80 to-rose-400/40'
  }
}

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

const BentoFeatures = () => {
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
          <HudFrame callsign="TX-02 // SYSTEMS" size="lg" />

          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
              What&apos;s in Tejas
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-xl mx-auto'>
              Everything you need to build and fly backend services.
            </p>
            <div className='bento-dark-divider mt-2' aria-hidden />
          </div>

          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 list-none p-0 m-0'>
            {featuresData.map((feature, index) => {
              const accent =
                ACCENT_CLASSES[feature.accent] || ACCENT_CLASSES.sky
              return (
                <li
                  key={feature.title}
                  data-accent={feature.accent || 'sky'}
                  className={cn(
                    'bento-card bento-dark-card group flex flex-col rounded-xl overflow-hidden transition-all duration-300',
                    feature.span === 2 ? 'sm:col-span-2' : 'sm:col-span-1'
                  )}
                  style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
                >
                  {/* Accent gradient bar */}
                  <div
                    className={cn(
                      'h-[2px] w-full bg-gradient-to-r',
                      accent.bar
                    )}
                  />

                  <div className='relative z-10 p-6 pb-3 flex flex-col gap-2'>
                    <div className='flex items-center gap-2.5'>
                      <feature.Icon
                        className={cn(
                          'h-5 w-5 shrink-0',
                          accent.icon.split(' ')[0],
                          accent.icon.split(' ')[1]
                        )}
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

export default BentoFeatures
