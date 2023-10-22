import { Task } from "../domain/entities/task";

export interface TaskRepository {
  create(task: Task): Promise<void>;
  save(task: Task): Promise<void>;
  list(): Promise<Task[]>;
  listByProject(projectId: string): Promise<Task[]>;
  find(taskId: string): Promise<Task>;
}