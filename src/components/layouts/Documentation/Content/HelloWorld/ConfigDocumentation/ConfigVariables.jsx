import { Link } from 'react-router-dom'

const configOptions = [
  {
    key: 'port',
    default: '1403',
    description: 'Port to run your project on.'
  },
  {
    key: 'log.http_requests',
    type: 'boolean',
    description: 'When true, logs all incoming HTTP requests to the console: endpoint, method, duration, body/query params, and response.'
  },
  {
    key: 'log.exceptions',
    type: 'boolean',
    description: 'When true, logs uncaught exceptions to the console. te.js keeps running and sends a 500 response to the client instead of crashing.'
  },
  {
    key: 'dir.targets',
    default: 'targets',
    description: (
      <>
        Directory for{' '}
        <Link to="/docs/routing" className="text-sky-600 dark:text-sky-400 hover:underline">
          target
        </Link>{' '}
        files that define routes. Target files should use the <code className="rounded bg-muted px-1.5 py-0.5">.target.js</code> extension.
      </>
    )
  },
  {
    key: 'allowedMethods',
    type: 'array (or env: ALLOWEDMETHODS)',
    default: 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS',
    description: 'HTTP methods allowed at the framework level. Non-standard methods (e.g. TRACE, CONNECT) are rejected with 405 before route matching. Set in tejas.config.json as an array (e.g. ["GET","POST"]) or via env as a comma-separated string.'
  },
  {
    key: 'warn_missing_allowed_methods',
    type: 'boolean',
    default: 'true (warn)',
    description: (
      <>
        When an endpoint has no allowed methods defined (see{' '}
        <Link to="/docs/routing#method-restriction" className="text-sky-600 dark:text-sky-400 hover:underline">
          Restricting HTTP methods
        </Link>
        ), the framework logs a warning once per path at runtime. Set to <code className="rounded bg-muted px-1 py-0.5">false</code> (env: <code className="rounded bg-muted px-1 py-0.5">WARN_MISSING_ALLOWED_METHODS=false</code>) to disable this warning.
      </>
    )
  },
  {
    key: 'db.type',
    description: 'Database type. Currently supported: "mongodb". More will be added and documented.'
  },
  {
    key: 'db.uri',
    description: 'Connection URI for the database (e.g. "mongodb://localhost:27017"). Get this from your database provider.'
  },
  {
    key: 'response',
    id: 'response-structure',
    default: 'envelopeEnabled: true, successKey: "data", errorKey: "error"',
    description: (
      <>
        Standard response envelope. When <code className="rounded bg-muted px-1.5 py-0.5">response.envelopeEnabled</code> is true (default), all success responses are wrapped as <code className="rounded bg-muted px-1 py-0.5">{' { data: ... } '}</code> and errors as <code className="rounded bg-muted px-1 py-0.5">{' { error: ... } '}</code>. See{' '}
        <Link to="/docs/ammo#response-structure" className="text-sky-600 dark:text-sky-400 hover:underline">
          Ammo — Response Structure
        </Link>
        {' '}and <code className="rounded bg-muted px-1.5 py-0.5">response.successKey</code> / <code className="rounded bg-muted px-1.5 py-0.5">response.errorKey</code> to customize or disable.
      </>
    )
  },
  {
    key: 'errors.llm',
    description: (
      <>
        LLM-inferred error codes and messages. When <code className="rounded bg-muted px-1.5 py-0.5">errors.llm.enabled</code> is true, <code className="rounded bg-muted px-1.5 py-0.5">ammo.throw()</code> (and framework-caught errors) use an LLM to infer status and message from code context. See{' '}
        <a href="#errors-object" className="text-sky-600 dark:text-sky-400 hover:underline">
          Errors object (errors.llm)
        </a>
        {' '}for all parameters (enabled, baseURL, apiKey, model, messageType) and env vars.
      </>
    )
  }
]

const ConfigVariables = () => {
  return (
    <ul className="flex flex-col divide-y divide-border rounded-lg border border-border bg-card overflow-hidden">
      {configOptions.map((opt) => (
        <li key={opt.key} id={opt.id} className="flex flex-col gap-1.5 px-4 py-3">
          <div className="flex flex-wrap items-baseline gap-2">
            <code className="rounded bg-muted px-2 py-0.5 text-sm font-medium text-foreground">
              {opt.key}
            </code>
            {opt.default != null && (
              <span className="text-xs text-muted-foreground">
                default: <code className="rounded bg-muted/80 px-1 py-0.5">{opt.default}</code>
              </span>
            )}
            {opt.type != null && (
              <span className="text-xs text-muted-foreground">
                {opt.type}
              </span>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            {opt.description}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ConfigVariables
