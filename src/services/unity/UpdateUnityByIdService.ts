import prismaClient from '../../prisma';

interface UnityRequest {
  id: string,
  name: string,
  location: string,
  hospital_id: string,
}

class UpdateUnityByIdService {
  async execute ({ id,name, location, hospital_id }: UnityRequest){

    const unity = await prismaClient.unity.findFirst({
      where:{
        id: id
      }
    });

    if(!unity) throw new Error('Unity not found');

    const updatedUnity = await prismaClient.unity.update({
      where: {
        id: id
      },
      data: {
        name: name,
        location: location,
        hospital_id: hospital_id
      }
    });

    return updatedUnity;
  }
}

export { UpdateUnityByIdService };