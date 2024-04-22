import docStore from '@/pages/Docuementation/DocumentationStore.jsx'
import { cn } from '@/lib/utils.js'

const Content = ({ className }) => {
  const selectedMenu = docStore((state) => state.selectedMenu)

  return (
    <div
      className={cn(
        className,
        'flex flex-col w-full p-8 gap-5 overflow-y-auto'
      )}
    >
      <h3>{selectedMenu.title}</h3>
      {selectedMenu.Component ? (
        <selectedMenu.Component />
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  )
}

export default Content
