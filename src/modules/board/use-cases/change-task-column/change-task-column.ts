import { project } from "@infra/http/routes/project.route";
import { TaskRepository } from "@modules/board/repositories/task-repository";

export type ChangeTaskColumnRequest = {
  taskId: string;
  columnId: string;
}

export class ChangeTaskColumn {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute({ taskId, columnId }: ChangeTaskColumnRequest) {
    const task = await this.taskRepository.find(taskId);

    if (!project) {
      throw new Error("Taks not found");
    }

    task.columnId = columnId;

    await this.taskRepository.save(task);
  }
}