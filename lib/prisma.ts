import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

// Jika Vercel belum sempat membaca env semasa fasa build, kita bekalkan format umpan yang sah
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "prisma+postgres://accelerate.prisma-data.net/?api_key=BUILD_TIME_PLACEHOLDER";
}

const prisma = new PrismaClient();

export { prisma };
