import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import { quickStartBash, quickStartServe, endpointMetadata, llmConfigJson } from '@/data/code-blocks/auto-docs/index.js'

const AutoDocs = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Tejas can automatically generate an OpenAPI 3.0 specification from your registered targets. An LLM analyzes your handler source code to produce accurate summaries, request/response schemas, and descriptions — then you can serve interactive API docs with a single line of code.
      </p>

      <div id="quick-start" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Quick Start</h2>
        <CodeBlock code={quickStartBash} language="bash" withLineNumbers withCopy theme={tejasTheme} />
        <CodeBlock code={quickStartServe} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        <p className="text-sm text-muted-foreground">Visit http://localhost:1403/docs to see the interactive Scalar API reference.</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="how-it-works" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">How It Works</h2>
        <p className="text-muted-foreground">Target files → Handler analysis → LLM enhancement → OpenAPI 3.0 spec → Scalar UI. Tejas reads handler source, detects HTTP methods, sends to an LLM for summaries and schemas, then assembles a valid OpenAPI document.</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="enhancement-levels" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Enhancement Levels</h2>
        <p className="text-muted-foreground">Level 1 (Moderate): handler source only. Level 2 (High): handler + dependency chain. Level 3 (Comprehensive): level 2 + tag reordering and API_OVERVIEW.md. Higher levels use more LLM tokens.</p>
      </div>

      <Separator orientation="horizontal" />

      <div id="endpoint-metadata" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Endpoint Metadata</h2>
        <p>You can provide explicit metadata when registering endpoints. This takes priority over LLM-generated content:</p>
        <CodeBlock code={endpointMetadata} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="llm-config" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">LLM Provider Configuration</h2>
        <p className="text-muted-foreground">Tejas uses an OpenAI-compatible API. Works with OpenAI, OpenRouter, Ollama, and any provider that implements the OpenAI chat completions endpoint.</p>
        <div id="config-json" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Via tejas.config.json</h3>
          <CodeBlock code={llmConfigJson} language="json" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="env-vars" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Via Environment Variables</h3>
          <p className="text-sm text-muted-foreground">LLM_BASE_URL, LLM_API_KEY, LLM_MODEL. No API key required for local providers like Ollama.</p>
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="config-reference" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Configuration Reference</h2>
        <p className="text-muted-foreground">All options live under the <code>docs</code> key in tejas.config.json: dirTargets, outputPath, llm, level, etc. See the full Auto-Documentation doc in te.js for the complete reference.</p>
      </div>
    </div>
  )
}

export default AutoDocs
