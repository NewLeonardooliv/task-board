import { Task } from "@modules/board/domain/entities/task";
import { TaskRepository } from "@modules/board/repositories/task-repository";

type ListAllTasksProjectRequest = {
  projectId: string;
}

type ListProjectTasksResponse = Task[];

export class ListProjectTasks {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute({ projectId }: ListAllTasksProjectRequest): Promise<ListProjectTasksResponse> {
    const tasks = await this.taskRepository.listByProject(projectId);

    return tasks;
  }
}