import { Accordion } from '@/components/ui/accordion.jsx'
import DocumentationAccordionItem from '@/components/shared/DocumentationAccordionItem.jsx'
import createProjectTermynal from '@/data/code-blocks/installation/create-project-termynal.jsx'
import npmInit from '@/data/code-blocks/installation/npm-init-termynal.jsx'
import installTejsTermynal from '@/data/code-blocks/installation/install-tejs-termynal.jsx'

const accordionItemValues = []

const SetupDirectory = () => {
  const trigger = (
    <div className={'flex flex-col items-start text-start gap-2'}>
      <h6>1. Create a new folder</h6>
      <p className={"text-sm"}>Skip if you already have a project folder</p>
    </div>
  )
  const content = createProjectTermynal

  return (
    <DocumentationAccordionItem
      triggerChildren={trigger}
      contentChildren={content}
      value={'createDir'}
    />
  )
}
const InitProject = () => {
  const trigger = (
    <div className={'flex flex-col items-start text-start gap-2'}>
      <h6>2. Initialize your project</h6>
      <p className={"text-sm text-muted font-normal"}>Skip if you know how to run npm init.</p>
    </div>
  )
  const content = npmInit

  return (
    <DocumentationAccordionItem
      triggerChildren={trigger}
      contentChildren={content}
      value={'initProject'}
    />
  )
}
const InstallTejas = () => {
  const trigger = (
    <div className={'flex flex-col items-start text-start gap-2'}>
      <h6>3. Install te.js</h6>
    </div>
  )
  const content = installTejsTermynal

  return (
    <DocumentationAccordionItem
      triggerChildren={trigger}
      contentChildren={content}
      value={'installTejas'}
    />
  )
}

const ManualInstallation = () => {
  return (
    <div className={'flex flex-col w-full gap-6'}>
      <Accordion
        className={'flex-col grid gap-3'}
        type={'multiple'}
        defaultValue={accordionItemValues}
      >
        <SetupDirectory />
        <InitProject />
        <InstallTejas />
      </Accordion>
    </div>
  )
}

export default ManualInstallation
