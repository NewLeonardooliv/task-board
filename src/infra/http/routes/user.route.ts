import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { authenticateUserController } from '@infra/factories/controllers/authenticate-user-controller-factory';
import { registerUserController } from '@infra/factories/controllers/register-user-controller-factory ';
import { Router } from 'express';

const user = Router();

user.post('/', adapterRoute(registerUserController));
user.post('/signin', adapterRoute(authenticateUserController));

export { user };