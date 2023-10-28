import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Profile } from "../domain/profile";
import { Profile as PersistenceProfile } from "@prisma/client";

export class ProfileMapper {
  static async toPersistence(profile: Profile) {
    return {
      id: profile.id.toString(),
      name: profile.name,
    };
  }

  static toDomain(raw: PersistenceProfile): Profile {
    return Profile.create({
      name: raw.name,
    }, new UniqueEntityId(raw.id))
  }
}