import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import {
  quickStart,
  fullConfig,
  captureOptions,
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
          <code>RADAR_COLLECTOR_URL</code>, and{' '}
          <code>RADAR_PROJECT_NAME</code> as environment variables instead of
          passing them in config.
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
            <strong className='text-foreground'>Status code distribution</strong>{' '}
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
          are off by default. Headers can be captured as an allowlist or in full.
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

      <div id='privacy-masking' className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold tracking-tight'>
          Privacy &amp; Masking
        </h2>
        <p className='text-sm text-muted-foreground'>
          Add application-specific fields to the client-side mask list. The
          Radar collector also enforces a non-bypassable server-side GDPR
          blocklist — fields like <code>password</code>, <code>token</code>,
          and <code>secret</code> are always scrubbed before storage, regardless
          of client config.
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
        <h2 className='text-xl font-semibold tracking-tight'>
          Ignored Routes
        </h2>
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
        <h2 className='text-xl font-semibold tracking-tight'>
          Best Practices
        </h2>
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
        </ul>
      </div>
    </div>
  )
}

export default Radar
