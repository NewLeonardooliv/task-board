import { PATHNAMES } from '@/constants/pathnames.constant';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import React from 'react';
import Icon from './Icon';

const LogoutButton: React.FC = () => {
	const { logout } = useAuth();
	const router = useRouter();
	const handleLogout = () => {
		logout();
		router.push(PATHNAMES.SIGNIN);
	};

	return (
		<button
			onClick={handleLogout}
			className="fixed bottom-5 right-5 w-16 h-16 bg-red text-white rounded-full flex items-center justify-center shadow-md"
		>
			<Icon iconName='faRightToBracket' />
		</button>
	);
};

export default LogoutButton;
