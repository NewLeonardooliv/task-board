import { InvalidKeyError } from "./errors/InvalidKeyError";

export class Key {
  constructor(public value: string) {
    this.value = value;
  }

  static validate(key: string): boolean {
    if (!key || key.trim().length < 2 || key.trim().length > 8) {
      return false
    }

    return true;
  }

  static create(key: string) {
    if (!this.validate(key)) {
      throw new InvalidKeyError(key);
    }

    return new Key(key);
  }
}