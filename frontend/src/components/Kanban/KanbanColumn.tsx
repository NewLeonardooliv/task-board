import React from "react";
import KanbanCard from "./KanbanCard";
import { TaskProps } from "@/pages/projects/[idProject]/board";

interface KanbanColumnProps {
	name: string;
	stage: string;
	color: string;
	tasks: TaskProps[];
	onDragEnter: (e: React.DragEvent<HTMLDivElement>, stageValue: string) => void;
	onDragEnd: (e: React.DragEvent<HTMLDivElement>, project: TaskProps) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ name, stage, color, tasks, onDragEnter, onDragEnd }) => {
	const generateKanbanCards = () =>
		tasks.map((task) => (
			<KanbanCard key={task.id} project={task} onDragEnd={onDragEnd} />
		));
	return (
		<div
			className='bg-current w-full gap-4 h-full rounded-xl p-4 flex flex-col'
			onDragEnter={(e) => {
				onDragEnter(e, stage);
			}}
		>
			<div className="flex justify-between items-center">
				<div className={` bg-[${color}] bg-opacity-50 py-1 px-2 rounded-md`}>
					<h2 className="text-sm font-semibold text-foreground">{name}</h2>
				</div>
				<p className="text-lg font-semibold text-foreground">{tasks.length}</p>
			</div>
			{generateKanbanCards()}
		</div>
	);
};

export default KanbanColumn