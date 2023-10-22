import Link from "next/link";
import React from "react";

import Icon, { IconName } from "../Icon";

type SidebarMenu = {
	link: string;
	title: string;
	isActive: boolean
	icon: IconName;
	onClick?: () => void;
}

const SidebarMenu: React.FC<SidebarMenu> = ({ link, title, icon, isActive, ...props }) => {
	const activeClass = isActive ? 'bg-current' : '';

	return (
		<Link href={link}>
			<li {...props} className={`pl-4 py-2 m-1 text-foreground transition-all hover:bg-current rounded-lg ${activeClass}`}>
				<Icon iconName={icon} />
				<span className='ml-3'>{title}</span>
			</li>
		</Link>
	)
}

export default SidebarMenu;