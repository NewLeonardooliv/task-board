import React from 'react';


export type ProgressCardProps = {
	title: string;
	progress: number;
}

const ProgressCard = ({ title, progress }: ProgressCardProps) => {
	return (
		<div className="w-full">
			<div className="bg-current p-4 rounded-lg shadow-md">
				<h2 className="text-xl text-foreground font-semibold">{title}</h2>
				<div className="relative pt-1">
					<div className="flex mb-2 items-center justify-between">
						<div>
							<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
								{progress < 100 ? 'Em progresso' : 'Finalizado'}
							</span>
						</div>
						<div className="text-right">
							<span className="text-xs font-semibold inline-block text-teal-200">
								{progress}%
							</span>
						</div>
					</div>
					<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-foreground">
						<div
							style={{ width: `${progress}%` }}
							className="shadow-none flex flex-col text-center whitespace-nowrap text-foreground justify-center bg-teal-500"
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressCard;
