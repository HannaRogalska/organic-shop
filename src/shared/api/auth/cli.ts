import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  user: {
    modelName: 'users',
  },

  session: {
    modelName: 'sessions',
  },

  account: {
    modelName: 'accounts',
  },

  verification: {
    modelName: 'verifications',
  },

  advanced: {
    database: {
      generateId: 'uuid',
    },
  },
});
