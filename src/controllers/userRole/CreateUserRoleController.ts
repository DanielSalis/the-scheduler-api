import { Request, Response } from 'express';
import { CreateUserRoleService } from '../../services/userRole/CreateUserRoleService'

class CreateUserRoleController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createUserRoleService = new CreateUserRoleService();

    const userRole = await createUserRoleService.execute({
      name
    });

    return res.json(userRole)
  }
}

export { CreateUserRoleController }