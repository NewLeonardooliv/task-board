import { PROFILE } from "@/constants/profile.constant";

export const roles: { [key: string]: string[] } = {
  [PROFILE.ADMIN]: ["module_rank", "home_admin", "module_kanban"],
  [PROFILE.TESTER]: ["home_testers"],
};
