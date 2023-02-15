import { Router, Request, Response } from 'express';

import { CreateUserRoleController } from './controllers/userRole/CreateUserRoleController';
import { ListUserRoleController } from './controllers/userRole/ListUserRoleController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

// UserRoles
router.post('/userRole/create', new CreateUserRoleController().handle);
router.get('/userRole/getAll', new ListUserRoleController().getAll);
router.get('/userRole/getById/:id', new ListUserRoleController().getById);

//User
router.post('/user/create', new CreateUserController().handle);
router.post('/user/auth', new AuthUserController().handle);

// Teste
router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: 'aaa' });
});

export { router };