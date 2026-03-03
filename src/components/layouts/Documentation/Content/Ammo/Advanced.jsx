import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  ip,
  method,
  others,
  reqAndRes
} from '@/data/code-blocks/ammo/properties.js'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { notAllowed, notFound, unauthorized } from '@/data/code-blocks/ammo/functions.js'
import { ammoThrow, ammoRedirect, ammoDefaultEntry } from '@/data/code-blocks/ammo/response-methods.js'

const Advanced = () => {
  return (
    <div className={'flex flex-col gap-8'}>
      <h2 id={'advanced'} className="text-xl font-semibold tracking-tight">Advanced</h2>

      <div id={'req-and-res'} className={'flex flex-col gap-2'}>
        <h3 className="text-base font-medium">req and res</h3>
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
          theme={tejasTheme}
        />
      </div>

      <div className={'flex flex-col gap-2'}>
        <h3 id={'properties'} className="text-base font-medium">Properties</h3>
        <div className={'w-full grid grid-cols-1 gap-3'}>
          <div id={'ip-address'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>IP Address</span>
            <CodeBlock
              code={ip}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'request-method'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>Request Method</span>
            <CodeBlock
              code={method}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'others'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>Others</span>
            <CodeBlock
              code={others}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>
        </div>
      </div>

      <div className={'flex flex-col gap-2'}>
        <h3 id={'functions'} className="text-base font-medium">Functions</h3>
        <div className={'w-full grid grid-cols-1 gap-3'}>
          <div id={'unauthorized'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>Unauthorized</span>
            <CodeBlock
              code={unauthorized}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'not-found'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>Not Found</span>
            <CodeBlock
              code={notFound}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'not-allowed'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>Not Allowed</span>
            <CodeBlock
              code={notAllowed}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'throw'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>throw()</span>
            <p className={'text-sm text-muted-foreground'}>
              Send error responses with a status code, custom message, or from an Error object. Use for intentional error conditions.
            </p>
            <CodeBlock
              code={ammoThrow}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'redirect'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>redirect()</span>
            <p className={'text-sm text-muted-foreground'}>
              Send an HTTP redirect. Default is 302 (temporary). Use 301 for permanent redirects.
            </p>
            <CodeBlock
              code={ammoRedirect}
              language={'javascript'}
              withLineNumbers={true}
              withCopy={true}
              theme={tejasTheme}
            />
          </div>

          <div id={'default-entry'} className={'flex flex-col gap-1'}>
            <span className={'text-muted-foreground'}>defaultEntry()</span>
            <p className={'text-sm text-muted-foreground'}>
              Serve the default HTML entry point at <code>/</code>. Typically used as the root route handler.
            </p>
            <CodeBlock
              code={ammoDefaultEntry}
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

export default Advanced
