import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { declarativeMethods, inlineOnly } from '@/data/code-blocks/routing/method-restriction.js'
import { Link } from 'react-router-dom'

const MethodRestriction = () => {
  return (
    <div id="method-restriction" className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold tracking-tight">Restricting HTTP methods</h2>
      <p className="text-muted-foreground">
        By default, routes accept any of the allowed HTTP methods. You can restrict a route to specific methods in two ways: declaratively via <code className="rounded bg-muted px-1.5 py-0.5">register(path, {'{ methods }'}, handler)</code>, or inline with <Link to="/docs/ammo#only" className="text-sky-600 dark:text-sky-400 hover:underline">ammo.only()</Link>. When you allow GET, HEAD is allowed automatically.
      </p>

      <div id="declarative-methods" className="flex flex-col gap-2">
        <h3 className="text-base font-medium">Declarative methods</h3>
        <p className="text-sm text-muted-foreground">
          Pass a metadata object as the second argument with a <code className="rounded bg-muted px-1 py-0.5">methods</code> array. The framework responds with 405 and an <code>Allow</code> header for disallowed methods before your handler runs.
        </p>
        <CodeBlock
          code={declarativeMethods}
          language="javascript"
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <div id="inline-only" className="flex flex-col gap-2">
        <h3 className="text-base font-medium">Inline: ammo.only()</h3>
        <p className="text-sm text-muted-foreground">
          Call <code className="rounded bg-muted px-1 py-0.5">ammo.only('GET')</code> (or multiple methods) at the start of the handler. If the request method is not in the list, the framework sets the <code>Allow</code> header and throws 405.
        </p>
        <CodeBlock
          code={inlineOnly}
          language="javascript"
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Endpoints without allowed methods trigger a one-time runtime warning per path. To disable it, set <code className="rounded bg-muted px-1 py-0.5">WARN_MISSING_ALLOWED_METHODS=false</code> (env) or <code className="rounded bg-muted px-1 py-0.5">warn_missing_allowed_methods: false</code> in config. See <Link to="/docs/configuration#available-options" className="text-sky-600 dark:text-sky-400 hover:underline">Configuration</Link>.
      </p>
    </div>
  )
}

export default MethodRestriction
