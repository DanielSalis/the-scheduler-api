import prismaClient from '../../prisma';

interface BedRequest {
  id: string
}

class DeleteBedByIdService {
  async execute({ id }: BedRequest){
    if(!id) throw new Error('Missing id');

    const bed = await prismaClient.bed.findFirst({
      where: {
        id: id
      }
    });

    if (!bed) throw new Error ('Bed does not exists');

    const deletedBed = await prismaClient.bed.delete({
      where:{
        id: id
      },
    });

    return deletedBed;
  }
}

export { DeleteBedByIdService };