import prismaClient from '../../prisma';

interface CompanyRequest {
  name: string,
  address: string,
}

class CreateCompanyService {
  async execute({ name, address }: CompanyRequest){
    if(!name || !address){
      throw new Error('Missing Keys');
    }

    const companyAlreadyExists = await prismaClient.company.findFirst({
      where: {
        name: name,
      }
    });

    if(companyAlreadyExists) throw new Error('Company with this name already exists');

    const newCompany = await prismaClient.company.create({
      data:{
        name: name,
        address: address,
      },
    });

    return newCompany;
  }

}

export { CreateCompanyService };