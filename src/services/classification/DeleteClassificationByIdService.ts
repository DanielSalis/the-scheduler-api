import prismaClient from '../../prisma';

interface ClassificationRequest {
  id: string
}

class DeleteClassificationByIdService {
  async execute(request: ClassificationRequest){
    if(!request.id) throw new Error('Missing id');

    const classification = await prismaClient.classification.findFirst({
      where: {
        id: request.id
      }
    });

    if (!classification) throw new Error ('Classification does not exists');

    const deletedClassification = await prismaClient.classification.delete({
      where:{
        id: request.id
      },
    });

    return deletedClassification;
  }
}

export { DeleteClassificationByIdService };