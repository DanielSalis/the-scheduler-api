import { Router, Request, Response } from 'express';

import { CreateUserRoleController } from './controllers/userRole/CreateUserRoleController'

const router = Router();

router.post('/userRole/create', new CreateUserRoleController().handle)
router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: 'aaa' })
})

export { router };