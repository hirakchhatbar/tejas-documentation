import AutoRegister
  from '@/components/layouts/Documentation/Content/Routing/RegisterTargets/AutoRegister.jsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.jsx'
import documentationStore from '@/pages/Docuementation/DocumentationStore.jsx'

const RegisterTargets = () => {
  const selectedRegisterTargetOption = documentationStore(
    (state) => state.selectedRegisterTargetOption
  )
  const setSelectedRegisterTargetOption = documentationStore(
    (state) => state.setSelectedRegisterTargetOption
  )

  return (
    <div id={'register-targets'} className={'flex flex-col gap-5'}>
      <h3>Register Targets</h3>
      <p>
        There are 2 ways to register targets in te.js, Automatic and Manual. Of
        course, we recommend automatic method to ensure code quality and cleaner
        folder structure.
      </p>

      <Tabs
        value={selectedRegisterTargetOption}
        onValueChange={setSelectedRegisterTargetOption}
      >
        <TabsList>
          <TabsTrigger id={'auto-register'} value={'auto-register'}>
            1. Auto
          </TabsTrigger>
          <TabsTrigger id={'manual-register'} value={'manual-register'}>
            2. Manual
          </TabsTrigger>
        </TabsList>
        <TabsContent value={}>
          {selectedRegisterTargetOption === 'auto-register' && <AutoRegister />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default RegisterTargets
