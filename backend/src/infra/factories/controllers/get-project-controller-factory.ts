import { PrismaProjectRepository } from "@modules/board/repositories/prisma/PrismaProjectRepository";
import { GetProject } from "@modules/board/use-cases/get-project/get-project";
import { GetProjectController } from "@modules/board/use-cases/get-project/get-project-controller";

const projectRepository = new PrismaProjectRepository();
const getProjectUseCase = new GetProject(projectRepository);
const getProjectController = new GetProjectController(getProjectUseCase);

export { getProjectController };