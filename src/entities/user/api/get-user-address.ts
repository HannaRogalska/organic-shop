import 'server-only';

import { desc, eq } from 'drizzle-orm';

import { addressesTable } from '@/entities/user/model/schema';
import { db } from '@/shared/api/db';

export type UserAddress = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string | null;
  zipCode: string;
  phone: string;
};

export async function getUserAddress(userId: string): Promise<UserAddress | null> {
  const [address] = await db
    .select({
      firstName: addressesTable.firstName,
      lastName: addressesTable.lastName,
      streetAddress: addressesTable.streetAddress,
      city: addressesTable.city,
      state: addressesTable.state,
      zipCode: addressesTable.zipCode,
      phone: addressesTable.phone,
    })
    .from(addressesTable)
    .where(eq(addressesTable.userId, userId))
    .orderBy(desc(addressesTable.createdAt))
    .limit(1);

  return address ?? null;
}
