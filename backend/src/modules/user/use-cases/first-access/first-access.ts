import jwt from "jsonwebtoken";
import { UserRepository } from "@modules/user/repository/user-repository";
import { firstAccessAuth } from "@config/firs-access-token";
import { JWT } from "@modules/user/domain/value-objects/jwt";
import { Password } from "@modules/user/domain/value-objects/password";

export type FirstAccessRequest = {
  token: string;
  password: string;
};

export class FirstAccess {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ token, password }: FirstAccessRequest) {
    const userInToken = await this.verifyToken(token);

    const user = await this.userRepository.find(userInToken.userId);

    if (!user) {
      throw new Error("User not found");
    }

    const { token: tokenToSingIn } = await JWT.signUser(user, firstAccessAuth);

    user.password = await Password.create(password);

    await this.userRepository.save(user);

    return { token: tokenToSingIn };
  }

  private async verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, firstAccessAuth.secretKey, (error, user) => {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      });
    });
  }
}
