import { Request, Response } from 'express';
import { ListAllUnityService } from '../../services/unity/ListAllUnityService';
import { ListUnityByIdService } from '../../services/unity/ListUnityByIdService';
import { ListAllUnitiesBySibling } from '../../services/unity/ListAllUnitiesBySibling';


class ListUnityController {
  async getAll(req: Request, res: Response){
    const service = new ListAllUnityService();

    const unities = await service.execute();

    return res.json(unities);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const service = new ListUnityByIdService();

    const unity = await service.execute({
      id: id
    });

    res.json(unity);
  }

  async getAllUnitiesBySibling(req: Request, res: Response) {
    const { id } = req.params;
    const service = new ListAllUnitiesBySibling();

    const unities = await service.execute({
      id: id
    });

    res.json(unities);
  }

}

export { ListUnityController };