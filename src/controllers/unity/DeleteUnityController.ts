import { Request, Response } from 'express';
import { DeleteUnityByIdService } from '../../services/unity/DeleteUnitylByIdService';

class DeleteUnityController {
  async deleteById (req: Request, res: Response){
    const { id } = req.params;

    const service = new DeleteUnityByIdService();

    const unity = await service.execute({
      id
    });

    res.send({ message:'Deleted successfully',unity });
  }
}

export { DeleteUnityController };