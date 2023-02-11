import { Request, Response } from 'express';
import {ListAllUserRoleService} from '../../services/userRole/ListAllUserRoleService'
import {ListUserRoleByIdService} from '../../services/userRole/ListUserRoleByIdService'

class ListUserRoleController {
  async getAll(req: Request, res: Response){
    const listAllUserRoleService = new ListAllUserRoleService();

    const userRoles = await listAllUserRoleService.execute();

    return res.json(userRoles);
  }

  async getById(req: Request, res: Response){
    const {id} = req.params;

    const listUserRoleByIdService = new ListUserRoleByIdService();

    const userRoles = await listUserRoleByIdService.execute({
      id: id
    });

    return res.json(userRoles);
  }
}

export {ListUserRoleController}