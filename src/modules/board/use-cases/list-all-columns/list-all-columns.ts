import { ColumnRepository } from "@modules/board/repositories/column-respository";

export type ListAllColumnsRequest = {
  projectId: string;
}

export class ListAllColumns {
  constructor(private columnRepository: ColumnRepository) { }

  async execute({ projectId }: ListAllColumnsRequest) {
    const columns = await this.columnRepository.listByProject(projectId);

    const processedColumns = columns.map((column) => ({
      id: column.id.toString(),
      color: column.props.color,
      name: column.props.name,
      order: column.props.order,
      projectId: column.props.projectId.toString()
    }));

    processedColumns.sort((a, b) => a.order - b.order);

    return processedColumns;
  }
}