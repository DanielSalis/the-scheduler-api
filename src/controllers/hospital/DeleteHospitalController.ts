import { Request, Response } from 'express';
import { DeleteHospitalByIdService } from '../../services/hospital/DeleteHospitalByIdService';

class DeleteHospitalController {
  async deleteById (req: Request, res: Response){
    const { id } = req.params;

    const service = new DeleteHospitalByIdService();

    const hospital = await service.execute({
      id
    });

    res.send({ message:'Deleted successfully' , hospital });
  }
}

export { DeleteHospitalController };