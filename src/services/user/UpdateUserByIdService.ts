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

    let newPassword = user.password;

    if(password){
      const passwordMatched = await compare(password, user.password);
      newPassword = passwordMatched ? user.password : await hash(password, 8);
    }

    const userUpdated = await prismaClient.user.update({
      where: {
        id: id
      },
      data: {
        password: newPassword,
        code: code,
        name: name,
        email: email
      }
    });

    return userUpdated;
  }
}

export { UpdateUserByIdService };