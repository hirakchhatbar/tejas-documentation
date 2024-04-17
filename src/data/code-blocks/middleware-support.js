const middlewareSupport = `// Supports express middlewares and custom te.js middlewares
const expressMiddleware = require('./express-middleware');
const myMiddleware = () => (ammo, next) => {
  // Do something with ammo
  next();
}

// Add middleware globally for all endpoints
tejas.midair(myMiddleware, expressMiddleware);

// Add middleware to all endpoints of a target
target.midair(myMiddleware, expressMiddleware);

// Add middleware to specific endpoints
target.register('/hello', myMiddleware, expressMiddleware, (ammo) => {
  // Do your stuff
  ammo.fire('Hello, World!');
});`;

export default middlewareSupport;
