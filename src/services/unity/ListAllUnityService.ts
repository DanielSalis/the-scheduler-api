import prismaClient from '../../prisma';

class ListAllUnityService {
  async execute() {
    const allUnities = await prismaClient.unity.findMany({
      select: {
        id: true,
        name: true,
        location: true,
        hospital_id: true
      }
    });

    if(!allUnities){
      throw('There is no unity created yet');
    }

    return allUnities;
  }
}

export { ListAllUnityService };