const tejasStyle = `const middleware = (ammo, next) => {
  // Do something
  next(); // Continue to next middleware/handler
};`

const expressStyle = `const middleware = (req, res, next) => {
  // Express-style middleware
  next();
};`

const globalMiddleware = `import Tejas from 'te.js';

const app = new Tejas();

// Add global middleware
app.midair((ammo, next) => {
  console.log(\`[\${new Date().toISOString()}] \${ammo.method} \${ammo.path}\`);
  next();
});

// Multiple middleware in one call
app.midair(
  loggingMiddleware,
  corsMiddleware,
  compressionMiddleware
);

app.takeoff();`

const targetMiddleware = `import { Target } from 'te.js';

const api = new Target('/api');

// All /api/* routes require authentication
api.midair(authMiddleware);

api.register('/users', handler);    // Protected
api.register('/posts', handler);    // Protected
api.register('/comments', handler); // Protected`

const routeMiddleware = `// Only /admin routes require admin privileges
target.register('/admin', authMiddleware, adminMiddleware, (ammo) => {
  ammo.fire({ admin: 'panel' });
});

// Public route - no middleware
target.register('/public', (ammo) => {
  ammo.fire({ public: true });
});`

const authPattern = `// middleware/auth.js
import { TejError } from 'te.js';

export const authMiddleware = async (ammo, next) => {
  const token = ammo.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    throw new TejError(401, 'No token provided');
  }
  
  try {
    const user = await verifyToken(token);
    ammo.user = user; // Attach user to ammo
    next();
  } catch (error) {
    throw new TejError(401, 'Invalid token');
  }
};`

const expressMiddleware = `import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const app = new Tejas();

// Express middleware works directly
app.midair(cors());
app.midair(helmet());
app.midair(compression());

app.takeoff();`

const asyncMiddleware = `const asyncMiddleware = async (ammo, next) => {
  const result = await someAsyncOperation();
  ammo.asyncResult = result;
  next();
};`

const terminatingEarly = `const earlyReturn = (ammo, next) => {
  if (someCondition) {
    return ammo.fire(403, 'Forbidden');
    // next() is not called, chain stops
  }
  
  next(); // Continue chain
};`

export {
  tejasStyle,
  expressStyle,
  globalMiddleware,
  targetMiddleware,
  routeMiddleware,
  authPattern,
  expressMiddleware,
  asyncMiddleware,
  terminatingEarly
}
