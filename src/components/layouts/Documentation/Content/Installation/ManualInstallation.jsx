import DocumentationAccordionItem
  from '@/components/shared/Documentation/DocumentationAccordionItem.jsx'
import DocumentationAccordionTrigger
  from '@/components/shared/Documentation/DocumentationAccordionTrigger.jsx'
import { Accordion } from '@/components/ui/accordion.jsx'
import createProjectTermynal
  from '@/data/code-blocks/installation/create-project-termynal.jsx'
import installTejsTermynal
  from '@/data/code-blocks/installation/install-tejs-termynal.jsx'
import npmInit from '@/data/code-blocks/installation/npm-init-termynal.jsx'
import { Link } from 'react-router-dom'

const accordionItemValues = []

const SetupDirectory = () => {

  const trigger = <DocumentationAccordionTrigger
    title={'1. Create a new folder'}
    desc={'Skip if you already have a project folder'} />
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
  const trigger = <DocumentationAccordionTrigger
    title={'2. Initialize your project'}
    desc={'Skip if you know how to generate a package.json'} />

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
  const trigger = <DocumentationAccordionTrigger
    title={'3. Install te.js'}
  />

  const content = installTejsTermynal

  return (
    <DocumentationAccordionItem
      triggerChildren={trigger}
      contentChildren={content}
      value={'installTejas'}
    />
  )
}

const BuildHelloWorld = () => {
  const trigger = (
    <div className={'flex flex-col items-start text-start gap-2'}>
      <h6>4. Build a Hello World App</h6>
    </div>
  )
  const content = (
    <h6>Congratulations, You&apos;re now ready to <Link to={'/docs/hello-world'}
                                                        className={'bold'}>get
      started!</Link></h6>

  )

  return (
    <DocumentationAccordionItem
      triggerChildren={trigger}
      contentChildren={content}
      value={'buildHelloWorld'}
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
        <BuildHelloWorld />
      </Accordion>
    </div>
  )
}

export default ManualInstallation
