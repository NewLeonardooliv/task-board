import { PrismaProjectRepository } from "@modules/board/repositories/prisma/PrismaProjectRepository";
import { CreateProject } from "@modules/board/use-cases/create-project/create-project";
import { CreateProjectController } from "@modules/board/use-cases/create-project/create-project-controller";
import { PrismaUserRepository } from "@modules/user/repository/prisma/PrismaUserRepository";

const userRepository = new PrismaUserRepository();
const projectRepository = new PrismaProjectRepository();
const createProject = new CreateProject(projectRepository, userRepository);
const createProjectController = new CreateProjectController(createProject);

export { createProjectController };