
import Icon, { IconName } from "./Icon";
import React, { forwardRef } from "react";

type InputProps = {
	placeholder?: string;
	type?: 'text' | 'email' | 'password' | 'date' | 'time' | 'number';
	name?: string;
	id?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler;
	value?: string;
	disabled?: boolean;
	max?: string | number;
	maxLength?: number;
	min?: string | number;
	minLength?: number;
	pattern?: string;
	required?: boolean;
	prefixIcon?: {
		iconName: IconName;
	};
	label?: string;
}

const InputFowardedFunction: React.ForwardRefRenderFunction<any, React.PropsWithChildren<InputProps>> = ({
	children,
	type = 'text',
	prefixIcon,
	...props
}, ref) => {

	return (
		<>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<div className="relative pt-2 flex items-center">
				<input
					{...props}
					ref={ref}
					type={type}
					className='bg-current text-foreground rounded border border-foreground/25 pl-2 py-2 w-72 m-0'
				/>
				{prefixIcon?.iconName && (
					<span className='absolute text-foreground right-4 transition-colors' >
						<Icon iconName={prefixIcon.iconName} />
					</span>
				)}
			</div>
		</>
	);
}

export default forwardRef(InputFowardedFunction);