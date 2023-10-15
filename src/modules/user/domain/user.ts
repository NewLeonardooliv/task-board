import { Entity } from "@core/entities/entity";
import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Optional } from "@core/types/optional";
import { Password } from "./value-objects/password";

type UserProps = {
  name: string;
  email: string;
  profileId: string;
  password: Password;
  createdAt: Date;
  updatedAt?: Date;
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name;
  }

  get profileId() {
    return this.props.profileId;
  }

  get email() {
    return this.props.email;
  }

  get password(): Password {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static async create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityId) {
    const user = new User({
      ...props,
      createdAt: new Date(),
    }, id);

    return user;
  }
}