import Button from '@/components/Button';
import Input from '@/components/Input';
import KanbanColumn from '@/components/Kanban/KanbanColumn';
import Modal from '@/components/Modal';
import fetchBoard from '@/service/fetch.board';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent } from 'react';

export type TaskProps = {
	id: string;
	title: string;
	description: string;
	assigneeId: string;
	columnId: string;
	createdAt: string;
	difficulty: string;
	priority: 'HIGHEST' | 'MEDIUM' | 'LOW' | 'LOWEST';
	projectId: string;
	reporterId: string;
	toReproduce: string;
	toSolve: string;
	type: string;
	updatedAt: string;
}

export type ColumnProps = {
	id: string;
	name: string;
	color: string;
	order: string;
	projectId: string;
}

export type ProjectProps = {
	id: string;
	name: string;
	coverImg: string;
	key: string;
	leaderId: string;
	createdAt: string;
}

const Kanban: React.FC = () => {

	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [draggedOverCol, setDraggedOverCol] = React.useState<string>('');

	const [tasks, setTasks] = React.useState<TaskProps[]>([]);
	const [poroject, setProject] = React.useState<ProjectProps>({} as ProjectProps);
	const [columns, setColumns] = React.useState<ColumnProps[]>([]);

	const [filteredTasks, setFilteredTasks] = React.useState<TaskProps[]>([]);
	const [searchTerm, setSearchTerm] = React.useState<string>('');

	const [newTaskTitle, setNewTaskTitle] = React.useState<string>('');
	const [newTaskDescription, setNewTaskDescription] = React.useState('');
	const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = React.useState(false);

	const [formData, setFormData] = React.useState({
		title: '',
		description: '',
		difficulty: '',
		priority: '',
		toReproduce: '',
		toSolve: '',
		type: '',
	});

	const router = useRouter();
	React.useEffect(() => {
		const project = async () => {
			if (router.query && router.query.idProject) {
				const [columns, tasks, project] = await Promise.all([
					fetchBoard(`project/${router?.query?.idProject}/columns`),
					fetchBoard(`project/${router?.query?.idProject}/tasks`),
					fetchBoard(`project/${router?.query?.idProject}`),
				]);

				setProject(project);
				setColumns(columns);
				setTasks(tasks);
			}
		}

		project();
	}, [router.query, router.query.idProject]);

	React.useEffect(() => {
		setIsLoading(false);
	}, []);

	React.useEffect(() => {
		const getFilteredData = () => {
			let filteredData = tasks;

			if (searchTerm) {
				filteredData = tasks.filter((item: { title: string; }) =>
					item.title.toLowerCase().includes(searchTerm.toLowerCase())
				);
			}

			setFilteredTasks(filteredData);
		}

		getFilteredData();
	}, [tasks, searchTerm]);

	const handleOnDragEnter = (e: React.DragEvent<HTMLDivElement>, stageValue: string) => {
		setDraggedOverCol(stageValue);
	};

	const handleOnDragEnd = async (e: React.DragEvent<HTMLDivElement>, task: TaskProps) => {
		const updatedTask = [...tasks];
		const updatedProject = updatedTask.find((t) => t.id === task.id);
		if (updatedProject) {
			await fetchBoard(`tasks/${task.id}/change-column/${draggedOverCol}`, 'PATCH');
			updatedProject.columnId = draggedOverCol;
			setTasks(updatedTask);
		}
	};

	const handleCreateTask = () => {
		const newTask: TaskProps = {
			id: "",
			title: "",
			description: "",
			assigneeId: "",
			columnId: "",
			createdAt: "",
			difficulty: "",
			priority: "HIGHEST",
			projectId: "",
			reporterId: "",
			toReproduce: "",
			toSolve: "",
			type: "",
			updatedAt: "",
		};

		tasks.push(newTask)

		setNewTaskTitle('');
		setNewTaskDescription('');
		setIsCreateTaskFormOpen(false);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};
	const onClose = () => {

	}

	const onSubmit = (a: any) => {

	}

	return (
		<div className='flex flex-col gap-4'>
			<Modal title='Nova Tarefa' onClose={() => setIsCreateTaskFormOpen(false)} isOpen={isCreateTaskFormOpen}>
				<div className="mb-4 p-4 rounded">
					<Input
						type="text"
						name="title"
						placeholder="Título da Tarefa"
						value={formData.title}
						onChange={handleChange}
					/>
					<Input
						type="text"
						name="description"
						placeholder="Descrição da Tarefa"
						value={formData.description}
						onChange={handleChange}
					/>
					<Input
						type="text"
						name="description"
						placeholder="Descrição da Tarefa"
						value={formData.description}
						onChange={handleChange}
					/>
					<Input
						type="text"
						name="description"
						placeholder="Descrição da Tarefa"
						value={formData.description}
						onChange={handleChange}
					/>
					<Input
						type="text"
						name="description"
						placeholder="Descrição da Tarefa"
						value={formData.description}
						onChange={handleChange}
					/>
					<Input
						type="text"
						name="description"
						placeholder="Descrição da Tarefa"
						value={formData.description}
						onChange={handleChange}
					/>
					<Input
						type="text"
						name="description"
						placeholder="Descrição da Tarefa"
						value={formData.description}
						onChange={handleChange}
					/>
					<div className="flex justify-between mt-6">
						<Button type="default" className="btn-primary">Criar Tarefa</Button>
						<Button type="default" className="btn-secondary" onClick={() => setIsCreateTaskFormOpen(false)}>
							Cancelar
						</Button>
					</div>
				</div>
			</Modal>
			<h1 className="text-3xl font-bold mb-4 text-foreground">Tarefas {poroject.name}</h1>
			<div className='flex justify-between py-4 h-full'>
				<Input
					type="text"
					placeholder="Pesquisar por nome..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					prefixIcon={{ iconName: 'faSearch' }}
				/>
				<Button
					type='outlined'
					color='accent'
					onClick={() => setIsCreateTaskFormOpen(true)}
					prefixIcon={{ iconName: 'faPlus' }}
				>
					Adicionar Tarefa
				</Button>
			</div>
			<div className="flex justify-between gap-4 h-full">
				{isLoading ? (
					<h3 className='text-foreground'>Loading...</h3>
				) : (
					columns.map((column: ColumnProps, index) => (
						<KanbanColumn
							key={index}
							color={column.color}
							name={column.name}
							stage={column.id}
							tasks={filteredTasks.filter((task) => task.columnId === column.id)}
							onDragEnter={handleOnDragEnter}
							onDragEnd={handleOnDragEnd}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Kanban;
