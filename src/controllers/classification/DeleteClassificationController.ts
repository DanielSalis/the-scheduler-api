import { Request, Response } from 'express';
import { DeleteClassificationByIdService } from '../../services/classification/DeleteClassificationByIdService';

class DeleteClassificationController {
  async deleteById (req: Request, res: Response){
    const { id } = req.params;

    const service = new DeleteClassificationByIdService();

    const classification = await service.execute({
      id
    });

    res.send({ message:'Deleted successfully' , classification });
  }
}

export { DeleteClassificationController };