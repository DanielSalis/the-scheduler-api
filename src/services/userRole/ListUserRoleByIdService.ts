import prismaClient from '../../prisma';

interface UserRoleRequest {
  id: string
}

class ListUserRoleByIdService {
  async execute({ id }:UserRoleRequest){
    if(!id) throw new Error('Provide the userRole ID');

    const userRole = await prismaClient.userRole.findFirst({
      where:{
        id: id
      }
    });

    if(!userRole) throw new Error('role not found');

    return userRole;
  }
}

export { ListUserRoleByIdService };