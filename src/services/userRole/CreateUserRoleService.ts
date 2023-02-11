import prismaClient from '../../prisma';

interface UserRoleRequest {
  name: string;
}

class CreateUserRoleService {
  async execute({ name }: UserRoleRequest) {
    if (!name) {
      throw new Error('Name invalid');
    }

    const roleAlreadyExists = await prismaClient.userRole.findFirst({
      where: {
        name: name
      }
    });

    if (roleAlreadyExists) {
      throw new Error('Role already exists');
    }

    const userRole = await prismaClient.userRole.create({
      data: {
        name: name
      },
      select: {
        id: true,
        name: true,
      }
    });

    return userRole;
  }
}

export { CreateUserRoleService };