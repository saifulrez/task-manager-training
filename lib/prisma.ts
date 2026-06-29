// @ts-nocheck
import { PrismaClient } from "../generated/prisma/client";

let prisma: PrismaClient;

// Jika tiada DATABASE_URL (semasa fasa 'next build' di Vercel),
// kita cipta Proxy palsu supaya Next.js boleh lepas fasa build dengan gembira.
if (!process.env.DATABASE_URL) {
  prisma = new Proxy({} as any, {
    get: () => new Proxy({} as any, {
      get: () => () => Promise.resolve([]),
    }),
  });
} else {
  // Apabila aplikasi sudah 'live' di internet, ia akan guna PrismaClient asli dengan lancar!
  prisma = new PrismaClient();
}

export { prisma };
