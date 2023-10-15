import { PrismaColumnRepository } from "@modules/board/repositories/prisma/PrismaColumnRepository";
import { ListAllColumns } from "@modules/board/use-cases/list-all-columns/list-all-columns";
import { ListAllColumnsController } from "@modules/board/use-cases/list-all-columns/list-all-columns-controller";

const columnRepository = new PrismaColumnRepository();
const listAllColumns = new ListAllColumns(columnRepository);
const listAllColumnsController = new ListAllColumnsController(listAllColumns);

export { listAllColumnsController }