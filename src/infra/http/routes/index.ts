import { Router } from "express";
import { project } from "./project.route";
import { user } from './user.route';
import { column } from './column.route';

const router = Router();

router.use('/user', user);
router.use('/project', project);
router.use('/column', column);

export { router };