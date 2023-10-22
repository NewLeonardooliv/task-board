import React from 'react';

const LoadingTableRow = () => {
	return (
		<div className="bg-accent gap-8 flex flex-col shadow-md p-4 rounded-lg w-full h-[31rem] animate-pulse">
			<div>
				<div className="bg-gray-200 h-4 w-24 mb-2 rounded animate-shimmer" />
				<div className="bg-gray-200 h-8 w-80 mb-4 rounded animate-shimmer" />
				<div className="bg-gray-200 h-6 w-36 rounded animate-shimmer" />
			</div>

			<div>
				<div className="bg-gray-200 h-4 w-24 mb-2 rounded animate-shimmer" />
				<div className="bg-gray-200 h-8 w-80 mb-4 rounded animate-shimmer" />
				<div className="bg-gray-200 h-6 w-36 rounded animate-shimmer" />
			</div>

			<div>
				<div className="bg-gray-200 h-4 w-24 mb-2 rounded animate-shimmer" />
				<div className="bg-gray-200 h-8 w-80 mb-4 rounded animate-shimmer" />
				<div className="bg-gray-200 h-6 w-36 rounded animate-shimmer" />
			</div>
		</div>
	);
};

export default LoadingTableRow;
