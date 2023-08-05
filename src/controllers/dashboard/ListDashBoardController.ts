import { Request, Response } from 'express';
import { ListSchedulesMeanWorkload } from '../../services/dashboard/ListSchedulesMeanWorkload';

class ListDashBoardController {
  async getScheduleMeanWorkload(req: Request, res: Response){
    const { unity_id, shift_id, start_date, end_date } = req.query;

    const service = new  ListSchedulesMeanWorkload();

    const schedules = await service.execute({
      unity_id:  unity_id ? String(unity_id) : undefined,
      shift_id: shift_id ? String(shift_id) : undefined,
      start_date: start_date ? String(start_date) : undefined,
      end_date: end_date ? String(end_date) : undefined
    });

    res.json(schedules);
  }


}

export { ListDashBoardController };