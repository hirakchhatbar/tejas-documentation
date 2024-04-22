import Summary from '@/components/layouts/Documentation/Content/HelloWorld/Summary.jsx'
import TableOfContent from '@/components/layouts/Documentation/Content/HelloWorld/TableOfContent.jsx'

const HelloWorld = () => {
  return (
    <div className={'flex flex-row w-full gap-8'}>
      <Summary className={'w-[70%]'} />
      <TableOfContent className={'w-[30%] sticky top-0'} />
    </div>
  )
}

export default HelloWorld
