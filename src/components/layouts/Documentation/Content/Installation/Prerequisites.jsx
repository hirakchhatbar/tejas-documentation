import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'

const Prerequisites = () => {
  return (
    <section id="prerequisites" className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold tracking-tight">Prerequisites</h2>
      <p className="text-muted-foreground">
        te.js runs on Node.js. You need <strong className="text-foreground">Node.js v18 or later</strong> and <strong className="text-foreground">npm</strong> (included with Node). Check your versions:
      </p>
      <CodeBlock
        code={`node -v
npm -v`}
        language="bash"
        withCopy
        theme={tejasTheme}
      />
      <p className="text-sm text-muted-foreground">
        If either command is not found, install Node.js from{' '}
        <a
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 dark:text-sky-400 hover:underline"
        >
          nodejs.org
        </a>
        .
      </p>
    </section>
  )
}

export default Prerequisites
