import prismaClient from '../../prisma';

interface HospitalRequest {
  id: string
}

class ListHospitalByIdService {
  async execute({ id }: HospitalRequest) {
    if(!id) throw new Error('Provide the hospital ID');

    const hospital = await prismaClient.hospital.findUnique({
      where: {
        id: id
      }
    });

    if(!hospital) throw new Error('Hospital not found');

    return hospital;
  }
}

export { ListHospitalByIdService };