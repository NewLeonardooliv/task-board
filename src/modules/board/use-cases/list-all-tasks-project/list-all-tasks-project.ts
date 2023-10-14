import { Task } from "@modules/board/domain/entities/task";
import { TaskRepository } from "@modules/board/repositories/task-repository";

type ListAllTasksProjectRequest = {
  projectId: string;
}

type ListAllTasksProjectResponse = Task[];

export class ListAllTasksProject {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute({ projectId }: ListAllTasksProjectRequest): Promise<ListAllTasksProjectResponse> {
    const tasks = this.taskRepository.listByProject(projectId);

    return tasks;
  }
}