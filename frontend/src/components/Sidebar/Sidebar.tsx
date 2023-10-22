import React from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarTitle from './SidebarTitle';
import ProtectedRoute from '../ProtectedRoute';

import { useRouter } from 'next/router';
import { PATHNAMES } from '@/constants/pathnames.constant';
import { IconName } from '../Icon';
import { useAuth } from '@/hooks/useAuth';

type SidebarProps = {
	children: React.ReactNode;
};

type ModulesProps = {
	link: string;
	title: string;
	icon: IconName;
};

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const router = useRouter();
	const { logout } = useAuth();

	const handleLogout = () => {
		logout();
		router.push(PATHNAMES.SIGNIN);
	};

	const TeamModules: ModulesProps[] = [
		{
			link: PATHNAMES.USERS,
			title: 'Usuários',
			icon: 'faUserFriends',
		},
	];

	const TaksModules: ModulesProps[] = [
		{
			link: PATHNAMES.PROJECTS,
			title: 'Projetos',
			icon: 'faTasksAlt',
		},
		{
			link: PATHNAMES.RELATORIO,
			title: 'Relatório',
			icon: 'faChartLine',
		}
	];

	return (
		<div className="flex ">
			<div className="w-full lg:w-[14%] bg-dracula-current lg:h-screen p-4 border-r border-divider">
				<ul className="py-4">
					<SidebarMenu icon="faHouse" link={PATHNAMES.HOME} title='Home' isActive={router.pathname === '/'} />
				</ul>
				<ProtectedRoute allowedRoles={['module_rank']}>
				</ProtectedRoute>
				<SidebarTitle title='Equipe' >
					{TeamModules.map((modules) => (
						<SidebarMenu
							key={modules.link}
							link={modules.link}
							icon={modules.icon}
							title={modules.title}
							isActive={router.pathname === modules.link}
						/>
					))}
				</SidebarTitle>
				<SidebarTitle title='Tarefas' >
					{TaksModules.map((modules) => (
						<SidebarMenu
							key={modules.link}
							link={modules.link}
							icon={modules.icon}
							title={modules.title}
							isActive={router.pathname === modules.link}
						/>
					))}
				</SidebarTitle>
				<SidebarTitle title=''>
					<SidebarMenu
						link={PATHNAMES.SIGNIN}
						title='Sair'
						isActive={false}
						onClick={handleLogout}
						icon='faPowerOff'
					/>
				</SidebarTitle>
			</div>
			<div className="flex-1 p-6">
				{children}
			</div>
		</div>
	);
};

export default Sidebar;
