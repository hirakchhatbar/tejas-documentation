import CodeBlock from '@/components/shared/CodeBlock.jsx'
import appJs from '@/data/code-blocks/hello-world/appjs.jsx'
import { configFileBasic } from '@/data/code-blocks/hello-world/configuration.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { cn } from '@/lib/utils.js'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator.jsx'
import HTTPRequestLogs from '@/components/layouts/Documentation/Content/HelloWorld/HTTPRequestLogs.jsx'
import ExceptionLog from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/ExceptionLog.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'

const Summary = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      <p className="text-muted-foreground">
        If you used <code className="rounded bg-muted px-1.5 py-0.5">npx fly-tejas</code>, you already have a runnable app. Use <code className="rounded bg-muted px-1.5 py-0.5">npm run start</code> or <code className="rounded bg-muted px-1.5 py-0.5">npx tejas fly</code> and explore the generated files. If you installed manually, follow the steps below to build a minimal Hello World app.
      </p>

      <section id="build-your-first-app" className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold tracking-tight">Build your first app</h2>

        <div id="create-config" className="flex flex-col gap-3">
          <h3 className="text-base font-medium">1. Create tejas.config.json</h3>
          <p className="text-sm text-muted-foreground">
            Create <code className="rounded bg-muted px-1.5 py-0.5">tejas.config.json</code> in your project root with the content below. For all options and other ways to configure (e.g. .env, constructor), see <Link to="/docs/configuration" className="text-sky-600 dark:text-sky-400 hover:underline">Configuration</Link>.
          </p>
          <CodeBlock
            code={configFileBasic}
            language="json"
            withCopy
            theme={tejasTheme}
          />
        </div>

        <div id="create-app-js" className="flex flex-col gap-3">
          <h3 className="text-base font-medium">2. Create app.js</h3>
          <p className="text-sm text-muted-foreground">
            Create an entry file that instantiates Tejas and starts the server.
          </p>
          <CodeBlock
            code={appJs}
            language="javascript"
            withCopy
            theme={tejasTheme}
          />
        </div>

        <div id="run-the-app" className="flex flex-col gap-3">
          <h3 className="text-base font-medium">3. Run the app</h3>
          <p className="text-sm text-muted-foreground">
            From the project root, start the server with the te.js CLI:
          </p>
          <CodeBlock
            code={`npx tejas fly
# or specify the entry file:
npx tejas fly app.js`}
            language="bash"
            withCopy
            theme={tejasTheme}
          />
          <p className="text-sm text-muted-foreground">
            When the server is up, you’ll see output indicating the port (e.g. 1403). Open{' '}
            <a
              href="http://localhost:1403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:underline"
            >
              http://localhost:1403
            </a>
            {' '}in your browser to verify. A blank or minimal response is normal until you add targets (routes) in the next guides.
          </p>
          <Card className="border-sky-500/30 bg-sky-500/5">
            <CardContent className="pt-6">
              <p className="font-medium mb-1">Expected output</p>
              <p className="text-sm text-muted-foreground">
                The terminal will show the resolved entry file and that the server is listening on the configured port (e.g. <code className="rounded bg-muted px-1.5 py-0.5">Listening on port 1403</code> or similar). You can then send requests to that port.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <p className="text-sm text-muted-foreground">
        For the full list of configuration options and other ways to configure te.js (config file, .env, constructor), see the <Link to="/docs/configuration" className="text-sky-600 dark:text-sky-400 hover:underline">Configuration</Link> page.
      </p>

      <Separator orientation="horizontal" />

      <HTTPRequestLogs />

      <Separator orientation="horizontal" />

      <ExceptionLog />
    </div>
  )
}

export default Summary
