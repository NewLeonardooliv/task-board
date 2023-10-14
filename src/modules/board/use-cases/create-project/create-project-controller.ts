import { Controller } from "@core/infra/Controller";
import { CreateProject, CreateProjectUseCaseRequest } from "./create-project";
import { fail, ok } from "@core/infra/HttpResponse";

export class CreateProjectController implements Controller {
  constructor(private readonly createProjectUseCase: CreateProject) { }

  async handle({ name, key, leaderId, coverImg }: CreateProjectUseCaseRequest) {
    try {
      await this.createProjectUseCase.execute({ name, key, leaderId, coverImg });

      return ok();
    } catch (error) {
      return fail(error);
    }
  }
}