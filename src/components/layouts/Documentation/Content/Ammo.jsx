import Summary from '@/components/layouts/Documentation/Content/Ammo/Summary.jsx'
import TableOfContent from '@/components/layouts/Documentation/Content/Ammo/TableOfContent.jsx'

const Ammo = () => {
  return (
    <div className={'flex flex-col gap-10'}>
      <div className={'flex flex-row w-full gap-8'}>
        <Summary className={'w-[70%]'} />
        <TableOfContent className={'w-[30%] sticky top-0'} />
      </div>
    </div>
  )
}

export default Ammo
