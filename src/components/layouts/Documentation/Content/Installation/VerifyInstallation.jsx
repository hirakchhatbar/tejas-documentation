import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'

const minimalApp = `import Tejas from 'te.js';

const app = new Tejas();
app.takeoff();`

const VerifyInstallation = () => {
  return (
    <section id="verify-installation" className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold tracking-tight">Verify installation</h2>
      <p className="text-muted-foreground">
        To confirm te.js is installed correctly, create a minimal entry file and start the server.
      </p>
      <p className="text-sm text-muted-foreground">
        Create <code className="rounded bg-muted px-1.5 py-0.5">app.js</code> in your project root with:
      </p>
      <CodeBlock
        code={minimalApp}
        language="javascript"
        withCopy
        theme={tejasTheme}
      />
      <p className="text-sm text-muted-foreground">
        Then run the app with the te.js CLI. The CLI resolves the entry file from <code className="rounded bg-muted px-1.5 py-0.5">tejas.config.json</code>, <code className="rounded bg-muted px-1.5 py-0.5">package.json</code> <code className="rounded bg-muted px-1.5 py-0.5">main</code>, or you can pass it explicitly:
      </p>
      <CodeBlock
        code="npx tejas fly
# or, to specify the entry file:
npx tejas fly app.js"
        language="bash"
        withCopy
        theme={tejasTheme}
      />
      <p className="text-sm text-muted-foreground">
        If installation is correct, the server starts and you should see output indicating the port (e.g. 1403). Visit <code className="rounded bg-muted px-1.5 py-0.5">http://localhost:1403</code> in your browser; a blank or minimal response is expected until you add routes in the Hello World guide.
      </p>
    </section>
  )
}

export default VerifyInstallation
