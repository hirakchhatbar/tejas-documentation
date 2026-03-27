const quickStart = `import Tejas from 'te.js';

const app = new Tejas();

app
  .withRateLimit({
    maxRequests: 100,
    timeWindowSeconds: 60
  })
  .takeoff();`

const configuration = `app.withRateLimit({
  maxRequests: 100,
  timeWindowSeconds: 60,
  algorithm: 'sliding-window',  // 'sliding-window' | 'token-bucket' | 'fixed-window'
  store: 'memory',              // 'memory' or { type: 'redis', url: '...' }
  keyGenerator: (ammo) => ammo.ip,
  onRateLimited: (ammo) => {
    ammo.fire(429, { error: 'Slow down!' });
  }
});`

const slidingWindow = `app.withRateLimit({
  maxRequests: 100,
  timeWindowSeconds: 60,
  algorithm: 'sliding-window'
});`

const memoryStore = `app.withRateLimit({
  maxRequests: 100,
  timeWindowSeconds: 60,
  store: 'memory'
});`

const redisStore = `app.withRateLimit({
  maxRequests: 100,
  timeWindowSeconds: 60,
  store: {
    type: 'redis',
    url: 'redis://localhost:6379'
  }
});`

export { quickStart, configuration, slidingWindow, memoryStore, redisStore }
