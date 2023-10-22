import { Entity } from "@core/entities/entity";
import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Optional } from "@core/types/optional";
import { Key } from "./value-objects/key";

export type ProjectProps = {
  name: string;
  key: Key;
  leaderId: UniqueEntityId;
  coverImg: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Project extends Entity<ProjectProps> {
  get name() {
    return this.props.name;
  }

  get key(): Key {
    return this.props.key;
  }

  get leaderId() {
    return this.props.leaderId;
  }

  get coverImg() {
    return this.props.coverImg;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set name(name: string) {
    this.props.name = name;
    this.touch;
  }

  set key(key: string) {
    this.props.key = Key.create(key);
  }

  static create(props: Optional<ProjectProps, 'createdAt'>, id?: UniqueEntityId) {
    const project = new Project({
      ...props,
      key: props.key,
      createdAt: new Date(),
    }, id);

    return project;
  }
}