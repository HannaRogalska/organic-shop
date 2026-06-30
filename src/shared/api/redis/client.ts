import 'server-only';
import Redis from 'ioredis';

declare global {
  var globalRedisClient: Redis | undefined;
}

let redis: Redis;

const REDIS_OPTIONS = {
  maxRetriesPerRequest: 3,
  connectTimeout: 5000,
};

if (process.env.NODE_ENV === 'production') {
  if (!process.env.REDIS_URL) {
    throw new Error('REDIS_URL environment variable is missing!');
  }
  redis = new Redis(process.env.REDIS_URL, REDIS_OPTIONS);
} else {
  if (!process.env.REDIS_URL) {
    throw new Error('REDIS_URL environment variable is missing!');
  }

  if (!globalThis.globalRedisClient) {
    globalThis.globalRedisClient = new Redis(process.env.REDIS_URL, REDIS_OPTIONS);
  }
  redis = globalThis.globalRedisClient;
}

export { redis };
