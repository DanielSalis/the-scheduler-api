import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response){
    const { name, email, password, userRoleId, code, unityId } = req.body;

    const userService = new CreateUserService();

    const user = await userService.execute({
      name,
      email,
      password,
      userRoleId,
      code,
      unityId
    });

    res.send(user);
  }
}

export { CreateUserController };