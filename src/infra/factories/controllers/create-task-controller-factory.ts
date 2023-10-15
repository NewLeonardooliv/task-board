import { PrismaColumnRepository } from "@modules/board/repositories/prisma/PrismaColumnRepository";
import { PrismaProjectRepository } from "@modules/board/repositories/prisma/PrismaProjectRepository";
import { PrismaTaskRepository } from "@modules/board/repositories/prisma/PrismaTaskRepository";
import { CreateTask } from "@modules/board/use-cases/create-task/create-task";
import { CreateTaskController } from "@modules/board/use-cases/create-task/create-task-controller";
import { PrismaUserRepository } from "@modules/user/repository/prisma/PrismaUserRepository";

const createTaskUseCase = new CreateTask(
  new PrismaTaskRepository(),
  new PrismaProjectRepository(),
  new PrismaColumnRepository(),
  new PrismaUserRepository()
);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController }