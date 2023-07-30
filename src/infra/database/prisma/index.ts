import { PrismaClient } from '@prisma/client'

import { env } from '@/core/env'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
