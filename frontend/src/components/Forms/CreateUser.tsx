import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import fetchBoard from "@/service/fetch.board";

type CreateProjectFormProps = {
	users: any;
	setUsers: any;
	setOpen: any;
}

const CreateUserForm = ({ users, setUsers, setOpen }: CreateProjectFormProps) => {
	const cleanForm = {
		email: "leonardo@email.com",
		name: "Leonardo Oliveira",
		profileId: "52142986-2755-41e1-97a1-0eadef85fc8c"
	};

	const [formData, setFormData] = useState(cleanForm);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		await fetchBoard(`user`, 'POST', formData);
		setUsers([...users, formData]);

		setFormData(cleanForm);
		setOpen(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<Input
						label="Nome"
						className="w-full"
						placeholder="Perfil do usuário..."
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
				</div>
				<div className="mb-4">
					<Input
						className="w-full"
						label="Nome"
						placeholder="Nome..."
						type="text"
						value={formData.email}
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					/>
				</div>
				<div className="mb-4">
					<Input
						label="Perfil"
						className="w-full"
						placeholder="Perfil do usuário..."
						value={formData.profileId}
						onChange={(e) => setFormData({ ...formData, profileId: e.target.value })}
					/>
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

export default CreateUserForm;
