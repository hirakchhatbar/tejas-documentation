import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import methodFreeRouting from '@/data/code-blocks/routing/method-free-routing.js'
import { Card } from '@/components/ui/card.jsx'

const MethodFreeRouting = () => {
  return (
    <div id={'method-free-routing'} className={'flex flex-col gap-2'}>
      <h3>Method Free Routing</h3>
      <p>
        te.js introduces "method-free routing". Routes are not restricted to a
        single method; they can handle multiple methods based on runtime
        conditions.
      </p>
      <Card className={"p-4 border-error"}>
        <p>
          Supported methods: GET, POST, PUT, DELETE, PATCH AND OPTIONS
        </p>
      </Card>
      <CodeBlock
        code={methodFreeRouting}
        language={'javascript'}
        withLineNumbers={true}
        withCopy={true}
        theme={tejasThemeBgCard}
      />
    </div>
  )
}

export default MethodFreeRouting
