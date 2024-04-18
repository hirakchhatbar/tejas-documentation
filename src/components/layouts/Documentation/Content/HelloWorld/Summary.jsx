import CodeBlock from '@/components/shared/CodeBlock.jsx'
import DocumentationAccordionItem
  from '@/components/shared/Documentation/DocumentationAccordionItem.jsx'
import DocumentationAccordionTrigger
  from '@/components/shared/Documentation/DocumentationAccordionTrigger.jsx'
import { Accordion } from '@/components/ui/accordion.jsx'
import appJs from '@/data/code-blocks/hello-world/appjs.jsx'
import {
  configFileBasic
} from '@/data/code-blocks/hello-world/configuration.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { cn } from '@/lib/utils.js'
import { Link } from 'react-router-dom'

const ConfigFile = () => {
  const trigger = (
    <DocumentationAccordionTrigger
      title={'1. Create tejas.config.json'}
      desc={'Create a configuration file'}
    />
  )

  const content = (
    <div className={'flex flex-col gap-3'}>
      <p>Create a tejas.config.json file in the root directory of your project
        and copy-paste content shown below. For advanced configuration options,
        see <Link to={'#configuration'}>configuration</Link> documentation below
      </p>

      <CodeBlock
        code={configFileBasic}
        language={'Json'}
        withCopy={true}
        theme={tejasTheme}
      />
    </div>
  )

  return (
    <DocumentationAccordionItem
      contentChildren={content}
      triggerChildren={trigger}
      value={'setupConfig'}
    />
  )
}
const SetupAppJs = () => {
  const trigger = (
    <DocumentationAccordionTrigger
      title={'2. Create app.js'}
      desc={'And copy content of this code into your app.js'}
    />
  )

  const content = (
    <CodeBlock
      code={appJs}
      language={'javascript'}
      withCopy={true}
      theme={tejasTheme}
    />
  )

  return (
    <DocumentationAccordionItem
      contentChildren={content}
      triggerChildren={trigger}
      value={'appJS'}
    />
  )
}

const RunApp = () => {
  const trigger = (
    <DocumentationAccordionTrigger
      title={'3. Run the app'}
    />
  )

  const content = (
    <div className={'flex flex-col gap-3'}>
      <CodeBlock
        code={'node app.js'}
        language={'shell'}
        withCopy={true}
        theme={tejasTheme}
      />
      <p>If you see below line printed in your terminal, Tejas is up and
        running. Navigate to <Link
          to={'http://localhost:1403'}>http://localhost:1403</Link> in your
        favorite browser to
        verify</p>
      <img className={'rounded-md'} src={'/images/tejas-tookoff.png'}
           alt={'Tejas took off'} />
    </div>
  )

  return (
    <DocumentationAccordionItem
      contentChildren={content}
      triggerChildren={trigger}
      value={'runApp'}
    />
  )
}

const Summary = ({ className }) => {
  return (
    <div className={cn(
      'flex flex-col gap-5',
      className
    )}>
      <p>
        If you used our generator npx fly-tejas, you&apos;d have a full app with
        numerous JavaScript files and sub directories for various purposes. Go
        through the comments in the files to understand the structure. Run the
        project with npm run start or node app.js and you are good to go.
      </p>
      <p>
        If you installed it manually, let&apos;s go step by step to setup a
        simple
        hello world program.
      </p>

      <Accordion defaultValue={['setupConfig', 'appJS', 'runApp']}
                 type={'multiple'}
                 className={'flex-col grid gap-3'}>
        <ConfigFile />
        <SetupAppJs />
        <RunApp />
      </Accordion>
    </div>
  )
}

export default Summary
