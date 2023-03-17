import prismaClient from '../../prisma';

interface BedRequest{
  name: string,
  unity_id: string,
  classification_id: string
}

class CreateBedService {
  async execute({ name, unity_id, classification_id }: BedRequest){
    if(!name || !unity_id || !classification_id){
      throw new Error('Missing keys');
    }

    const bed = await prismaClient.bed.findFirst({
      where:{
        name: name
      }
    });

    if (bed) throw new Error('Bed already exists');

    const newBed = await prismaClient.bed.create({
      data: {
        name: name,
        unity_id: unity_id,
        classification_id: classification_id
      },
    });

    return newBed;
  }
}

export { CreateBedService };