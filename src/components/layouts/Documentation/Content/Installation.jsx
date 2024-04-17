import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.jsx'
import NPXInstallation from '@/components/layouts/Documentation/Content/Installation/NPXInstallation.jsx'
import ManualInstallation from '@/components/layouts/Documentation/Content/Installation/ManualInstallation.jsx'

const Installation = () => {
  return (
    <Tabs defaultValue={'npx'}>
      <TabsList>
        <TabsTrigger value={'npx'}>npx</TabsTrigger>
        <TabsTrigger value={'manual'}>manual</TabsTrigger>
      </TabsList>
      <TabsContent className={"py-4"} value={'npx'}>
        <NPXInstallation />
      </TabsContent>
      <TabsContent className={"py-4"} value={'manual'}>
        <ManualInstallation />
      </TabsContent>
    </Tabs>
  )
}

export default Installation
