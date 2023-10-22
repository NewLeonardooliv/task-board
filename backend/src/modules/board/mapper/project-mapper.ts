import { Project as PersistenceProject } from "@prisma/client";
import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Project } from "../domain/entities/project";
import { Key } from "../domain/entities/value-objects/key";

export class ProjectMapper {
  static toDomain(raw: PersistenceProject) {
    return Project.create({
      name: raw.name,
      coverImg: raw.cover_img,
      key: Key.create(raw.key),
      leaderId: new UniqueEntityId(raw.leader_id),
    }, new UniqueEntityId(raw.id));
  }
}