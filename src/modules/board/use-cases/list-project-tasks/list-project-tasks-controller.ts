import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListProjectTasks } from "./list-project-tasks";

export class ListProjectTasksController implements Controller {
  constructor(private readonly listTasksProjectUseCase: ListProjectTasks) { }

  async handle({ projectId }): Promise<HttpResponse> {
    const tasks = await this.listTasksProjectUseCase.execute({ projectId });

    return ok(
      tasks.map((task) => ({
        id: task.id.toString(),
        title: task.title,
        description: task.description,
        toSolve: task.toSolve,
        toReproduce: task.toReproduce,
        priority: task.priority.value,
        reporterId: task.reporterId.toString(),
        assigneeId: task.assigneeId.toString(),
        columnId: task.columnId.toString(),
        difficulty: task.difficulty,
        type: task.type,
        projectId: task.projectId.toString(),
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      }))
    );
  }
}