import prismaClient from '../../prisma';

class ListAllSchedulesService {
  async execute() {
    const allSchedules = await prismaClient.schedule.findMany();

    if(!allSchedules){
      throw('The is no schedule created');
    }

    return allSchedules;
  }
}

export { ListAllSchedulesService };