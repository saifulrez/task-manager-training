import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

// Pautan umpan format sah untuk melepasi fasa dry-run Next.js jika env belum sedia
const databaseUrl = process.env.DATABASE_URL || "prisma+postgres://accelerate.prisma-data.net/?api_key=BUILD_TIME_FALLBACK";

// @ts-ignore
const prisma = new PrismaClient({
  datasourceUrl: databaseUrl,
});

export { prisma };
