import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'

const ManualInstallation = () => {
  return (
    <section id="manual-installation" className="flex flex-col gap-8">
      <h2 className="text-xl font-semibold tracking-tight">Manual Installation</h2>
      <p className="text-muted-foreground">
        To add te.js to an existing Node project (or build one from scratch), follow these steps.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-medium">1. Create a directory</h3>
          <p className="text-sm text-muted-foreground">
            Create a folder for your app and move into it. Skip if you already have a project directory.
          </p>
          <CodeBlock
            code={`mkdir my-app
cd my-app`}
            language="bash"
            withCopy
            theme={tejasTheme}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-medium">2. Initialize the project</h3>
          <p className="text-sm text-muted-foreground">
            Create a <code className="rounded bg-muted px-1.5 py-0.5">package.json</code> with defaults.
          </p>
          <CodeBlock
            code="npm init -y"
            language="bash"
            withCopy
            theme={tejasTheme}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-medium">3. Install te.js</h3>
          <p className="text-sm text-muted-foreground">
            Add the framework to your project.
          </p>
          <CodeBlock
            code="npm install te.js"
            language="bash"
            withCopy
            theme={tejasTheme}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-medium">4. Enable ESM</h3>
          <p className="text-sm text-muted-foreground">
            te.js uses ES modules. Add <code className="rounded bg-muted px-1.5 py-0.5">&quot;type&quot;: &quot;module&quot;</code> to your <code className="rounded bg-muted px-1.5 py-0.5">package.json</code> so Node runs your files as ESM.
          </p>
          <CodeBlock
            code={`{
  "name": "my-app",
  "type": "module",
  ...
}`}
            language="json"
            withCopy
            theme={tejasTheme}
          />
          <p className="text-sm text-muted-foreground">
            If you skip this step, you may see errors like <code className="rounded bg-muted px-1.5 py-0.5">Cannot use import statement outside a module</code>. See <a href="#troubleshooting" className="text-sky-600 dark:text-sky-400 hover:underline">Troubleshooting</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ManualInstallation
