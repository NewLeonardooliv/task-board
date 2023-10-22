import Image from "next/image";
import React from "react";

type UserCardProps = {
	name: string;
	photoUrl: string;
}

const UserCard = (user: UserCardProps) => {
	return (
		<div className="flex flex-col bg-current rounded-lg shadow-lg w-52 h-52 items-center justify-center cursor-pointer transition-all hover:opacity-90">
			<Image
				src={user.photoUrl}
				alt={user.name}
				className="w-16 h-16 rounded-md mx-auto"
			/>
			<h3 className="text-lg text-foreground font-semibold text-center mt-2">{user.name}</h3>
		</div>
	);
};

export default UserCard;
