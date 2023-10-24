import { TaskRepository } from "@modules/board/repositories/task-repository";
import { UserRepository } from "@modules/user/repository/user-repository";

type ListAllTasksProjectRequest = {
  projectId: string;
}

export class ListProjectTasks {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly userRepository: UserRepository
  ) { }

  async execute({ projectId }: ListAllTasksProjectRequest) {
    const tasks = await this.taskRepository.listByProject(projectId);

    const tasksWithAssigneesAndReporter = await Promise.all(tasks.map(async (task) => {
      const assignee = await this.userRepository.find(task.assigneeId.toString());
      const reporter = await this.userRepository.find(task.reporterId.toString());

      const {
        id,
        title,
        description,
        toSolve,
        toReproduce,
        priority,
        reporterId,
        assigneeId,
        columnId,
        difficulty,
        type,
        projectId,
        createdAt,
        updatedAt,
      } = task;

      const assigneeData = {
        id: assignee.id.toString(),
        name: assignee.name,
        profileId: assignee.profileId,
        email: assignee.email,
        profilePic: assignee.profilePic
      };

      const reporterData = {
        id: reporter.id.toString(),
        name: reporter.name,
        profileId: reporter.profileId,
        email: reporter.email,
        profilePic: reporter.profilePic
      };

      return {
        id: id.toString(),
        title,
        description,
        toSolve,
        toReproduce,
        priority: priority.value,
        reporterId: reporterId.toString(),
        assigneeId: assigneeId.toString(),
        columnId: columnId.toString(),
        difficulty,
        type,
        projectId: projectId.toString(),
        createdAt,
        updatedAt,
        assignee: assigneeData,
        reporter: reporterData,
      };
    }));

    return tasksWithAssigneesAndReporter;
  }
}
