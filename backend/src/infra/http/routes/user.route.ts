import multer from "multer";

import { adapterRoute } from "@core/infra/adapters/ExpressRouteAdapter";
import { authenticateUserController } from "@infra/factories/controllers/authenticate-user-controller-factory";
import { listUsersController } from "@infra/factories/controllers/list-users-controller-factory ";
import { registerUserController } from "@infra/factories/controllers/register-user-controller-factory ";
import { Router } from "express";
import { config } from "@config/upload";
import { firstAccessController } from "@infra/factories/controllers/first-access-controller-factory";

const user = Router();
const upload = multer(config);

user.post("/", upload.single("image"), adapterRoute(registerUserController));
user.post("/signin", adapterRoute(authenticateUserController));
user.get("/", adapterRoute(listUsersController));
user.post("/firstAccess", adapterRoute(firstAccessController));

export { user };
