import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Task } from "@modules/board/domain/entities/task";
import { TaskRepository } from "@modules/board/repositories/task-repository";

export type CreateTaskRequest = {
  title: string;
  description: string;
  toSolve: string;
  toReproduce: string;
  priority: string;
  reporter: string;
  assigneeId: string;
  difficulty: string;
  type: string;
  projectId: UniqueEntityId;
  createdAt: Date;
  updatedAt?: Date;
}

export class CreateTask {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute({ title, description, toSolve, toReproduce, priority, reporter, assigneeId, difficulty, type, projectId, createdAt, updatedAt, }: CreateTaskRequest) {
    const task = Task.create({
      title,
      description,
      toSolve,
      toReproduce,
      priority,
      reporter,
      assigneeId,
      difficulty,
      type,
      projectId,
      createdAt,
      updatedAt,
    });

    await this.taskRepository.create(task);

    return task;
  }
}