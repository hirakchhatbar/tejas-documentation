import Content from '@/components/layouts/Documentation/Content.jsx'
import Sidebar from '@/components/layouts/Documentation/Sidebar.jsx'

const Documentation = () => {
  return (
    <div className={'w-[100vw] h-[calc(100vh-122px)] flex flex-row m-[-2rem]'}>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Documentation
