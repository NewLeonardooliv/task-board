import { Controller } from "@core/infra/Controller";
import { CreateProject, CreateProjectUseCaseRequest } from "./create-project";
import { HttpResponse, created, fail } from "@core/infra/HttpResponse";

export class CreateProjectController implements Controller {
  constructor(private readonly createProjectUseCase: CreateProject) {}

  async handle(
    { name, key, leaderId }: CreateProjectUseCaseRequest,
    file: any
  ): Promise<HttpResponse> {
    try {
      const project = await this.createProjectUseCase.execute({
        name,
        key,
        leaderId,
        coverImg: file?.filename,
      });

      return created({
        id: project.id.toString(),
        name: project.name,
        key: project.key,
        leaderId: project.leaderId,
        coverImg: project.coverImg,
      });
    } catch (error) {
      return fail(error);
    }
  }
}
