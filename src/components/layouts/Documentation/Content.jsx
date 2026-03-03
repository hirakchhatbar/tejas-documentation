import ComingSoon from '@/components/layouts/Documentation/Content/ComingSoon.jsx'
import { docPageComponents } from '@/data/web-content/documentation/doc-page-components.jsx'
import PrevNextNav from '@/components/shared/PrevNextNav.jsx'
import docStore from '@/pages/Documentation/DocumentationStore.jsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb.jsx'
import { cn } from '@/lib/utils.js'
import { Link } from 'react-router-dom'

const Content = ({ className }) => {
  const selectedMenu = docStore((state) => state.selectedMenu)
  const PageComponent =
    selectedMenu?.componentKey && docPageComponents[selectedMenu.componentKey]
      ? docPageComponents[selectedMenu.componentKey]
      : null

  return (
    <div
      className={cn(
        className,
        'flex flex-col w-full overflow-y-auto space-y-8'
      )}
    >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/docs">Docs</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {selectedMenu?.title ?? 'Documentation'}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          {selectedMenu?.title}
        </h1>
        {PageComponent ? (
          <PageComponent />
        ) : selectedMenu?.comingSoon ? (
          <ComingSoon title={selectedMenu?.title} />
        ) : (
          <h2>404 Not Found</h2>
        )}
      </article>

      <PrevNextNav />
    </div>
  )
}

export default Content
