import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import {
  tejasStyle,
  expressStyle,
  globalMiddleware,
  targetMiddleware,
  routeMiddleware,
  authPattern,
  expressMiddleware,
  asyncMiddleware,
  terminatingEarly
} from '@/data/code-blocks/middleware/index.js'

const Middleware = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Middleware functions in Tejas intercept requests before they reach your route handlers. They can modify the request, perform checks, or terminate the request early.
      </p>

      <div id="middleware-signature" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Middleware Signature</h2>
        <p>Tejas supports two middleware signatures:</p>
        <div id="tejas-style" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Tejas Style (Recommended)</h3>
          <CodeBlock code={tejasStyle} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="express-style" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Express Style (Compatible)</h3>
          <CodeBlock code={expressStyle} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <p className="text-sm text-muted-foreground">
          Tejas automatically detects which style you&apos;re using based on the function&apos;s argument count: functions with 3 parameters are treated as Express-style <code>(req, res, next)</code>, while functions with 2 parameters are treated as Tejas-style <code>(ammo, next)</code>.
        </p>
      </div>

      <Separator orientation="horizontal" />

      <div id="middleware-levels" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Middleware Levels</h2>
        <div id="global-middleware" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">1. Global Middleware</h3>
          <p>Applied to <strong>all routes</strong> in your application:</p>
          <CodeBlock code={globalMiddleware} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="target-middleware" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">2. Target Middleware</h3>
          <p>Applied to <strong>all routes in a Target</strong>:</p>
          <CodeBlock code={targetMiddleware} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="route-middleware" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">3. Route Middleware</h3>
          <p>Applied to a <strong>specific route</strong> only:</p>
          <CodeBlock code={routeMiddleware} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="execution-order" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Execution Order</h2>
        <p>Middleware executes in this order: Global (app.midair) → Target (target.midair) → Route (in register()) → Route Handler.</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="common-patterns" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Common Middleware Patterns</h2>
        <div id="authentication" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Authentication</h3>
          <CodeBlock code={authPattern} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="using-express-middleware" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Using Express Middleware</h2>
        <p>Tejas is compatible with Express middleware. You can use packages like cors, helmet, and compression directly:</p>
        <CodeBlock code={expressMiddleware} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="async-middleware" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Async Middleware</h2>
        <p>Middleware can be async. Errors thrown inside async middleware are automatically caught by the framework:</p>
        <CodeBlock code={asyncMiddleware} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="terminating-early" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Terminating Early</h2>
        <p>To stop the middleware chain, send a response without calling <code>next()</code>. Once a response is sent, the framework stops executing further middleware or the handler:</p>
        <CodeBlock code={terminatingEarly} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="best-practices" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
          <li><strong>Keep middleware focused</strong> — Each middleware should do one thing</li>
          <li><strong>Always call next()</strong> — Unless intentionally terminating the chain</li>
          <li><strong>Handle errors</strong> — Use try/catch in async middleware</li>
          <li><strong>Use factories</strong> — For configurable middleware</li>
          <li><strong>Order matters</strong> — Place authentication before authorization</li>
        </ul>
      </div>
    </div>
  )
}

export default Middleware
