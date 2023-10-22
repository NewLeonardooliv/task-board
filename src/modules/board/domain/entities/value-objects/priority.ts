import { InvalidTypeError } from "./errors/InvalidTypeError";

export const validPriorityTypes = [
  'HIGHEST',
  'MEDIUM',
  'LOW',
  'LOWEST',
] as const;

export type PriorityTypes = typeof validPriorityTypes[number];

export class Priority {
  private readonly priority: PriorityTypes

  get value(): PriorityTypes {
    return this.priority
  }

  constructor(priority: PriorityTypes) {
    this.priority = priority
  }

  static validate(priority: PriorityTypes): boolean {
    if (!validPriorityTypes.includes(priority)) {
      return false
    }

    return true
  }

  static create(priority: PriorityTypes) {
    if (!this.validate(priority)) {
      throw new InvalidTypeError();
    }

    return new Priority(priority)
  }
}