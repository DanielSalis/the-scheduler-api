import { Request, Response } from 'express';
import AuthUserService from '../../services/user/AuthUserService';

class AuthUserController {
  async handle(req:Request, res:Response){
    const { password, email } = req.body;

    const authController = new AuthUserService();

    const auth = authController.execute({
      email,
      password
    });

    return res.json(auth);
  }
}

export { AuthUserController };