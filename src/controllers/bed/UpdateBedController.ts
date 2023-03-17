import { Request, Response } from 'express';
import { UpdateBedByIdService } from '../../services/bed/UpdateBedByIdService';


class UpdateBedController {
  async updateById (req: Request, res: Response){
    const { id, name, unity_id, classification_id } = req.body;

    const service = new UpdateBedByIdService();

    const bed = await service.execute({
      id,
      name,
      unity_id,
      classification_id
    });

    if (bed) res.send({ message: 'Bed updated', bed });

    else res.send({ message: 'Was not possible to update bed' });
  }
}

export { UpdateBedController };