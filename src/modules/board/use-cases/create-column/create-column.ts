import { Column } from "@modules/board/domain/entities/column";
import { ColumnRepository } from "@modules/board/repositories/column-respository";

export type CreateColumnUseCaseRequest = {
  name: string;
  order: number;
  color: string;
}

export class CreateColumn {
  constructor(private columnRepository: ColumnRepository) { }

  async execute({ name, order, color }: CreateColumnUseCaseRequest): Promise<Column> {
    const column = Column.create({
      name,
      order,
      color
    });

    await this.columnRepository.create(column);

    return column;
  }
}