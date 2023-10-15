import { User } from "../domain/user";

export interface UserRepository {
  findByEmail(email: string): Promise<User | boolean>;
  create(user: User): Promise<void>;
  find(id: string): Promise<User | boolean>;
}