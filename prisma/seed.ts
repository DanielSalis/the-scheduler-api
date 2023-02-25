import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
const prisma = new PrismaClient();

async function createUserRoles(){
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

async function createUser() {
  const adminRole = await prisma.userRole.findFirst({
    where: {
      name: 'Admin'
    }
  });

  if(!adminRole) return;

  const passwordHashed = await hash('teste123', 8);

  const adminRoleId = adminRole?.id;

  const userAdmin = await prisma.user.create({
    data: {
      name: 'User Admin',
      email: 'admin@mail.com',
      password: passwordHashed,
      user_role_id: adminRoleId,
      code: 'cod-123'
    },
  });

  console.log({ userAdmin });
}

async function main() {
  await createUserRoles();
  await createUser();
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