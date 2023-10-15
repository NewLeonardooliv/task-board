import { JWT } from "@modules/user/domain/value-objects/jwt";
import { UserRepository } from "@modules/user/repository/user-repository";

export type AuthenticateUserRequest = {
  email: string;
  password: string;
}

export class AuthenticateUser {
  constructor(private userRepository: UserRepository) { }

  async execute({ email, password }: AuthenticateUserRequest) {
    const user = await this.userRepository.findByEmail(email);

    if (typeof user === 'boolean') {
      throw new Error('Invalid e-mail/password combination.');
    }
    
    const passwordMatch = await user.password.comparePassword(password);

    if (!passwordMatch) {
      throw new Error('Invalid e-mail/password combination.');
    }

    const { token } = await JWT.signUser(user);

    return token;
  }
}