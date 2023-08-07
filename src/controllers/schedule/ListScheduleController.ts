import { Request, Response } from 'express';
import { ListAllSchedulesService } from '../../services/schedule/ListAllSchedulesService';
import { ListScheduleByIdService } from '../../services/schedule/ListScheduleByIdService';


class ListScheduleController {
  async getAll(req: Request, res: Response){

    const service = new ListAllSchedulesService();

    const schedules = await service.execute();

    res.send(schedules);
  }

  async getById(req: Request, res: Response){
    const { id } = req.params;
    const service = new ListScheduleByIdService();

    const schedule = await service.execute({
      id: id
    });

    res.json(schedule);
  }
}

export { ListScheduleController };