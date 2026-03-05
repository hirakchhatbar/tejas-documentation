import ArgumentsConfig from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/ArgumentsConfig.jsx'
import ConfigVariables from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/ConfigVariables.jsx'
import EnvConfig from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/EnvConfig.jsx'
import TejasConfigJson from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/TejasConfigJson.jsx'
import ErrorsConfigSection from '@/components/layouts/Documentation/Content/HelloWorld/ConfigDocumentation/ErrorsConfigSection.jsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.jsx'
import docStore from '@/pages/Documentation/DocumentationStore.jsx'
import { Separator } from '@/components/ui/separator.jsx'

const Configuration = () => {
  const selectedConfigOption = docStore((state) => state.selectedConfigOption)
  const setSelectedConfigOption = docStore((state) => state.setSelectedConfigOption)

  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        te.js can be configured via a config file, environment variables, or constructor options. All options are described below; you can use one or combine them (later sources override earlier ones).
      </p>

      <section id="available-options" className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold tracking-tight">Available configuration options</h2>
        <ConfigVariables />
      </section>

      <Separator orientation="horizontal" />

      <ErrorsConfigSection />

      <Separator orientation="horizontal" />

      <section id="ways-to-configure" className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold tracking-tight">Ways to configure</h2>
        <p className="text-muted-foreground">
          You can provide configuration in three ways:
        </p>
        <Tabs
          className="mt-2"
          value={selectedConfigOption}
          onValueChange={setSelectedConfigOption}
        >
          <TabsList>
            <TabsTrigger id="tejas.config.json" value="tejas.config.json">
              1. tejas.config.json
            </TabsTrigger>
            <TabsTrigger id="env" value="env">
              2. .env
            </TabsTrigger>
            <TabsTrigger id="arguments" value="arguments">
              3. Constructor arguments
            </TabsTrigger>
          </TabsList>
          <TabsContent className="ml-2 pt-2" value={selectedConfigOption}>
            {selectedConfigOption === 'tejas.config.json' && <TejasConfigJson />}
            {selectedConfigOption === 'env' && <EnvConfig />}
            {selectedConfigOption === 'arguments' && <ArgumentsConfig />}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

export default Configuration
