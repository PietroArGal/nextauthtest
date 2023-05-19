import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const usDni = 77475699;
let userName: string = "";

export async function PrismaData() {
  const user = await prisma.user.findFirst({
    where: {
      dni: usDni,
    },
    select: {
      name: true,
    },
  });

  if (user) {
    userName = user.name ?? "";
  }

  return user;
}

PrismaData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
