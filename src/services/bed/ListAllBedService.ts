import prismaClient from '../../prisma';

class ListAllBedService {
  async execute() {
    const allBeds = await prismaClient.bed.findMany({
      select:{
        id:true,
        name:true,
        unity: true,
        classification:true
      }
    });

    if(!allBeds){
      throw('There is no bed created yet');
    }

    return allBeds;
  }
}

export { ListAllBedService };