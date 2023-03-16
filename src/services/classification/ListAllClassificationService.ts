import prismaClient from '../../prisma';

class ListAllClassificationService {
  async execute() {
    const allClassifications = await prismaClient.classification.findMany();

    if(!allClassifications){
      throw('The are no classifications created');
    }

    return allClassifications;
  }
}

export { ListAllClassificationService };