import { tejasTheme } from '@/lib/code-block-themes.js'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import methodFreeRouting from '@/data/code-blocks/routing/method-free-routing.js'
import { Card } from '@/components/ui/card.jsx'

const MethodFreeRouting = () => {
  return (
    <div id={'method-free-routing'} className={'flex flex-col gap-2'}>
      <h2 className="text-xl font-semibold tracking-tight">Method Free Routing</h2>
      <p>
        te.js introduces &quot;method-free routing&quot;. Routes are not restricted to a
        single method; you can handle multiple methods in a single registered route based on runtime
        conditions.
      </p>
      <Card className="p-4 border-sky-500/30">
        <p>
          Supported methods: GET, POST, PUT, DELETE, PATCH, and OPTIONS
        </p>
      </Card>
      <CodeBlock
        code={methodFreeRouting}
        language={'javascript'}
        withLineNumbers={true}
        withCopy={true}
        theme={tejasTheme}
      />
    </div>
  )
}

export default MethodFreeRouting
