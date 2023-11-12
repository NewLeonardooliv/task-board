import React, { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";

type ChecklistItem = {
	id: number;
	text: string;
	done: boolean;
};

const Checklist: React.FC = () => {
	const [items, setItems] = useState<ChecklistItem[]>([]);
	const [newItemText, setNewItemText] = useState("");

	const addItem = () => {
		if (newItemText.trim() !== "") {
			const newItem: ChecklistItem = {
				id: Date.now(),
				text: newItemText,
				done: false,
			};
			setItems([...items, newItem]);
			setNewItemText("");
		}
	};

	const removeItem = (id: number) => {
		const updatedItems = items.filter((item) => item.id !== id);
		setItems(updatedItems);
	};

	const toggleDone = (id: number) => {
		const updatedItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, done: !item.done };
			}
			return item;
		});
		setItems(updatedItems);
	};

	const progress = (items.filter((item) => item.done).length / items.length) * 100;

	return (
		<div className="mx-auto">
			<div className="mb-4">
				<Input
					type="text"
					label="Checklist"
					placeholder="Adicionar item"
					className="w-full"
					value={newItemText}
					onChange={(e) => setNewItemText(e.target.value)}
				/>
			</div>
			<div className="flex justify-end">
				<Button htmlType="button" onClick={addItem}>
					<Icon iconName="faPlus" />
				</Button>
			</div>

			<div className="mt-4">
				<div className="relative pt-1">
					<div className="flex mb-2 items-center justify-between">
						{/* <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-pink/60">
                Progresso
              </span>
            </div> */}
						<div className="text-right">
							<span className="text-xs font-semibold inline-block text-white">
								{progress.toFixed(2)}%
							</span>
						</div>
					</div>
					<div className="flex h-2 mb-4 overflow-hidden text-xs bg-pink/60 rounded">
						<div
							style={{ width: `${progress}%`, transition: "width 0.3s ease-in-out" }}
							className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink/80"
						></div>
					</div>
				</div>
			</div>

			<ul className="mt-4">
				{items.map((item) => (
					<li key={item.id} className="flex justify-between text-foreground items-center py-2">
						<span
							style={{ textDecoration: item.done ? "line-through" : "none" }}
						>
							{item.text}
						</span>
						<div className="flex items-center">
							<span
								onClick={() => toggleDone(item.id)}
								className="cursor-pointer"
							>
								<Icon iconName={item.done ? "faCheckCircle" : "faCircle"} />
							</span>
							<span
								onClick={() => removeItem(item.id)}
								className="cursor-pointer ml-2"
							>
								<Icon iconName="faClose" />
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Checklist;
