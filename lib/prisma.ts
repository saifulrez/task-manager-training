import { PrismaClient } from "../generated/prisma/client";

// Kita masukkan {} as any di dalam kurungan untuk memenuhi syarat wajib 1 argumen.
// Objek kosong ini akan mengelakkan ralat Prisma, manakala 'as any' akan mendiamkan TypeScript!
const prisma = new PrismaClient({} as any);
// Ujian Binaan Baru
export { prisma };
