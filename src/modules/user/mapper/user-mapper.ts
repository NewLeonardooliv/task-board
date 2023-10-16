import { User as PersistenceUser } from "@prisma/client";
import { User } from "../domain/user";
import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Password } from "../domain/value-objects/password";


export class UserMapper {
  static async toPersistence(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profileId: user.profileId,
      password: await user.password.getHashedValue(),
    }
  }

  static toDomain(raw: PersistenceUser): User {
    return User.create({
      name: raw.name,
      email: raw.email,
      profileId: raw.profile_id,
      password: new Password(raw.password),
      createdAt: raw.created_at,
      updatedAt: raw.updated_at
    }, new UniqueEntityId(raw.id))
  }
}