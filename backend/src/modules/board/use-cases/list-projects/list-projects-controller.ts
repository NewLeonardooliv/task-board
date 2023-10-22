import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListProjects, ListProjectsRequest } from "./list-projects";

export class ListProjectsController implements Controller {
  constructor(private listAllProjectUseCase: ListProjects) { }

  async handle({ user }: ListProjectsRequest): Promise<HttpResponse> {
    const projects = await this.listAllProjectUseCase.execute({ user });

    return ok(projects);
  }
}