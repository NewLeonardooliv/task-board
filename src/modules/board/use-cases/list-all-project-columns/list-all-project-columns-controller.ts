import { Controller } from "@core/infra/Controller";
import { ok } from "@core/infra/HttpResponse";
import { ListAllProjectColumns, ListAllColumnsRequest } from "./list-all-project-columns";

export class ListAllProjectColumnsController implements Controller {
  constructor(private readonly listAllColumnsUseCase: ListAllProjectColumns) { }

  async handle({ projectId }: ListAllColumnsRequest) {
    const columns = await this.listAllColumnsUseCase.execute({ projectId });

    return ok(columns);
  }
}