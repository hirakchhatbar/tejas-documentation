import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import basicRoute from '@/data/code-blocks/routing/basic-route.js'
import { cn } from '@/lib/utils.js'
import { Separator } from '@/components/ui/separator.jsx'
import { Card } from '@/components/ui/card.jsx'
import { Link } from 'react-router-dom'
import RegisterTargets from '@/components/layouts/Documentation/Content/Routing/RegisterTargets.jsx'
import Endpoints from '@/components/layouts/Documentation/Content/Routing/Endpoints.jsx'
import MethodFreeRouting from '@/components/layouts/Documentation/Content/Routing/MethodFreeRouting.jsx'

const Summary = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      <div className={cn('flex flex-col gap-5')}>
        <Card className="p-4 border-sky-500/30">
          <p className="font-medium">
            In te.js terminology, a router is called a target and{' '}
            <Link to={'#register-targets'}>target.register()</Link> is
            equivalent to router.use().
          </p>
        </Card>
        <p>Routing with te.js is dead simple! Here is a basic example.</p>
        <CodeBlock
          theme={tejasTheme}
          withCopy={true}
          language={'javascript'}
          code={basicRoute}
        />
      </div>

      <Separator orientation={'horizontal'} />
      <RegisterTargets />
      <Separator orientation={'horizontal'} />
      <Endpoints />
      <Separator orientation={'horizontal'} />
      <MethodFreeRouting />
    </div>
  )
}

export default Summary
