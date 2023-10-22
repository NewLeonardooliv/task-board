import { Task } from "@modules/board/domain/entities/task";
import { TaskRepository } from "../task-repository";
import { prisma } from "@infra/prisma/client";
import { TaskMapper } from "@modules/board/mapper/task-mapper";

export class PrismaTaskRepository implements TaskRepository {
  async create(task: Task): Promise<void> {
    const data = TaskMapper.toPersistence(task);

    await prisma.task.create({
      data
    });
  }

  list(): Promise<Task[]> {
    throw new Error("Method not implemented.");
  }

  async listByProject(projectId: string): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
      where: {
        project_id: projectId,
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    return tasks.map((task) => TaskMapper.toDomain(task));
  }

  async find(taskId: string): Promise<Task> {
    const task = await prisma.task.findFirst({
      where: {
        id: taskId
      }
    });

    return TaskMapper.toDomain(task);
  }

  async save(task: Task): Promise<void> {
    const data = TaskMapper.toPersistence(task);

    await prisma.task.update({
      where: {
        id: data.id,
      },
      data
    });
  }
}