import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import featuresData from '@/data/web-content/home/features.js'
import { cn } from '@/lib/utils.js'

const WhatsInTejs = () => {
  return (
    <section className="w-full" id="whats-in-tejs">
      <SectionWrapper className="items-center max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center">
          What&apos;s in te.js?
        </h2>
        <div className="horizon-line mb-2" aria-hidden />
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
          {featuresData.map((feature, index) => (
            <li
              key={`whats-${index}`}
              className={cn(
                'flex flex-col gap-3 p-5 rounded-lg border border-border bg-card/60 shadow-sm',
                'transition-all duration-200 hover:border-sky-500/30 hover:bg-card hover:shadow-md hover:-translate-y-0.5',
                'opacity-0 animate-fade-in-up'
              )}
              style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
            >
              {feature.Icon && (
                <feature.Icon
                  className="w-10 h-10 text-sky-500 shrink-0"
                  aria-hidden
                />
              )}
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  )
}

export default WhatsInTejs
