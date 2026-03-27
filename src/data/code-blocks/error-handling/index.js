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

const ammoThrowExample = `// All throws get LLM analysis when withLLMErrors() is enabled.
// Explicit codes/messages are preserved — LLM only adds devInsight.
ammo.throw(404);                          // 404 + devInsight
ammo.throw(404, 'User not found');        // 404 "User not found" + devInsight
ammo.throw(new TejError(400, 'Bad'));     // 400 "Bad" + devInsight

// No args or bare Error — LLM infers status code + message + devInsight
ammo.throw();
ammo.throw(caughtErr);

// Opt out of LLM for a specific call (works on every signature)
ammo.throw(502, 'Known issue', { useLlm: false });
ammo.throw({ useLlm: false });

// Override message type for this call
ammo.throw({ messageType: 'developer' });`

const llmInferredExample = `// With errors.llm enabled — every ammo.throw() is enriched by the LLM.
// Explicit codes/messages are always preserved; LLM adds devInsight.
ammo.throw(404, 'User not found');  // keeps 404 + "User not found", adds devInsight
ammo.throw(502);                    // keeps 502 + "Bad Gateway", adds devInsight

// No args or bare Error — LLM infers status code AND message
ammo.throw();
try {
  await riskyOp();
} catch (err) {
  ammo.throw(err);              // LLM infers from error + code context
}

// Opt out of LLM for a specific call
ammo.throw(502, 'Known issue', { useLlm: false });
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
