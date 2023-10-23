import { Controller } from "@core/infra/Controller";
import { HttpResponse, created, fail } from "@core/infra/HttpResponse";
import { ChangeTaskColumn, ChangeTaskColumnRequest } from "./change-task-column";

export class ChangeTaskColumnController implements Controller {
  constructor(private changeTaskColumn: ChangeTaskColumn) { }

  async handle({ taskId, columnId }: ChangeTaskColumnRequest): Promise<HttpResponse> {
    try {
      const task = await this.changeTaskColumn.execute({ taskId, columnId });
      
      return created(task);
    } catch (error) {
      return fail(error);
    }
  }
}