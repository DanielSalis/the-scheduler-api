import { Request, Response } from 'express';
import { UpdateCompanyByIdService } from '../../services/company/UpdateCompanyByIdService';

class UpdateCompanyController {
  async updateById (req: Request, res: Response){
    const { id, name, address } = req.body;

    const service = new UpdateCompanyByIdService();

    const company = await service.execute({
      id,
      name,
      address
    });

    if (company) res.send({ message: 'Company updated', company });

    else res.send({ message: 'Was not possible to update company' });
  }
}

export { UpdateCompanyController };