// db.ts

import { PrismaClient } from "../lib/generated/prisma"; // مسیر جدید

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
