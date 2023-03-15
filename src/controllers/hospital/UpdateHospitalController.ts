import { Request, Response } from 'express';
import { UpdateHospitalByIdService } from '../../services/hospital/UpdateHospitalByIdService';


class UpdateHospitalController {
  async updateById (req: Request, res: Response){
    const { id, name, address, company_id } = req.body;

    const service = new UpdateHospitalByIdService();

    const hospital = await service.execute({
      id,
      name,
      address,
      company_id
    });

    if (hospital) res.send({ message: 'Hospital updated', hospital });

    else res.send({ message: 'Was not possible to update hospital' });
  }
}

export { UpdateHospitalController };