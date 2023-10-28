import { Entity } from "@core/entities/entity";
import { UniqueEntityId } from "@core/entities/unique-entity-id";

export type ProfileProps = {
  name: string;
}

export class Profile extends Entity<ProfileProps> {
  get name() {
    return this.props.name;
  }

  static create(props: ProfileProps, id?: UniqueEntityId) {
    const user = new Profile({
      ...props,
    }, id);

    return user;
  }
}
