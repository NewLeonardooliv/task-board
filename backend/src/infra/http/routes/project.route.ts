import multer from 'multer';

import { adapterMiddleware } from '@core/infra/adapters/ExpressMiddlewareAdapter';
import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { changeTaskColumnController } from '@infra/factories/controllers/change-task-column-controller-factory';
import { createColumnController } from '@infra/factories/controllers/create-column-controller-factory ';
import { createProjectController } from '@infra/factories/controllers/create-project-controller-factory';
import { createTaskController } from '@infra/factories/controllers/create-task-controller-factory';
import { getProjectController } from '@infra/factories/controllers/get-project-controller-factory';
import { listAllProjectColumnsController } from '@infra/factories/controllers/list-all-project-columns-controller-factory ';
import { listProjectTasksController } from '@infra/factories/controllers/list-project-tasks-controller-factory';
import { listProjectsController } from '@infra/factories/controllers/list-projects-controller-factory ';
import { accessTokenMiddleware } from '@infra/factories/middlewares/AccessTokenMiddlewareFactory';
import { Router } from 'express';
import { config } from "@config/upload";

const project = Router();
const upload = multer(config);

project.use(adapterMiddleware(accessTokenMiddleware));
project.post('/', upload.single('image'), adapterRoute(createProjectController));
project.get('/', adapterRoute(listProjectsController));
project.get('/:projectId', adapterRoute(getProjectController));

project.get('/:projectId/columns', adapterRoute(listAllProjectColumnsController));
project.post('/:projectId/columns', adapterRoute(createColumnController));

project.get('/:projectId/tasks', adapterRoute(listProjectTasksController));
project.post('/:projectId/tasks', adapterRoute(createTaskController));
project.patch('/:projectId/tasks/:taskId/change-column/:columnId', adapterRoute(changeTaskColumnController));

export { project };