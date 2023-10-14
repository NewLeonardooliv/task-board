import { hash } from "bcrypt";
import { InvalidPasswordError } from "./errors/InvalidPasswordError";

export class Password {
  constructor(public value: string) {
    this.value = value;
  }
  static isValid(password: string): boolean {
    console.log(password);
    if (!password || password.trim().length < 8) {
      return false;
    }
    return true;
  }

  static async create(password: string) {
    if (!this.isValid(password)) {
      throw new InvalidPasswordError();
    }

    const passwordHashed = await hash(password, 8);

    return new Password(passwordHashed);
  }

}