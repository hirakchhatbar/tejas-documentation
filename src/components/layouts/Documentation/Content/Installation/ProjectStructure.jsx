import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'

const structureTree = `my-app/
├── node_modules/
├── package.json
├── package-lock.json
├── tejas.config.json
├── app.js
└── .env`

const ProjectStructure = () => {
  return (
    <section id="project-structure" className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold tracking-tight">Project structure</h2>
      <p className="text-muted-foreground">
        After quick start or manual install, a minimal te.js project looks like this:
      </p>
      <CodeBlock
        code={structureTree}
        language="bash"
        withCopy={false}
        theme={tejasTheme}
      />
      <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
        <li><code className="rounded bg-muted px-1.5 py-0.5">package.json</code> — project metadata and <code className="rounded bg-muted px-1.5 py-0.5">&quot;type&quot;: &quot;module&quot;</code></li>
        <li><code className="rounded bg-muted px-1.5 py-0.5">tejas.config.json</code> — port, logging, and other app config (created by npx scaffold; add manually if you installed by hand)</li>
        <li><code className="rounded bg-muted px-1.5 py-0.5">app.js</code> — entry file that creates the Tejas app and calls <code className="rounded bg-muted px-1.5 py-0.5">takeoff()</code></li>
        <li><code className="rounded bg-muted px-1.5 py-0.5">.env</code> — optional environment variables</li>
      </ul>
    </section>
  )
}

export default ProjectStructure
