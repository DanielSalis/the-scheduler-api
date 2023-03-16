import { Request, Response } from 'express';
import { CreateUnityService } from '../../services/unity/CreateUnityService';

class CreateUnityController {
  async handle(req: Request, res: Response){
    const { name, location, hospital_id } = req.body;

    const service = new CreateUnityService();

    const unity = await service.execute({
      name,
      location,
      hospital_id
    });

    res.send(unity);
  }
}

export { CreateUnityController };