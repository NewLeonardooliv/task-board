import { Task as PersistenceTask } from "@prisma/client";
import { Task } from "../domain/entities/task";
import { Priority } from "../domain/entities/value-objects/priority";
import { UniqueEntityId } from "@core/entities/unique-entity-id";

export class TaskMapper {
  static toPersistence(task: Task) {
    return {
      id: task.id.toString(),
      title: task.title,
      description: task.description,
      priority: task.priority.value,
      to_reproduce: task.toReproduce,
      to_solve: task.toSolve,
      type: task.type,
      assignee_id: task.assigneeId.toString(),
      reporter_id: task.reporterId.toString(),
      project_id: task.projectId.toString(),
      difficulty: task.difficulty,
      column_id: task.columnId.toString()
    }
  }

  static toDomain(raw: PersistenceTask) {
    return Task.create({
      title: raw.title,
      description: raw.description,
      toSolve: raw.to_solve,
      toReproduce: raw.to_reproduce,
      priority: Priority.create(raw.priority),
      reporterId: new UniqueEntityId(raw.reporter_id),
      assigneeId: new UniqueEntityId(raw.assignee_id),
      columnId: new UniqueEntityId(raw.column_id),
      difficulty: raw.difficulty,
      type: raw.type,
      projectId: new UniqueEntityId(raw.project_id),
      createdAt: raw.created_at,
      updatedAt: raw.updated_at,

    }, new UniqueEntityId(raw.id));
  }
}