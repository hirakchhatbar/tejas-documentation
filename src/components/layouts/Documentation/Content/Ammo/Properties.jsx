import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  headers,
  ip, method, others,
  payload,
  reqAndRes
} from '@/data/code-blocks/ammo/properties.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'

const Properties = () => {
  return (
    <div id={'properties'} className={'flex flex-col gap-8'}>
      <h3>Properties</h3>
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

      <div id={'#headers'} className={'flex flex-col gap-2'}>
        <h5>headers</h5>
        <p>
          The headers property of the Ammo object provides access to the HTTP
          headers of the incoming request. Developers can inspect, modify, and
          set headers as needed to customize the behavior of their
          applications.
        </p>
        <CodeBlock
          code={headers}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasThemeBgCard}
        />
      </div>

      <div id={'payload'} className={'flex flex-col gap-2'}>
        <h5>payload</h5>
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
          theme={tejasThemeBgCard} />
      </div>

      <div id={'ip'} className={'flex flex-col gap-2'}>
        <h5>ip</h5>
        <p>
          The ip property of the Ammo object provides access to the IP address
          of
          the incoming request. This can be useful for logging, security, and
          other purposes.
        </p>
        <CodeBlock
          code={ip}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasThemeBgCard}
        />
      </div>

      <div id={'method'} className={'flex flex-col gap-2'}>
        <h5>method</h5>
        <p>
          The method property of the Ammo object provides access to the HTTP
          method of the incoming request. Developers can use this property to
          determine the type of request and implement custom logic as needed.
        </p>
        <CodeBlock
          code={method}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasThemeBgCard}
        />
      </div>

      <div id={'others'} className={'flex flex-col gap-2'}>
        <h5>Others</h5>
        <p>
          The Ammo object provides access to several other properties that can be
          used to customize the behavior of your applications. These properties
          include:
        </p>
        <CodeBlock
          code={others}
          language={'javascript'}
          withLineNumbers={true}
          withCopy={true}
          theme={tejasThemeBgCard}
          />
      </div>
    </div>
  )
}

export default Properties
