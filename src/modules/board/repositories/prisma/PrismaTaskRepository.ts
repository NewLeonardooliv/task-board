import { Task } from "@modules/board/domain/entities/task";
import { TaskRepository } from "../task-repository";

export class PrismaTaskRepository implements TaskRepository {
  create(task: Task): Promise<void> {
    throw new Error("Method not implemented.");
  }

  list(): Promise<Task[]> {
    throw new Error("Method not implemented.");
  }

  listByProject(projectId: string): Promise<Task[]> {
    throw new Error("Method not implemented.");
  }

}