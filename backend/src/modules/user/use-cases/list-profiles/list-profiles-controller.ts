import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListProfiles } from "./list-profiles";

export class ListProfilesController implements Controller {
  constructor(private readonly listProfilesUseCase: ListProfiles) {}

  async handle(): Promise<HttpResponse> {
    const profiles = await this.listProfilesUseCase.execute();
    return ok(profiles);
  }
}
