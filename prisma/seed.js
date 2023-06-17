/* eslint-disable no-undef */
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

async function createClassifications() {
  const highClassification = await prisma.classification.create({
    data: {
      'name': 'Alta',
      'color': '#FF5252',
      'estimated_time': 120
    },
  });

  const mediumClassification = await prisma.classification.create({
    data: {
      'name': 'Média',
      'color': '#FFC107',
      'estimated_time': 60
    },
  });

  const lowClassification = await prisma.classification.create({
    data: {
      'name': 'Baixa',
      'color': '#4CAF50',
      'estimated_time': 30
    },
  });

  console.log({ highClassification, mediumClassification, lowClassification });
}

async function createShifts() {
  const morningShift = await prisma.shift.create({
    data: {
      'name': 'Manhã',
    },
  });

  const afternoonShift = await prisma.shift.create({
    data: {
      'name': 'Tarde',
    },
  });

  const nightShift = await prisma.shift.create({
    data: {
      'name': 'Noite',
    },
  });

  console.log({ morningShift, afternoonShift, nightShift });
}

async function main() {
  await createUserRoles();
  await createUser();
  await createClassifications();
  await createShifts();
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