import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { createEndpoint } from '@/data/code-blocks/routing/endpoints.js'

const Endpoints = () => {
  return (
    <div id={'endpoints'} className={'flex flex-col gap-5'}>
      <h3>Endpoints</h3>
      <p>
        Endpoints in te.js, are set up using the target.register method, which
        maps a specific URL path to a handler function. Additionally, you can
        organize related endpoints under a common base path using the Target
        constructor.
      </p>

      <div className={'flex flex-col gap-2'}>
        <h5>Create an endpoint</h5>
        <p>
          To create an endpoint, you use target.register, specifying the
          endpoint path and a handler function that receives the ammo object.
        </p>
        <CodeBlock
          code={createEndpoint}
          language={'javascript'}
          showLineNumbers={true}
          showCopy={false}
          theme={tejasThemeBgCard}
        />
      </div>
    </div>
  )
}

export default Endpoints
