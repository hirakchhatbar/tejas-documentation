import { Link } from 'react-router-dom'
import { CheckCircleIcon, XCircleIcon } from 'lucide-react'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  expressRouteFile,
  expressRouting, tejasAppManualTarget,
  tejasTargetFile
} from '@/data/code-blocks/routing/express-vs-tejas-routing.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import appJs from '@/data/code-blocks/hello-world/appjs.jsx'

const ManualRegister = () => {
  return (
    <div className={'flex flex-col gap-5'}>
      <p>
        For developers who prefer direct control over the registration process,
        te.js offers a manual registration method. This approach allows you to
        explicitly specify which targets to include in your application, giving
        you granular control over the endpoints to be made available.
      </p>

      <div className={'flex flex-row justify-between mr-[-25%]'}>
        <p
          className={
            'w-full text-lg flex flex-row items-center justify-center !text-error font-bold'
          }
        >
          <XCircleIcon className={'w-5 h-5 mr-2'} />
          Express
        </p>
        <p className={'!text-muted'}>vs</p>
        <p
          className={
            'w-full text-lg flex flex-row items-center justify-center !text-success font-bold'
          }
        >
          <CheckCircleIcon className={'w-5 h-5 mr-2'} />
          te.js
        </p>
      </div>

      <div className={'grid grid-cols-2 gap-10 mr-[-25%]'}>
        <div className={'flex flex-col gap-1'}>
          <p>In app.js</p>
          <CodeBlock
            code={expressRouting}
            language={'javascript'}
            showLineNumbers={true}
            showCopy={false}
            theme={tejasThemeBgCard}
          />

          <p className={'mt-4'}>In /routes/user.js</p>
          <CodeBlock
            code={expressRouteFile}
            language={'javascript'}
            showLineNumbers={true}
            showCopy={false}
            theme={tejasThemeBgCard}
          />
        </div>
        <div className={'flex flex-col gap-1'}>
          <p>In app.js</p>
          <CodeBlock
            code={tejasAppManualTarget}
            language={'javascript'}
            showLineNumbers={true}
            showCopy={false}
            theme={tejasThemeBgCard}
          />

          <p className={'mt-4'}>In /path/to/target-file</p>
          <CodeBlock
            code={tejasTargetFile}
            language={'javascript'}
            showLineNumbers={true}
            showCopy={false}
            theme={tejasThemeBgCard}
          />
        </div>
      </div>
    </div>
  )
}

export default ManualRegister
