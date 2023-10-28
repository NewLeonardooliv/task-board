import { Profile } from "@modules/user/domain/profile";
import { ProfileRepository } from "../profile-repository";
import { prisma } from "@infra/prisma/client";
import { ProfileMapper } from "@modules/user/mapper/profile-mapper";

export class PrismaProfileRepository implements ProfileRepository {
  async list(): Promise<Profile[]> {
    const profiles = await prisma.profile.findMany();

    return profiles.map((profile) => ProfileMapper.toDomain(profile));
  }
}