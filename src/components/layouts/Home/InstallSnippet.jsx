import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { useInView } from '@/hooks/useInView.js'
import initializeTejas from '@/data/code-blocks/initialize-tejas.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { cn } from '@/lib/utils.js'

const InstallSnippet = () => {
  const [ref, inView] = useInView()

  return (
    <section className="w-full" id="install">
      <SectionWrapper className="max-w-5xl">
        <div ref={ref} className={cn('flex flex-col gap-8', 'scroll-in-up', inView && 'in-view')}>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center sm:text-3xl">
            Up and running in seconds
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-muted-foreground">Terminal</p>
              <div
                className="rounded-lg border border-border overflow-hidden bg-zinc-950/80 p-4 font-mono text-sm text-foreground"
                aria-label="Install commands"
              >
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="text-muted-foreground">$</span>{' '}
                    <span>npm install te.js</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">$</span>{' '}
                    <span>npx fly-tejas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-muted-foreground">Your first app</p>
              <CodeBlock
                language="javascript"
                theme={tejasThemeBgCard}
                code={initializeTejas}
                className="rounded-lg border border-border overflow-hidden border-l-2 border-l-sky-500/30"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default InstallSnippet
