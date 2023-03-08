import { Request, Response } from 'express';
import { UpdateUserByIdService } from '../../services/user/UpdateUserByIdService';

class UpdateUserController {
  async updateById (req: Request, res: Response){
    const { id, name, email, password, code } = req.body;

    const userService = new UpdateUserByIdService();

    const user = await userService.execute({
      id,
      name,
      email,
      password,
      code
    });

    if (user) res.send({ message: 'User updated' });

    else res.send({ message: 'Was not possible to update user' });
  }
}