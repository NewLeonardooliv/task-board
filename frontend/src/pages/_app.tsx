import '@/styles/globals.css';

import Head from 'next/head';
import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

import { AuthProvider } from '@/contexts/auth.context';
import { getPageTitle } from '@/utils/app.util';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
	const router = useRouter();
	const title = React.useMemo(() => getPageTitle(), []);
	return (
		<AuthProvider>
			<Head>
				<title>{title}</title>
			</Head>
			{!router.asPath.startsWith('/auth/') ? (<Sidebar>
				<Component {...pageProps} />
			</Sidebar>) :
				(
					<Component {...pageProps} />
				)
			}
		</AuthProvider>
	);
}