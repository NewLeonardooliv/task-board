import { IMailProvider } from "@infra/providers/IMailProvider";
import { User } from "../../domain/user";
import { Password } from "../../domain/value-objects/password";
import { UserRepository } from "../../repository/user-repository";
import { MailBody } from "@modules/user/domain/mail-body";
import { container } from "tsyringe";
import { JWT } from "@modules/user/domain/value-objects/jwt";
import { firstAccessAuth } from "@config/firs-access-token";

export type RegisterUserRequest = {
  name: string;
  email: string;
  password?: string;
  profileId: string;
  profilePic?: string;
};

export class RegisterUser {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly mailProvider: IMailProvider
  ) { }

  async execute({
    name,
    password,
    email,
    profileId,
    profilePic,
  }: RegisterUserRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    if (!password) {
      password = Password.default(name);
    }

    const user = User.create({
      name,
      email,
      password: await Password.create(password),
      profileId,
      profilePic,
    });

    await this.usersRepository.create(user);

    const { token } = await JWT.signUser(user, firstAccessAuth);

    await this.mailProvider.sendEmail({
      from: {
        name: "Board Ltda",
        email: process.env.MAILTRAP_USER,
      },
      to: { email, name },
      subject: "Board",
      body: MailBody.getHtml(token),
    });

    return user;
  }
}
