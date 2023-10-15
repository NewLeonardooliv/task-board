import { Controller } from "@core/infra/Controller";
import { HttpResponse, ok } from "@core/infra/HttpResponse";
import { ListAllProjectColumns, ListAllColumnsRequest } from "./list-all-project-columns";

export class ListAllProjectColumnsController implements Controller {
  constructor(private readonly listAllColumnsUseCase: ListAllProjectColumns) { }

  async handle({ projectId }: ListAllColumnsRequest): Promise<HttpResponse> {
    const columns = await this.listAllColumnsUseCase.execute({ projectId });

    return ok(columns);
  }
}