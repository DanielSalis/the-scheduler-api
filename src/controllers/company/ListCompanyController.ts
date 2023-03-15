import { Request, Response } from 'express';
import { ListAllCompaniesService } from '../../services/company/ListAllCompaniesService';
import { ListCompanyByIdService } from '../../services/company/ListCompanyByIdService';
class ListCompanyController {
  async getAll(req: Request, res: Response){
    const service = new ListAllCompaniesService();

    const companies = await service.execute();

    return res.json(companies);
  }

  async getById(req: Request, res: Response){
    const { id } = req.params;
    const service = new ListCompanyByIdService();
    const company = await service.execute({ id:id });

    res.send(company);
  }
}

export { ListCompanyController };