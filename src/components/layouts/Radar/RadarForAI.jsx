import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import {
  BotIcon,
  CodeIcon,
  RocketIcon
} from 'lucide-react'

const POINTS = [
  {
    Icon: BotIcon,
    title: 'AI Writes the Code',
    description:
      'Cursor, Copilot, v0, Bolt — AI tools are writing production backends right now. The developers using them need observability that just works, without learning Prometheus query syntax or setting up Grafana dashboards.',
    accent: 'sky'
  },
  {
    Icon: RocketIcon,
    title: 'Makers Ship Products',
    description:
      'Non-technical founders and solo makers are building and deploying real APIs. They don\'t have SRE teams. They can\'t afford to stitch together 6 paid tools. They need one line of code that handles everything.',
    accent: 'violet'
  },
  {
    Icon: CodeIcon,
    title: 'One Line Is All It Takes',
    description:
      'withRadar() gives you logs, metrics, errors, traces, spans, and privacy out of the box. No YAML configs. No sidecar containers. No Helm charts. If you can call a function, you can observe your entire production stack.',
    accent: 'emerald'
  }
]

const ACCENT_CLASSES = {
  sky: 'text-sky-500 dark:text-sky-400',
  violet: 'text-violet-500 dark:text-violet-400',
  emerald: 'text-emerald-500 dark:text-emerald-400'
}

const ACCENT_BARS = {
  sky: 'from-sky-500/80 to-sky-400/40',
  violet: 'from-violet-500/80 to-violet-400/40',
  emerald: 'from-emerald-500/80 to-emerald-400/40'
}

const RadarForAI = () => {
  const [sectionRef, sectionInView] = useInView()

  return (
    <section className='w-full'>
      <div className='mx-auto px-6 sm:px-10 lg:px-16 py-24'>
        <div
          ref={sectionRef}
          className={cn(
            'relative flex flex-col gap-10',
            'scroll-in-up',
            sectionInView && 'in-view'
          )}
        >
          <HudFrame callsign='RDR-AI // PARADIGM' size='lg' />

          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
              Built for the AI Age
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto'>
              When AI writes the code and anyone can ship a product,
              observability can&apos;t require a dedicated DevOps team.
            </p>
            <div className='bento-dark-divider mt-2' aria-hidden />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6'>
            {POINTS.map((point, index) => (
              <div
                key={point.title}
                data-accent={point.accent}
                className='bento-card bento-dark-card group flex flex-col rounded-xl overflow-hidden transition-all duration-300'
                style={{ transitionDelay: `${Math.min(index * 60, 120)}ms` }}
              >
                <div
                  className={cn(
                    'h-[2px] w-full bg-gradient-to-r',
                    ACCENT_BARS[point.accent]
                  )}
                />

                <div className='relative z-10 p-6 flex flex-col gap-3'>
                  <div className='flex items-center gap-2.5'>
                    <point.Icon
                      className={cn('h-5 w-5 shrink-0', ACCENT_CLASSES[point.accent])}
                      strokeWidth={2}
                    />
                    <h3 className='text-base font-bold text-foreground sm:text-lg'>
                      {point.title}
                    </h3>
                  </div>
                  <p className='text-sm leading-relaxed text-muted-foreground'>
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RadarForAI
