import { prisma } from "@infra/prisma/client";
import { ProjectRepository } from "../project-repository";
import { Project } from "@modules/board/domain/entities/project";
import { ProjectMapper } from "@modules/board/mapper/project-mapper";

export class PrismaProjectRepository implements ProjectRepository {
  async create(project: Project): Promise<void> {
    await prisma.project.create({
      data: {
        id: project.id.toString(),
        name: project.name,
        cover_img: project.coverImg,
        key: project.key.value,
        leader_id: project.leaderId.toString(),
      }
    });

    await prisma.projectUsers.create({
      data: {
        project_id: project.id.toString(),
        user_id: project.leaderId.toString(),
      }
    })
  }

  async list(): Promise<Project[]> {
    const projects = await prisma.project.findMany({
      orderBy: {
        created_at: 'asc',
      },
    });

    return projects.map((project) => ProjectMapper.toDomain(project));
  }

  async find(projectId: string): Promise<Project | boolean> {
    const project = await prisma.project.findFirst({
      where: {
        id: projectId
      }
    });

    if (!project) return false;

    return ProjectMapper.toDomain(project);
  }
}