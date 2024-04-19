import { Link } from 'react-router-dom'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  expressRouteFile,
  expressRouting,
  tejasTargetFile
} from '@/data/code-blocks/routing/express-vs-tejas-routing.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { CheckCircleIcon, XCircleIcon } from 'lucide-react'
import appJs from '@/data/code-blocks/hello-world/appjs.jsx'

const AutoRegister = () => {
  return (
    <div className={'flex flex-col gap-5'}>
      <p>
        te.js automatically detects all JavaScript files ending with
        <span className={'text-heading font-bold'}> .target.js </span>
        in the{' '}
        <Link to={'/docs/hello-world#tejas.config.json'}>
          specified directory
        </Link>{' '}
        and registers all the endpoints defined in them.
        <br />
        This encourages a modular and consistent file structure, making your
        codebase easier to navigate and maintain.
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
        <p className={"!text-muted"}>vs</p>
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
            code={appJs}
            language={'javascript'}
            showLineNumbers={true}
            showCopy={false}
            theme={tejasThemeBgCard}
          />

          <p className={'mt-4'}>
            In /targets/user.target.js
          </p>
          <CodeBlock
            code={tejasTargetFile}
            language={'javascript'}
            showLineNumbers={true}
            showCopy={false}
            theme={tejasThemeBgCard}
          />
          <p className={"mt-2 !text-heading"}>Assuming that you have{' '}
            <Link to={'/docs/hello-world#tejas.config.json'}>
              {' '}
              set directory{' '}
            </Link>{' '}
            as "targets"</p>
        </div>
      </div>
    </div>
  )
}

export default AutoRegister
