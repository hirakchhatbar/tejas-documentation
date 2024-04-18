import SectionWrapper from '@/components/layouts/Home/SectionWrapper.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import FadingText from '@/components/shared/FadingText.jsx'
import { Button } from '@/components/ui/button.jsx'
import initializeTejas from '@/data/code-blocks/initialize-tejas.js'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import { ExternalLinkIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <SectionWrapper>
      <div className={'flex flex-col items-center'}>
        <img width={'20%'} src={'tejas-logo.svg'} />
      </div>
      <div className={'flex flex-col gap-3 text-center'}>
        <h1>A Node Framework For Powerful Backend Services</h1>
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
          theme={tejasThemeBgCard}
          code={initializeTejas}
          className={'border rounded-md overflow-hidden'}
        />
      </div>

      <Button
        variant={'outline'}
        size={'lg'}
        className={'self-center'}
        onClick={() => navigate('/docs')}
      >
        Get Started
        <ExternalLinkIcon className={'w-4 h-4 text-body ml-2'} />
      </Button>
    </SectionWrapper>
  )
}

export default Header
