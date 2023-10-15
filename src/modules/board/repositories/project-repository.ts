import { Project } from "../domain/entities/project";

export interface ProjectRepository {
  create(project: Project): Promise<void>;
  list(): Promise<Project[]>;
  find(projectId: string): Promise<Project | boolean>;
}