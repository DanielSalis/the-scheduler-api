import prismaClient from '../../prisma';

interface UnityRequest {
  id: string
}

class ListUnityByIdService {
  async execute({ id }: UnityRequest) {
    if(!id) throw new Error('Provide the unity ID');

    const unity = await prismaClient.unity.findUnique({
      where: {
        id: id
      }
    });

    if(!unity) throw new Error('Unity not found');

    return unity;
  }
}

export { ListUnityByIdService };