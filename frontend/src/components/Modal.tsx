import { useEffect, useState } from "react";
import Icon, { IconName } from "./Icon";
import Divider from "./Divider";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
	description?: string;
	iconTitle?: IconName;
};

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	...props
}) => {
	const [isRendered, setIsRendered] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsRendered(true);
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	const closeModal = () => {
		setIsRendered(false);
		document.body.style.overflow = "auto";
		setTimeout(() => {
			onClose();
		}, 300);
	};

	return (
		<>
			{isOpen && (
				<div
					className={`fixed inset-0 flex items-center justify-center z-50 ${isRendered
						? "opacity-100"
						: "opacity-0 pointer-events-none"
						} transition-opacity duration-300`}
				>
					<div className="bg-accent p-4 rounded-md shadow-lg min-w-[50vw]">
						<div className="flex justify-between mb-4 border-b-1 border-divider">
							<div>
								{props.title && (
									<div className="flex items-center">
										<h1 className="text-2xl font-bold text-foreground">
											{props.title}
										</h1>
									</div>
								)}
								<div className="flex items-center">
									<h1 className="text-x font-medium text-foreground opacity-70">
										{props.description}
									</h1>
								</div>
							</div>
							<button
								className="text-foreground px-4 py-3 rounded-lg hover:opacity-60 transition-all"
								onClick={closeModal}
								aria-label="Fechar"
							>
								<Icon iconName="faTimes" />
							</button>
						</div>
						<div className="overflow-auto max-h-[70vh] p-6">{children}</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
