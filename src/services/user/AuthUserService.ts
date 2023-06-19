import { compare } from 'bcryptjs';
import prismaClient from '../../prisma';
import { sign } from 'jsonwebtoken';

interface UserAuthRequest{
  email: string,
  password: string
}

class AuthUserService {
  async execute({ email, password }: UserAuthRequest){
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      },
      select: {
        password: true,
        name: true,
        email: true,
        id: true,
        unity_id: true,
        user_role: true,
      }
    });

    if(!user) throw new Error('User not found');

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) throw new Error('Invalid password');

    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      String(process.env.JWT_SECRET),
      {
        subject: user.id,
        expiresIn: '30d'
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      unityId: user.unity_id,
      token: token,
      user_role: user.user_role
    };
  }
}

export default AuthUserService;