import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

// Kita pasangkan pautan database secara terus ke dalam konfigurasi Prisma
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

export { prisma };
