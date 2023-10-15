import { Profiles } from "@constants/profiles";
import { ProjectRepository } from "../../repositories/project-repository";
import { Project } from "@modules/board/domain/entities/project";

export type ListProjectsRequest = {
  user: {
    userId: string;
    profileId: string;
  };
}
export class ListProjects {
  constructor(private projectRepository: ProjectRepository) { }

  async execute({ user }: ListProjectsRequest) {
    const projects = await this.getListProjects({ user });

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

  private async getListProjects({ user }: ListProjectsRequest): Promise<Project[]> {
    if (user.profileId == Profiles.ADMIN) {
      return await this.projectRepository.list();
    }

    return await this.projectRepository.listUserProjects(user.userId);
  }
}