import { sign, verify } from 'jsonwebtoken';

import { auth } from '@config/auth';
import { User } from '../user';

type JWTData = {
  userId: string
  token: string
}

export type JWTTokenPayload = {
  exp: number
  sub: string
}

export type AuthValuesProps = {
  secretKey: string;
  expiresIn: string;
}

export class JWT {
  public readonly userId: string;
  public readonly token: string;

  private constructor({ userId, token }: JWTData) {
    this.userId = userId;
    this.token = token;
  }

  static decodeToken(token: string) {
    try {
      const decoded = verify(token, auth.secretKey) as JWTTokenPayload;

      return decoded;
    } catch (err) {
      throw new Error('The JWT token is invalid.');

    }
  }

  static createFromJWT(token: string) {
    const jwtPayload = this.decodeToken(token);

    if (!jwtPayload) {
      return jwtPayload;
    }

    const jwt = new JWT({ token, userId: jwtPayload.sub });

    return jwt;
  }

  static async signUser(user: User, authValues: AuthValuesProps): Promise<JWT> {
    const token = sign(
      {
        userId: user.id.toString(),
        profileId: user.profileId,
      },
      authValues.secretKey,
      {
        expiresIn: authValues.expiresIn,
      }
    );

    const jwt = new JWT({ userId: user.id.toString(), token });

    return jwt;
  }
}