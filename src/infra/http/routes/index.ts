import { Router } from "express";
import { project } from "./project.route";
import { user } from './user.route';
import { task } from "./task.route";

const router = Router();

router.use('/user', user);
router.use('/project', project);
router.use('/tasks', task);

export { router };