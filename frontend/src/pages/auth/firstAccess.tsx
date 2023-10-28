import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/router";

const FirstAccess = () => {
	const router = useRouter();
	const toast = useToast();

	const [password, setPassword] = React.useState<string>('');
	const { firstAccess } = useAuth();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const toastId = 'auth-loading-toast';
		toast.loading('Entrando...', { id: toastId });
		const { token } = router?.query;

		if (typeof token === 'string') {
			firstAccess(password, token);
		}
	}

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form className="p-8 bg-accent rounded text-center shadow-md w-80" onSubmit={handleSubmit}>
				<h1 className="text-2xl text-foreground font-semibold mb-4">Primeiro Acesso</h1>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					className="w-full bg-[#6272a4] text-foreground p-2 mt-4 rounded"
					type="default"
					htmlType="submit"
				>
					Salvar
				</Button>
			</form>
		</div>
	);
};

export default FirstAccess;
