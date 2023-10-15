import { prisma } from "@infra/prisma/client";
import { UserRepository } from "../user-repository";
import { User } from "@modules/user/domain/user";
import { Password } from "@modules/user/domain/value-objects/password";

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        id: user.id.toString(),
        name: user.name,
        password: user.password.value,
        profile_id: user.profileId,
        email: user.email
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