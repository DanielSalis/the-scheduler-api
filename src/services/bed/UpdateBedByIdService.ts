import prismaClient from '../../prisma';

interface BedRequest {
  id: string,
  name: string,
  unity_id: string,
  classification_id: string,
}

class UpdateBedByIdService {
  async execute ({ id,name, unity_id, classification_id }: BedRequest){

    const bed = await prismaClient.bed.findFirst({
      where:{
        id: id
      }
    });

    if(!bed) throw new Error('Bed not found');

    const updatedBed = await prismaClient.bed.update({
      where: {
        id: id
      },
      data: {
        name: name,
        unity_id: unity_id,
        classification_id: classification_id
      }
    });

    return updatedBed;
  }
}

export { UpdateBedByIdService };