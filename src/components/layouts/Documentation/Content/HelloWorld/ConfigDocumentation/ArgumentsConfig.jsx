import CodeBlock from '@/components/shared/CodeBlock.jsx'
import {
  configConstructorArguments
} from '@/data/code-blocks/hello-world/configuration.jsx'
import { tejasThemeBgCard } from '@/lib/code-block-themes.js'

const ArgumentsConfig = () => {
  return (
    <div id={'tejas-config-file'} className={'flex flex-col gap-5'}>
      <p>Tejas constructor accepts json object as it&apos;s parameter. You can
        pass configuration object as a constructor argument</p>
      <div className={'w-full flex flex-col gap-1'}>
        <span className={"text-muted"}>constructor arguments</span>
        <CodeBlock
          withCopy={true}
          withLineNumbers={true}
          code={configConstructorArguments}
          language={'JavaScript'}
          theme={tejasThemeBgCard}
        />
      </div>
    </div>
  )
}

export default ArgumentsConfig
