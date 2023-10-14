import { Task } from "../domain/entities/task";

export interface TaskRepository {
  create(project: Task): Promise<void>;
  list(): Promise<Task[]>;
  listByProject(projectId: string): Promise<Task[]>;
}