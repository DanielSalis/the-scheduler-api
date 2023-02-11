import { Request, Response } from 'express';
import {ListAllUserRoleService} from '../../services/userRole/ListAllUserRoleService'

class ListUserRoleController {
  async getAll(req: Request, res: Response){
    const listAllUserRoleService = new ListAllUserRoleService();

    const userRoles = await listAllUserRoleService.execute();

    return res.json(userRoles);
  }
}

export {ListUserRoleController}