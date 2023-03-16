import prismaClient from '../../prisma';

interface ClassificationRequest {
  id: string,
}

class ListClassificationIdService {
  async execute({ id }:ClassificationRequest){
    if(!id) throw new Error('Provide the classification ID');

    const classification = await prismaClient.classification.findFirst({
      where:{
        id: id
      }
    });

    if(!classification) throw new Error('Classification not found');

    return classification;
  }
}

export { ListClassificationIdService };