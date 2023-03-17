import { Request, Response } from 'express';
import { ListAllBedService } from '../../services/bed/ListAllBedService';
import { ListBedByIdService } from '../../services/bed/ListBedByIdService';


class ListBedController {
  async getAll(req: Request, res: Response){
    const service = new ListAllBedService();

    const beds = await service.execute();

    return res.json(beds);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const service = new ListBedByIdService();

    const bed = await service.execute({
      id: id
    });

    res.json(bed);
  }

}

export { ListBedController };