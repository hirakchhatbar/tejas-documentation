import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import npxFlyTejas from '@/data/code-blocks/installation/npx-fly-tejas.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'

const NPXInstallation = () => {
  return (
    <section id="quick-start" className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold tracking-tight">Quick Start (npx)</h2>
      <p className="text-muted-foreground">
        The fastest way to get a te.js project is with the scaffold tool. From an empty directory, run:
      </p>

      <CodeBlock
        code="npx fly-tejas"
        language="bash"
        withCopy
        theme={tejasTheme}
      />

      <p className="text-sm text-muted-foreground">
        npx may prompt to install the package; type <code className="rounded bg-muted px-1.5 py-0.5">y</code> to proceed. The wizard will ask for project name, description, port (default 1403), and whether to log requests and exceptions. Example prompts:
      </p>
      {npxFlyTejas}

      <Card className="border-sky-500/30 bg-sky-500/5">
        <CardContent className="pt-6">
          <p className="font-medium mb-1">What just happened</p>
          <p className="text-sm text-muted-foreground">
            The scaffold created a new folder with <code className="rounded bg-muted px-1.5 py-0.5">package.json</code>, <code className="rounded bg-muted px-1.5 py-0.5">tejas.config.json</code>, an entry file (e.g. <code className="rounded bg-muted px-1.5 py-0.5">app.js</code>), and installed te.js. You can change port and logging later in <code className="rounded bg-muted px-1.5 py-0.5">tejas.config.json</code> or via environment variables.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

export default NPXInstallation
