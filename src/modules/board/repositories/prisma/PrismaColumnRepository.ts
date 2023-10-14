import { Column } from "@modules/board/domain/entities/column";
import { ColumnRepository } from "../column-respository";
import { prisma } from "@infra/prisma/client";
import { UniqueEntityId } from "@core/entities/unique-entity-id";

export class PrismaColumnRepository implements ColumnRepository {
  async getByOrder(projectId: string, order: number): Promise<Column | boolean> {
    const column = await prisma.column.findFirst({
      where: {
        project_id: projectId,
        order: order
      },
    });

    if (!column) {
      return !!column;
    }

    return Column.create({
      name: column?.name,
      color: column?.color,
      order: column?.order,
      projectId: new UniqueEntityId(column?.project_id),
    }, new UniqueEntityId(column?.id));
  }
  async getLastOrder(projectId: string): Promise<number> {
    const lastColumn = await prisma.column.findFirst({
      where: {
        project_id: projectId,
      },
      orderBy: {
        order: 'desc',
      },
      select: {
        order: true,
      },
    });

    if (!lastColumn) {
      return 0;
    }

    return lastColumn.order;
  }

  async create(column: Column): Promise<void> {
    await prisma.column.create({
      data: {
        name: column.name,
        order: column.order,
        project_id: column.projectId.toString(),
        color: column.color
      }
    });
  }

  listByProject(projectId: string): Promise<Column[]> {
    throw new Error("Method not implemented.");
  }

}