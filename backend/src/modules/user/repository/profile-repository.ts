import { Profile } from "../domain/profile";

export interface ProfileRepository {
  list(): Promise<Profile[]>;
}