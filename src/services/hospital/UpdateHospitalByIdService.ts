import prismaClient from '../../prisma';

interface HospitalRequest {
  id: string,
  name: string,
  address: string,
  company_id: string,
}

class UpdateHospitalByIdService {
  async execute ({ id,name, address, company_id }: HospitalRequest){

    const hospital = await prismaClient.hospital.findFirst({
      where:{
        id: id
      }
    });

    if(!hospital) throw new Error('Hospital not found');

    const updatedHospital = await prismaClient.hospital.update({
      where: {
        id: id
      },
      data: {
        name: name,
        address: address,
        company_id: company_id
      }
    });

    return updatedHospital;
  }
}

export { UpdateHospitalByIdService };