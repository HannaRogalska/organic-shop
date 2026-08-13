import { after } from 'next/server';
import { redis } from './client';

type CacheEntry<T> = {
  cachedAt: number;
  data: T;
};

type GetCachedDataParams<T> = {
  key: string;
  loadData: () => Promise<T>;
  isValid: (value: unknown) => value is T;
  freshTtlSeconds: number;
  staleTtlSeconds: number;
  refreshLockSeconds: number;
};

type SetCacheParams<T> = {
  key: string;
  value: T;
  ttlSeconds: number;
};

async function setCache<T>(params: SetCacheParams<T>): Promise<void> {
  await redis.set(params.key, params.value, { ex: params.ttlSeconds });
}

async function getCache<T>(key: string): Promise<T | null> {
  return redis.get<T>(key);
}

function isCacheEntry<T>(
  value: unknown,
  isValid: (data: unknown) => data is T
): value is CacheEntry<T> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const entry = value as Record<string, unknown>;

  return (
    typeof entry.cachedAt === 'number' && Number.isFinite(entry.cachedAt) && isValid(entry.data)
  );
}

export async function getCachedData<T>({
  key,
  loadData,
  isValid,
  freshTtlSeconds,
  staleTtlSeconds,
  refreshLockSeconds,
}: GetCachedDataParams<T>): Promise<T> {
  async function loadAndCache(): Promise<T> {
    const data = await loadData();

    try {
      await setCache({
        key,
        value: {
          cachedAt: Date.now(),
          data,
        },
        ttlSeconds: staleTtlSeconds,
      });
    } catch {
      // Redis is optional; the loaded data can still be returned.
    }

    return data;
  }

  let cachedValue: unknown = null;
  try {
    cachedValue = await getCache<unknown>(key);
  } catch {
    // Redis is optional; loadData remains the source of truth.
  }

  if (isCacheEntry(cachedValue, isValid)) {
    const ageSeconds = (Date.now() - cachedValue.cachedAt) / 1000;
    if (ageSeconds > freshTtlSeconds) {
      after(async () => {
        const lockKey = `${key}:refresh-lock`;

        try {
          const lockAcquired = await redis.set(lockKey, '1', {
            ex: refreshLockSeconds,
            nx: true,
          });
          if (lockAcquired !== 'OK') return;

          await loadAndCache();
        } catch {
          // The stale value remains available until its Redis TTL expires.
        }
      });
    }

    return cachedValue.data;
  }
  if (cachedValue !== null) {
    try {
      await redis.del(key);
    } catch {
      // A malformed value can safely expire without blocking data loading.
    }
  }

  return loadAndCache();
}
