import React from "react";
import Input from "../Input";
import SelectInput from "../SelectInput";
import Textarea from "../Textarea";
import Button from "../Button";
import fetchBoard from "@/service/fetch.board";

import { TaskProps } from "@/pages/projects/[idProject]/board";

type CreateTaskProps = {
	tasks: TaskProps[];
	setTasks: any;
	projectId: string | string[] | undefined;
	setOpen: any;
}

const CreateTaskForm = ({ tasks, setTasks, projectId, setOpen }: CreateTaskProps) => {
	const cleanForm = {
		title: "aaaa",
		description: "aaaaaa",
		toSolve: "aaaaaa",
		toReproduce: "aaaaaaa",
		priority: "HIGHEST",
		assigneeId: "",
		difficulty: "Hard",
		type: "Hard",
	};

	const [formData, setFormData] = React.useState(cleanForm);

	const [users, setUsers] = React.useState<any[]>([]);
	React.useEffect(() => {
		const getUsers = async () => {
			const users = await fetchBoard('user');

			setUsers(users);
		}
		getUsers();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const task = await fetchBoard(`project/${projectId}/tasks`, 'POST', formData);
		setTasks([...tasks, task]);

		setFormData(cleanForm);

		setOpen(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-3 gap-4">
					<div className="col-span-2">
						<div className="mb-4">
							<Input
								className="w-full"
								label="Título"
								placeholder="Título..."
								type="text"
								value={formData.title}
								onChange={(e) => setFormData({ ...formData, title: e.target.value })}
							/>
						</div>
						<div className="mb-4">
							<Textarea
								label="Descrição"
								placeholder="Descreva sobre a tarefa..."
								rows={4}
								value={formData.description}
								onChange={(e) => setFormData({ ...formData, description: e.target.value })}
							/>
						</div>
						<div className="mb-4">
							<Textarea
								label="Como Resolver"
								placeholder="Detalhe melhor de como resolver..."
								rows={2}
								value={formData.toSolve}
								onChange={(e) => setFormData({ ...formData, toSolve: e.target.value })}
							/>
						</div>
						<div className="mb-4">
							<Textarea
								label="Como Reproduzir"
								placeholder="Descreva deve ser reproduzido..."
								rows={2}
								value={formData.toReproduce}
								onChange={(e) => setFormData({ ...formData, toReproduce: e.target.value })}
							/>
						</div>
					</div>
					<div className="col-span-1">
						<div className="mb-4">
							<SelectInput
								label="Responsável"
								value={formData.assigneeId}
								onChange={(e) => setFormData({ ...formData, assigneeId: e.target.value })}
								options={
									users?.map((user) => ({
										label: user.name,
										value: user.id,
									}))
								}
							/>
						</div>
						<div className="mb-4">
							<SelectInput
								label="Prioridade"
								value={formData.priority}
								onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
								options={[
									{ label: 'Mais Alta', value: 'HIGHEST' },
									{ label: 'Média', value: 'MEDIUM' },
									{ label: 'Baixa', value: 'LOW' },
									{ label: 'Muito Baixa', value: 'LOWEST' }
								]}
							/>
						</div>
						<div className="mb-4">
							<SelectInput
								label="Dificuldade"
								value={formData.difficulty}
								onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
								options={
									[
										{ value: 'Easy', label: 'Fácil' },
										{ value: 'Medium', label: 'Médio' },
										{ value: 'Hard', label: 'Difícil' }
									]}
							/>
						</div>
						<div className="mb-4">
							<SelectInput
								label="Tipo"
								value={formData.type}
								onChange={(e) => setFormData({ ...formData, type: e.target.value })}
								options={[
									{ value: 'Bug', label: 'Bug' },
									{ value: 'Feature', label: 'Feature' },
									{ value: 'Task', label: 'Task' }
								]}
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<Button
						type="default"
						htmlType="submit"
					>
						Criar
					</Button>
				</div>
			</form >
		</div >
	);
};

export default CreateTaskForm;
