import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  configFileFull
} from '@/data/code-blocks/hello-world/configuration.jsx'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'

const TejasConfigJson = () => {
  return (
    <div id={'tejas-config-file'} className={'flex flex-col gap-2'}>
      <p>Create a tejas.config.json file in the root of your project. te.js wil
        try to read configuration values automatically from this file.
        Copy-paste content of the file from here.</p>

      <div className={'flex flex-col gap-1'}>
        <span className={"text-muted"}>tejas.config.json</span>
        <CodeBlock
          withCopy={true}
          withLineNumbers={true}
          code={configFileFull}
          language={'webmanifest'}
          theme={tejasThemeBgCard}
        />
      </div>
    </div>
  )
}

export default TejasConfigJson
