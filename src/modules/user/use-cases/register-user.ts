import { User } from "../domain/user";
import { Password } from "../domain/value-objects/password";
import { UserRepository } from "../repository/user-repository";

export type RegisterUserRequest = {
  name: string;
  email: string;
  password: string;
}

export class RegisterUser {
  constructor(
    private usersRepository: UserRepository
  ) { }

  async execute({
    name,
    password,
    email,
  }: RegisterUserRequest): Promise<void> {
    
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    const user = await User.create({
      email,
      password: await Password.create(password),
      name
    })

    await this.usersRepository.create(user);
  }
}
