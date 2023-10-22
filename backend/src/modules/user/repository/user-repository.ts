import { User } from "../domain/user";

export interface UserRepository {
  findByEmail(email: string): Promise<User | boolean>;
  list(): Promise<User[]>;
  create(user: User): Promise<void>;
  find(id: string): Promise<User | boolean>;
}