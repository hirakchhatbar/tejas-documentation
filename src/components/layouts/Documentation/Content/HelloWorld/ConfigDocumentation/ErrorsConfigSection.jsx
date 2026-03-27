import { Link } from 'react-router-dom'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'

const errorsLlmEnvExample = `# LLM — shared fallback for docs.llm and errors.llm when not overridden
LLM_BASE_URL=https://api.openai.com/v1
LLM_API_KEY=sk-...
LLM_MODEL=gpt-4o-mini

# errors.llm — LLM-inferred errors for ammo.throw()
ERRORS_LLM_ENABLED=true
ERRORS_LLM_MESSAGE_TYPE=endUser   # or "developer"

# Optional: async mode + output channels
ERRORS_LLM_MODE=async             # sync (default) | async
ERRORS_LLM_CHANNEL=both           # console (default) | log | both
ERRORS_LLM_LOG_FILE=./errors.llm.log

# Optional: usage control
ERRORS_LLM_TIMEOUT=10000          # ms, default 10s
ERRORS_LLM_RATE_LIMIT=10          # max LLM calls per minute
ERRORS_LLM_CACHE=true
ERRORS_LLM_CACHE_TTL=3600000      # ms, default 1 hour`

const errorsLlmJsonExample = `"errors": {
  "llm": {
    "enabled": true,
    "baseURL": "https://api.openai.com/v1",
    "apiKey": "sk-...",
    "model": "gpt-4o-mini",
    "messageType": "endUser",
    "mode": "async",
    "timeout": 10000,
    "channel": "both",
    "logFile": "./errors.llm.log",
    "rateLimit": 10,
    "cache": true,
    "cacheTTL": 3600000
  }
}`

