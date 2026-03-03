import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import { install, tejasFly, generateDocs, generateDocsCi } from '@/data/code-blocks/cli/index.js'

const CLI = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Tejas includes a command-line interface for starting your server and generating API documentation.
      </p>

      <div id="installation" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <p>The CLI is included when you install te.js. It is available as the <code>tejas</code> command. If installed locally, use <code>npx tejas</code> to run commands.</p>
        <CodeBlock code={install} language="bash" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="commands" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Commands</h2>
        <div id="tejas-fly" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">tejas fly</h3>
          <p>Start the Tejas server by running your application&apos;s entry point.</p>
          <CodeBlock code={tejasFly} language="bash" withLineNumbers withCopy theme={tejasTheme} />
          <p className="text-sm text-muted-foreground">
            Entry point resolution (first match wins): CLI argument, tejas.config.json entry, package.json main, or convention files (index.js, app.js, server.js).
          </p>
        </div>
        <div id="generate-docs" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">tejas generate:docs</h3>
          <p>Generate an OpenAPI 3.0 specification from your registered targets using LLM-powered analysis.</p>
          <CodeBlock code={generateDocs} language="bash" withLineNumbers withCopy theme={tejasTheme} />
          <p className="text-sm text-muted-foreground">Use <code>--ci</code> for non-interactive mode in automated pipelines.</p>
          <CodeBlock code={generateDocsCi} language="bash" withLineNumbers withCopy theme={tejasTheme} />
        </div>
        <div id="docs-on-push" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">tejas docs:on-push</h3>
          <p className="text-muted-foreground">Generate documentation automatically when pushing to your production branch. Designed for use in a git pre-push hook. Configure <code>docs.productionBranch</code> in tejas.config.json or <code>DOCS_PRODUCTION_BRANCH</code> env var.</p>
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="env-vars" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Environment Variables Summary</h2>
        <p className="text-muted-foreground">
          <code>LLM_API_KEY</code> / <code>OPENAI_API_KEY</code>, <code>LLM_BASE_URL</code>, <code>LLM_MODEL</code>, <code>DOCS_PORT</code>, <code>DOCS_PRODUCTION_BRANCH</code>. See the CLI doc for full details.
        </p>
      </div>

      <Separator orientation="horizontal" />

      <div id="next-steps" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Next Steps</h2>
        <p className="text-muted-foreground">Auto-Documentation (enhancement levels, Scalar UI), Configuration (tejas.config.json reference).</p>
      </div>
    </div>
  )
}

export default CLI
