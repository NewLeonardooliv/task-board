import { PrismaUserRepository } from "@modules/user/repository/prisma/PrismaUserRepository";
import { AuthenticateUser } from "@modules/user/use-cases/authenticate-user/authenticate-user";
import { AuthenticateUserController } from "@modules/user/use-cases/authenticate-user/authenticate-user-controller";

const userRepository = new PrismaUserRepository();
const authenticateUser = new AuthenticateUser(userRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUser);

export { authenticateUserController };