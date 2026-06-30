import { PrismaClient } from "../generated/prisma/client";

let prismaInstance: any;

const prisma = new Proxy({} as any, {
  get(target, prop) {
    if (!prismaInstance) {
      // Kita hantar {} as any untuk memenuhi syarat 1 argumen tanpa sekatan TypeScript
      prismaInstance = new PrismaClient({} as any);
    }
    return prismaInstance[prop];
  },
});

export { prisma };
