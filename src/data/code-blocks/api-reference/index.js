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
});`

export { tejasConstructor, tejasMidair, tejasTakeoff, targetConstructor, targetRegister }
