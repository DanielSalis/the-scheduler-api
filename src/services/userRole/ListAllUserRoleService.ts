import prismaClient from '../../prisma';

class ListAllUserRoleService {
  async execute() {
    const allUsersRoles = await prismaClient.userRole.findMany()

    if(!allUsersRoles){
      throw('The are no roles created')
    }

    return allUsersRoles
  }
}

export {ListAllUserRoleService}