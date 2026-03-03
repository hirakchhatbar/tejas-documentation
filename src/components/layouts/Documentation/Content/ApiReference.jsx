import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import {
  tejasConstructor,
  tejasMidair,
  tejasTakeoff,
  targetConstructor,
  targetRegister
} from '@/data/code-blocks/api-reference/index.js'

const ApiReference = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Complete API documentation for the Tejas framework.
      </p>

      <div id="tejas-class" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Tejas Class</h2>
        <p className="text-muted-foreground">The main application class. Only one instance exists per process (singleton).</p>
        <div id="tejas-constructor" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Constructor</h3>
          <CodeBlock code={tejasConstructor} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
          <p className="text-sm text-muted-foreground">Options: entry, port (1403), log.http_requests, log.exceptions, body.max_size, body.timeout, dir.targets. See Configuration for full reference.</p>
        </div>
        <div id="tejas-methods" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Methods</h3>
          <p className="text-sm font-medium">midair(...middlewares)</p>
          <CodeBlock code={tejasMidair} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
          <p className="text-sm font-medium mt-2">takeoff(options)</p>
          <CodeBlock code={tejasTakeoff} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
          <p className="text-sm text-muted-foreground">Other methods: withRedis(config), withMongo(config), withRateLimit(config), serveDocs(config).</p>
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="target-class" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Target Class</h2>
        <p className="text-muted-foreground">Route grouping class (equivalent to Express Router).</p>
        <div id="target-constructor" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Constructor</h3>
          <CodeBlock code={targetConstructor} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="target-methods" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Methods</h3>
          <p className="text-sm font-medium">register(path, ...middlewares, handler)</p>
          <CodeBlock code={targetRegister} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
          <p className="text-sm font-medium mt-2">midair(...middlewares)</p>
          <p className="text-sm text-muted-foreground">Register middleware for all routes on this target.</p>
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="ammo-object" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Ammo Object</h2>
        <p className="text-muted-foreground">Passed to route handlers. Properties: method, path, payload, headers, ip, req, res. Booleans: GET, POST, PUT, DELETE, PATCH, OPTIONS. Methods: fire(), throw(), notFound(), notAllowed(), unauthorized(), redirect(), defaultEntry().</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="tej-error" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">TejError</h2>
        <p className="text-muted-foreground">Throw HTTP errors: <code>throw new TejError(statusCode, messageOrBody)</code>. Use for 4xx/5xx responses.</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="tej-file-uploader" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">TejFileUploader</h2>
        <p className="text-muted-foreground">Built-in file upload handler. Constructor options: destination, name, maxFileSize. Methods: file(fieldName), files(...fieldNames). See File Uploads doc for details.</p>
      </div>
    </div>
  )
}

export default ApiReference
