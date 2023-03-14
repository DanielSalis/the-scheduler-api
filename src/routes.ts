import { Router, Request, Response } from 'express';

import { CreateUserRoleController } from './controllers/userRole/CreateUserRoleController';
import { ListUserRoleController } from './controllers/userRole/ListUserRoleController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { ListUserController } from './controllers/user/ListUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';
import { CreateCompanyController } from './controllers/company/CreateCompanyController';
import { ListCompanyController } from './controllers/company/ListCompanyController';


const router = Router();

// UserRoles
router.post('/userRole/create', new CreateUserRoleController().handle);
router.get('/userRole/getAll', new ListUserRoleController().getAll);
router.get('/userRole/getById/:id', new ListUserRoleController().getById);

//User
router.post('/user/create', new CreateUserController().handle);
router.post('/user/auth', new AuthUserController().handle);
router.get('/user/getAll', new ListUserController().getAll);
router.get('/user/getById/:id', new ListUserController().getById);
router.put('/user/updateById', new UpdateUserController().updateById);
router.delete('/user/deleteById/:id', new DeleteUserController().deleteById);

//Company
router.post('/company/create', new CreateCompanyController().handle);
router.get('/company/getAll', new ListCompanyController().getAll);
router.get('/company/getById/:id', new ListCompanyController().getById);

// Teste
router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: 'aaa' });
});

export { router };