import prismaClient from '../../prisma';

class ListAllHospitalService {
  async execute() {
    const allHospitals = await prismaClient.hospital.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        company: true
      }
    });

    if(!allHospitals){
      throw('There is no hospital created yet');
    }

    return allHospitals;
  }
}

export { ListAllHospitalService };