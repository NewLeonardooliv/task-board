import { DomainError } from "@core/errors/DomainError"

export class InvalidKeyError extends Error implements DomainError {
  constructor(key: string) {
    super(`The project key "${key}" is invalid.`);
    this.name = 'InvalidKeyError'
  }
}