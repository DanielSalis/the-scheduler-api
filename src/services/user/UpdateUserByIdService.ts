import prismaClient from '../../prisma';
import { compare, hash } from 'bcryptjs';

interface UserRequest {
  id: string,
  password: string,
  code: string,
  name: string,
  email: string
}

class UpdateUserByIdService {
  async execute ({ id, password, code, name, email }: UserRequest){

    const user = await prismaClient.user.findFirst({
      where:{
        id: id
      }
    });

    if(!user) throw new Error('user not found');

    const passwordMatched = await compare(password, user.password);

    const userUpdated = await prismaClient.user.update({
      where: {
        id: id
      },
      data: {
        password: passwordMatched ? password : await hash(user.password, 8),
        code: code,
        name: name,
        email: email
      }
    });

    return userUpdated;
  }
}

export { UpdateUserByIdService };