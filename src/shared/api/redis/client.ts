import 'server-only';

import Redis from 'ioredis';

type SetOptions = {
  ex?: number;
  nx?: boolean;
};

export type RedisClient = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, options?: SetOptions): Promise<'OK' | null>;
  del(key: string): Promise<number>;
};

declare global {
  var globalRedisClient: Redis | undefined;
}

const REDIS_OPTIONS = {
  maxRetriesPerRequest: 3,
  connectTimeout: 5000,
};

function createRestClient(url: string, token: string): RedisClient {
  async function command<T>(args: Array<string | number>): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Redis REST request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as { result?: T; error?: string };
    if (payload.error) throw new Error(payload.error);
    return payload.result as T;
  }

  return {
    get: (key) => command<string | null>(['GET', key]),
    set: (key, value, options) => {
      const args: Array<string | number> = ['SET', key, value];
      if (options?.ex) args.push('EX', options.ex);
      if (options?.nx) args.push('NX');
      return command<'OK' | null>(args);
    },
    del: (key) => command<number>(['DEL', key]),
  };
}

function createRedisClient(): RedisClient {
  if (process.env.REDIS_URL) {
    let client: Redis;

    if (process.env.NODE_ENV === 'production') {
      client = new Redis(process.env.REDIS_URL, REDIS_OPTIONS);
    } else {
      if (!globalThis.globalRedisClient) {
        globalThis.globalRedisClient = new Redis(process.env.REDIS_URL, REDIS_OPTIONS);
      }
      client = globalThis.globalRedisClient;
    }

    return {
      get: (key) => client.get(key),
      set: (key, value, options) => {
        if (options?.ex && options.nx) {
          return client.set(key, value, 'EX', options.ex, 'NX');
        }
        if (options?.ex) return client.set(key, value, 'EX', options.ex);
        if (options?.nx) return client.set(key, value, 'NX');
        return client.set(key, value);
      },
      del: (key) => client.del(key),
    };
  }

  const restUrl = process.env.UPSTASH_REDIS_REST_URL;
  const restToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (restUrl && restToken) return createRestClient(restUrl, restToken);

  throw new Error(
    'Redis configuration is missing. Set REDIS_URL or both UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.'
  );
}

export const redis = createRedisClient();
