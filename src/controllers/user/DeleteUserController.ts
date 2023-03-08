import { Request, Response } from 'express';
import { DeleteUserByIdService } from '../../services/user/DeleteUserByIdService';

class DeleteUserController {
  async deleteById (req: Request, res: Response){
    const { id } = req.params;

    const service = new DeleteUserByIdService();

    const user = await service.execute({
      id
    });

    res.send(user);
  }
}

export { DeleteUserController };