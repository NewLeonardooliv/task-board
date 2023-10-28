import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";

const Signin = () => {
	const toast = useToast();
	const { login } = useAuth();

	const [password, setPassword] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const toastId = 'auth-loading-toast';
		toast.loading('Entrando...', { id: toastId });
		login(password, email);
	}

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form className="p-8 bg-accent rounded text-center shadow-md w-80" onSubmit={handleSubmit}>
				<h1 className="text-2xl text-foreground font-semibold mb-4">Login</h1>
				<Input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
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
					Login
				</Button>
			</form>
		</div>
	);
};

export default Signin;
