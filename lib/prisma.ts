import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

// Pautan umpan dengan format sah untuk meluluskan fasa dry-run Next.js
const fallbackUrl = "prisma+postgres://accelerate.prisma-data.net/?api_key=BUILD_TIME_FALLBACK";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL || fallbackUrl,
