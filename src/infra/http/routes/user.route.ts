import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { authenticateUserController } from '@infra/factories/controllers/authenticate-user-controller-factory';
import { listUsersController } from '@infra/factories/controllers/list-users-controller-factory ';
import { registerUserController } from '@infra/factories/controllers/register-user-controller-factory ';
import { Router } from 'express';

const user = Router();

user.post('/', adapterRoute(registerUserController));
user.post('/signin', adapterRoute(authenticateUserController));
user.get('/', adapterRoute(listUsersController));

export { user };