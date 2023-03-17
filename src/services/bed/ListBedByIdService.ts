import prismaClient from '../../prisma';

interface BedRequest {
  id: string
}

class ListBedByIdService {
  async execute({ id }: BedRequest) {
    if(!id) throw new Error('Provide the bed ID');

    const bed = await prismaClient.bed.findUnique({
      where: {
        id: id
      }
    });

    if(!bed) throw new Error('Bed not found');

    return bed;
  }
}

export { ListBedByIdService };