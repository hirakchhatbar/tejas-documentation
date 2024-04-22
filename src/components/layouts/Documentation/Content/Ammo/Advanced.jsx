import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  ip,
  method,
  others,
  reqAndRes
} from '@/data/code-blocks/ammo/properties.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { notAllowed, notFound, unauthorized } from '@/data/code-blocks/ammo/functions.js'

const Advanced = () => {
  return (
    <div className={'flex flex-col gap-8'}>
      <h3 id={'advanced'}>Advanced</h3>

      <div id={'req-and-res'} className={'flex flex-col gap-2'}>
        <h5>req and res</h5>
        <p>
          te.js provides direct access to the native Node.js req
          (http.IncomingMessage) and res (http.ServerResponse) objects, enabling
          developers to implement custom logic as needed for their applications.
        </p>
        <CodeBlock
          code={reqAndRes}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasThemeBgCard}
        />
      </div>

      <div className={'flex flex-col gap-2'}>
        <h5 id={'properties'}>Properties</h5>
        <div className={'w-full grid grid-cols-1 gap-3'}>
          <div id={'ip-address'} className={'flex flex-col gap-1'}>
            <span className={'text-muted'}>IP Address</span>
            <CodeBlock
              code={ip}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasThemeBgCard}
            />
          </div>

          <div id={'request-method'} className={'flex flex-col gap-1'}>
            <span className={'text-muted'}>Request Method</span>
            <CodeBlock
              code={method}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasThemeBgCard}
            />
          </div>

          <div id={'others'} className={'flex flex-col gap-1'}>
            <span className={'text-muted'}>Others</span>
            <CodeBlock
              code={others}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasThemeBgCard}
            />
          </div>
        </div>
      </div>

      <div className={'flex flex-col gap-2'}>
        <h5 id={'functions'}>Functions</h5>
        <div className={'w-full grid grid-cols-1 gap-3'}>
          <div id={'unauthorized'} className={'flex flex-col gap-1'}>
            <span className={'text-muted'}>Unauthorized</span>
            <CodeBlock
              code={unauthorized}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasThemeBgCard}
            />
          </div>

          <div id={'not-found'} className={'flex flex-col gap-1'}>
            <span className={'text-muted'}>Not Found</span>
            <CodeBlock
              code={notFound}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasThemeBgCard}
            />
          </div>

          <div id={'not-allowed'} className={'flex flex-col gap-1'}>
            <span className={'text-muted'}>Not Allowed</span>
            <CodeBlock
              code={notAllowed}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasThemeBgCard}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Advanced
