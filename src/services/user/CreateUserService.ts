import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest{
  name: string,
  email: string,
  password: string,
  userRoleId: string,
  code: string
  unityId?:string
}

class CreateUserService {
  async execute(user: UserRequest){
    if(!user.name || !user.password || !user.email){
      throw new Error('Missing keys');
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: user.email
      }
    });

    if (userAlreadyExists) throw new Error('User already exists');

    const passwordHashed = await hash(user.password, 8);

    const userCreated = await prismaClient.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: passwordHashed,
        user_role_id: user.userRoleId,
        code: user.code,
        unity_id: user.unityId
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    });

    return userCreated;
  }
}

export { CreateUserService };