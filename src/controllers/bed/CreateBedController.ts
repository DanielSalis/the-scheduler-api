import { Request, Response } from 'express';
import { CreateBedService } from '../../services/bed/CreateBedService';

class CreateBedController {
  async handle(req: Request, res: Response){
    const { name, unity_id, classification_id } = req.body;

    const service = new CreateBedService();

    const bed = await service.execute({
      name,
      unity_id,
      classification_id
    });

    res.send(bed);
  }
}

export { CreateBedController };