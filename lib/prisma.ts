import { PrismaClient } from "../generated/prisma/client";

// Kita masukkan {} as any untuk memenuhi syarat wajib 1 argumen daripada TypeScript.
// Memandangkan DATABASE_URL sudah ada di Vercel Env, Prisma akan gunakannya secara automatik!
const prisma = new PrismaClient({} as any);

export { prisma };
