import ManualInstallation from '@/components/layouts/Documentation/Content/Installation/ManualInstallation.jsx'
import MCPInstallation from '@/components/layouts/Documentation/Content/Installation/MCPInstallation.jsx'
import NextSteps from '@/components/layouts/Documentation/Content/Installation/NextSteps.jsx'
import NPXInstallation from '@/components/layouts/Documentation/Content/Installation/NPXInstallation.jsx'
import Prerequisites from '@/components/layouts/Documentation/Content/Installation/Prerequisites.jsx'
import ProjectStructure from '@/components/layouts/Documentation/Content/Installation/ProjectStructure.jsx'
import Troubleshooting from '@/components/layouts/Documentation/Content/Installation/Troubleshooting.jsx'
import VerifyInstallation from '@/components/layouts/Documentation/Content/Installation/VerifyInstallation.jsx'
import { Separator } from '@/components/ui/separator.jsx'

const Installation = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        The best way to get started with te.js is through an <strong className="text-foreground">AI assistant with MCP</strong> — your IDE's AI gets full framework knowledge and can scaffold projects, generate routes, and write correct code for you. You can also use the <strong className="text-foreground">npx scaffold</strong> or set things up <strong className="text-foreground">manually</strong>.
      </p>

      <MCPInstallation />
      <Separator orientation="horizontal" />

      <Prerequisites />
      <Separator orientation="horizontal" />

      <NPXInstallation />
      <Separator orientation="horizontal" />

      <ManualInstallation />
      <Separator orientation="horizontal" />

      <ProjectStructure />
      <Separator orientation="horizontal" />

      <VerifyInstallation />
      <Separator orientation="horizontal" />

      <Troubleshooting />
      <Separator orientation="horizontal" />

      <NextSteps />
    </div>
  )
}

export default Installation
