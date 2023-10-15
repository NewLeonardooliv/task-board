import { Project } from "@modules/board/domain/entities/project";
import { ProjectRepository } from "../../repositories/project-repository";

export class ListProjects {
  constructor(private projectRepository: ProjectRepository) { }

  async execute() {
    const projects = await this.projectRepository.list();

    const processedProjects = projects.map((column) => ({
      id: column.id.toString(),
      name: column.props.name,
      coverImg: column.props.coverImg,
      key: column.props.key.value,
      leaderId: column.props.leaderId.toString(),
      createdAt: column.props.createdAt
    }));

    return processedProjects;
  }
}