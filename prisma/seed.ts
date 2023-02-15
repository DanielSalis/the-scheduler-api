import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const admin = await prisma.userRole.create({
    data:{
      name: 'Admin'
    }
  });

  const nurse = await prisma.userRole.create({
    data:{
      name: 'Enfermeiro'
    }
  });

  const tech = await prisma.userRole.create({
    data:{
      name: 'Técnico'
    }
  });

  console.log({ admin, nurse, tech });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });