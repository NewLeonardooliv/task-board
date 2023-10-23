import { PrismaTaskRepository } from "@modules/board/repositories/prisma/PrismaTaskRepository";
import { ListProjectTasks } from "@modules/board/use-cases/list-project-tasks/list-project-tasks";
import { ListProjectTasksController } from "@modules/board/use-cases/list-project-tasks/list-project-tasks-controller";
import { PrismaUserRepository } from "@modules/user/repository/prisma/PrismaUserRepository";

const taskRepository = new PrismaTaskRepository();
const userRepository = new PrismaUserRepository();
const listProjectTasksUseCase = new ListProjectTasks(taskRepository, userRepository);
const listProjectTasksController = new ListProjectTasksController(listProjectTasksUseCase);

export { listProjectTasksController }