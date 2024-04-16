import FadingText from '@/components/shared/FadingText.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { themes } from 'prism-react-renderer'
import initializeTejas from '@/data/code-blocks/initialize-tejas.js'

const Header = () => {
  return (
    <div
      className={'flex flex-col h-[calc(100vh-102px)] justify-center gap-10'}
    >
      <div className={'flex flex-col self-center gap-3'}>
        <h1 className={'text-4xl text-heading'}>
          A Node Framework For Powerful Backend Services
        </h1>
        <FadingText
          className={'self-center'}
          text={'Simple, Fast, Scalable and Flexible...'}
          startingOpacity={60}
          increment={2}
        />
      </div>

      <div className={'w-[60%] self-center grid grid-cols-2 gap-3'}>
        <div id='termynal' data-termynal>
          <span data-ty='input'>npx fly-tejas</span>
        </div>

        <CodeBlock
          language={'javascript'}
          theme={themes.dracula}
          code={initializeTejas}
          className={'bg-dracula rounded-md overflow-hidden'}
        />
      </div>
    </div>
  )
}

export default Header