const ErrorsConfigSection = () => {
  return (
    <section id='errors-object' className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold tracking-tight'>
        Errors object (
        <code className='rounded bg-muted px-1.5 py-0.5'>errors.llm</code>)
      </h2>
      <p className='text-muted-foreground'>
        When{' '}
        <Link
          to='/docs/llm-error-handling'
          className='text-sky-600 dark:text-sky-400 hover:underline'
        >
          LLM-inferred error codes and messages
        </Link>{' '}
        are enabled, the <strong>errors.llm</strong> block configures the LLM
        used when you call{' '}
        <code className='rounded bg-muted px-1.5 py-0.5'>ammo.throw()</code> —
        every throw is enriched with a devInsight for Radar, and bare errors get
        full status/message inference. The same mechanism applies when the
        framework catches an error. Unset values fall back to{' '}
        <code className='rounded bg-muted px-1.5 py-0.5'>LLM_BASE_URL</code>,{' '}
        <code className='rounded bg-muted px-1.5 py-0.5'>LLM_API_KEY</code>,{' '}
        <code className='rounded bg-muted px-1.5 py-0.5'>LLM_MODEL</code>. You
        can also enable programmatically with{' '}
        <strong>
          <code className='rounded bg-muted px-1.5 py-0.5'>
            app.withLLMErrors(config?)
          </code>
        </strong>{' '}
        before <code className='rounded bg-muted px-1.5 py-0.5'>takeoff()</code>
        .
      </p>

      <div className='flex flex-col gap-2'>
        <h3 className='text-base font-medium'>Enabling with code</h3>
        <p className='text-sm text-muted-foreground'>
          Call{' '}
          <code className='rounded bg-muted px-1.5 py-0.5'>
            app.withLLMErrors()
          </code>{' '}
          to enable using env/config for connection, or pass options including
          the new mode, channel, and usage control options.
        </p>
        <CodeBlock
          code={`app.withLLMErrors();
app.takeoff();

// With connection options:
app.withLLMErrors({ baseURL: 'https://api.openai.com/v1', apiKey: process.env.OPENAI_KEY, model: 'gpt-4o-mini' });
app.takeoff();

// With async mode and rate limiting:
app.withLLMErrors({ mode: 'async', channel: 'both', rateLimit: 20, cacheTTL: 86400000 });
app.takeoff();`}
          language='javascript'
          withCopy
          theme={tejasThemeBgCard}
        />
      </div>

      <div className='rounded-md border border-border overflow-x-auto'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-muted/50 border-b border-border'>
              <th className='text-left font-medium p-3'>Config key</th>
              <th className='text-left font-medium p-3'>Env variable</th>
              <th className='text-left font-medium p-3'>Type</th>
              <th className='text-left font-medium p-3'>Default</th>
              <th className='text-left font-medium p-3'>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.enabled
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_ENABLED
                </code>
              </td>
              <td className='p-3'>boolean</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>false</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                Enable LLM-inferred status and message for{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  ammo.throw()
                </code>{' '}
                (and framework-caught errors). When true, you must also set
                baseURL, apiKey, and model (or use{' '}
                <code className='rounded bg-muted px-1 py-0.5'>LLM_*</code>{' '}
                fallback).
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.baseURL
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_BASE_URL
                </code>
                ,{' '}
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  LLM_BASE_URL
                </code>
              </td>
              <td className='p-3'>string</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>—</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                LLM provider endpoint (e.g.{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  https://api.openai.com/v1
                </code>
                ). Required when{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  errors.llm.enabled
                </code>{' '}
                is true.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.apiKey
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_API_KEY
                </code>
                ,{' '}
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  LLM_API_KEY
                </code>
              </td>
              <td className='p-3'>string</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>—</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                LLM provider API key. Required when{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  errors.llm.enabled
                </code>{' '}
                is true.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.model
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_MODEL
                </code>
                ,{' '}
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  LLM_MODEL
                </code>
              </td>
              <td className='p-3'>string</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>—</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                LLM model name (e.g.{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  gpt-4o-mini
                </code>
                ). Required when{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  errors.llm.enabled
                </code>{' '}
                is true.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.messageType
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_MESSAGE_TYPE
                </code>
                ,{' '}
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  LLM_MESSAGE_TYPE
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted px-1 py-0.5'>"endUser"</code>{' '}
                |{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  "developer"
                </code>
              </td>
              <td className='p-3'>
                <code className='text-muted-foreground'>"endUser"</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                Default tone for the LLM-generated message.{' '}
                <strong>endUser</strong>: safe for clients.{' '}
                <strong>developer</strong>: technical detail. Overridable per{' '}
                <code className='rounded bg-muted px-1 py-0.5'>
                  ammo.throw()
                </code>{' '}
                call.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.mode
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_MODE
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted px-1 py-0.5'>"sync"</code> |{' '}
                <code className='rounded bg-muted px-1 py-0.5'>"async"</code>
              </td>
              <td className='p-3'>
                <code className='text-muted-foreground'>"sync"</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                <strong>sync</strong>: blocks the HTTP response until LLM
                returns. <strong>async</strong>: responds immediately with 500
                and dispatches the LLM result to the configured channel in the
                background. See{' '}
                <Link
                  to='/docs/llm-error-handling#async-mode'
                  className='text-sky-600 dark:text-sky-400 hover:underline'
                >
                  Async mode
                </Link>
                .
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.timeout
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_TIMEOUT
                </code>
                ,{' '}
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  LLM_TIMEOUT
                </code>
              </td>
              <td className='p-3'>number (ms)</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>10000</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                Maximum milliseconds to wait for an LLM response before
                aborting.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.channel
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_CHANNEL
                </code>
                ,{' '}
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  LLM_CHANNEL
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted px-1 py-0.5'>"console"</code>{' '}
                | <code className='rounded bg-muted px-1 py-0.5'>"log"</code> |{' '}
                <code className='rounded bg-muted px-1 py-0.5'>"both"</code>
              </td>
              <td className='p-3'>
                <code className='text-muted-foreground'>"console"</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                Output channel for async mode results. Only applies when{' '}
                <code className='rounded bg-muted px-1 py-0.5'>mode</code> is{' '}
                <code className='rounded bg-muted px-1 py-0.5'>"async"</code>.
                See{' '}
                <Link
                  to='/docs/llm-error-handling#channels'
                  className='text-sky-600 dark:text-sky-400 hover:underline'
                >
                  Output channels
                </Link>
                .
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.logFile
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_LOG_FILE
                </code>
              </td>
              <td className='p-3'>string (path)</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>
                  "./errors.llm.log"
                </code>
              </td>
              <td className='p-3 text-muted-foreground'>
                Path for the JSONL log file used by the{' '}
                <code className='rounded bg-muted px-1 py-0.5'>log</code> and{' '}
                <code className='rounded bg-muted px-1 py-0.5'>both</code>{' '}
                channels.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.rateLimit
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_RATE_LIMIT
                </code>
                ,{' '}
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  LLM_RATE_LIMIT
                </code>
              </td>
              <td className='p-3'>number</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>10</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                Max LLM calls per minute across all requests. Prevents API quota
                exhaustion during error bursts. Cached results do not count
                against this limit.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.cache
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_CACHE
                </code>
              </td>
              <td className='p-3'>boolean</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>true</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                Cache LLM results by throw site (file + line) and error message.
                Repeated errors at the same location reuse the cached result
                without calling the LLM again.
              </td>
            </tr>
            <tr className='border-b border-border'>
              <td className='p-3'>
                <code className='rounded bg-muted px-1.5 py-0.5 text-sm'>
                  errors.llm.cacheTTL
                </code>
              </td>
              <td className='p-3'>
                <code className='rounded bg-muted/80 px-1 py-0.5 text-xs'>
                  ERRORS_LLM_CACHE_TTL
                </code>
              </td>
              <td className='p-3'>number (ms)</td>
              <td className='p-3'>
                <code className='text-muted-foreground'>3600000</code>
              </td>
              <td className='p-3 text-muted-foreground'>
                How long cached results are reused (default 1 hour). After
                expiry the same error triggers a fresh LLM call.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='text-sm text-muted-foreground'>
        When{' '}
        <code className='rounded bg-muted px-1.5 py-0.5'>
          errors.llm.enabled
        </code>{' '}
        is true, the same behaviour applies whether you call{' '}
        <code className='rounded bg-muted px-1.5 py-0.5'>ammo.throw()</code> or
        the framework calls it when it catches an error — one mechanism, no
        separate config.
      </p>

      <div className='flex flex-col gap-2'>
        <h3 className='text-base font-medium'>Example: tejas.config.json</h3>
        <CodeBlock
          code={errorsLlmJsonExample}
          language='json'
          withCopy
          theme={tejasThemeBgCard}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-base font-medium'>Example: .env</h3>
        <CodeBlock
          code={errorsLlmEnvExample}
          language='bash'
          withCopy
          theme={tejasThemeBgCard}
        />
      </div>
    </section>
  )
}

export default ErrorsConfigSection
