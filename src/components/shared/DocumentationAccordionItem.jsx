import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'

const accordionTriggerClasses =
  'flex rounded-md !rounded-r-none border-0'
const accordionContentClasses = 'rounded-md bg-card !rounded-l-none border !border-t-0 !border-b-0 !border-r-0'

const DocumentationAccordionItem = ({triggerChildren, contentChildren, value}) => {
  return (
    <AccordionItem
      className='w-full border-0 grid grid-cols-doc-accordion'
      value={value}
    >
      <AccordionTrigger
        className={accordionTriggerClasses}
        iconOrientation={'horizontal'}
      >
        {triggerChildren}
      </AccordionTrigger>
      <AccordionContent className={accordionContentClasses}>
        {contentChildren}
      </AccordionContent>
    </AccordionItem>
  )
}

export default DocumentationAccordionItem