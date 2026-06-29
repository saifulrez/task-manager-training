import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

// Prisma Postgres berjalan secara 'native' tanpa memerlukan adapter-pg
const prisma = new PrismaClient();

export { prisma };
