import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import { Card } from '@/components/ui/card.jsx'
import {
  quickStartRedis,
  quickStartMongo,
  bothTogether,
  redisBasic,
  mongoBasic,
  gettingConnections,
  routeHandlerRedis
} from '@/data/code-blocks/database/index.js'

const Database = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Tejas provides built-in support for <strong>MongoDB</strong> and <strong>Redis</strong> databases through a centralized DatabaseManager.
      </p>

      <div id="quick-start" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Quick Start</h2>
        <div id="redis" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Redis</h3>
          <CodeBlock code={quickStartRedis} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="mongodb" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">MongoDB</h3>
          <CodeBlock code={quickStartMongo} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="both-together" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Both Together</h3>
          <CodeBlock code={bothTogether} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <Card className="p-4 border-sky-500/30">
          <p className="text-sm font-medium">Auto-install:</p>
          <p className="text-sm text-muted-foreground">Tejas automatically installs the <code>redis</code> or <code>mongoose</code> npm packages on first use if they are not already in your node_modules. No manual <code>npm install</code> is required for database drivers.</p>
        </Card>
      </div>

      <Separator orientation="horizontal" />

      <div id="redis-configuration" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Redis Configuration</h2>
        <div id="redis-basic" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Basic Connection</h3>
          <CodeBlock code={redisBasic} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="mongodb-configuration" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">MongoDB Configuration</h2>
        <div id="mongo-basic" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Basic Connection</h3>
          <CodeBlock code={mongoBasic} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="using-connections" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Using Database Connections</h2>
        <div id="getting-connections" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Getting Connections</h3>
          <p>Import the database manager to access connections:</p>
          <CodeBlock code={gettingConnections} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="route-handlers" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">In Route Handlers</h3>
          <CodeBlock code={routeHandlerRedis} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="database-manager-api" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Database Manager API</h2>
        <p className="text-muted-foreground">Access the database manager via <code>te.js/database/index.js</code> for <code>getConnection()</code>, <code>hasConnection()</code>, <code>getActiveConnections()</code>, <code>closeConnection()</code>, and <code>closeAllConnections()</code>.</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="best-practices" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
          <li><strong>Initialize early</strong> — Set up connections before takeoff()</li>
          <li><strong>Handle errors</strong> — Always wrap database operations in try/catch</li>
          <li><strong>Use connection pooling</strong> — MongoDB handles this automatically</li>
          <li><strong>Close on shutdown</strong> — Clean up connections when the app terminates</li>
        </ul>
      </div>
    </div>
  )
}

export default Database
