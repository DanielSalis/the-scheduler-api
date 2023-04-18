import prismaClient from '../../prisma';

interface BedRequest {
  unityId: string
}

class ListAllBedsByUnityIdService {
  async execute({ unityId }: BedRequest) {
    if(!unityId) throw new Error('Provide the unity ID');

    const beds = await prismaClient.bed.findMany({
      where: {
        unity_id: unityId
      },
      select: {
        id: true,
        name: true,
        classification: true
      }
    });

    if(!beds) throw new Error('Bed not found');

    return beds;
  }
}

export { ListAllBedsByUnityIdService };