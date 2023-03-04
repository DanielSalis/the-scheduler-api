import prismaClient from '../../prisma';

interface UserRequest {
  id: string
}

class ListUserByIdService {
  async execute({ id }: UserRequest) {
    if(!id) throw new Error('Provide the user ID');

    const user = await prismaClient.user.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true,
        email: true,
        code: true,
      }
    });

    if(!user) throw new Error('user not found');

    return user;
  }
}

export { ListUserByIdService };