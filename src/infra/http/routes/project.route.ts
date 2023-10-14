import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { createProjectController } from '@infra/factories/controllers/create-project-controller-factory';
import { Router } from 'express';

const project = Router();

project.post('/', adapterRoute(createProjectController));

export { project };