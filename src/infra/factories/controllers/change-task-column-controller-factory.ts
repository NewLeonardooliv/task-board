import { PrismaTaskRepository } from "@modules/board/repositories/prisma/PrismaTaskRepository";
import { ChangeTaskColumn } from "@modules/board/use-cases/change-task-column/change-task-column";
import { ChangeTaskColumnController } from "@modules/board/use-cases/change-task-column/change-task-column-controller";

const prismaTaskRepository = new PrismaTaskRepository()
const changeTaskColumn = new ChangeTaskColumn(prismaTaskRepository);
const changeTaskColumnController = new ChangeTaskColumnController(changeTaskColumn);

export { changeTaskColumnController }