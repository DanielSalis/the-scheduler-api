import { Request, Response } from 'express';
import { UpdateClassificationByIdService } from '../../services/classification/UpdateClassificationByIdService';


class UpdateClassificationController {
  async updateById (req: Request, res: Response){
    const { id, name, color, estimated_time } = req.body;

    const service = new UpdateClassificationByIdService();

    const classification = await service.execute({
      id,
      name,
      color,
      estimated_time: Number(estimated_time)
    });

    if (classification) res.send({ message: 'Classification updated', classification });

    else res.send({ message: 'Was not possible to update classification' });
  }
}

export { UpdateClassificationController };