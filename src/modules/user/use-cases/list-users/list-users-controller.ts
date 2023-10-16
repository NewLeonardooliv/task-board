import { Controller } from "@core/infra/Controller";
import { ListUsers } from "./list-users";
import { ok } from "@core/infra/HttpResponse";

export class ListUsersController implements Controller {
  constructor(private readonly listUsers: ListUsers) { }

  async handle() {
    const users = await this.listUsers.execute();
    
    return ok(users);
  }
}