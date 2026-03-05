import { Link } from 'react-router-dom'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'

const errorsLlmEnvExample = `# LLM — shared fallback for docs.llm and errors.llm when not overridden
LLM_BASE_URL=https://api.openai.com/v1
LLM_API_KEY=sk-...
LLM_MODEL=gpt-4o-mini

# Optional: errors.llm (LLM-inferred errors for ammo.throw())
ERRORS_LLM_ENABLED=true
ERRORS_LLM_MESSAGE_TYPE=endUser   # or "developer"`

const errorsLlmJsonExample = `"errors": {
  "llm": {
    "enabled": true,
    "baseURL": "https://api.openai.com/v1",
    "apiKey": "sk-...",
    "model": "gpt-4o-mini",
    "messageType": "endUser"
  }
}`

const ErrorsConfigSection = () => {
  return (
    <section id="errors-object" className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">
        Errors object (<code className="rounded bg-muted px-1.5 py-0.5">errors.llm</code>)
      </h2>
      <p className="text-muted-foreground">
        When{' '}
        <Link to="/docs/llm-error-handling" className="text-sky-600 dark:text-sky-400 hover:underline">
          LLM-inferred error codes and messages
        </Link>{' '}
        are enabled, the <strong>errors.llm</strong> block configures the LLM used when you call{' '}
        <code className="rounded bg-muted px-1.5 py-0.5">ammo.throw()</code> without explicit code or message — and when the framework catches an error (same mechanism). Unset values fall back to <code className="rounded bg-muted px-1.5 py-0.5">LLM_BASE_URL</code>, <code className="rounded bg-muted px-1.5 py-0.5">LLM_API_KEY</code>, <code className="rounded bg-muted px-1.5 py-0.5">LLM_MODEL</code>. You can also enable programmatically with <strong><code className="rounded bg-muted px-1.5 py-0.5">app.withLLMErrors(config?)</code></strong> before <code className="rounded bg-muted px-1.5 py-0.5">takeoff()</code>.
      </p>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium">Enabling with code</h3>
        <p className="text-sm text-muted-foreground">
          Call <code className="rounded bg-muted px-1.5 py-0.5">app.withLLMErrors()</code> to enable using env/config for connection, or pass options: <code className="rounded bg-muted px-1.5 py-0.5">app.withLLMErrors({'{ baseURL, apiKey, model, messageType }'})</code>. Call before <code className="rounded bg-muted px-1.5 py-0.5">takeoff()</code>.
        </p>
        <CodeBlock code={`app.withLLMErrors();
app.takeoff();

// Or with options:
app.withLLMErrors({ baseURL: 'https://api.openai.com/v1', apiKey: process.env.OPENAI_KEY, model: 'gpt-4o-mini' });
app.takeoff();`} language="javascript" withCopy theme={tejasThemeBgCard} />
      </div>

      <div className="rounded-md border border-border overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left font-medium p-3">Config key</th>
              <th className="text-left font-medium p-3">Env variable</th>
              <th className="text-left font-medium p-3">Type</th>
              <th className="text-left font-medium p-3">Default</th>
              <th className="text-left font-medium p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3"><code className="rounded bg-muted px-1.5 py-0.5 text-sm">errors.llm.enabled</code></td>
              <td className="p-3"><code className="rounded bg-muted/80 px-1 py-0.5 text-xs">ERRORS_LLM_ENABLED</code></td>
              <td className="p-3">boolean</td>
              <td className="p-3"><code className="text-muted-foreground">false</code></td>
              <td className="p-3 text-muted-foreground">Enable LLM-inferred status and message for <code className="rounded bg-muted px-1 py-0.5">ammo.throw()</code> (and framework-caught errors). When true, you must also set baseURL, apiKey, and model (or use <code className="rounded bg-muted px-1 py-0.5">LLM_*</code> fallback).</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3"><code className="rounded bg-muted px-1.5 py-0.5 text-sm">errors.llm.baseURL</code></td>
              <td className="p-3"><code className="rounded bg-muted/80 px-1 py-0.5 text-xs">ERRORS_LLM_BASE_URL</code>, <code className="rounded bg-muted/80 px-1 py-0.5 text-xs">LLM_BASE_URL</code></td>
              <td className="p-3">string</td>
              <td className="p-3"><code className="text-muted-foreground">—</code></td>
              <td className="p-3 text-muted-foreground">LLM provider endpoint (e.g. <code className="rounded bg-muted px-1 py-0.5">https://api.openai.com/v1</code>). Required when <code className="rounded bg-muted px-1 py-0.5">errors.llm.enabled</code> is true.</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3"><code className="rounded bg-muted px-1.5 py-0.5 text-sm">errors.llm.apiKey</code></td>
              <td className="p-3"><code className="rounded bg-muted/80 px-1 py-0.5 text-xs">ERRORS_LLM_API_KEY</code>, <code className="rounded bg-muted/80 px-1 py-0.5 text-xs">LLM_API_KEY</code></td>
              <td className="p-3">string</td>
              <td className="p-3"><code className="text-muted-foreground">—</code></td>
              <td className="p-3 text-muted-foreground">LLM provider API key. Required when <code className="rounded bg-muted px-1 py-0.5">errors.llm.enabled</code> is true.</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3"><code className="rounded bg-muted px-1.5 py-0.5 text-sm">errors.llm.model</code></td>
              <td className="p-3"><code className="rounded bg-muted/80 px-1 py-0.5 text-xs">ERRORS_LLM_MODEL</code>, <code className="rounded bg-muted/80 px-1 py-0.5 text-xs">LLM_MODEL</code></td>
              <td className="p-3">string</td>
              <td className="p-3"><code className="text-muted-foreground">—</code></td>
              <td className="p-3 text-muted-foreground">LLM model name (e.g. <code className="rounded bg-muted px-1 py-0.5">gpt-4o-mini</code>). Required when <code className="rounded bg-muted px-1 py-0.5">errors.llm.enabled</code> is true.</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3"><code className="rounded bg-muted px-1.5 py-0.5 text-sm">errors.llm.messageType</code></td>
              <td className="p-3"><code className="rounded bg-muted/80 px-1 py-0.5 text-xs">ERRORS_LLM_MESSAGE_TYPE</code>, <code className="rounded bg-muted/80 px-1 py-0.5 text-xs">LLM_MESSAGE_TYPE</code></td>
              <td className="p-3"><code className="rounded bg-muted px-1 py-0.5">"endUser"</code> | <code className="rounded bg-muted px-1 py-0.5">"developer"</code></td>
              <td className="p-3"><code className="text-muted-foreground">"endUser"</code></td>
              <td className="p-3 text-muted-foreground">Default tone for the LLM-generated message: <strong>endUser</strong> (safe for clients, no internal detail) or <strong>developer</strong> (technical, for debugging). Overridable per <code className="rounded bg-muted px-1 py-0.5">ammo.throw()</code> call with <code className="rounded bg-muted px-1 py-0.5">{'{ messageType }'}</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground">
        When <code className="rounded bg-muted px-1.5 py-0.5">errors.llm.enabled</code> is true, the same behaviour applies whether you call <code className="rounded bg-muted px-1.5 py-0.5">ammo.throw()</code> or the framework calls it when it catches an error — one mechanism, no separate config.
      </p>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium">Example: tejas.config.json</h3>
        <CodeBlock code={errorsLlmJsonExample} language="json" withCopy theme={tejasThemeBgCard} />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-medium">Example: .env</h3>
        <CodeBlock code={errorsLlmEnvExample} language="bash" withCopy theme={tejasThemeBgCard} />
      </div>
    </section>
  )
}

export default ErrorsConfigSection
