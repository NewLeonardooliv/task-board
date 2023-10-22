import { PrismaProjectRepository } from "@modules/board/repositories/prisma/PrismaProjectRepository";
import { ListProjects } from "@modules/board/use-cases/list-projects/list-projects";
import { ListProjectsController } from "@modules/board/use-cases/list-projects/list-projects-controller";

const projectRepository = new PrismaProjectRepository();
const listProjects = new ListProjects(projectRepository);
const listProjectsController = new ListProjectsController(listProjects);

export { listProjectsController };