import prismaClient from '../../prisma';

interface UserRequest {
  id: string
}

class DeleteUserByIdService {
  async execute({ id }: UserRequest){
    if(!id) throw new Error('Missing id');

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        id: id
      }
    });

    if (!userAlreadyExists) throw new Error ('User does not exists');

    const deletedUser = await prismaClient.user.delete({
      where:{
        id: id
      },
      select:{
        id: true
      }
    });

    return deletedUser;
  }
}

export { DeleteUserByIdService };