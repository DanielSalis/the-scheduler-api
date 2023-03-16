import { Request, Response } from 'express';
import { UpdateUnityByIdService } from '../../services/unity/UpdateUnityByIdService';


class UpdateUnityController {
  async updateById (req: Request, res: Response){
    const { id, name, location, hospital_id } = req.body;

    const service = new UpdateUnityByIdService();

    const unity = await service.execute({
      id,
      name,
      location,
      hospital_id
    });

    if (unity) res.send({ message: 'Unity updated', unity });

    else res.send({ message: 'Was not possible to update unity' });
  }
}

export { UpdateUnityController };