import { Controller } from "@core/infra/Controller";
import { RegisterUser, RegisterUserRequest } from "./register-user";
import { created } from "@core/infra/HttpResponse";
import { fail } from "assert";

export class RegisterUserController implements Controller {
  constructor(private readonly registerUser: RegisterUser) { }

  async handle({ email, password, name, profileId }: RegisterUserRequest, file: any) {
    try {
      const user = await this.registerUser.execute({
        name,
        email,
        password,
        profileId,
        profilePic: file?.filename
      });
      return created({
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        profileId: user.profileId,
        profilePic: user.profilePic,
        createdAt: user.createdAt
      });

    } catch (error) {
      return fail(error);
    }

  }
}