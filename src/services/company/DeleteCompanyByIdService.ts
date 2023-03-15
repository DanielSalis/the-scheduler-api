import prismaClient from '../../prisma';

interface CompanyRequest {
  id: string
}

class DeleteCompanyByIdService {
  async execute({ id }: CompanyRequest){
    if(!id) throw new Error('Missing id');

    const companyAlreadyExists = await prismaClient.company.findFirst({
      where: {
        id: id
      }
    });

    if (!companyAlreadyExists) throw new Error ('Company does not exists');

    const deletedCompany = await prismaClient.company.delete({
      where:{
        id: id
      },
      select:{
        id: true
      }
    });

    return deletedCompany;
  }
}

export { DeleteCompanyByIdService };