import Button from "@/components/Button";
import CreateUserForm from "@/components/Forms/CreateUser";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import UserCard from "@/components/UserCard";
import fetchBoard from "@/service/fetch.board";
import React from "react";

const Users: React.FC = () => {
	const [users, setUsers] = React.useState<any[]>([]);
	const [isCreateUserFormOpen, setIsCreateUserFormOpen] = React.useState(false);

	React.useEffect(() => {
		const project = async () => {
			const users = await fetchBoard('user');

			setUsers(users);
		}

		project();
	}, []);

	const [searchTerm, setSearchTerm] = React.useState<string>('');
	return (
		<>
			<Modal title='Usuários' description='Adicionar Usuário' onClose={() => setIsCreateUserFormOpen(false)} isOpen={isCreateUserFormOpen}>
				<CreateUserForm users={users} setUsers={setUsers} setOpen={setIsCreateUserFormOpen} />
			</Modal>
			<div className='flex flex-col gap-4'>
				<h1 className="text-3xl font-bold mb-4 text-foreground">Usuários</h1>
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
						onClick={() => setIsCreateUserFormOpen(true)}
						prefixIcon={{ iconName: 'faPlus' }}
					>
						Adicionar Usuário
					</Button>
				</div>
				<div className='flex gap-10 justify-between flex-wrap'>
					{users.map((user, index) => (
						<UserCard key={index} name={user.name} photoUrl={user.photoUrl} />
					))}
				</div>
			</div>
		</>
	)
}

export default Users;