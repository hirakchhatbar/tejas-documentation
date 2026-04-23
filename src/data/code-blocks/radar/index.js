const quickStart = `import Tejas from 'te.js';

const app = new Tejas();

app
  .withRadar({
    apiKey: 'rdr_your_api_key'
  })
  .takeoff();`

const fullConfig = `app.withRadar({
  apiKey: 'rdr_your_api_key',        // or set RADAR_API_KEY env
  collectorUrl: 'https://collector.usetejas.com',
  projectName: 'my-api',             // or set RADAR_PROJECT_NAME env

  // Batching
  flushInterval: 2000,               // ms between flushes
  batchSize: 100,                    // flush when batch hits this size
  maxQueueSize: 10000,               // max in-memory events

  // Capture
  capture: {
    request: true,                   // send request bodies
    response: true,                  // send response bodies
    headers: true,                   // true | false | ['authorization', 'x-request-id']
    logs: true,                      // forward TejLogger calls (true | false | 'explicit')
    logLevels: ['warn', 'error']     // filter forwarded log levels (implicit path only)
  },

  // Privacy
  mask: {
    fields: ['ssn', 'creditCard']    // extra fields to mask client-side
  },

  // Ignored routes
  ignore: ['/health', '/metrics']
});`

const captureOptions = `app.withRadar({
  apiKey: 'rdr_your_api_key',
  capture: {
    request: true,                   // include request body in logs
    response: true,                  // include response body in logs
    headers: ['authorization', 'x-request-id'],  // allowlist specific headers
    logs: true,                      // forward TejLogger output
    logLevels: ['warn', 'error']     // only forward these levels (implicit path)
  }
});`

const appLogsExample = `import Tejas from 'te.js';
import TejLogger from 'tej-logger';

const app = new Tejas();
const logger = new TejLogger('billing');

await app.withRadar({
  apiKey: process.env.RADAR_API_KEY,
  capture: {
    logs: true,                      // forward TejLogger output to Radar
    logLevels: ['warn', 'error']     // optional: filter — omit to forward all
  }
});

app.takeoff();

// Anywhere in your app — no Radar-specific API to learn:
logger.info('Invoice generated', { invoiceId: 'inv_123' });
logger.warn('Retrying payment');
logger.error(new Error('Stripe timeout'));

// Inside a request handler, logs are automatically
// correlated with the request's traceId:
export async function createInvoice(ammo) {
  logger.info('Creating invoice', { accountId: ammo.account.id });
  // ...
}`

const layeredControlExample = `import Tejas from 'te.js';
import TejLogger from 'tej-logger';

const app = new Tejas();

// 'explicit' mode: only loggers that opt in reach Radar
await app.withRadar({
  apiKey: process.env.RADAR_API_KEY,
  capture: { logs: 'explicit' }
});

// Instance opt-in — all calls from this logger go to Radar:
const billing = new TejLogger('Billing', { radar: true });
billing.info('Invoice created');           // → forwarded to Radar
billing.warn('Retrying payment');          // → forwarded to Radar

// Per-call opt-out overrides instance default:
billing.debug('verbose detail', { radar: false }); // → not forwarded

// Logger without opt-in stays off Radar in 'explicit' mode:
const cache = new TejLogger('Cache');
cache.info('cache hit');                   // → console only

// Per-call opt-in on any logger:
cache.error('unexpected eviction', { radar: true }); // → forwarded

// Precedence: per-call > instance > global config
// When radar: true is explicit, the logLevels filter is bypassed.`

const radarStatsExample = `// Inspect log forwarding counters for diagnostics:
const stats = app.radarStats();
// {
//   emitted: 42,         — logs forwarded to Radar
//   droppedByMode: 18,   — dropped (explicit mode, no opt-in)
//   droppedByLevel: 5,   — dropped (logLevels filter)
//   droppedByFlag: 3     — dropped (radar: false)
// }`

const maskingExample = `app.withRadar({
  apiKey: 'rdr_your_api_key',
  capture: { request: true, response: true },
  mask: {
    fields: ['ssn', 'creditCard', 'dateOfBirth']
  }
});

// Request body { name: 'Alice', ssn: '123-45-6789' }
// Sent to collector as { name: 'Alice', ssn: '*' }
//
// The collector also enforces its own non-bypassable
// GDPR blocklist server-side for fields like password,
// token, secret, etc.`

const ignoreRoutes = `app.withRadar({
  apiKey: 'rdr_your_api_key',
  ignore: ['/health', '/metrics', '/readiness']
  // OPTIONS requests are always skipped automatically
});`

export {
  quickStart,
  fullConfig,
  captureOptions,
  appLogsExample,
  layeredControlExample,
  radarStatsExample,
  maskingExample,
  ignoreRoutes
}
