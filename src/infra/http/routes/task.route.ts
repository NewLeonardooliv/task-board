import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { changeTaskColumnController } from '@infra/factories/controllers/change-task-column-controller-factory';
import { Router } from 'express';

const task = Router();

task.patch('/:taskId/change-column/:columnId', adapterRoute(changeTaskColumnController));

export { task };