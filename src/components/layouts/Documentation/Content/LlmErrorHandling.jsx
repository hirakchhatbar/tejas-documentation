import { Link } from 'react-router-dom'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import {
  llmInferredExample,
  ammoThrowExample,
  asyncModeEnvExample,
  asyncModeConfigExample,
  asyncModeCodeExample,
  rateLimitExample,
  cachingExample
} from '@/data/code-blocks/error-handling/index.js'

const LlmErrorHandling = () => {
  return (
    <div className='flex flex-col gap-10'>
      <p className='text-muted-foreground'>
        When <strong>LLM-inferred errors</strong> are enabled, Tejas uses an LLM
        to infer HTTP status code and message from your{' '}
        <strong>code context</strong> — the source surrounding{' '}
        <code>ammo.throw()</code> (with line numbers) and all upstream (callers)
        and downstream (code that would run next) context. You do not pass an
        error object; the LLM infers from control flow and intent. This is part
        of the same{' '}
        <Link
          to='/docs/error-handling'
          className='text-sky-600 dark:text-sky-400 hover:underline'
        >
          error-handling mechanism
        </Link>
        : one <code>ammo.throw()</code> for both explicit and framework-caught
        errors.
      </p>

      <div id='how-it-works' className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold tracking-tight'>How it works</h2>
        <ul className='ml-6 list-disc space-y-1 text-muted-foreground'>
          <li>
            <strong>No error object required:</strong> Call{' '}
            <code>ammo.throw()</code> with no arguments (or only options). The
            framework captures the code around the call site and upstream stack
            and sends it to the LLM.
          </li>
          <li>
            <strong>Opt-in:</strong> Enable via config{' '}
            <code>errors.llm.enabled: true</code> and set{' '}
            <code>errors.llm</code> (baseURL, apiKey, model), or call{' '}
            <code>app.withLLMErrors()</code> /{' '}
            <code>
              app.withLLMErrors({'{ baseURL, apiKey, model, messageType }'})
            </code>{' '}
            before <code>takeoff()</code>. See{' '}
            <Link
              to='/docs/configuration#errors-object'
              className='text-sky-600 dark:text-sky-400 hover:underline'
            >
              Configuration → Errors object
            </Link>
            .
          </li>
          <li>
            <strong>Framework-caught errors:</strong> When the framework catches
            an unhandled error, it uses the same <code>ammo.throw(err)</code> —
            so the same <code>errors.llm</code> config applies. One mechanism,
            no separate &quot;log then send response&quot;.
          </li>
          <li>
            <strong>Message type:</strong> Set{' '}
            <code>errors.llm.messageType</code> to{' '}
            <code>&quot;endUser&quot;</code> (default) or{' '}
            <code>&quot;developer&quot;</code>. Override per call (see Per-call
            overrides below).
          </li>
          <li>
            <strong>Override:</strong> Whenever you pass a status code or
            message (e.g.{' '}
            <code>ammo.throw(404, &apos;User not found&apos;)</code>), that
            value is used; the LLM is not called.
          </li>
        </ul>
        <CodeBlock
          code={llmInferredExample}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <div id='response-structure' className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Response structure
        </h2>
        <p className='text-muted-foreground'>
          The response is an HTTP status code set by the LLM and a JSON body.
          The body always includes a <code>message</code> field. In{' '}
          <strong>non-production</strong> (
          <code>NODE_ENV !== &quot;production&quot;</code>), when the LLM
          provides developer insight, the body also includes <code>_dev</code> —
          a short note for the developer (e.g. bug vs environment, suggested
          fix). <code>_dev</code> is never sent in production.
        </p>
        <CodeBlock
          code={`// Production or no dev insight:
{ "message": "Not found" }

// Non-production with LLM dev insight:
{ "message": "Not found", "_dev": "Resource ID may be missing or invalid. Check the route parameter." }`}
          language='json'
          withCopy
          theme={tejasTheme}
        />
      </div>

      <div id='per-call-overrides' className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Per-call overrides
        </h2>
        <p className='text-muted-foreground'>
          For any LLM-eligible <code>ammo.throw()</code> call, pass an options
          object as the last argument: <code>useLlm</code> (boolean) to skip the
          LLM for this call, and <code>messageType</code> (
          <code>&quot;endUser&quot;</code> | <code>&quot;developer&quot;</code>)
          to override the configured default for this call only.
        </p>
        <CodeBlock
          code={ammoThrowExample}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <div id='async-mode' className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold tracking-tight'>Async mode</h2>
        <p className='text-muted-foreground'>
          By default (<code>errors.llm.mode: &apos;sync&apos;</code>),{' '}
          <code>ammo.throw()</code> blocks the HTTP response until the LLM
          returns — typically 1–3 seconds. Set{' '}
          <strong>
            <code>mode</code> to <code>&apos;async&apos;</code>
          </strong>{' '}
          to respond immediately with a generic <code>500</code> and run the LLM
          in the background. The result is dispatched to the configured channel
          once ready — the client never waits.
        </p>
        <ul className='ml-6 list-disc space-y-1 text-muted-foreground'>
          <li>
            The HTTP response is always <code>500 Internal Server Error</code>{' '}
            in async mode. The LLM-inferred status and message only appear in
            the channel output.
          </li>
          <li>
            Developer insight is <strong>always</strong> included in the
            channel, even in production — it never reaches the HTTP response.
          </li>
          <li>
            If the background LLM call fails or times out, it is silently
            swallowed. The response has already been sent.
          </li>
        </ul>
        <CodeBlock
          code={asyncModeEnvExample}
          language='bash'
          withCopy
          theme={tejasTheme}
        />
        <CodeBlock
          code={asyncModeConfigExample}
          language='json'
          withCopy
          theme={tejasTheme}
        />
        <CodeBlock
          code={asyncModeCodeExample}
          language='javascript'
          withCopy
          theme={tejasTheme}
        />
      </div>

      <div id='channels' className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Output channels
        </h2>
        <p className='text-muted-foreground'>
          In async mode, the LLM result is sent to the configured{' '}
          <code>errors.llm.channel</code> after the response is sent.
        </p>
        <div className='rounded-md border border-border overflow-x-auto'>
          <table className='w-full text-sm border-collapse'>
            <thead>
              <tr className='bg-muted/50 border-b border-border'>
                <th className='text-left font-medium p-3'>Channel</th>
                <th className='text-left font-medium p-3'>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-border'>
                <td className='p-3'>
                  <code className='rounded bg-muted px-1.5 py-0.5'>
                    &quot;console&quot;
                  </code>{' '}
                  <span className='text-muted-foreground text-xs'>
                    (default)
                  </span>
                </td>
                <td className='p-3 text-muted-foreground'>
                  Pretty-printed colored block in the terminal: timestamp,
                  method+path, inferred status, message, dev insight. Shows{' '}
                  <code>[CACHED]</code> or <code>[RATE LIMITED]</code> flags.
                </td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3'>
                  <code className='rounded bg-muted px-1.5 py-0.5'>
                    &quot;log&quot;
                  </code>
                </td>
                <td className='p-3 text-muted-foreground'>
                  Appends a JSON line to <code>errors.llm.logFile</code>{' '}
                  (default <code>./errors.llm.log</code>). Each entry contains
                  all fields: timestamp, method, path, statusCode, message,
                  devInsight, original error, code context snippets, and flags.
                </td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3'>
                  <code className='rounded bg-muted px-1.5 py-0.5'>
                    &quot;both&quot;
                  </code>
                </td>
                <td className='p-3 text-muted-foreground'>
                  Console and log file simultaneously.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='text-sm text-muted-foreground'>
          The log file uses <strong>JSONL format</strong> (one JSON object per
          line), making it easy to read with log tools or ingest into Radar.
        </p>
      </div>

      <div id='rate-limiting' className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold tracking-tight'>Rate limiting</h2>
        <p className='text-muted-foreground'>
          Set <code>errors.llm.rateLimit</code> (default <code>10</code>) to cap
          the number of LLM calls per minute across all requests. This prevents
          a burst of errors from exhausting your API quota.
        </p>
        <CodeBlock
          code={rateLimitExample}
          language='bash'
          withCopy
          theme={tejasTheme}
        />
        <ul className='ml-6 list-disc space-y-1 text-muted-foreground'>
          <li>
            <strong>Sync mode:</strong> responds with{' '}
            <code>500 Internal Server Error</code> when the limit is exceeded.
          </li>
          <li>
            <strong>Async mode:</strong> the channel still receives a dispatch
            with a <code>rateLimited</code> flag so the occurrence is recorded
            even without LLM enhancement.
          </li>
          <li>
            Cached results do <strong>not</strong> count against the rate limit.
          </li>
        </ul>
      </div>

      <div id='error-caching' className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold tracking-tight'>Error caching</h2>
        <p className='text-muted-foreground'>
          By default (<code>errors.llm.cache: true</code>), Tejas caches LLM
          results by throw site and error message. Repeated errors at the same
          file and line reuse the cached result without calling the LLM again.
          The cache key is <code>file:line:errorMessage</code>. Configure the
          TTL to control how long results are reused — after expiry, the next
          occurrence triggers a fresh LLM call.
        </p>
        <CodeBlock
          code={cachingExample}
          language='bash'
          withCopy
          theme={tejasTheme}
        />
        <p className='text-sm text-muted-foreground'>
          To effectively <strong>only enhance new errors</strong>, keep caching
          enabled with a long TTL. Cached results show a <code>[CACHED]</code>{' '}
          flag in console output and a <code>cached: true</code> field in the
          log.
        </p>
      </div>

      <div id='using-ammo-throw' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Using ammo.throw()
        </h2>
        <p className='text-muted-foreground'>
          Call <code>ammo.throw()</code> with <strong>no arguments</strong> to
          let the LLM infer status and message from code context. You can pass
          an optional caught error as a secondary signal. Use options{' '}
          <code>{'{ useLlm, messageType }'}</code> to override per call. The
          framework will not execute further middleware or the route handler
          after a response is sent.
        </p>
      </div>
    </div>
  )
}

export default LlmErrorHandling
