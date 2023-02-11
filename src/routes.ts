import { Router, Request, Response } from "express";

import { CreateUserRoleController } from './controllers/userRole/CreateUserRoleController'

const router = Router();

router.post('/createUserRole', new CreateUserRoleController().handle)

export { router };