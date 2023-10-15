import { adapterMiddleware } from '@core/infra/adapters/ExpressMiddlewareAdapter';
import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { createProjectController } from '@infra/factories/controllers/create-project-controller-factory';
import { listAllProjectColumnsController } from '@infra/factories/controllers/list-all-project-columns-controller-factory ';
import { listProjectsController } from '@infra/factories/controllers/list-projects-controller-factory ';
import { accessTokenMiddleware } from '@infra/factories/middlewares/AccessTokenMiddlewareFactory';
import { Router } from 'express';

const project = Router();

project.use(adapterMiddleware(accessTokenMiddleware))
project.post('/', adapterRoute(createProjectController));
project.get('/', adapterRoute(listProjectsController));
project.get('/columns/:projectId', adapterRoute(listAllProjectColumnsController));

export { project };