import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { Card } from '@/components/ui/card.jsx'
import { configEnv } from '@/data/code-blocks/hello-world/configuration.jsx'
import { tejasTheme, tejasThemeBgCard } from '@/lib/code-block-themes.js'

const exampleCode = `dir: {
  targets: "targets"
}`

const EnvConfig = () => {
  return (
    <div id={'tejas-config-file'} className={'flex flex-col gap-5'}>
      <div className={'flex flex-col gap-3'}>
        <p>You can specify configuration options in .env file of your project.
          Create a .env file in the root of your project if you haven&apos;t
          already</p>

        <Card className={'p-4  flex flex-col w-full !border-card-alert border'}>
          <p>.env only supports <span
            className={'text-heading'}>UPPERCASE</span> keys. Nested
            configuration
            items can be specified using &quot;_&quot; between the parent and
            child key.</p>
          <br />
          <div className={'flex flex-row gap-10'}>
            <div className={'flex flex-col w-[50%] gap-2'}>
              <p>For example:</p>
              <CodeBlock language={'JSON'} code={exampleCode} theme={tejasTheme}
                         withLineNumbers={false} />
            </div>
            <div className={'flex flex-col w-[50%] gap-2'}>
              <p>Will become:</p>
              <CodeBlock language={'sh'} code={'DIR_TARGETS=targets'}
                         theme={tejasTheme} withLineNumbers={false} />
            </div>

          </div>
        </Card>

      </div>
      <div className={'flex flex-col gap-1'}>
        <span className={"text-muted"}>.env</span>
        <CodeBlock
          withCopy={true}
          withLineNumbers={false}
          code={configEnv}
          language={'sh'}
          theme={tejasThemeBgCard}
        />
      </div>
    </div>
  )
}

export default EnvConfig
