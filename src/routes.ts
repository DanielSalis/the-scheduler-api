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
import { UpdateCompanyController } from './controllers/company/UpdateCompanyController';
import { DeleteCompanyService } from './controllers/company/DeleteCompanyController';
import { CreateHospitalController } from './controllers/hospital/CreateHospitalController';
import { ListHospitalController } from './controllers/hospital/ListHospitalController';
import { UpdateHospitalController } from './controllers/hospital/UpdateHospitalController';
import { DeleteHospitalController } from './controllers/hospital/DeleteHospitalController';
import { CreateUnityController } from './controllers/unity/CreateUnityController';
import { ListUnityController } from './controllers/unity/ListUnityController';
import { UpdateUnityController } from './controllers/unity/UpdateUnityController';
import { DeleteUnityController } from './controllers/unity/DeleteUnityController';
import { CreateClassificationController } from './controllers/classification/CreateUserRoleController';
import { ListClassificationController } from './controllers/classification/ListUserRoleController';
import { CreateBedController } from './controllers/bed/CreateBedController';
import { ListBedController } from './controllers/bed/ListBedController';
import { UpdateBedController } from './controllers/bed/UpdateBedController';
import { DeleteBedController } from './controllers/bed/DeleteBedController';
import { ListShiftsController } from './controllers/shift/ListShiftController';
import { CreateScheduleController } from './controllers/schedule/CreateScheduleController';
import { ListDashBoardController } from './controllers/dashboard/ListDashBoardController';

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
router.get('/user/getAllByUnityId/:unityId', new ListUserController().getAllByUnityId);
router.put('/user/updateById', new UpdateUserController().updateById);
router.delete('/user/deleteById/:id', new DeleteUserController().deleteById);

//Company
router.post('/company/create', new CreateCompanyController().handle);
router.get('/company/getAll', new ListCompanyController().getAll);
router.get('/company/getById/:id', new ListCompanyController().getById);
router.put('/company/updateById', new UpdateCompanyController().updateById);
router.delete('/company/deleteById/:id', new DeleteCompanyService().deleteById);

//hospital
router.post('/hospital/create', new CreateHospitalController().handle);
router.get('/hospital/getAll', new ListHospitalController().getAll);
router.get('/hospital/getById/:id', new ListHospitalController().getById);
router.put('/hospital/updateById', new UpdateHospitalController().updateById);
router.delete('/hospital/deleteById/:id', new DeleteHospitalController().deleteById);

//unity
router.post('/unity/create', new CreateUnityController().handle);
router.get('/unity/getAll', new ListUnityController().getAll);
router.get('/unity/getAllUnitiesBySibling/:id', new ListUnityController().getAllUnitiesBySibling);
router.get('/unity/deleteById/:id', new DeleteUnityController().deleteById);
router.put('/unity/updateById', new UpdateUnityController().updateById);
router.delete('/unity/deleteById/:id', new DeleteUnityController().deleteById);

//classifications
router.post('/classification/create', new CreateClassificationController().handle);
router.get('/classification/getAll', new ListClassificationController().getAll);
router.get('/classification/getById/:id', new ListClassificationController().getById);

//bed
router.post('/bed/create', new CreateBedController().handle);
router.get('/bed/getAll', new ListBedController().getAll);
router.get('/bed/getById/:id', new ListBedController().getById);
router.get('/bed/getAllByUnityId/:unityId', new ListBedController().getAllByUnityId);
router.put('/bed/updateById', new UpdateBedController().updateById);
router.delete('/bed/deleteById/:id', new DeleteBedController().deleteById);

//shift
router.get('/shift/getAll', new ListShiftsController().getAll);

//schedule
router.post('/schedule/create', new CreateScheduleController().handle);
//router.get('/schedule/getAll', new ListSchedulerController().getAll);
//router.get('/schedule/getById/:id', new ListSchedulerController().getById);

//dashboard
router.get('/dashboard/listSchedulesMeanWorkload', new ListDashBoardController().getScheduleMeanWorkload);

// Teste
router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: 'aaa' });
});

export { router };