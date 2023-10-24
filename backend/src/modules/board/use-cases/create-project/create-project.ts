import { UniqueEntityId } from "@core/entities/unique-entity-id";
import { Project } from "../../domain/entities/project";
import { ProjectRepository } from "../../repositories/project-repository";
import { Key } from "@modules/board/domain/entities/value-objects/key";
import { UserRepository } from "@modules/user/repository/user-repository";

export type CreateProjectUseCaseRequest = {
  name: string;
  key: string;
  leaderId: string;
  coverImg?: string;
};

export class CreateProject {
  constructor(
    private projectRepository: ProjectRepository,
    private readonly userRepository: UserRepository
  ) {}

  async execute({
    name,
    key,
    leaderId,
    coverImg,
  }: CreateProjectUseCaseRequest): Promise<Project> {
    const leader = await this.userRepository.find(leaderId);

    if (!leader) {
      throw new Error("Leader not found");
    }

    const project = Project.create({
      name,
      key: Key.create(key),
      leaderId: new UniqueEntityId(leaderId),
      coverImg: coverImg,
    });

    await this.projectRepository.create(project);

    return project;
  }
}
