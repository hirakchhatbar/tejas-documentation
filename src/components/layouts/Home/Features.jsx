import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import featuresData from '@/data/web-content/home/features.js'
import { cn } from '@/lib/utils.js'

const Features = () => {
  return (
    <SectionWrapper className="items-center max-w-6xl">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center">
        Why te.js should be your choice of framework?
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className={cn(
              'flex flex-col gap-3 p-5 rounded-lg border border-border bg-card/50',
              'text-center items-center transition-colors',
              'hover:border-sky-500/30 hover:bg-card'
            )}
          >
            {feature.Icon && (
              <feature.Icon className="w-8 h-8 text-sky-500 shrink-0" />
            )}
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Features
