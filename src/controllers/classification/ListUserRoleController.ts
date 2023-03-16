import { Request, Response } from 'express';
import { ListAllClassificationService } from '../../services/classification/ListAllClassificationService';
import { ListClassificationIdService } from '../../services/classification/ListClassificationByIdService';


class ListClassificationController {
  async getAll(req: Request, res: Response){
    const service = new ListAllClassificationService();

    const classifications = await service.execute();

    return res.json(classifications);
  }

  async getById(req: Request, res: Response){
    const { id } = req.params;

    const service = new ListClassificationIdService();

    const classification = await service.execute({ id: id });

    return res.json(classification);
  }
}

export { ListClassificationController };