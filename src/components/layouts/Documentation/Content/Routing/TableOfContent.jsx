import { Card, CardContent, CardHeader } from '@/components/ui/card.jsx'
import data from '@/data/web-content/documentation/table-of-content/routing.js'
import { cn } from '@/lib/utils.js'
import { Link } from 'react-router-dom'
import documentationStore from '@/pages/Docuementation/DocumentationStore.jsx'

const PrimaryMenu = ({ text, link }) => {
  return <Link to={link}>{text}</Link>
}

const SubMenu = ({ text, link, onClick }) => {
  return (
    <div className={'ml-4'} onClick={onClick}>
      <Link to={link}>{text}</Link>
    </div>
  )
}

const TableOfContent = ({ className }) => {
  const setSelectedRegisterTargetOption = documentationStore(
    (state) => state.setSelectedRegisterTargetOption
  )

  return (
    <Card className={cn('flex flex-col h-fit overflow-y-auto', className)}>
      <CardHeader>
        <h5>Advanced Topics</h5>
      </CardHeader>
      <CardContent className={'flex flex-col gap-5'}>
        {data.map((item, index) => {
          return (
            <div
              key={`${index}-${item.link}`}
              className={'flex flex-col gap-2'}
            >
              <PrimaryMenu
                text={`${index + 1}. ${item.title}`}
                link={item.link}
              />
              {item.subItems && item.subItems.length > 0 ? (
                <div className={'flex flex-col gap-1'}>
                  {item.subItems.map((subItem, i) => (
                    <SubMenu
                      onClick={() =>
                        setSelectedRegisterTargetOption(subItem.value)
                      }
                      key={`${i}-${subItem.link}`}
                      text={`${index + 1}.${i + 1}. ${subItem.title}`}
                      link={subItem.link}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default TableOfContent
