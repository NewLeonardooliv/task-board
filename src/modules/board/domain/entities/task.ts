import { Entity } from "@core/entities/entity";
import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Optional } from "@core/types/optional";

export const priorityTypes = [
  'HIGHEST',
  'MEDIUM',
  'LOW',
  'LOWEST',
] as const;

export type PriorityTypes = typeof priorityTypes[number];

export type TaskProps = {
  title: string;
  description: string;
  toSolve: string;
  toReproduce: string;
  priority: PriorityTypes;
  reporter: string;
  assigneeId: string;
  difficulty: string;
  type: string;
  projectId: UniqueEntityId;
  createdAt: Date;
  updatedAt?: Date;
}

export class Task extends Entity<TaskProps>{
  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get toSolve() {
    return this.props.toSolve;
  }

  get toReproduce() {
    return this.props.toReproduce;
  }

  get priority() {
    return this.props.priority;
  }

  get reporter() {
    return this.props.reporter;
  }

  get assigneeId() {
    return this.props.assigneeId;
  }

  get difficulty() {
    return this.props.difficulty;
  }

  get type() {
    return this.props.type;
  }

  get projectId() {
    return this.props.projectId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set title(title: string) {
    this.props.title = title;
    this.touch;
  }

  set description(description: string) {
    this.props.description = description;
    this.touch;
  }

  set toSolve(toSolve: string) {
    this.props.title = toSolve;
    this.touch;
  }

  set toReproduce(toReproduce: string) {
    this.props.description = toReproduce;
    this.touch;
  }

  set priority(priority: string) {
    this.props.description = priority;
    this.touch;
  }

  static create(props: Optional<TaskProps, 'createdAt'>, id?: UniqueEntityId): Task {
    const task = new Task({
      ...props,
      createdAt: new Date(),
    }, id);

    return task;
  }
}