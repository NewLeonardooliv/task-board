import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import fetchBoard from "@/service/fetch.board";
import ImageInput from "../FileUpload";
import SelectInput from "../SelectInput";

type CreateProjectFormProps = {
	users: any;
	setUsers: any;
	setOpen: any;
}

const CreateUserForm = ({ users, setUsers, setOpen }: CreateProjectFormProps) => {
	const cleanForm = {
		email: "leonardo@email.com",
		name: "Leonardo Oliveira",
		profileId: "",
		image: {},
	};

	const [formData, setFormData] = useState(cleanForm);

	const [profiles, setProfiles] = React.useState<any[]>([]);
	React.useEffect(() => {
		const getUsers = async () => {
			const profiles = await fetchBoard('user/profiles');

			setProfiles(profiles);
		}

		getUsers();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const user = await fetchBoard(`user`, 'POST', formData, 'multipart/form-data');
		setUsers([...users, user]);

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
								label="E-mail"
								placeholder="E-mail..."
								type="text"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							/>
						</div>
					</div>
					<div className="col-span-1">
						<div className="mb-4">
							<SelectInput
								label="Perfil"
								value={formData.profileId}
								className="w-full"
								onChange={(e) => setFormData({ ...formData, profileId: e.target.value })}
								options={
									profiles?.map((profile) => ({
										value: profile.id,
										label: profile.name,
									}))
								}
							/>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<ImageInput label="Adicionar Perfil de Usuário" setFile={(e) => setFormData({ ...formData, image: e.file })} />
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
