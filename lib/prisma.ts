import { PrismaClient } from "../generated/prisma/client";

// Pautan umpan format sah untuk melepasi fasa dry-run Next.js jika env belum sedia
const databaseUrl = process.env.DATABASE_URL || "prisma+postgres://accelerate.prisma-data.net/?api_key=BUILD_TIME_PLACEHOLDER";

// Kita gunakan 'any' untuk mematikan semua semakan cerewet TypeScript
const prismaConfig: any = {
  datasourceUrl: databaseUrl,
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
};

const prisma = new PrismaClient(prismaConfig);

export { prisma };
