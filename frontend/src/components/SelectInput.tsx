import React from 'react';

export type Option = {
	value: number;
	label: string;
}

export type SelectInputProps = {
	value: number;
	options: Option[];
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, options, onChange }) => {
	return (
		<select
			value={value}
			onChange={onChange}
			className="bg-current text-foreground rounded border border-foreground/25 px-2 py-2 w-72 m-0"
		>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default SelectInput;
