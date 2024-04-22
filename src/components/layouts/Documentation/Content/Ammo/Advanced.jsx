import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  ip,
  method,
  others,
  reqAndRes
} from '@/data/code-blocks/ammo/properties.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'

const Properties = () => {
  return (
    <div id={'properties'} className={'flex flex-col gap-8'}>
      <h3>Advanced</h3>
      <div id={'req-and-res'} className={'flex flex-col gap-2'}>
        <h5>req and res</h5>
        <p>
          te.js provides direct access to the native Node.js req
          (http.IncomingMessage) and res (http.ServerResponse) objects,
          enabling developers to implement custom logic as needed for their
          applications.
        </p>
        <CodeBlock
          code={reqAndRes}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasThemeBgCard}
        />
      </div>

      <div id={'others'} className={'flex flex-col gap-2'}>
        <h5>Other Properties</h5>
        <div className={'w-full grid grid-cols-2 gap-3'}>
          <div className={'flex flex-col gap-2'}>
            <div className={'flex flex-col gap-1'}>
              <span className={'text-muted'}>IP Address</span>
              <CodeBlock
                code={ip}
                language={'javascript'}
                withLineNumbers={true}
                withCopy={true}
                theme={tejasThemeBgCard}
              />
            </div>

            <div className={'flex flex-col gap-1'}>
              <span className={'text-muted'}>Method</span>
              <CodeBlock
                code={method}
                language={'javascript'}
                withLineNumbers={true}
                withCopy={true}
                theme={tejasThemeBgCard}
              />
            </div>
          </div>

          <div className={'flex flex-col gap-1'}>
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
    </div>
  )
}

export default Properties
