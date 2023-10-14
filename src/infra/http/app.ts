require('dotenv/config');
import { router } from './routes';

import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/api', router);

export { app };