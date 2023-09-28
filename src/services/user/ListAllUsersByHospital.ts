import prismaClient from '../../prisma';

interface UserRequest {
  unityId: string
}

class ListAllUsersByHospital {
  async execute({ unityId }: UserRequest) {
    if(!unityId) throw new Error('Provide unity id');

    const unity = await prismaClient.unity.findFirst({
      where: {
        id: unityId
      }
    });

    if(!unity) throw new Error('Unity not found');

    const unities = await prismaClient.unity.findMany({
      where: {
        hospital_id: unity?.hospital_id
      },
      select: {
        User: {
          select: {
            id: true,
            name: true,
            email: true,
            code: true,
            user_role: true
          }
        }
      }
    });

    const allUsers = unities.map(unity=>unity.User);


    const users :any = [];

    allUsers.forEach(Users=>{
      Users.forEach(user=>{
        users.push(user);
      });
    });


    if(!users) throw new Error('Users not found');

    return users;
  }
}

export { ListAllUsersByHospital };