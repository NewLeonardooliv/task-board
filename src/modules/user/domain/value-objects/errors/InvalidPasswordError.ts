import { DomainError } from "@core/errors/DomainError"

export class InvalidPasswordError extends Error implements DomainError {
  constructor() {
    super(`Invalid password, in order to be valid, it must contain more than 8 digits.`);
    this.name = 'InvalidPasswordError'
  }
}