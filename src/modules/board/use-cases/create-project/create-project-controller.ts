import { Controller } from "@core/infra/Controller";
import { CreateProject, CreateProjectUseCaseRequest } from "./create-project";
import { HttpResponse, created, fail } from "@core/infra/HttpResponse";

export class CreateProjectController implements Controller {
  constructor(private readonly createProjectUseCase: CreateProject) { }

  async handle({ name, key, leaderId, coverImg }: CreateProjectUseCaseRequest): Promise<HttpResponse> {
    try {
      await this.createProjectUseCase.execute({ name, key, leaderId, coverImg });

      return created();
    } catch (error) {
      return fail(error);
    }
  }
}