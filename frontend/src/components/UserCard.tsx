import { UPLOAD_URL } from "@/constants/uploadurl.constant";
import Image from "next/image";
import React from "react";

type UserCardProps = {
	name: string;
	profilePic: string;
}

const UserCard = (user: UserCardProps) => {
	return (
		<div className="flex flex-col bg-current rounded-lg shadow-lg w-52 h-52 items-center justify-center cursor-pointer transition-all hover:opacity-90">
			<Image
				width={100}
				height={100}
				src={UPLOAD_URL + user.profilePic}
				alt={user.name}
				className="w-22 h-22 rounded-lg"
			/>
			<h3 className="text-lg text-foreground font-semibold text-center mt-2">{user.name}</h3>
		</div>
	);
};

export default UserCard;
