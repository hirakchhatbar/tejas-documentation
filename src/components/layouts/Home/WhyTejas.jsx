import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import comparisonData from '@/data/web-content/home/comparison.js'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'

const WhyTejas = () => {
  const [ref, inView] = useInView()

  return (
    <section className="w-full" id="why-tejas">
      <SectionWrapper className="max-w-4xl">
        <div ref={ref} className={cn('flex flex-col gap-10', 'scroll-in-up', inView && 'in-view')}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Why Tejas?
            </h2>
            <div className="horizon-line mt-2" aria-hidden />
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-3 bg-muted/30">
              <div className="hidden border-b border-border p-4 font-medium text-foreground sm:block sm:border-b-0" />
              <div className="border-b border-border p-4 text-center font-medium text-foreground sm:border-b-0">
                Tejas
              </div>
              <div className="border-b border-border p-4 text-center font-medium text-muted-foreground sm:border-b-0">
                Express
              </div>
            </div>
            {comparisonData.map((row, index) => {
              const Icon = row.Icon
              const isLast = index === comparisonData.length - 1
              return (
                <div
                  key={row.topic}
                  className={cn(
                    'grid grid-cols-1 gap-0 sm:grid-cols-3',
                    !isLast && 'border-b border-border'
                  )}
                >
                  <div className="flex items-center gap-3 border-b border-border p-4 sm:border-b-0 sm:border-r border-border">
                    {Icon && (
                      <Icon className="h-5 w-5 shrink-0 text-sky-500" aria-hidden />
                    )}
                    <span className="font-medium text-foreground">{row.topic}</span>
                  </div>
                  <div className="border-b border-border p-4 text-sm text-muted-foreground sm:border-b-0 sm:border-r border-border sm:bg-sky-500/5">
                    <span className="text-foreground">{row.tejas}</span>
                  </div>
                  <div className="p-4 text-sm text-muted-foreground">
                    {row.express}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default WhyTejas
