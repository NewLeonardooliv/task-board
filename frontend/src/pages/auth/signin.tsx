import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import React from "react";

const Signin = () => {
	const [password, setPassword] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const { login } = useAuth();

	const toast = useToast();

	const handleLogin = () => {
		const toastId = 'auth-loading-toast';
        toast.loading('Entrando...', { id: toastId });
		login(password, email);
	}

	function handleKeyDown(event: any) {
		if (event.key === 'Enter') {
			handleLogin();
		}
	}

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form className="p-8 bg-accent rounded text-center shadow-md w-80">
				<h1 className="text-2xl text-foreground font-semibold mb-4">Login</h1>
				<Input
					type="email"
					placeholder="Email"
					value={email}
					onKeyDown={handleKeyDown}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onKeyDown={handleKeyDown}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button className="w-full bg-[#6272a4] text-foreground p-2 mt-4 rounded" type="default" onClick={handleLogin}>
					Login
				</Button>
			</form>
		</div>
	);
};

export default Signin;
