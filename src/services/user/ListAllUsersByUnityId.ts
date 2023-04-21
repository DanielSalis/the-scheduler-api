import prismaClient from '../../prisma';

interface UserRequest {
  unityId: string
}

class ListAllUsersByUnityId {
  async execute({ unityId }: UserRequest) {
    if(!unityId) throw new Error('Provide unity id');

    const users = await prismaClient.user.findMany({
      where: {
        unity_id: unityId
      },select: {
        id: true,
        name: true,
        email: true,
      }
    });

    if(!users) throw new Error('Users not found');

    return users;
  }
}

export { ListAllUsersByUnityId };