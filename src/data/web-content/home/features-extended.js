import methodFreeRouting from '@/data/code-blocks/method-free-routing.js'
import middlewareSupport from '@/data/code-blocks/middleware-support.js'

const data = [
  {
    image: 'images/robus-error-handling.png',
    title: 'Robust Error Handling',
    description: 'Application running on te.js never dies. Even if an error is thrown, the application continues to run. The error is caught and handled gracefully. Response is sent with details about the error.'
  },
  {
    code: methodFreeRouting,
    title: "Method-free Routing",
    description: "A single te.js route can handle multiple HTTP methods, without the need to define separate routes for each method. This makes it easier to manage routes and keep the codebase clean. It also allows you to block certain methods on a route."
  },
  {
    code: middlewareSupport,
    title: "Middleware Support",
    description: "te.js supports middleware functions  that can be applied to all endpoints in the application, all endpoints of a particular target and to individual endpoints. te.js provides out-of-the-box support for Express middlewares."
  }
]

export default data
