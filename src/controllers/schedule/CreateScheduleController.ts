import { Request, Response } from 'express';
import { CreateScheduleService } from '../../services/schedule/CreateScheduleService';
import { CreateScheduleUserBedService } from '../../services/scheduleUserBed/CreateScheduleUserBedService';

class CreateScheduleController {
  async handle(req: Request, res: Response){

    const { operational_day,unity_id ,creator_user_id ,shift_id ,users_beds } = req.body;

    const scheduleService = new CreateScheduleService();

    const schedule = await scheduleService.execute({
      operational_day,
      unity_id,
      user_creator_id: creator_user_id,
      shift_id,
      users_beds
    });

    const scheduleUserBedService = new CreateScheduleUserBedService();
    const scheduleUserBed = await scheduleUserBedService.execute({
      users_beds,
      schedule_id: schedule.id,
    });

    res.send({
      schedule,
      scheduleUserBed
    });
  }
}

export { CreateScheduleController };