import { ProjectRepository } from "../../repositories/project-repository";

export type getProjectRequest = {
  projectId: string;
  user: {
    userId: string;
    profileId: string;
  };
}
export class GetProject {
  constructor(private projectRepository: ProjectRepository) { }

  async execute({ projectId, user }: getProjectRequest) {
    const project = await this.projectRepository.find(projectId);

    if (typeof project === 'boolean') {
      return;
    }

    return {
      id: project.id.toString(),
      name: project.props.name,
      coverImg: project.props.coverImg,
      key: project.props.key.value,
      leaderId: project.props.leaderId.toString(),
      createdAt: project.props.createdAt
    }
  }
}