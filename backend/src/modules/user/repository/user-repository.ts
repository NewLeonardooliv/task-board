import { User } from "../domain/user";

export interface UserRepository {
  findByEmail(email: string): Promise<User>;
  list(): Promise<User[]>;
  create(user: User): Promise<void>;
  save(user: User): Promise<void>;
  find(id: string): Promise<User>;
}
