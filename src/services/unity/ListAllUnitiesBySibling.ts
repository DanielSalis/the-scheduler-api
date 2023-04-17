import prismaClient from '../../prisma';

interface UnityRequest{
  id: string,
}

class ListAllUnitiesBySibling {
  async execute({ id }: UnityRequest) {
    const hospital = await prismaClient.hospital.findFirst({
      select: {
        id: true,
        Unity: {
          where: {
            id: id
          }
        }
      }
    });

    if(!hospital){
      throw('This unity does not belong to any hospital');
    }

    const unities = await prismaClient.hospital.findUnique({
      where:{
        id: hospital.id
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