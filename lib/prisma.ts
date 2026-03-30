import { PrismaClient } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"

// create global type
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (!globalForPrisma.prisma) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })

  const adapter = new PrismaPg(pool)

  prisma = new PrismaClient({
    adapter,
  })

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma
  }
} else {
  prisma = globalForPrisma.prisma
}

export default prisma