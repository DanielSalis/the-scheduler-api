import { Router, Request, Response } from 'express';

import { CreateUserRoleController } from './controllers/userRole/CreateUserRoleController';
import { ListUserRoleController } from './controllers/userRole/ListUserRoleController';

const router = Router();

// UserRoles
router.post('/userRole/create', new CreateUserRoleController().handle);
router.get('/userRole/getAll', new ListUserRoleController().getAll);
router.get('/userRole/getById/:id', new ListUserRoleController().getById);

//User

// Teste
router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: 'aaa' });
});

export { router };