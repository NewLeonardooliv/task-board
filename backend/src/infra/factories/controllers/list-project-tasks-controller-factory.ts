import { PrismaTaskRepository } from "@modules/board/repositories/prisma/PrismaTaskRepository";
import { ListProjectTasks } from "@modules/board/use-cases/list-project-tasks/list-project-tasks";
import { ListProjectTasksController } from "@modules/board/use-cases/list-project-tasks/list-project-tasks-controller";

const taskRepository = new PrismaTaskRepository();
const listProjectTasksUseCase = new ListProjectTasks(taskRepository);
const listProjectTasksController = new ListProjectTasksController(listProjectTasksUseCase);

export { listProjectTasksController }