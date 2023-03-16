import prismaClient from '../../prisma';

interface UnityRequest{
  name: string,
  location: string,
  hospital_id: string
}

class CreateUnityService {
  async execute({ name, location, hospital_id }: UnityRequest){
    if(!name || !location || !hospital_id){
      throw new Error('Missing keys');
    }

    const unity = await prismaClient.unity.findFirst({
      where:{
        name: name
      }
    });

    if (unity) throw new Error('Unity already exists');

    const newUnity = await prismaClient.unity.create({
      data: {
        name: name,
        location: location,
        hospital_id: hospital_id
      },
    });

    return newUnity;
  }
}

export { CreateUnityService };