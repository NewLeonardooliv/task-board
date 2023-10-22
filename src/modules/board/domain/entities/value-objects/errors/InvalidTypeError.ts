import { DomainError } from "@core/errors/DomainError"

export class InvalidTypeError extends Error implements DomainError {
  constructor() {
    super(
      `The priority type must be one of highest, medium, low or lowest.`
    )

    this.name = 'InvalidTypeError'
  }
}
