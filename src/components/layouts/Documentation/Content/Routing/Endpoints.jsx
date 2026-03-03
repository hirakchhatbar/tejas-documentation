import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { createEndpoint, groupEndpoints } from '@/data/code-blocks/routing/endpoints.js'

const Endpoints = () => {
  return (
    <div id={'endpoints'} className={'flex flex-col gap-5'}>
      <h2 className="text-xl font-semibold tracking-tight">Endpoints</h2>
      <p>
        Endpoints in te.js, are set up using the target.register method, which
        maps a specific URL path to a handler function. Additionally, you can
        organize related endpoints under a common base path using the Target
        constructor.
      </p>

      <div id={'create-endpoint'} className={'flex flex-col gap-2'}>
        <h3 className="text-base font-medium">Create an endpoint</h3>
        <p>
          To create an endpoint, you use target.register, specifying the
          endpoint path and a handler function that receives the ammo object.
        </p>
        <CodeBlock
          code={createEndpoint}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasTheme}
        />
      </div>

      <div id={'group-related-endpoints'} className={'flex flex-col gap-2'}>
        <h3 className="text-base font-medium">Group related endpoints</h3>
        <p>
          Pass a base path to the Target constructor to group endpoints under a common URL prefix. All routes registered on that target are served under that base path.
        </p>
        <CodeBlock
          code={groupEndpoints}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasTheme}
        />
      </div>
    </div>
  )
}

export default Endpoints
