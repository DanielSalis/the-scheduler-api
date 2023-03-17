import prismaClient from '../../prisma';

class ListAllBedService {
  async execute() {
    const allBeds = await prismaClient.bed.findMany();

    if(!allBeds){
      throw('There is no bed created yet');
    }

    return allBeds;
  }
}

export { ListAllBedService };