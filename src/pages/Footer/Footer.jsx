import { Separator } from '@/components/ui/separator.jsx'

const Footer = () => {
  return (
    <div className={'flex flex-col'}>
      <Separator orientation={'horizontal'} />
      <div
        className={'flex flex-row w-full h-[50px] bg-slate-950 pl-5 items-center gap-10'}>
        <p>©2024</p>
        <p>Source code is available on GitHub</p>
      </div>
    </div>
  )
}

export default Footer
