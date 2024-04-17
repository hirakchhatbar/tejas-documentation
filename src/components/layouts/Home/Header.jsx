import CodeBlock from '@/components/shared/CodeBlock.jsx'
import FadingText from '@/components/shared/FadingText.jsx'
import { Button } from '@/components/ui/button.jsx'
import initializeTejas from '@/data/code-blocks/initialize-tejas.js'
import { ExternalLinkIcon } from 'lucide-react'
import { themes } from 'prism-react-renderer'

const Header = () => {
  return (
    <div
      className={'flex flex-col h-[calc(60vh)] justify-center gap-10'}
    >
      <div className={'flex flex-col self-center gap-3'}>
        <h1>
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
        <div id="termynal" data-termynal>
          <span data-ty="input">npx fly-tejas</span>
        </div>

        <CodeBlock
          language={'javascript'}
          theme={themes.dracula}
          code={initializeTejas}
          className={'bg-card rounded-md overflow-hidden'}
        />
      </div>

      <Button variant={'outline'} size={'lg'} className={'self-center'}>
        Get Started
        <ExternalLinkIcon className={'w-4 h-4 text-body ml-2'} />
      </Button>
    </div>
  )
}

export default Header
