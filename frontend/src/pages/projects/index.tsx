import React, { ChangeEvent, FormEvent } from 'react';
import fetchBoard from "@/service/fetch.board";
import ProjectCard from '@/components/ProjectCard';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import CreateProjectForm from '@/components/Forms/CreateProject';

const Projects: React.FC = () => {
	const [projects, setProjects] = React.useState<any[]>([]);
	const [searchTerm, setSearchTerm] = React.useState<string>('');

	const [isCreateProjectFormOpen, setIsCreateProjectFormOpen] = React.useState(false);

	React.useEffect(() => {
		const project = async () => {
			const projects = await fetchBoard('project');

			setProjects(projects);
		}

		project();
	}, []);
	return (
		<>
			<Modal title='Projetos' description='Adicionar Projeto' onClose={() => setIsCreateProjectFormOpen(false)} isOpen={isCreateProjectFormOpen}>
				<CreateProjectForm projects={projects} setProjects={setProjects} setOpen={setIsCreateProjectFormOpen} />
			</Modal>
			<div className='flex flex-col gap-4'>
				<h1 className="text-3xl font-bold mb-4 text-foreground">Projetos</h1>
				<div className='flex justify-between py-4 h-full'>
					<Input
						type="text"
						placeholder="Pesquisar por nome..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						prefixIcon={{ iconName: 'faSearch' }}
					/>
					<Button
						type="outlined"
						color="accent"
						onClick={() => setIsCreateProjectFormOpen(true)}
						prefixIcon={{ iconName: 'faPlus' }}
					>
						Adicionar Projeto
					</Button>
				</div>
				<div className='flex gap-10 flex-wrap'>
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</>
	)
}

export default Projects;
