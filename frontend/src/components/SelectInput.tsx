import React from 'react';

export type Option = {
	value: number | string;
	label: number | string;
}

export type SelectInputProps = {
	id?: string;
	value: number | string;
	options: Option[];
	label?: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, options, onChange, ...props }) => {
	return (
		<>
			{props.label && (
				<label className="text-foreground" htmlFor={props.id}>
					{props.label}
				</label>
			)}
			<div className="relative pt-2 flex items-center">
				<select
					id={props.id}
					value={value}
					onChange={onChange}
					className={`bg-current text-foreground rounded border border-foreground/25 p-2 w-72 m-0 ${props.className}`}
				>
					{options?.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default SelectInput;
