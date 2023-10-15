import { Controller } from '@core/infra/Controller';
import { fail, ok } from '@core/infra/HttpResponse';
import { AuthenticateUser } from './authenticate-user';

export class AuthenticateUserController implements Controller {
	constructor(private authenticateUserUseCase: AuthenticateUser) { }

	async handle({ email, password }: any) {
		try {
			const token = await this.authenticateUserUseCase.execute({ email, password });
			return ok(token);
		} catch (error) {
			return fail(error);
		}
	}
}