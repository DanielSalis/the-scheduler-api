import { Request, Response } from 'express';
import { UpdateScheduleByIdService } from '../../services/schedule/UpdateScheduleByIdService';

class UpdateScheduleController {
  async updateById (req: Request, res: Response){
    const { id, operational_day, cancelled } = req.body;

    const service = new UpdateScheduleByIdService();

    const schedule = await service.execute({
      id,
      operational_day,
      cancelled,
    });

    if (schedule) res.send({ message: 'Schedule updated' });

    else res.send({ message: 'Was not possible to update schedule' });
  }
}

export { UpdateScheduleController };