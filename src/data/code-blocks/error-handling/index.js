const cleanCode = `// No try-catch needed — Tejas handles errors automatically
target.register('/users/:id', async (ammo) => {
  const user = await database.findUser(ammo.payload.id);
  const posts = await database.getUserPosts(user.id);
  ammo.fire({ user, posts });
});`

const tejError = `import { TejError } from 'te.js';

// Throw a 404 error
throw new TejError(404, 'User not found');

// Throw a 400 error
throw new TejError(400, 'Invalid email format');`

const enableLogging = `const app = new Tejas({
  log: {
    exceptions: true  // Log all caught exceptions
  }
});`

const convenienceMethods = `// 404 Not Found
ammo.notFound();

// 405 Method Not Allowed
ammo.notAllowed();

// 401 Unauthorized
ammo.unauthorized();`

export { cleanCode, tejError, enableLogging, convenienceMethods }
