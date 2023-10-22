import { Controller } from "@core/infra/Controller";
import { RegisterUser, RegisterUserRequest } from "./register-user";
import { created } from "@core/infra/HttpResponse";
import { fail } from "assert";

export class RegisterUserController implements Controller {
  constructor(private readonly registerUser: RegisterUser) { }

  async handle({ email, password, name, profileId }: RegisterUserRequest) {
    try {
      await this.registerUser.execute({
        name,
        email,
        password,
        profileId
      });
      return created();

    } catch (error) {
      return fail(error);
    }

  }
}