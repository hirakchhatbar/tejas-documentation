import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import { quickStart, configuration, slidingWindow, memoryStore } from '@/data/code-blocks/rate-limiting/index.js'

const RateLimiting = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Tejas includes a powerful rate limiting system to protect your API from abuse. It supports multiple algorithms and storage backends.
      </p>

      <div id="quick-start" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Quick Start</h2>
        <CodeBlock code={quickStart} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        <p className="text-sm text-muted-foreground">This limits all endpoints to 100 requests per minute per IP address.</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="configuration-options" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Configuration Options</h2>
        <CodeBlock code={configuration} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="algorithms" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Algorithms</h2>
        <div id="sliding-window" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Sliding Window (Default)</h3>
          <p className="text-sm text-muted-foreground">Best for smooth, accurate rate limiting. Prevents the &quot;burst at window boundary&quot; problem.</p>
          <CodeBlock code={slidingWindow} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="storage-backends" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Storage Backends</h2>
        <div id="memory" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Memory</h3>
          <p className="text-sm text-muted-foreground">Good for single-server deployments.</p>
          <CodeBlock code={memoryStore} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="best-practices" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
          <li>Use Redis store for multi-instance deployments so limits are shared</li>
          <li>Set <code>onRateLimited</code> to return a consistent JSON or message</li>
          <li>Choose sliding-window for accuracy, or fixed-window for simplicity</li>
        </ul>
      </div>
    </div>
  )
}

export default RateLimiting
