import { Link } from 'react-router-dom'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import { Card } from '@/components/ui/card.jsx'
import { cleanCode, tejError, enableLogging, convenienceMethods, ammoThrowExample } from '@/data/code-blocks/error-handling/index.js'

const ErrorHandling = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Tejas keeps your app from crashing on unhandled errors. You don&apos;t log the error and send the response separately — <strong><code>ammo.throw()</code> is the single mechanism</strong>: it sends the appropriate HTTP response (logging is optional via <code>log.exceptions</code>). Whether you call <code>ammo.throw()</code> or the framework calls it when it catches an error, the same behaviour applies. For LLM-inferred status and message from code context, see <Link to="/docs/llm-error-handling" className="text-sky-600 dark:text-sky-400 hover:underline">LLM Error Handling</Link> in the AI Native section.
      </p>

      <div id="zero-config" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Zero-Config Error Handling</h2>
        <Card className="p-4 border-sky-500/30">
          <p className="font-medium">One mechanism: <code>ammo.throw()</code> takes care of everything</p>
          <p className="text-sm text-muted-foreground mt-1">— you don&apos;t log the error and send the response separately. The framework uses the same <code>ammo.throw()</code> when it catches an error, so one config, one behaviour.</p>
        </Card>
        <div id="how-it-works" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">How It Works</h3>
          <p>Tejas wraps all middleware and route handlers with built-in error catching. Any error thrown in your code is automatically passed to <code>ammo.throw(err)</code> — the same method you use for intentional errors. One place handles the response (and optional logging via <code>log.exceptions</code>). No separate &quot;log then send response&quot;.</p>
        </div>
        <div id="clean-code" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Write Clean Code Without Try-Catch</h3>
          <CodeBlock code={cleanCode} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="error-logging" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Enable Error Logging</h3>
          <CodeBlock code={enableLogging} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="tej-error" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">TejError Class</h2>
        <p>Use <code>TejError</code> for throwing HTTP errors. Both status code and message are <strong>optional</strong> when <Link to="/docs/llm-error-handling" className="text-sky-600 dark:text-sky-400 hover:underline">LLM-inferred errors</Link> are enabled; otherwise, or to override, supply them explicitly.</p>
        <CodeBlock code={tejError} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="convenience-methods" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Convenience Methods</h2>
        <p><code>Ammo</code> provides shortcut methods for common errors:</p>
        <CodeBlock code={convenienceMethods} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="ammo-throw" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Using ammo.throw()</h2>
        <p className="text-muted-foreground">For more control, use <code>ammo.throw()</code>. For LLM-inferred status and message, see <Link to="/docs/llm-error-handling" className="text-sky-600 dark:text-sky-400 hover:underline">LLM Error Handling</Link>. You can pass an optional caught error as a secondary signal. The framework will not execute further middleware or the route handler after a response is sent.</p>
        <CodeBlock code={ammoThrowExample} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="best-practices" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
          <li>Use <code>TejError</code> for intentional HTTP errors (4xx, 5xx)</li>
          <li>Enable <code>log.exceptions</code> in development to debug</li>
          <li>Let the framework catch errors; avoid wrapping every handler in try/catch unless you need custom handling</li>
        </ul>
      </div>
    </div>
  )
}

export default ErrorHandling
