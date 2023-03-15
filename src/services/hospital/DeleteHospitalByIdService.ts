import prismaClient from '../../prisma';

interface HospitalRequest {
  id: string
}

class DeleteHospitalByIdService {
  async execute({ id }: HospitalRequest){
    if(!id) throw new Error('Missing id');

    const hospital = await prismaClient.hospital.findFirst({
      where: {
        id: id
      }
    });

    if (!hospital) throw new Error ('Hospital does not exists');

    const deletedHospital = await prismaClient.hospital.delete({
      where:{
        id: id
      },
    });

    return deletedHospital;
  }
}

export { DeleteHospitalByIdService };