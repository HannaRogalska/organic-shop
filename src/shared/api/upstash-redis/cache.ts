import { redis } from './client';

type SetCacheParams<T> = {
  key: string;
  value: T;
  ttlSeconds: number;
};

export async function setCache<T>(params: SetCacheParams<T>): Promise<void> {
  await redis.set(params.key, params.value, { ex: params.ttlSeconds });
}

export async function getCache<T>(key: string): Promise<T | null> {
  return redis.get<T>(key);
}
