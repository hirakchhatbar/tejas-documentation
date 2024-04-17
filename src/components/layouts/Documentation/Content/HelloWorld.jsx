import { Accordion } from '@/components/ui/accordion.jsx'
import DocumentationAccordionItem from '@/components/shared/DocumentationAccordionItem.jsx'
import CodeBlock from '@/components/shared/CodeBlock.jsx'
import appJs from '@/data/code-blocks/hello-world/appjs.jsx'
import configFile from '@/data/code-blocks/hello-world/configuration.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'

const ConfigFile = () => {
  const trigger = (
    <div className={'flex flex-col gap-2 items-start text-start'}>
      <h6>1. Basic Configuration</h6>
      <p>
        Best way to configure te.js server is to create a tejas.config.json file
        at the root of your project.
      </p>
    </div>
  )

  const content = (
    <div className={'flex flex-col gap-3'}>
      <span className={'text-body'}>
        <span className={'text-heading font-bold'}>port:</span> Port to run your
        project on. Default is 1403
      </span>
      <span className={'text-body'}>
        <span className={'text-heading font-bold'}>log.http_requests:</span> If
        true, logs all incoming http requests to console. Log will include
        endpoint, method, time taken to finish the request request
        body/parameters and response.
      </span>
      <span className={'text-body'}>
        <span className={'text-heading font-bold'}>log.exceptions:</span> If
        true, logs all uncaught exceptions to console. te.js will never die,
        instead, it will log the exception and send a 500 response to the
        client.
      </span>
      <span className={'text-body'}>
        <span className={'text-heading font-bold'}>dir.targets:</span> Directory
        where you will put all your <a href={'/docs/routing'}>target</a> files.
        A target file should end with .target.js extension.
      </span>

      <CodeBlock
        code={configFile}
        language={'json'}
        withCopy={true}
        theme={tejasTheme}
      />
    </div>
  )

  return (
    <DocumentationAccordionItem
      contentChildren={content}
      triggerChildren={trigger}
      value={'configFile'}
    />
  )
}
const SetupAppJs = () => {
  const trigger = (
    <div className={'flex flex-col gap-2 items-start text-start'}>
      <h6>2. Create app.js file</h6>
      <p>And copy content of this code into your app.js</p>
    </div>
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
      value={'appjs'}
    />
  )
}

const HelloWorld = () => {
  return (
    <div className={'flex flex-col gap-5'}>
      <p>
        If you used our generator npx fly-tejas, you'd have a full app with
        numerous JavaScript files and sub directories for various purposes. Go
        through the comments in the files to understand the structure. Run the
        project with npm run start or node app.js and you are good to go.
      </p>
      <p>
        If you installed it manually, let's go step by step to setup a simple
        hello world program.
      </p>

      <Accordion type={'multiple'} className={'flex-col grid gap-3'}>
        <ConfigFile />
        <SetupAppJs />
      </Accordion>
    </div>
  )
}

export default HelloWorld
