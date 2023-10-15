import { PrismaTaskRepository } from "@modules/board/repositories/prisma/PrismaTaskRepository";
import { CreateTask } from "@modules/board/use-cases/create-task/create-task";
import { CreateTaskController } from "@modules/board/use-cases/create-task/create-task-controller";

const taskRepository = new PrismaTaskRepository();
const createTaskUseCase = new CreateTask(taskRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController }