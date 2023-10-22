import { UserRepository } from "@modules/user/repository/user-repository";

export class ListUsers {
  constructor(private readonly userRepository: UserRepository) { }
  async execute() {
    const users = await this.userRepository.list();

    return users.map(({ email, name, id, profileId, createdAt, updatedAt }) => {
      return {
        id: id.toString(),
        name,
        email,
        profileId,
        createdAt,
        updatedAt
      }
    });
  }
}