import cors from 'cors';
import { Router } from "express";
import { project } from "./project.route";
import { user } from './user.route';

const router = Router();

router.use('/user', user);
router.use('/project', project);

export { router };