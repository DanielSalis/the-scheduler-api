import { Request, Response } from 'express';
import { CreateClassificationService } from '../../services/classification/CreateClassificationService';

class CreateClassificationController {
  async handle(req: Request, res: Response) {
    const { name, color, estimated_time } = req.body;

    const service = new CreateClassificationService();

    const userRole = await service.execute({ name,color,estimated_time: Number(estimated_time) });

    return res.json(userRole);
  }
}

export { CreateClassificationController };