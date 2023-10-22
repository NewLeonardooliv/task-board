import { PrismaProjectRepository } from "@modules/board/repositories/prisma/PrismaProjectRepository";
import { CreateProject } from "@modules/board/use-cases/create-project/create-project";
import { CreateProjectController } from "@modules/board/use-cases/create-project/create-project-controller";

const projectRepository = new PrismaProjectRepository();
const createProject = new CreateProject(projectRepository);
const createProjectController = new CreateProjectController(createProject);

export { createProjectController };