import prismaClient from '../../prisma';

interface HospitalRequest{
  name: string,
  address: string,
  company_id: string
}

class CreateHospitalService {
  async execute({ name, address, company_id }: HospitalRequest){
    if(!name || !address || !company_id){
      throw new Error('Missing keys');
    }

    const hospital = await prismaClient.hospital.findFirst({
      where:{
        name: name
      }
    });

    if (hospital) throw new Error('Hospital already exists');

    const newHospital = await prismaClient.hospital.create({
      data: {
        name: name,
        address: address,
        company_id: company_id
      },
    });

    return newHospital;
  }
}

export { CreateHospitalService };