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
		leaderId: "b2ec3604-b420-4aaa-a6c0-270182867447",
		coverImg: "asds",
		image: {}
	};

	const [formData, setFormData] = useState(cleanForm);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const task = await fetchBoard(`project`, 'POST', formData);
		setProjects([...projects, formData]);

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
