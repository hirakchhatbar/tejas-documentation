import ConfigDocumentation
  from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation.jsx'
import ExceptionLog
  from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/ExceptionLog.jsx'
import HTTPRequestLogs
  from '@/components/layouts/Documentation/Content/HelloWorld/HTTPRequestLogs.jsx'
import Summary
  from '@/components/layouts/Documentation/Content/HelloWorld/Summary.jsx'
import TableOfContent
  from '@/components/layouts/Documentation/Content/HelloWorld/TableOfContent.jsx'
import { Separator } from '@/components/ui/separator.jsx'

const HelloWorld = () => {
  return (
    <div className={'flex flex-col gap-10'}>
      <div className={'flex flex-row w-full gap-8'}>
        <Summary className={'w-[70%]'} />
        <TableOfContent className={'w-[30%]'} />
      </div>

      <ConfigDocumentation />

      <Separator orientation={'horizontal'} />

      <HTTPRequestLogs />

      <Separator orientation={'horizontal'} />

      <ExceptionLog />
    </div>
  )
}

export default HelloWorld
