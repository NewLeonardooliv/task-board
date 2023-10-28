import React from "react";

import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { PATHNAMES } from "@/constants/pathnames.constant";
import { PROFILE } from "@/constants/profile.constant";
import { api } from "@/utils/services/client";

type AuthContextData = {
	isSigned: boolean;
	login: (password: string, email: string) => void;
	logout: () => void;
	firstAccess: (password: string, token: string) => void;
	profile: string;
}

interface User {
	isSigned: boolean;
	user_role: PROFILE;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: any) {
	const cookie = parseCookies();
	const user = cookie['user'];

	const ONE_DAY = 1000 * 60 * 60 * 24;

	const [isSigned, setIsSigned] = React.useState<boolean>(!!user);
	const [profile, setProfile] = React.useState<string>('');
	const router = useRouter();

	// React.useEffect(() => {
	// 	const user = async () => {
	// 		const cookie = parseCookies();
	// 		const token = cookie['token'];
	// 		if (token) {
	// 			const decodedString = decodeURIComponent(token);
	// 			const decodedObject = JSON.parse(decodedString);

	// 			const userRoles = decodedObject.user_role;
	// 			setProfile(userRoles);
	// 			setIsSigned(!!user);
	// 		} else {
	// 			setIsSigned(false);
	// 			router.push(PATHNAMES.SIGNIN);
	// 		}
	// 	}

	// 	user();
	// }, []);

	function logout() {
		destroyCookie(null, 'token');
		setProfile('');
		setIsSigned(false);
		router.push(PATHNAMES.SIGNIN);
	}

	async function login(password: string, email: string) {
		try {
			const { data } = await api.post('user/signin', { email, password });

			setCookie(null, 'token', data.token, {
				maxAge: ONE_DAY,
				path: '/',
			});

			router.push(PATHNAMES.HOME);
		} catch (error: any) {
			return false;
		}

	}

	async function firstAccess(password: string, token: string) {
		try {
			const { data } = await api.post('user/firstAccess', { token, password });

			setCookie(null, 'token', data.token, {
				maxAge: ONE_DAY,
				path: '/',
			});

			router.push(PATHNAMES.HOME);
		} catch (error: any) {
			return false;
		}

	}

	return (
		<AuthContext.Provider value={{ isSigned, login, logout, profile, firstAccess }}>{children}</AuthContext.Provider>

	)
}

export { AuthContext, AuthProvider };
