import { prisma } from "@infra/prisma/client";
import { UserRepository } from "../user-repository";
import { User } from "@modules/user/domain/user";
import { Password } from "@modules/user/domain/value-objects/password";
import { UserMapper } from "@modules/user/mapper/user-mapper";

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    const data = await UserMapper.toPersistence(user);
    await prisma.user.create({
      data: {
        id: data.id.toString(),
        name: data.name,
        password: data.password,
        profile_id: data.profileId,
        email: data.email
      }
    });
  }

  async findByEmail(email: string): Promise<User | boolean> {
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    if (!user) return false;

    return User.create({
      email: user?.email,
      name: user?.name,
      profileId: user?.profile_id,
      password: await Password.create(user?.password),
    });
  }
}