import { User } from "@modules/user/domain/user";
import { PrismaUserRepository } from "@modules/user/repository/prisma/PrismaUserRepository";
import { ListUsers } from "@modules/user/use-cases/list-users/list-users";
import { ListUsersController } from "@modules/user/use-cases/list-users/list-users-controller";

const userRepository = new PrismaUserRepository();
const listUsers = new ListUsers(userRepository);
const listUsersController = new ListUsersController(listUsers);

export { listUsersController };