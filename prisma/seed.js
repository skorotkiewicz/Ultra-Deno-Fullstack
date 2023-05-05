import { PrismaClient } from "./generated/client/deno/edge.js";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const userData = [
  {
    name: "Adam",
    age: 24,
  },
  {
    name: "Eva",
    age: 23,
  },
  {
    name: "Sebastian",
    age: 31,
  },
];

for (const u of userData) {
  const user = await prisma.user.create({
    data: u,
  });
  console.log(`Created user with id: ${user.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();
