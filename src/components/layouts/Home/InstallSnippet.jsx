import HudFrame from '@/components/layouts/Home/HudFrame.jsx'
import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import { useInView } from '@/hooks/useInView.js'
import { cn } from '@/lib/utils.js'
import { SparklesIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const MCP_CLIENTS = [
  { label: 'Cursor' },
  { label: 'Claude Code' },
  { label: 'VS Code' },
  { label: 'Codex' },
  { label: 'OpenCode' }
]

const EXAMPLE_PROMPTS = [
  'Scaffold a new te.js project called my-api',
  'Create a REST API with user CRUD routes using te.js'
]

const InstallSnippet = () => {
  const [ref, inView] = useInView()

  return (
    <section className="w-full" id="install">
      <SectionWrapper className="max-w-5xl">
        <div ref={ref} className={cn('relative flex flex-col gap-8', 'scroll-in-up', inView && 'in-view')}>
          <HudFrame callsign="TX-01 // CONNECT" />

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center sm:text-3xl">
                Up and running in seconds
              </h2>
              <span className="inline-flex items-center rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-600 dark:text-sky-400 border border-sky-500/25">
                AI
              </span>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xl">
              Add the Tejas MCP server to your AI assistant, then ask it to scaffold a project.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-muted-foreground text-center">Ways to connect</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {MCP_CLIENTS.map((client) => (
                <Link
                  key={client.label}
                  to="/docs/installation#mcp-setup"
                  className="inline-flex items-center rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground hover:bg-muted/70 hover:border-sky-500/30 transition-colors"
                >
                  {client.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
            <p className="text-sm font-medium text-muted-foreground">Then ask your AI</p>
            <div className="relative flex flex-col gap-2 rounded-lg border border-border overflow-hidden bg-muted/20 p-4">
              {EXAMPLE_PROMPTS.map((prompt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-md border border-border bg-background/80 px-3 py-2.5"
                >
                  <SparklesIcon className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground italic">&ldquo;{prompt}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center">
            <Link
              to="/docs/installation#mcp-setup"
              className="text-sm text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:no-underline"
            >
              Set up Tejas MCP in your IDE →
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default InstallSnippet
