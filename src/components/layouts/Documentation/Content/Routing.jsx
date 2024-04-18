import Summary from '@/components/layouts/Documentation/Content/Routing/Summary.jsx'
import TableOfContent from '@/components/layouts/Documentation/Content/Routing/TableOfContent.jsx'

const Routing = () => {
  return (
    <div className={'flex flex-col gap-10'}>
      <div className={'flex flex-row w-full gap-8'}>
        <Summary className={'w-[70%]'} />
        <TableOfContent className={'w-[30%]'} />
      </div>
    </div>
  )
}

export default Routing
