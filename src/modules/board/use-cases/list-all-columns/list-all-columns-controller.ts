import { Controller } from "@core/infra/Controller";
import { ok } from "@core/infra/HttpResponse";
import { ListAllColumns, ListAllColumnsRequest } from "./list-all-columns";

export class ListAllColumnsController implements Controller {
  constructor(private readonly listAllColumnsUseCase: ListAllColumns) { }

  async handle({ projectId }: ListAllColumnsRequest) {
    const columns = await this.listAllColumnsUseCase.execute({ projectId });

    return ok(columns);
  }
}