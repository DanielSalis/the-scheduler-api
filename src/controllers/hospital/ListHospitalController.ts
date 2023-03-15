import { Request, Response } from 'express';
import { ListAllHospitalService } from '../../services/hospital/ListAllHospitalService';
import { ListHospitalByIdService } from '../../services/hospital/ListHospitalByIdService';

class ListHospitalController {
  async getAll(req: Request, res: Response){
    const service = new ListAllHospitalService();

    const hospitals = await service.execute();

    return res.json(hospitals);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const service = new ListHospitalByIdService();

    const hospital = await service.execute({
      id: id
    });

    res.json(hospital);
  }

}

export { ListHospitalController };