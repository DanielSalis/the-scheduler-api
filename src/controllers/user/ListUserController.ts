import { Request, Response } from 'express';
import { ListAllUserService } from '../../services/user/ListAllUserService';

class ListUserController {
  async getAll(req: Request, res: Response){
    const listAllUserRoleService = new ListAllUserService();

    const userRoles = await listAllUserRoleService.execute();

    return res.json(userRoles);
  }

}

export { ListUserController };