import { UPLOAD_URL } from "@/constants/uploadurl.constant";
import Image from "next/image";
import React from "react";
import Icon from "./Icon";

type UserCardProps = {
	name: string;
	profilePic: string;
}

const UserCard = (user: UserCardProps) => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleEditClick = () => {
		// Lógica para ação de edição
	};

	const handleDeleteClick = () => {
		// Lógica para ação de exclusão
	};

	return (
		<div className="flex flex-col relative bg-current rounded-lg shadow-lg w-52 h-52 items-center justify-center transition-all hover:opacity-90">
			<div className="flex flex-col items-center">
				<Image
					width={1000}
					height={1000}
					src={UPLOAD_URL + user.profilePic}
					alt={user.name}
					className="w-24 h-24 rounded-2xl object-cover"
				/>
				<h3 className="text-lg text-foreground font-semibold text-center mt-2">{user.name}</h3>
			</div>
			<div onClick={toggleMenu} className="absolute top-1 cursor-pointer right-1 hover:bg-foreground/10 rounded-full w-10 h-10 flex justify-center transition-all">
				<button >
					<Icon iconName={'faEllipsisV'} className="text-foreground text-lg" />
				</button>
				{isMenuOpen && (
					<div className="absolute top-10 right-0 bg-current border border-foreground/25 rounded-lg shadow-lg py-2 px-4">
						<ul>
							<li>
								<button
									onClick={handleEditClick}
									className="block w-full text-left py-2 text-foreground hover:text-foreground/80 cursor-pointer"
								>
									Editar
								</button>
							</li>
							<li>
								<button
									onClick={handleDeleteClick}
									className="block w-full text-left py-2 text-foreground hover:text-foreground/80 cursor-pointer"
								>
									Excluir
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserCard;
