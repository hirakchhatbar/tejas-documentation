import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import featuresData from '@/data/web-content/home/features.js'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'

const BentoFeatures = () => {
  const [sectionRef, sectionInView] = useInView()

  return (
    <section className="w-full" id="features">
      <SectionWrapper className="max-w-5xl">
        <div ref={sectionRef} className={cn('flex flex-col gap-10', 'scroll-in-up', sectionInView && 'in-view')}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What&apos;s in te.js?
            </h2>
            <div className="horizon-line mt-2" aria-hidden />
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
            {featuresData.map((feature, index) => {
              const isLarge = feature.size === 'large'
              const Icon = feature.Icon
              return (
                <li
                  key={`bento-${index}`}
                  className={cn(
                    'bento-card flex flex-col gap-3 rounded-lg border bg-card/60 p-5 shadow-sm transition-all duration-200',
                    'hover:bg-card hover:shadow-md hover:-translate-y-0.5',
                    isLarge
                      ? 'border-gradient-sky hover-glow-sky lg:col-span-2'
                      : 'border-border hover:border-sky-500/30'
                  )}
                  style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
                >
                  {Icon && (
                    <Icon
                      className="h-10 w-10 shrink-0 text-sky-500"
                      aria-hidden
                    />
                  )}
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="text-sm font-medium text-foreground sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default BentoFeatures
