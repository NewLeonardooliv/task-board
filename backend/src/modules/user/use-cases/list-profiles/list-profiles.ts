import { ProfileRepository } from "@modules/user/repository/profile-repository";

export class ListProfiles {
  constructor(private readonly profileRepository: ProfileRepository) { }

  async execute() {
    const profiles = await this.profileRepository.list();

    return profiles.map((profile) => ({
      id: profile.id.toString(),
      name: profile.name
    }));
  }
}
