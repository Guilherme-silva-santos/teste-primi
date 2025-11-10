import { prisma } from "../config/prisma.js";

export async function getAllPlatforms() {
  return prisma.platform.findMany({
    orderBy: { name: "asc" },
  });
}
