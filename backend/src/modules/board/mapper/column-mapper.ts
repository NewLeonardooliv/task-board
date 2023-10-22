import { Column as PersistenceColumn } from "@prisma/client";
import { Column } from "../domain/entities/column";
import { UniqueEntityId } from "@core/entities/unique-entity-id";

export class ColumnMapper {
  static toDomain(raw: PersistenceColumn) {
    return Column.create({
      color: raw.color,
      name: raw.name,
      order: raw.order,
      projectId: new UniqueEntityId(raw.project_id)
    }, new UniqueEntityId(raw.id));
  }
}