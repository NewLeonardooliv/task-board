import { PrismaUserRepository } from "@modules/user/repository/prisma/PrismaUserRepository";
import { RegisterUser } from "@modules/user/use-cases/register-user/register-user";
import { RegisterUserController } from "@modules/user/use-cases/register-user/register-user-controller";


const userRepository = new PrismaUserRepository();
const registerUser = new RegisterUser(userRepository);
const registerUserController = new RegisterUserController(registerUser);

export { registerUserController };