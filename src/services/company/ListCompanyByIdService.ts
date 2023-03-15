import prismaClient from '../../prisma';

interface CompanyRequest{
  id: string
}

class ListCompanyByIdService {
  async execute({ id }: CompanyRequest){
    if(!id) throw new Error('Provide the company ID');

    const company = await prismaClient.company.findFirst({
      where: {
        id: id
      }
    });

    if(!company) throw new Error('Company not found');

    return company;
  }
}

export { ListCompanyByIdService };