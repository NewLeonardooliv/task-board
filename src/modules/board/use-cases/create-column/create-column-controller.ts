import { Controller } from "@core/infra/Controller";
import { CreateColumn, CreateColumnRequest } from "./create-column";
import { ok } from "@core/infra/HttpResponse";

export class CreateColumnController implements Controller {
  constructor(private readonly createColumnUseCase: CreateColumn) { }

  async handle({ name, order, color, projectId }: CreateColumnRequest) {
    await this.createColumnUseCase.execute({ name, order, color, projectId });

    return ok();
  }
}