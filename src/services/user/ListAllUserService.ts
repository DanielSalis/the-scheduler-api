import prismaClient from '../../prisma';

class ListAllUserService {
  async execute() {
    const allUsers = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        code: true,
        unity_id: true
      }
    });

    if(!allUsers){
      throw('There is no user created yet');
    }

    return allUsers;
  }
}

export { ListAllUserService };