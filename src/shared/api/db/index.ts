import 'server-only';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import { drizzle } from 'drizzle-orm/neon-serverless';

if (typeof WebSocket === 'undefined') {
  neonConfig.webSocketConstructor = ws;
}
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is missing!');
}
declare global {
  var globalDbPool: Pool | undefined;
}
let pool: Pool;

if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 15,
    idleTimeoutMillis: 15000,
    connectionTimeoutMillis: 5000,
  });
} else {
  if (!globalThis.globalDbPool) {
    globalThis.globalDbPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      idleTimeoutMillis: 30000,
    });
  }
  pool = globalThis.globalDbPool;
}

export const db = drizzle({ client: pool });
