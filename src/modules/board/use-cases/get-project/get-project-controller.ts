import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { GetProject, getProjectRequest } from "./get-project";

export class GetProjectController implements Controller {
  constructor(private getProjectUseCase: GetProject) { }

  async handle({ projectId, user }: getProjectRequest): Promise<HttpResponse> {
    const project = await this.getProjectUseCase.execute({ projectId, user });

    return ok(project);
  }
}