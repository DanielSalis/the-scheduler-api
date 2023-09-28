import prismaClient from '../../prisma';

interface ScheduleRequest {
  operational_day: string,
  unity_id: string,
  user_creator_id: string,
  shift_id: string,
  users_beds: Array<object>,
  workload: number,
}

class CreateScheduleService {
  async execute(scheduleRequest: ScheduleRequest) {
    if (!scheduleRequest.operational_day || !scheduleRequest.unity_id || !scheduleRequest.users_beds) {
      throw new Error('Missing schedule params');
    }

    const schedule = await prismaClient.schedules.findFirst({
      where: {
        unity_id: scheduleRequest.unity_id,
        shift_id: scheduleRequest.shift_id,
        operational_day: scheduleRequest.operational_day
      }
    });

    if (schedule) {
      throw new Error('Schedule already exists');
    }

    const newSchedule = await prismaClient.schedules.create({
      data: {
        operational_day: scheduleRequest.operational_day,
        unity_id: scheduleRequest.unity_id,
        user_creator_id: scheduleRequest.user_creator_id,
        shift_id: scheduleRequest.shift_id,
        workload: scheduleRequest.workload,
        users_quantity: scheduleRequest.users_beds.length
      }
    });

    return newSchedule;
  }
}

export { CreateScheduleService };