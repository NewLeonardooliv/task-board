import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListProjects } from "./list-projects";

export class ListProjectsController implements Controller {
  constructor(private listAllProjectUseCase: ListProjects) { }

  async handle({ }): Promise<HttpResponse> {
    const projects = await this.listAllProjectUseCase.execute();

    return ok(projects);
  }
}