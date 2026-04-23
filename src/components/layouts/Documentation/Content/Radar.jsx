import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import {
  quickStart,
  fullConfig,
  captureOptions,
  appLogsExample,
  layeredControlExample,
  radarStatsExample,
  maskingExample,
  ignoreRoutes
} from '@/data/code-blocks/radar/index.js'

const Radar = () => {
  return (
    <div className='flex flex-col gap-10'>
      <p className='text-muted-foreground'>
        Tejas Radar is the built-in observability layer for te.js. It captures
        HTTP request logs, per-request metrics (latency, payload sizes, response
        sizes, request volume), error tracking, distributed traces, app-level
        log forwarding, and spans — all from a single middleware call with
        built-in GDPR privacy.
      </p>

      <div id='quick-start' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>Quick Start</h2>
        <p className='text-sm text-muted-foreground'>
          Get an API key from{' '}
          <a
            href='https://radar.usetejas.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:no-underline'
          >
            radar.usetejas.com
          </a>{' '}
          and add one line before takeoff. Radar starts capturing automatically.
        </p>
        <CodeBlock
          code={quickStart}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
        <p className='text-sm text-muted-foreground'>
          You can also set <code>RADAR_API_KEY</code>,{' '}
          <code>RADAR_COLLECTOR_URL</code>, and <code>RADAR_PROJECT_NAME</code>{' '}
          as environment variables instead of passing them in config.
        </p>
      </div>

      <Separator orientation='horizontal' />

      <div id='metrics' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Metrics Captured
        </h2>
        <p className='text-sm text-muted-foreground'>
          Every request automatically records the following metrics with zero
          configuration:
        </p>
        <ul className='ml-6 list-disc space-y-1 text-sm text-muted-foreground'>
          <li>
            <strong className='text-foreground'>Response time</strong> —{' '}
            <code>duration_ms</code> from request start to response finish
          </li>
          <li>
            <strong className='text-foreground'>Request volume</strong> — count
            of requests per endpoint, method, and status code
          </li>
          <li>
            <strong className='text-foreground'>Payload size</strong> —{' '}
            <code>payload_size</code> in bytes for the incoming request body
          </li>
          <li>
            <strong className='text-foreground'>Response size</strong> —{' '}
            <code>response_size</code> in bytes for the outgoing response body
          </li>
          <li>
            <strong className='text-foreground'>
              Status code distribution
            </strong>{' '}
            — track 2xx, 4xx, and 5xx rates across your API
          </li>
          <li>
            <strong className='text-foreground'>Client info</strong> — IP
            address and user agent for traffic analysis
          </li>
        </ul>
        <p className='text-sm text-muted-foreground'>
          All metrics are stored in ClickHouse and queryable from the Radar
          dashboard with per-endpoint breakdowns and percentile latency charts.
        </p>
      </div>

      <Separator orientation='horizontal' />

      <div id='configuration' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Full Configuration
        </h2>
        <p className='text-sm text-muted-foreground'>
          Every option at a glance. All fields are optional — sensible defaults
          are applied when omitted.
        </p>
        <CodeBlock
          code={fullConfig}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <Separator orientation='horizontal' />

      <div id='capture-options' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Capture Options
        </h2>
        <p className='text-sm text-muted-foreground'>
          Control exactly what data Radar collects. Request and response bodies
          are off by default. Headers can be captured as an allowlist or in
          full.
        </p>
        <CodeBlock
          code={captureOptions}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <Separator orientation='horizontal' />

      <div id='app-logs' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>App Logs</h2>
        <p className='text-sm text-muted-foreground'>
          Radar doesn&apos;t ship its own logger. It piggy-backs on{' '}
          <a
            href='https://www.npmjs.com/package/tej-logger'
            target='_blank'
            rel='noopener noreferrer'
            className='text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:no-underline'
          >
            tej-logger
          </a>
          : any <code>TejLogger</code> instance in your app becomes a log source
          for Radar once you flip on <code>capture.logs</code>. There is no new
          API to learn.
        </p>
        <CodeBlock
          code={appLogsExample}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />

        <h3 className='mt-4 text-base font-semibold tracking-tight text-foreground'>
          How it behaves
        </h3>
        <ul className='ml-6 list-disc space-y-1 text-sm text-muted-foreground'>
          <li>
            <strong className='text-foreground'>
              Automatic trace correlation.
            </strong>{' '}
            Radar runs each request inside an <code>AsyncLocalStorage</code>.
            Any <code>TejLogger</code> call made during a request — including
            across <code>await</code> boundaries — is stamped with that
            request&apos;s <code>traceId</code>, so app logs line up with HTTP
            events, errors, and spans in the Radar UI.
          </li>
          <li>
            <strong className='text-foreground'>
              Logs outside a request still work.
            </strong>{' '}
            Startup logs, cron jobs, and queue workers simply get{' '}
            <code>traceId: null</code>. They still appear in the App Logs view.
          </li>
          <li>
            <strong className='text-foreground'>
              The logger identifier becomes a prefix.
            </strong>{' '}
            <code>new TejLogger(&apos;billing&apos;)</code> +{' '}
            <code>logger.warn(&apos;foo&apos;)</code> is stored as{' '}
            <code>[billing] foo</code>. Use identifiers deliberately — they are
            your primary way to filter by subsystem in the dashboard.
          </li>
          <li>
            <strong className='text-foreground'>Metadata is serialised.</strong>{' '}
            The second argument (
            <code>logger.info(&apos;x&apos;, {'{...}'}</code>
            <code>)</code>) is JSON-stringified and capped at 8&nbsp;KB.
            Messages are capped at 4096 characters. Oversized content is
            silently truncated.
          </li>
          <li>
            <strong className='text-foreground'>Batching is shared.</strong> Log
            events flow through the same queue as HTTP events, so{' '}
            <code>flushInterval</code>, <code>batchSize</code>, and{' '}
            <code>maxQueueSize</code> all apply.
          </li>
          <li>
            <strong className='text-foreground'>
              Server-side masking still runs.
            </strong>{' '}
            The collector strips sensitive fields (<code>password</code>,{' '}
            <code>token</code>, <code>secret</code>, etc.) from the metadata
            blob regardless of what you send.
          </li>
          <li>
            <strong className='text-foreground'>
              Registered once, globally.
            </strong>{' '}
            The hook is installed at the process level — every{' '}
            <code>TejLogger</code> instance, anywhere in your code, feeds Radar.
          </li>
        </ul>
      </div>

      <Separator orientation='horizontal' />

      <div id='layered-control' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Layered Control
        </h2>
        <p className='text-sm text-muted-foreground'>
          By default, <code>capture.logs: true</code> forwards every{' '}
          <code>TejLogger</code> call. For finer control, use{' '}
          <code>&apos;explicit&apos;</code> mode with per-instance and per-call
          overrides. Precedence is: per-call {'>'} instance {'>'} global config.
        </p>
        <CodeBlock
          code={layeredControlExample}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
        <h3 className='mt-4 text-base font-semibold tracking-tight text-foreground'>
          How precedence works
        </h3>
        <ul className='ml-6 list-disc space-y-1 text-sm text-muted-foreground'>
          <li>
            <strong className='text-foreground'>
              Global <code>capture.logs</code>
            </strong>{' '}
            — <code>false</code> (off, zero overhead), <code>true</code>{' '}
            (forward all, subject to <code>logLevels</code>), or{' '}
            <code>&apos;explicit&apos;</code> (forward only opted-in logs).
          </li>
          <li>
            <strong className='text-foreground'>Instance defaults</strong> —{' '}
            <code>new TejLogger(&apos;X&apos;, {'{ radar: true }'})</code> opts
            all calls from that instance in (or out with <code>false</code>).
          </li>
          <li>
            <strong className='text-foreground'>Per-call metadata</strong> —{' '}
            <code>logger.info(&apos;msg&apos;, {'{ radar: false }'})</code>{' '}
            overrides instance and global for that single call.
          </li>
          <li>
            <strong className='text-foreground'>logLevels bypass</strong> — when
            a log is explicitly opted in via <code>radar: true</code> (instance
            or per-call), the <code>logLevels</code> filter is skipped.
          </li>
        </ul>

        <h3 className='mt-4 text-base font-semibold tracking-tight text-foreground'>
          Diagnostics
        </h3>
        <p className='text-sm text-muted-foreground'>
          Use <code>app.radarStats()</code> to inspect forwarding counters and
          diagnose why logs may not be reaching Radar.
        </p>
        <CodeBlock
          code={radarStatsExample}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <Separator orientation='horizontal' />

      <div id='privacy-masking' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Privacy &amp; Masking
        </h2>
        <p className='text-sm text-muted-foreground'>
          Add application-specific fields to the client-side mask list. The
          Radar collector also enforces a non-bypassable server-side GDPR
          blocklist — fields like <code>password</code>, <code>token</code>, and{' '}
          <code>secret</code> are always scrubbed before storage, regardless of
          client config.
        </p>
        <CodeBlock
          code={maskingExample}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <Separator orientation='horizontal' />

      <div id='ignored-routes' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>Ignored Routes</h2>
        <p className='text-sm text-muted-foreground'>
          Skip noisy endpoints like health checks. OPTIONS requests are always
          skipped automatically.
        </p>
        <CodeBlock
          code={ignoreRoutes}
          language='javascript'
          withLineNumbers
          withCopy
          theme={tejasTheme}
        />
      </div>

      <Separator orientation='horizontal' />

      <div id='best-practices' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>Best Practices</h2>
        <ul className='ml-6 list-disc space-y-1 text-muted-foreground'>
          <li>
            Start with the defaults — Radar captures everything you need with
            just an API key
          </li>
          <li>
            Enable <code>capture.request</code> and{' '}
            <code>capture.response</code> only when debugging specific issues to
            keep payload sizes small
          </li>
          <li>
            Use <code>capture.headers</code> with an allowlist instead of{' '}
            <code>true</code> to avoid sending sensitive headers
          </li>
          <li>
            Add application-specific sensitive fields to{' '}
            <code>mask.fields</code> — the collector handles common ones
            automatically
          </li>
          <li>
            Use <code>ignore</code> to skip health check and readiness endpoints
            that generate noise
          </li>
          <li>
            Set <code>capture.logLevels</code> to{' '}
            <code>[&apos;warn&apos;, &apos;error&apos;]</code> in production to
            reduce volume when forwarding logs
          </li>
          <li>
            Use <code>capture.logs: &apos;explicit&apos;</code> when you want
            fine-grained control over which loggers reach Radar — ideal for
            keeping noisy third-party loggers off your dashboard
          </li>
          <li>
            Call <code>app.radarStats()</code> to diagnose silent drops — it
            shows exactly why logs were filtered
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Radar
