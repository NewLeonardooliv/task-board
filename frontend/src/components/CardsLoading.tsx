import React from 'react';

const LoadingCard = ({ ...props }) => {
	return (
		<div {...props}>
			<div className="bg-accent shadow-md p-4 rounded-lg w-full h-full animate-pulse">
				<div className="bg-gray-200 h-4 w-24 mb-2 rounded animate-shimmer" />
				<div className="bg-gray-200 h-8 w-48 mb-4 rounded animate-shimmer" />
				<div className="bg-gray-200 h-6 w-36 rounded animate-shimmer" />
			</div>
		</div>
	);
};

export default LoadingCard;
