import { Column } from "../domain/entities/column";

export interface ColumnRepository {
  create(project: Column): Promise<void>;
  listByProject(projectId: string): Promise<Column[]>;
}