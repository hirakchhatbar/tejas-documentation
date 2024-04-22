import Advanced
  from '@/components/layouts/Documentation/Content/Ammo/Advanced.jsx'
import Basics from '@/components/layouts/Documentation/Content/Ammo/Basics.jsx'
import { Card } from '@/components/ui/card.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { cn } from '@/lib/utils.js'

const Summary = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      <div className={cn('flex flex-col gap-5')}>
        <Card className={'p-4 border-error'}>
          <h5>
            Ammo is a powerful Object that wraps http.IncomingMessage and
            http.ServerResponse objects from Node.js.
          </h5>
        </Card>
        <p> It provides a simpler and easier way to handle requests and
          responses.</p>
        <ul className={'ml-6 list-disc'}>
          <li><span className={"text-heading"}>Streamlined Development:</span> The Ammo class simplifies
            the process of
            handling HTTP requests and responses, reducing boilerplate code and
            promoting code readability.
          </li>
          <li><span className={"text-heading"}>Enhanced Functionality:</span> Ammo provides a set of methods that make
            it easier to work with HTTP requests and responses, such as the
            ability to easily parse request bodies and set response headers.
          </li>
          <li><span className={"text-heading"}>Improved Performance:</span> By providing a more streamlined way to
            handle HTTP requests and responses, Ammo can help improve the
            performance of your Node.js applications.
          </li>
        </ul>
      </div>

      <Separator orientation={'horizontal'} />

      <Basics />

      <Separator orientation={'horizontal'} />

      <Advanced />
    </div>
  )
}

export default Summary
