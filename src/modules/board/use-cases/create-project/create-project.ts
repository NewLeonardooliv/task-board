import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Project } from "../../domain/entities/project";
import { ProjectRepository } from "../../repositories/project-repository";
import { Key } from "@modules/board/domain/entities/value-objects/key";

export type CreateProjectUseCaseRequest = {
  name: string;
  key: string;
  leaderId: string;
  coverImg?: string;
}

export class CreateProject {
  constructor(private projectRepository: ProjectRepository) { }

  async execute({ name, key, leaderId, coverImg }: CreateProjectUseCaseRequest): Promise<Project> {
    const project = Project.create({
      name,
      key: Key.create(key),
      leaderId: new UniqueEntityId(leaderId).toString(),
      coverImg: coverImg
    });

    await this.projectRepository.create(project);

    return project;
  }
}