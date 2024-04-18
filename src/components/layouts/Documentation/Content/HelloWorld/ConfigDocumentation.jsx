import ArgumentsConfig
  from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/ArgumentsConfig.jsx'
import ConfigVariables
  from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/ConfigVariables.jsx'
import EnvConfig
  from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/EnvConfig.jsx'
import TejasConfigJson
  from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/TejasConfigJson.jsx'
import helloWorldStore
  from '@/components/layouts/Documentation/Content/HelloWorld/HelloWorldStore.jsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.jsx'

const ConfigDocumentation = () => {

  const selectedConfigOption = helloWorldStore(
    (state) => state.selectedConfigOption)
  const setSelectedConfigOption = helloWorldStore(
    (state) => state.setSelectedConfigOption)

  return (
    <div id={'configuration'} className={'flex flex-col gap-5'}>
      <h3>Configuration</h3>

      <div id={"available-options"} className={'flex flex-col gap-2'}>
        <h5>Available Configuration Options</h5>
        <ConfigVariables />
      </div>

      <div className={'flex flex-col gap-2'}>
        <h5>Ways to Configure</h5>
        <p>You can configure te.js application in 3 ways:</p>
        <Tabs className={"mt-2"} value={selectedConfigOption}
              onValueChange={setSelectedConfigOption}>
          <TabsList>
            <TabsTrigger id={'tejas.config.json'} value={'tejas.config.json'}>1.
              tejas.config.json</TabsTrigger>
            <TabsTrigger id={'env'} value={'env'}>2. .env</TabsTrigger>
            <TabsTrigger id={'arguments'} value={'arguments'}>3.
              arguments</TabsTrigger>
          </TabsList>
          <TabsContent className={'ml-2'} value={selectedConfigOption}>
            {selectedConfigOption === 'tejas.config.json' &&
              <TejasConfigJson />}
            {selectedConfigOption === 'env' && <EnvConfig />}
            {selectedConfigOption === 'arguments' && <ArgumentsConfig />}
          </TabsContent>
        </Tabs>
      </div>

    </div>
  )
}

export default ConfigDocumentation
