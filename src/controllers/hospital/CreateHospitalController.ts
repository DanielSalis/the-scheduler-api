import { Request, Response } from 'express';
import { CreateHospitalService } from '../../services/hospital/CreateHospitalService';

class CreateHospitalController {
  async handle(req: Request, res: Response){
    const { name, address, company_id } = req.body;

    const service = new CreateHospitalService();

    const hospital = await service.execute({
      name,
      address,
      company_id
    });

    res.send(hospital);
  }
}

export { CreateHospitalController };