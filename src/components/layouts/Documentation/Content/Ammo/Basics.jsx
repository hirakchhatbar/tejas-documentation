import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  fireEmpty,
  fireJSON,
  fireStatusOnly,
  fireTextOnly,
  fireWithStatusAndData
} from '@/data/code-blocks/ammo/fire.js'
import { headers, payload } from '@/data/code-blocks/ammo/properties.js'
import { tejasTheme } from '@/lib/code-block-themes.js'

const Basics = () => {
  return (
    <div className={'flex flex-col gap-8'}>
      <h2 id={'basics'} className="text-xl font-semibold tracking-tight">Basics</h2>

      <div id={'body-and-params'} className={'flex flex-col gap-2'}>
        <h3 className="text-base font-medium">Body and Params</h3>
        <p>
          The payload property of the Ammo object provides access to the body of
          the incoming request. Regardless of the method, the payload property
          contains all the data send by the Client in the form of a query
          string, JSON body, multipart body etc.
        </p>
        <CodeBlock
          code={payload}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasTheme}
        />
      </div>

      <div id={'headers'} className={'flex flex-col gap-2'}>
        <h3 className="text-base font-medium">Headers</h3>
        <p>
          The headers property of the Ammo object provides access to the HTTP
          headers of the incoming request. Developers can inspect, modify, and
          set headers as needed to customize the behavior of their applications.
        </p>
        <CodeBlock
          code={headers}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasTheme}
        />
      </div>

      <div className={'flex flex-col gap-2'}>
        <h3 id={'send-response'} className="text-base font-medium">Send Response</h3>
        <p>
          ammo.fire() comes with lot&apos;s of inbuilt capabilities. The fire
          method of the Ammo object is used to send a response to the client.
          This should be called at the end of the request handler.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div id={'text-response'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>Simple Text Response</span>
            <CodeBlock
              code={fireTextOnly}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'json-response'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>JSON Response</span>
            <CodeBlock
              code={fireJSON}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'only-status-code'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>With Only Status Code</span>
            <CodeBlock
              code={fireStatusOnly}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'status-code-and-data'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>With Status Code And Data</span>
            <CodeBlock
              code={fireWithStatusAndData}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'empty-response'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>Empty Response</span>
            <CodeBlock
              code={fireEmpty}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basics
