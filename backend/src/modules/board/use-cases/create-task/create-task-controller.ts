import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { CreateTask, CreateTaskRequest } from "./create-task";

export class CreateTaskController implements Controller {
  constructor(private readonly createTaskUseCase: CreateTask) { }

  async handle({ title,
    description,
    toSolve,
    toReproduce,
    priority,
    reporterId,
    assigneeId,
    difficulty,
    type,
    projectId,
    columnId,
    user
   }: CreateTaskRequest): Promise<HttpResponse> {
    const task = await this.createTaskUseCase.execute({
      title,
      description,
      toSolve,
      toReproduce,
      priority,
      reporterId,
      assigneeId,
      difficulty,
      type,
      projectId,
      columnId,
      user
    });

    return ok(task);
  }
}