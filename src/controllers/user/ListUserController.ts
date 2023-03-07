import { Request, Response } from 'express';
import { ListAllUserService } from '../../services/user/ListAllUserService';
import { ListUserByIdService } from '../../services/user/ListUserByIdService';
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

}

export { ListUserController };