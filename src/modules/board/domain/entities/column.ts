import { Entity } from "@core/entities/entity";
import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Optional } from "@core/types/optional";

type ColumnProps = {
  name: string;
  order: number;
  color: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Column extends Entity<ColumnProps>{
  get name() {
    return this.props.name;
  }

  get order() {
    return this.props.order;
  }

  get color() {
    return this.props.color;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(props: Optional<ColumnProps, 'createdAt'>, id?: UniqueEntityId) {
    const column = new Column({
      ...props,
      createdAt: new Date(),
    }, id);

    return column;
  }
}