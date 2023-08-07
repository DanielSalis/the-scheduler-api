import prismaClient from '../../prisma';

interface ScheduleRequest {
  id: string,
  operational_day: string,
  cancelled: false,
  }

class UpdateScheduleByIdService {
  async execute (params: ScheduleRequest){

    const schedule = await prismaClient.schedules.findFirst({
      where:{
        id: params.id
      }
    });

    if(!schedule) throw new Error('Schedule not found');

    const data = {} as any;

    if(params.cancelled === Boolean(true) || params.cancelled === Boolean(false)) data.cancelled = params.cancelled;
    if(params.operational_day) data.operational_day = params.operational_day;

    const updatedSchedule = await prismaClient.schedules.update({
      where: {
        id: params.id
      },
      data: data
    });

    return updatedSchedule;
  }
}

export { UpdateScheduleByIdService };