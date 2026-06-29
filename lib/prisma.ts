// @ts-nocheck
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

// Pautan umpan format sah untuk melepasi fasa ujian dry-run Next.js
const databaseUrl = process.env.DATABASE_URL || "prisma+postgres://accelerate.prisma-data.net/?api_key=BUILD_TIME_FALLBACK";

const prisma = new PrismaClient({
  datasourceUrl: databaseUrl,
});

export { prisma };
