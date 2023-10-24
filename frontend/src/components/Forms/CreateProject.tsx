import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import fetchBoard from "@/service/fetch.board";
import { TaskProps } from "@/pages/projects/[idProject]/board";
import ImageInput from "../FileUpload";

type CreateProjectFormProps = {
	projects: TaskProps[];
	setProjects: any;
	setOpen: any;
}

const CreateProjectForm = ({ projects, setProjects, setOpen }: CreateProjectFormProps) => {
	const cleanForm = {
		name: "Projecto Criado",
		key: "PROJN",
		leaderId: "81323fe3-71db-43b9-8f6c-9bf51b3bc10f",
		image: {}
	};

	const [formData, setFormData] = useState(cleanForm);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const task = await fetchBoard(`project`, 'POST', formData, 'multipart/form-data');
		setProjects([...projects, task]);

		setFormData(cleanForm);
		setOpen(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<Input
						className="w-full"
						label="Título"
						placeholder="Título..."
						type="text"
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
				</div>
				<div className="mb-4">
					<Input
						label="Chave"
						className="w-full"
						placeholder="Chave do projeto..."
						value={formData.key}
						onChange={(e) => setFormData({ ...formData, key: e.target.value })}
					/>
				</div>
				<div className="mb-4">
					<Input
						label="Lider do projeto"
						className="w-full"
						placeholder="Lider do projeto..."
						value={formData.leaderId}
						onChange={(e) => setFormData({ ...formData, leaderId: e.target.value })}
					/>
				</div>
				<div className="mb-4">
					<ImageInput label="Adicionar Capa" setFile={(e) => setFormData({ ...formData, image: e.file })} />
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

export default CreateProjectForm;
