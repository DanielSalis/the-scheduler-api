import prismaClient from '../../prisma';

interface UnityRequest {
  id: string
}

class DeleteUnityByIdService {
  async execute({ id }: UnityRequest){
    if(!id) throw new Error('Missing id');

    const unity = await prismaClient.unity.findFirst({
      where: {
        id: id
      }
    });

    if (!unity) throw new Error ('Unity does not exists');

    const deletedUnity = await prismaClient.unity.delete({
      where:{
        id: id
      },
    });

    return deletedUnity;
  }
}

export { DeleteUnityByIdService };