import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { useInView } from '@/hooks/useInView.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { cn } from '@/lib/utils.js'

const mcpConfig = `{
  "mcpServers": {
    "tejas": {
      "command": "npx",
      "args": ["-y", "tejas-mcp"]
    }
  }
}`

const AINativeSection = () => {
  const [ref, inView] = useInView()

  return (
    <section className="w-full" id="ai-native">
      <SectionWrapper className="max-w-4xl">
        <div ref={ref} className={cn('flex flex-col gap-8', 'scroll-in-up', inView && 'in-view')}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Your AI Already Knows Tejas
            </h2>
            <div className="horizon-line mt-2" aria-hidden />
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Tejas ships with an MCP server so AI assistants like Cursor and Claude can scaffold
            projects, generate routes, and write correct te.js code with full framework knowledge.
            No more hallucinated APIs.
          </p>
          <div className="rounded-xl border-gradient-sky bg-card/60 p-6 glow-sky sm:p-8">
            <p className="mb-3 text-sm font-medium text-foreground">
              Add to <code className="rounded bg-muted px-1.5 py-0.5 text-xs">.cursor/mcp.json</code>
            </p>
            <CodeBlock
              language="json"
              theme={tejasThemeBgCard}
              code={mcpConfig}
              className="rounded-lg border border-border overflow-hidden"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default AINativeSection
