import prismaClient from '../../prisma';

interface ClassificationRequest {
  id: string,
  name: string,
  color: string,
  estimated_time: number,
}

class UpdateClassificationByIdService {
  async execute (request: ClassificationRequest){

    const classification = await prismaClient.classification.findFirst({
      where:{
        id: request.id
      }
    });

    if(!classification) throw new Error('Classification not found');

    const updatedClassification = await prismaClient.classification.update({
      where: {
        id: request.id
      },
      data: {
        name: request.name,
        color: request.color,
        estimated_time: request.estimated_time
      }
    });

    return updatedClassification;
  }
}

export { UpdateClassificationByIdService };