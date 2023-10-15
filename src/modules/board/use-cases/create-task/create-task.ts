import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Task } from "@modules/board/domain/entities/task";
import { Priority, PriorityTypes } from "@modules/board/domain/entities/value-objects/priority";
import { TaskRepository } from "@modules/board/repositories/task-repository";

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
  columnId?: string
}

export class CreateTask {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute({ title, description, toSolve, toReproduce, priority, reporterId, assigneeId, difficulty, type, projectId, columnId }: CreateTaskRequest) {
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
      column_id: task.columnId.toString()
    };
  }
}