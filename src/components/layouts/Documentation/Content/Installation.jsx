import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  createDir,
  moveIntoDir
} from '@/data/code-blocks/installation/create-dir.js'
import { flyTejas } from '@/data/code-blocks/installation/fly-tejas.js'
import { themes } from 'prism-react-renderer'

const Installation = () => {
  return (
    <div className={'flex flex-col w-full gap-6'}>
      <div className={'flex flex-col gap-3'}>
        <p>Assuming you’ve already installed <a
          href={'https://nodejs.org/'}>Node.js</a>, create a directory to hold
          your application, and make that your working directory.</p>

        <CodeBlock code={createDir} language={'Bash'} theme={themes.dracula}
                   withLineNumbers={false} className={'w-[50%]'}
                   withCopy={true} />

        <CodeBlock code={moveIntoDir} language={'Bash'} theme={themes.dracula}
                   withLineNumbers={false} className={'w-[50%]'}
                   withCopy={true} />
      </div>

      <div className={'flex flex-col gap-3'}>
        <p>Setup te.js project using our npx tool</p>
        <CodeBlock code={flyTejas} language={'Bash'} theme={themes.dracula}
                   withLineNumbers={false} withCopy={true}
                   className={'w-[50%]'} />
      </div>
    </div>
  )
}

export default Installation
