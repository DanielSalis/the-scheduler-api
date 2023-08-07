import prismaClient from '../../prisma';

interface ScheduleRequest {
  id: string
}

class ListScheduleByIdService {
  async execute({ id }: ScheduleRequest) {
    if(!id) throw new Error('Provide the user ID');

    const schedule = await prismaClient.schedules.findFirst({
      where: {
        id: id
      },
      include: {
        user: true,
        shift: true,
        unity: true,
      }
    });

    if(!schedule) throw new Error('Schedule not found');

    return schedule;
  }
}

export { ListScheduleByIdService };