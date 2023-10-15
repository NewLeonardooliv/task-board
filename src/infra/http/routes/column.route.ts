import { adapterRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import { createColumnController } from '@infra/factories/controllers/create-column-controller-factory ';
import { listAllColumnsController } from '@infra/factories/controllers/list-all-columns-controller-factory ';
import { Router } from 'express';

const column = Router();

column.post('/', adapterRoute(createColumnController));
column.get('/', adapterRoute(listAllColumnsController));

export { column };