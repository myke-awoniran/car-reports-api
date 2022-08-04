import * as jwt from 'jsonwebtoken';

interface User {
  id: number;
  email: string;
}

// this is made for data consistency
export async function dumbUser(user: User) {
  return {
    user_id: user.id,
    email: user.email,
    access_token: await signToken(user.id),
  };
}
console.log(process.env.JWT_SECRET);

export async function signToken(id: number) {
  return jwt.sign({ id }, 'ju12ir982riwfl2o4r9iw');
}
