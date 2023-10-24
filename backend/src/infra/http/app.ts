import express from 'express';
import cors from 'cors';

import { router } from './routes';

require('dotenv/config');

const app = express();

app.use('/uploads', express.static('tmp'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', router);

export { app };