import bcrypt from 'bcrypt';
import { InvalidPasswordError } from "./errors/InvalidPasswordError";

export class Password {
  constructor(public value: string, private readonly hashed?: boolean) {
    this.value = value;
  }
  static isValid(password: string): boolean {
    if (!password || password.trim().length < 8) {
      return false;
    }
    return true;
  }

  static async create(password: string) {
    if (!this.isValid(password)) {
      throw new InvalidPasswordError();
    }

    return new Password(password);
  }

  public async comparePassword(plainTextPassword: string): Promise<boolean> {
		return await bcrypt.compare(plainTextPassword, this.value);
	}

  public async getHashedValue(): Promise<string> {
    if (this.hashed) {
      return this.value
    }

    return await bcrypt.hash(this.value, 8)
  }
}