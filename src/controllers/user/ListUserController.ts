import { Request, Response } from 'express';
import { ListAllUserService } from '../../services/user/ListAllUserService';
import { ListUserByIdService } from '../../services/user/ListUserByIdService';
import { ListAllUsersByUnityId } from '../../services/user/ListAllUsersByUnityId';
import { ListAllUsersByHospital } from '../../services/user/ListAllUsersByHospital';

class ListUserController {
  async getAll(req: Request, res: Response){
    const listAllUserRoleService = new ListAllUserService();

    const userRoles = await listAllUserRoleService.execute();

    return res.json(userRoles);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const listUserById = new ListUserByIdService();

    const user = await listUserById.execute({
      id: id
    });

    res.json(user);
  }

  async getAllByUnityId(req: Request, res: Response) {
    const { unityId } = req.params;
    const listUserById = new ListAllUsersByUnityId();

    const users = await listUserById.execute({
      unityId: unityId
    });

    res.json(users);
  }

  async getAllByHospital(req: Request, res: Response) {
    const { unityId } = req.params;
    const listUserById = new ListAllUsersByHospital();

    const users = await listUserById.execute({
      unityId: unityId
    });

    res.json(users);
  }

}

export { ListUserController };