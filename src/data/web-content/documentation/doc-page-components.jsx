import Installation from '@/components/layouts/Documentation/Content/Installation.jsx'
import HelloWorld from '@/components/layouts/Documentation/Content/HelloWorld.jsx'
import Configuration from '@/components/layouts/Documentation/Content/Configuration.jsx'
import Routing from '@/components/layouts/Documentation/Content/Routing.jsx'
import Ammo from '@/components/layouts/Documentation/Content/Ammo.jsx'
import Middleware from '@/components/layouts/Documentation/Content/Middleware.jsx'
import Database from '@/components/layouts/Documentation/Content/Database.jsx'
import ErrorHandling from '@/components/layouts/Documentation/Content/ErrorHandling.jsx'
import FileUploads from '@/components/layouts/Documentation/Content/FileUploads.jsx'
import RateLimiting from '@/components/layouts/Documentation/Content/RateLimiting.jsx'
import CLI from '@/components/layouts/Documentation/Content/CLI.jsx'
import ApiReference from '@/components/layouts/Documentation/Content/ApiReference.jsx'
import AutoDocs from '@/components/layouts/Documentation/Content/AutoDocs.jsx'
import LlmErrorHandling from '@/components/layouts/Documentation/Content/LlmErrorHandling.jsx'

/** Map componentKey from sidebar-menu to the page component. Only imported where needed (Content.jsx) to avoid circular deps. */
export const docPageComponents = {
  installation: Installation,
  'hello-world': HelloWorld,
  configuration: Configuration,
  routing: Routing,
  ammo: Ammo,
  middleware: Middleware,
  database: Database,
  'error-handling': ErrorHandling,
  'file-uploads': FileUploads,
  'rate-limiting': RateLimiting,
  cli: CLI,
  'api-reference': ApiReference,
  'llm-error-handling': LlmErrorHandling,
  'auto-docs': AutoDocs
}
