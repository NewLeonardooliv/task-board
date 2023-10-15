import { User } from "../domain/user";
import { Password } from "../domain/value-objects/password";
import { UserRepository } from "../repository/user-repository";

export type RegisterUserRequest = {
  name: string;
  email: string;
  password: string;
  profileId: string;
}

export class RegisterUser {
  constructor(
    private usersRepository: UserRepository
  ) { }

  async execute({
    name,
    password,
    email,
    profileId
  }: RegisterUserRequest): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    const user = await User.create({
      name,
      email,
      password: await Password.create(password),
      profileId,
    })

    await this.usersRepository.create(user);
  }
}
