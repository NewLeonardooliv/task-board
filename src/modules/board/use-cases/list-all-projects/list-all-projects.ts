import { Project } from "@modules/board/domain/entities/project";
import { ProjectRepository } from "../../repositories/project-repository";

export class ListAllProjects {
  constructor(private projectRepository: ProjectRepository) { }

  async execute(): Promise<Project[]> {
    const projects = this.projectRepository.list();

    return projects;
  }
}