import { PrismaProfileRepository } from "@modules/user/repository/prisma/PrismaProfileRepository";
import { ListProfiles } from "@modules/user/use-cases/list-profiles/list-profiles";
import { ListProfilesController } from "@modules/user/use-cases/list-profiles/list-profiles-controller";

const profileRepository = new PrismaProfileRepository();
const listProfilesUseCase = new ListProfiles(profileRepository);
const listProfilesController = new ListProfilesController(listProfilesUseCase);

export { listProfilesController };