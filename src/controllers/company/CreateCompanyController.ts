import { Request, Response } from 'express';
import { CreateCompanyService } from '../../services/company/CreateCompanyService';

class CreateCompanyController {
  async handle(req: Request, res: Response){
    const { name, address } = req.body;

    const service  = new CreateCompanyService();

    const company = await service.execute({
      name,
      address,
    });

    res.send(company);
  }
}

export { CreateCompanyController };