import prismaClient from '../../prisma';

interface UnityRequest{
  id: string,
}

class ListAllUnitiesBySibling {
  async execute({ id }: UnityRequest) {
    const unity = await prismaClient.unity.findUnique({
      where: {
        id: id,
      }
    });

    if(!unity){
      throw('This unity does not exists');
    }

    const unities = await prismaClient.hospital.findUnique({
      where:{
        id: unity.hospital_id
      },
      select: {
        Unity: true
      }
    });

    if (!unities) {
      throw('There was a problem to find unities');
    }

    return unities;
  }
}

export { ListAllUnitiesBySibling };