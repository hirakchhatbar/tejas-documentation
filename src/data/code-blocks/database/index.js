const quickStartRedis = `import Tejas from 'te.js';

const app = new Tejas();

app.takeoff({
  withRedis: { url: 'redis://localhost:6379' }
});`

const quickStartMongo = `app.takeoff({
  withMongo: { uri: 'mongodb://localhost:27017/myapp' }
});`

const bothTogether = `app.takeoff({
  withRedis: { url: 'redis://localhost:6379' },
  withMongo: { uri: 'mongodb://localhost:27017/myapp' }
});`

const redisBasic = `app.withRedis({
  url: 'redis://localhost:6379'
});`

const mongoBasic = `app.withMongo({
  uri: 'mongodb://localhost:27017/myapp'
});`

const gettingConnections = `import dbManager from 'te.js/database/index.js';

// Get Redis client
const redis = dbManager.getConnection('redis');

// Get MongoDB client
const mongo = dbManager.getConnection('mongodb');`

const routeHandlerRedis = `cache.register('/get/:key', async (ammo) => {
  const redis = dbManager.getConnection('redis');
  const { key } = ammo.payload;
  
  const value = await redis.get(key);
  
  if (!value) {
    return ammo.fire(404, { error: 'Key not found' });
  }
  
  ammo.fire({ key, value });
});`

export {
  quickStartRedis,
  quickStartMongo,
  bothTogether,
  redisBasic,
  mongoBasic,
  gettingConnections,
  routeHandlerRedis
}
