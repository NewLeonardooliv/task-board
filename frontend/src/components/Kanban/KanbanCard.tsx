import React from "react";
import { TaskProps } from "@/pages/kanban";
import { capitalizeFirstLetter, limitString } from "@/utils/app.util";

interface KanbanCardProps {
	project: TaskProps;
	onDragEnd: (e: React.DragEvent<HTMLDivElement>, project: TaskProps) => void;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ project, onDragEnd }) => {
	const getPriorityIcon = (priority: 'HIGHEST' | 'MEDIUM' | 'LOW' | 'LOWEST') => {
		switch (priority) {
			case 'HIGHEST':
				return "🔥";
			case 'MEDIUM':
				return "⚡";
			case 'LOW':
				return "✨";
			case 'LOWEST':
				return "🌟";
			default:
				return null;
		}
	};

	return (
		<div
			className="bg-background rounded-xl shadow-md p-4 transition-all hover:opacity-90 cursor-pointer"
			draggable={true}
			onDragEnd={(e) => onDragEnd(e, project)}
		>
			<h3 className="text-lg text-white font-semibold">{limitString(project.title, 45)}</h3>
			<p className="text-sm text-gray-200 mt-2">{limitString(project.description, 100)}</p>
			<div className="flex items-center mt-4">
				<div className="w-6 h-6 bg-current rounded-full flex items-center justify-center">
					{getPriorityIcon(project.priority)}
				</div>
				<div className="ml-2 text-gray-50 text-sm">{capitalizeFirstLetter(project.priority)}</div>
			</div>
		</div>
	);
};

export default KanbanCard;
