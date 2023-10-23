import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListProjectTasks } from "./list-project-tasks";

export class ListProjectTasksController implements Controller {
  constructor(private readonly listTasksProjectUseCase: ListProjectTasks) { }

  async handle({ projectId }): Promise<HttpResponse> {
    const tasks = await this.listTasksProjectUseCase.execute({ projectId });

    return ok(tasks);
  }
}