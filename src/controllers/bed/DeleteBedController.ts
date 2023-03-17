import { Request, Response } from 'express';
import { DeleteBedByIdService } from '../../services/bed/DeleteBedByIdService';

class DeleteBedController {
  async deleteById (req: Request, res: Response){
    const { id } = req.params;

    const service = new DeleteBedByIdService();

    const bed = await service.execute({
      id
    });

    res.send({ message:'Deleted successfully',bed });
  }
}

export { DeleteBedController };