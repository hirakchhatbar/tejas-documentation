const tejasConstructor = `import Tejas from 'te.js';

const app = new Tejas(options);`

const tejasMidair = `app.midair(middleware1, middleware2);`

const tejasTakeoff = `app.takeoff();

app.takeoff({
  withRedis: { url: 'redis://localhost:6379' },
  withMongo: { uri: 'mongodb://localhost:27017/db' }
});`

const targetConstructor = `import { Target } from 'te.js';

const api = new Target('/api');`

const targetRegister = `api.register('/users', (ammo) => {
  ammo.fire({ users: [] });
});

// With allowed methods (405 + Allow for others)
api.register('/users', { methods: ['GET', 'POST'] }, (ammo) => {
  if (ammo.GET) return ammo.fire(userService.list());
  if (ammo.POST) return ammo.fire(201, userService.create(ammo.payload));
});`

const tejasWithCORS = `app.withCORS({
  origin: ['https://example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
});`

export { tejasConstructor, tejasMidair, tejasTakeoff, targetConstructor, targetRegister, tejasWithCORS }
