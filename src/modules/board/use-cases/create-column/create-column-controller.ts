import { Controller } from "@core/infra/Controller";
import { CreateColumn, CreateColumnRequest } from "./create-column";
import { created } from "@core/infra/HttpResponse";

export class CreateColumnController implements Controller {
  constructor(private readonly createColumnUseCase: CreateColumn) { }

  async handle({ name, order, color, projectId }: CreateColumnRequest) {
    const column = await this.createColumnUseCase.execute({ name, order, color, projectId });

    return created({
      id: column.id.toString(),
      name: column.name,
      color: column.color,
      order: column.order,
      projectId: column.projectId.toString(),
    });
  }
}