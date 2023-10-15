import { User } from "../domain/user";

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
}