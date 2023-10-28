import { PrismaUserRepository } from "@modules/user/repository/prisma/PrismaUserRepository";
import { FirstAccess } from "@modules/user/use-cases/first-access/first-access";
import { FirstAccessController } from "@modules/user/use-cases/first-access/first-access-controller";

const userRepository = new PrismaUserRepository();
const firstAccess = new FirstAccess(userRepository);
const firstAccessController = new FirstAccessController(firstAccess);

export { firstAccessController };
