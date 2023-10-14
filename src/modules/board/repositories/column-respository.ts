import { Column } from "../domain/entities/column";

export interface ColumnRepository {
  create(column: Column): Promise<void>;
  listByProject(projectId: string): Promise<Column[]>;
  getLastOrder(projectId: string): Promise<number>;
  getByOrder(projectId: string, order: number): Promise<Column | boolean>;
}