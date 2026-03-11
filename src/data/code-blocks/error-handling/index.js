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

const ammoThrowExample = `// Explicit: status code and/or message (always override)
ammo.throw(404);
ammo.throw(404, 'User not found');
ammo.throw(new TejError(400, 'Bad request'));

// When errors.llm.enabled: no args — LLM infers from code context (surrounding + upstream/downstream)
ammo.throw();

// Optional: pass caught error as secondary signal; LLM still uses code context as primary
ammo.throw(caughtErr);

// Per-call options: skip LLM or override message type
ammo.throw({ useLlm: false });
ammo.throw({ messageType: 'developer' });`

const llmInferredExample = `// With errors.llm.enabled — call ammo.throw() with no arguments
// LLM infers status and message from code surrounding the call (with line numbers) and upstream/downstream context
ammo.throw();

// Optional: pass error from catch; LLM uses error stack for code context
try {
  await riskyOp();
} catch (err) {
  ammo.throw(err);
}

// Explicit values always override (LLM not called)
ammo.throw(404, 'User not found');
throw new TejError(400, 'Invalid email format');

// Per-call: skip LLM or request developer-friendly message
ammo.throw({ useLlm: false });
ammo.throw({ messageType: 'developer' });`

const asyncModeEnvExample = `# .env
ERRORS_LLM_MODE=async
ERRORS_LLM_CHANNEL=both`

const asyncModeConfigExample = `// tejas.config.json
{
  "errors": {
    "llm": {
      "enabled": true,
      "mode": "async",
      "channel": "both",
      "logFile": "./logs/llm-errors.log"
    }
  }
}`

const asyncModeCodeExample = `// Programmatic setup
app.withLLMErrors({
  mode: 'async',
  channel: 'both',
  logFile: './logs/llm-errors.log',
});
app.takeoff();`

const rateLimitExample = `# Cap at 20 LLM calls per minute (default: 10)
ERRORS_LLM_RATE_LIMIT=20`

const cachingExample = `# Cache results for 24 hours — only enhance new errors
ERRORS_LLM_CACHE=true
ERRORS_LLM_CACHE_TTL=86400000

# Or programmatically:
app.withLLMErrors({ cache: true, cacheTTL: 86400000 });`

export {
  cleanCode,
  tejError,
  enableLogging,
  convenienceMethods,
  ammoThrowExample,
  llmInferredExample,
  asyncModeEnvExample,
  asyncModeConfigExample,
  asyncModeCodeExample,
  rateLimitExample,
  cachingExample
}
