import { Task } from "@modules/board/domain/entities/task";
import { Priority, PriorityTypes } from "@modules/board/domain/entities/value-objects/priority";
import { ProjectRepository } from "@modules/board/repositories/project-repository";
import { TaskRepository } from "@modules/board/repositories/task-repository";
import { UserRepository } from "@modules/user/repository/user-repository";
import { UniqueEntityId } from "@core/entities/unique-entity-id"; // Import UniqueEntityId here
import { ColumnRepository } from "@modules/board/repositories/column-respository";

export type CreateTaskRequest = {
  title: string;
  description: string;
  toSolve: string;
  toReproduce: string;
  priority: PriorityTypes;
  reporterId: string;
  assigneeId: string;
  difficulty: string;
  type: string;
  projectId: string;
  columnId?: string;
  user: any
};

export class CreateTask {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly projectRepository: ProjectRepository,
    private readonly columnRepository: ColumnRepository,
    private readonly userRepository: UserRepository,
  ) { }

  async execute({
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
    user,
  }: CreateTaskRequest) {
    const projectFound = await this.projectRepository.find(projectId);

    if (!projectFound) {
      throw new Error("Project not found");
    }

    if (!reporterId) {
      reporterId = user.userId;
    }

    const reporterFound = await this.userRepository.find(reporterId);
    if (!reporterFound) {
      throw new Error("Reporter not found");
    }

    if (reporterId !== assigneeId) {
      const assigneeFound = await this.userRepository.find(assigneeId);

      if (!assigneeFound) {
        throw new Error("Assignee not found");
      }
    }

    if (!columnId) {
      const column = await this.columnRepository.findFirstColumn(projectId);

      columnId = column.id.toString();
    }

    const task = Task.create({
      title,
      description,
      toSolve,
      toReproduce,
      priority: Priority.create(priority),
      reporterId: new UniqueEntityId(reporterId),
      assigneeId: new UniqueEntityId(assigneeId),
      difficulty,
      type,
      projectId: new UniqueEntityId(projectId),
      columnId: new UniqueEntityId(columnId),
    });

    await this.taskRepository.create(task);

    return this.mapTaskToResponse(task);
  }


  private mapTaskToResponse(task: Task) {
    return {
      id: task.id.toString(),
      description: task.description,
      priority: task.priority.value,
      toReproduce: task.toReproduce,
      toSolve: task.toSolve,
      type: task.type,
      assignee_id: task.assigneeId.toString(),
      reporter_id: task.reporterId.toString(),
      project_id: task.projectId.toString(),
      difficulty: task.difficulty,
      column_id: task.columnId ? task.columnId.toString() : null,
    };
  }
}
