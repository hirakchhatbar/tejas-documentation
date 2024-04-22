import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'
import basicRoute from '@/data/code-blocks/routing/basic-route.js'
import { cn } from '@/lib/utils.js'
import { Separator } from '@/components/ui/separator.jsx'
import { Card } from '@/components/ui/card.jsx'
import { Link } from 'react-router-dom'

const Summary = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      <div className={cn('flex flex-col gap-5')}>
        <Card className={'p-4 border-error'}>
          <h5>
            Ammo is an object that wraps  http.ServerResponse
          </h5>
        </Card>
        <p>Routing with te.js is dead simple! Here is a basic example.</p>
        <CodeBlock
          theme={tejasThemeBgCard}
          withCopy={true}
          language={'javascript'}
          code={basicRoute}
        />
      </div>

      <Separator orientation={'horizontal'} />
    </div>
  )
}

export default Summary
