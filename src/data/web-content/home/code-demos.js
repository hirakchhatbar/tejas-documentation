import methodFreeRouting from '@/data/code-blocks/method-free-routing.js'
import middlewareSupport from '@/data/code-blocks/middleware-support.js'
import { cleanCode } from '@/data/code-blocks/error-handling/index.js'

const codeDemos = [
  {
    title: 'Routing',
    description:
      'Define routes with Targets. One route can handle multiple HTTP methods; use ammo.GET, ammo.POST, and ammo.payload for a clean, method-free API.',
    code: methodFreeRouting,
    language: 'javascript'
  },
  {
    title: 'Middleware',
    description:
      'Use midair() to attach middleware globally, per Target, or per route. Full Express middleware compatibility plus custom te.js middleware.',
    code: middlewareSupport,
    language: 'javascript'
  },
  {
    title: 'Error Handling',
    description:
      'No try-catch required. Tejas catches errors automatically and returns a proper response. Use TejError for HTTP errors or ammo.notFound() and friends.',
    code: cleanCode,
    language: 'javascript'
  }
]

export default codeDemos
