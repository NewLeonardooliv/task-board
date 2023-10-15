import { PrismaColumnRepository } from "@modules/board/repositories/prisma/PrismaColumnRepository";
import { ListAllProjectColumns } from "@modules/board/use-cases/list-project-columns/list-all-project-columns";
import { ListAllProjectColumnsController } from "@modules/board/use-cases/list-project-columns/list-all-project-columns-controller";


const columnRepository = new PrismaColumnRepository();
const listAllProjectColumns = new ListAllProjectColumns(columnRepository);
const listAllProjectColumnsController = new ListAllProjectColumnsController(listAllProjectColumns);

export { listAllProjectColumnsController }