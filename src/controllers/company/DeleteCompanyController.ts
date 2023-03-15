import { Request, Response } from 'express';
import { DeleteCompanyByIdService } from '../../services/company/DeleteCompanyByIdService';

class DeleteCompanyService {
  async deleteById (req: Request, res: Response){
    const { id } = req.params;

    const service = new DeleteCompanyByIdService();

    const company = await service.execute({
      id
    });

    res.send({ message:'Deleted successfully' , company });
  }
}

export { DeleteCompanyService };