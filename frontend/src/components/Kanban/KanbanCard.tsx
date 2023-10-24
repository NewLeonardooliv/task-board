import React from "react";
import { capitalizeFirstLetter, limitString } from "@/utils/app.util";
import { TaskProps } from "@/pages/projects/[idProject]/board";
import Image from "next/image";
import { UPLOAD_URL } from "@/constants/uploadurl.constant";

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

	const getPriorityColor = (priority: 'HIGHEST' | 'MEDIUM' | 'LOW' | 'LOWEST') => {
		switch (priority) {
			case 'HIGHEST':
				return 'rgb(255 85 85 / var(--tw-bg-opacity)';
			case 'MEDIUM':
				return 'rgb(245 158 11 / var(--tw-bg-opacity))';
			case 'LOW':
				return "rgb(37 99 235 / var(--tw-bg-opacity)";
			case 'LOWEST':
				return "rgb(147 197 253 / var(--tw-bg-opacity)";
			default:
				return null;
		}
	};

	return (
		<div
			className={`bg-background rounded-xl shadow-md p-4 transition-all hover:opacity-90 cursor-pointer border-l-4`}
			draggable={true}
			style={{ borderColor: `${getPriorityColor(project.priority)}` }}
			onDragEnd={(e) => onDragEnd(e, project)}
		>
			<h3 className="text-lg text-white font-semibold">
				{limitString(project.title, 45)}
			</h3>
			<p className="text-sm text-gray-200 mt-2">
				{limitString(project.description, 100)}
			</p>
			<div className="flex items-center mt-4">
				<div className="w-7 h-7 bg-current rounded-full flex items-center justify-center">
					<Image className="rounded-full" width={1000} height={1000} src={UPLOAD_URL + project.assignee.profilePic} alt={""} />
				</div>
				<div className="ml-2 text-gray-50 text-sm">
					{project.assignee.name}
				</div>
			</div>
		</div>

	);
};

export default KanbanCard;
