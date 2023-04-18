import { Request, Response } from 'express';
import { ListAllShiftsService } from '../../services/shift/ListAllShiftsService';

class ListShiftsController {
  async getAll(req: Request, res: Response){
    const service = new ListAllShiftsService();

    const shifts = await service.execute();

    return res.json(shifts);
  }
}

export { ListShiftsController };