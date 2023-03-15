import prismaClient from '../../prisma';

interface CompanyRequest {
  id: string,
  name: string,
  address: string
}

class UpdateCompanyByIdService {
  async execute ({ id, name, address }: CompanyRequest){

    const company = await prismaClient.company.findFirst({
      where:{
        id: id
      }
    });

    if(!company) throw new Error('Company not found');

    const companyUpdated = await prismaClient.company.update({
      where: {
        id: id
      },
      data: {
        name: name,
        address: address,
      }
    });

    return companyUpdated;
  }
}

export { UpdateCompanyByIdService };