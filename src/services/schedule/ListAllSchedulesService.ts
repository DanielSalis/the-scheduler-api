import prismaClient from '../../prisma';

class ListAllSchedulesService {
  async execute() {
    const allSchedules = await prismaClient.schedules.findMany({
      include: {
        user: true,
        shift: true,
        unity: true,
      },
    });

    if(!allSchedules){
      throw('The is no schedule created');
    }

    return allSchedules;
  }
}

export { ListAllSchedulesService };