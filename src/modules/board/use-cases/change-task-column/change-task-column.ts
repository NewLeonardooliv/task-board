import { project } from "@infra/http/routes/project.route";
import { Task } from "@modules/board/domain/entities/task";
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

    return {
      id: task.id.toString(),
      title: task.title,
      description: task.description,
      toSolve: task.toSolve,
      toReproduce: task.toReproduce,
      priority: task.priority.value,
      reporterId: task.reporterId.toString(),
      assigneeId: task.assigneeId.toString(),
      columnId: task.columnId,
      difficulty: task.difficulty,
      type: task.type,
      projectId: task.projectId.toString(),
      createdAt: task.createdAt,
      updatedAt: task.updatedAt
    };
  }
}