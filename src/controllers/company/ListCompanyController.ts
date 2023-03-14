import { Request, Response } from 'express';
import { ListAllCompaniesService } from '../../services/company/ListAllCompaniesService';

class ListCompanyController {
  async getAll(req: Request, res: Response){
    const service = new ListAllCompaniesService();

    const companies = await service.execute();

    return res.json(companies);
  }
}

export { ListCompanyController };