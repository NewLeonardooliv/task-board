import { Column } from "@modules/board/domain/entities/column";
import { ColumnRepository } from "../column-respository";
import { prisma } from "@infra/prisma/client";

export class PrismaColumnRepository implements ColumnRepository {

  async create(column: Column): Promise<void> {
    await prisma.column.create({
      data: {
        name: column.name,
        order: column.order,
      }
    });
  }

  listByProject(projectId: string): Promise<Column[]> {
    throw new Error("Method not implemented.");
  }

}