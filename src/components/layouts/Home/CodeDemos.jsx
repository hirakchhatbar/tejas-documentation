import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import codeDemosData from '@/data/web-content/home/code-demos.js'
import { useInView } from '@/hooks/useInView.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { cn } from '@/lib/utils.js'

const CodeDemos = () => {
  const [ref, inView] = useInView()
  const firstTitle = codeDemosData[0]?.title ?? 'Routing'

  return (
    <section className="w-full" id="code-demos">
      <SectionWrapper className="max-w-5xl">
        <div ref={ref} className={cn('flex flex-col gap-8', 'scroll-in-up', inView && 'in-view')}>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            See it in code
          </h2>
          <Tabs defaultValue={firstTitle} className="w-full">
            <TabsList className="mb-4 w-full flex flex-wrap justify-start gap-1 bg-muted/50 p-1">
              {codeDemosData.map((tab) => (
                <TabsTrigger
                  key={tab.title}
                  value={tab.title}
                  className="data-[state=active]:bg-sky-500/20 data-[state=active]:text-sky-600 dark:data-[state=active]:text-sky-400"
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {codeDemosData.map((tab) => (
              <TabsContent key={tab.title} value={tab.title} className="focus-visible:outline-none mt-0">
                <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-5">
                  <div className="flex flex-col justify-center lg:col-span-2">
                    <h3 className="text-lg font-medium text-foreground">{tab.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tab.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <CodeBlock
                      language={tab.language}
                      theme={tejasThemeBgCard}
                      code={tab.code}
                      className="rounded-lg border border-border overflow-hidden border-l-2 border-l-sky-500/30"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default CodeDemos
