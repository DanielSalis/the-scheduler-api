import prismaClient from '../../prisma';

class ListAllCompaniesService {
  async execute(){
    const allCompanies = await prismaClient.company.findMany({
      select: {
        id: true,
        name: true,
        address: true,
      }
    });

    if (!allCompanies) throw new Error('There is no company created yet');

    return allCompanies;
  }
}

export { ListAllCompaniesService };