import { v4 as uuid } from 'uuid'

export class UniqueEntityId {
  private value: string;

  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  constructor(value?: string) {
    this.value = value ?? uuid();
  }
}