import { prisma } from "@infra/prisma/client";
import { ProjectRepository } from "../project-repository";
import { Project } from "@modules/board/domain/entities/project";

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
    })
  }
  list(): Promise<Project[]> {
    throw new Error("Method not implemented.");
  }
}