import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

// Kita masukkan `{}` untuk memuaskan syarat ketat TypeScript
const prisma = new PrismaClient({});

export { prisma };
