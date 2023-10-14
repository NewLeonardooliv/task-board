import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Column } from "@modules/board/domain/entities/column";
import { ColumnRepository } from "@modules/board/repositories/column-respository";

export type CreateColumnRequest = {
  name: string;
  order?: number;
  color: string;
  projectId: string;
}

export class CreateColumn {
  constructor(private columnRepository: ColumnRepository) { }

  async execute({ name, order, color, projectId }: CreateColumnRequest): Promise<Column> {
    if (!order) {
      const lastOrder = await this.columnRepository.getLastOrder(projectId);
      order = lastOrder + 1;
    }

    if(order) {
      const columnWithSameOrder = await this.columnRepository.getByOrder(projectId, order);
      if (columnWithSameOrder) {
        throw new Error('Order value is already in use. Please choose another.');
      }
    }

    const column = Column.create({
      name,
      order,
      color,
      projectId: new UniqueEntityId(projectId),
    });

    await this.columnRepository.create(column);

    return column;
  }
}