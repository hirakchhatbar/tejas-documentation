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
        to enrich <strong>every</strong> <code>ammo.throw()</code> call with a{' '}
        <code>devInsight</code> — a developer-facing diagnostic hint surfaced in
        Tejas Radar. For bare Error objects and no-arg throws, the LLM also
        infers the HTTP status code and message from your{' '}
        <strong>code context</strong> (the source surrounding the call site with
        line numbers, upstream callers, and downstream code). When you pass an
        explicit status code or message, those values are always preserved — the
        LLM only adds insight. This is part of the same{' '}
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
            <strong>Every throw is enriched:</strong> When enabled, every{' '}
            <code>ammo.throw()</code> call — with or without explicit arguments
            — is analyzed by the LLM to produce a <code>devInsight</code>{' '}
            surfaced in Tejas Radar.
          </li>
          <li>
            <strong>Explicit codes are preserved:</strong> When you pass a
            status code or message (e.g.{' '}
            <code>ammo.throw(404, &apos;User not found&apos;)</code>), those
            values are always used for the HTTP response. The LLM only adds
            diagnostic insight.
          </li>
          <li>
            <strong>Full inference for bare errors:</strong> Call{' '}
            <code>ammo.throw()</code> with no arguments or a bare Error object
            and the LLM infers the status code, message, and devInsight from
            code context.
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
          For any <code>ammo.throw()</code> call, pass an options object as the
          last argument: <code>useLlm</code> (boolean) to skip the LLM for this
          specific call, and <code>messageType</code> (
          <code>&quot;endUser&quot;</code> | <code>&quot;developer&quot;</code>)
          to override the configured default. This works with every throw
          signature, including explicit status codes.
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
          to respond immediately with the resolved status code and message and
          run the LLM in the background. The devInsight is dispatched to the
          configured channel once ready — the client never waits.
        </p>
        <ul className='ml-6 list-disc space-y-1 text-muted-foreground'>
          <li>
            The HTTP response uses the resolved status code and message
            immediately. For explicit throws like{' '}
            <code>ammo.throw(502, &apos;msg&apos;)</code> the client sees{' '}
            <code>502</code>; for bare errors the fallback is <code>500</code>.
            The LLM-produced devInsight only appears in the channel output.
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
          Every <code>ammo.throw()</code> call is enriched by the LLM when
          enabled. Explicit status codes and messages are preserved; the LLM
          adds a <code>devInsight</code> for Tejas Radar. For bare errors and
          no-arg throws the LLM also infers the status code and message. Use
          options <code>{'{ useLlm: false }'}</code> as the last argument on any
          signature to skip the LLM for that call.
        </p>
      </div>
    </div>
  )
}

export default LlmErrorHandling
