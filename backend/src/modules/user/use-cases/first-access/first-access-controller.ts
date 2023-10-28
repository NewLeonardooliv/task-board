import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok, unauthorized } from "@core/infra/HttpResponse";
import { FirstAccess, FirstAccessRequest } from "./first-access";

export class FirstAccessController implements Controller {
  constructor(private readonly firstAccessUseCase: FirstAccess) {}

  async handle({ token, password }: FirstAccessRequest): Promise<HttpResponse> {
    try {
      const tokenToSingIn = await this.firstAccessUseCase.execute({
        token,
        password,
      });

      return ok(tokenToSingIn);
    } catch (error) {
      return unauthorized({
        name: "Unauthorized",
        message: error.message,
      });
    }
  }
}
