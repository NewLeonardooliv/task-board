import { PrismaColumnRepository } from "@modules/board/repositories/prisma/PrismaColumnRepository";
import { CreateColumn } from "@modules/board/use-cases/create-column/create-column";
import { CreateColumnController } from "@modules/board/use-cases/create-column/create-column-controller";


const columnRepository = new PrismaColumnRepository();
const createColumn = new CreateColumn(columnRepository);
const createColumnController = new CreateColumnController(createColumn);

export { createColumnController };