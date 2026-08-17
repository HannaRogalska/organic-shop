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

const CACHE_WAIT_INTERVAL_MS = 50;

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

async function acquireLock(key: string, ttlSeconds: number): Promise<boolean> {
  const lockAcquired = await redis.set(`${key}:refresh-lock`, '1', {
    ex: ttlSeconds,
    nx: true,
  });

  return lockAcquired === 'OK';
}

async function waitForCache<T>(
  key: string,
  isValid: (data: unknown) => data is T,
  waitSeconds: number
): Promise<T | null> {
  const attempts = Math.ceil((waitSeconds * 1000) / CACHE_WAIT_INTERVAL_MS);

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, CACHE_WAIT_INTERVAL_MS));

    const cachedValue = await getCache<unknown>(key);
    if (isCacheEntry(cachedValue, isValid)) return cachedValue.data;
  }

  return null;
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
    } catch (error) {
      console.error('Failed to write Redis cache', { key, error });
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
      try {
        after(async () => {
          try {
            const lockAcquired = await acquireLock(key, refreshLockSeconds);
            if (!lockAcquired) return;

            await loadAndCache();
          } catch {
            // The stale value remains available until its Redis TTL expires.
          }
        });
      } catch {
        // after() requires an active request or prerender scope; stale data remains usable.
      }
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

  try {
    while (true) {
      const lockAcquired = await acquireLock(key, refreshLockSeconds);
      if (lockAcquired) return loadAndCache();

      const cachedData = await waitForCache(key, isValid, refreshLockSeconds);
      if (cachedData !== null) return cachedData;
    }
  } catch {
    // Redis is optional; loadData remains the source of truth.
  }

  return loadAndCache();
}
