import { prisma } from "@infra/prisma/client";
import { UserRepository } from "../user-repository";
import { User } from "@modules/user/domain/user";
import { UserMapper } from "@modules/user/mapper/user-mapper";

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    const data = await UserMapper.toPersistence(user);

    await prisma.user.create({
      data,
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) return undefined;

    return UserMapper.toDomain(user);
  }

  async find(id: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) return undefined;

    return UserMapper.toDomain(user);
  }

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany({
      orderBy: {
        created_at: "asc",
      },
    });

    return users.map((user) => UserMapper.toDomain(user));
  }

  async save(user: User): Promise<void> {
    const data = await UserMapper.toPersistence(user);

    await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    });
  }
}
