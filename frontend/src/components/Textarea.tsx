import Icon, { IconName } from "./Icon";
import React, { forwardRef } from "react";

type TextAreaProps = {
	placeholder?: string;
	name?: string;
	id?: string;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	onKeyDown?: React.KeyboardEventHandler;
	value?: string;
	disabled?: boolean;
	maxLength?: number;
	minLength?: number;
	required?: boolean;
	label?: string;
	rows: number;
};

const TextAreaFowardedFunction: React.ForwardRefRenderFunction<
	HTMLTextAreaElement,
	React.PropsWithChildren<TextAreaProps>
> = ({ children, ...props }, ref) => {
	return (
		<>
			{props.label && (
				<label className="text-foreground" htmlFor={props.id}>
					{props.label}
				</label>
			)}
			<div className="relative pt-2 flex items-center">
				<textarea
					{...props}
					ref={ref}
					className="bg-current text-foreground rounded border border-foreground/25 pl-2 py-2 w-full m-0 resize-none"
				/>
			</div>
		</>
	);
};

export default forwardRef(TextAreaFowardedFunction);
