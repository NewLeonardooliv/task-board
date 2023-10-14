import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { registerUserController } from '@infra/factories/controllers/register-user-controller-factory ';
import { Router } from 'express';

const user = Router();

user.post('/', adapterRoute(registerUserController));

export { user };