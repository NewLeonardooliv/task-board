import Image from 'next/image';
import React from 'react';
import Icon from './Icon';
import { PATHNAMES } from '@/constants/pathnames.constant';
import Link from 'next/link';

interface ProjectCardProps {
	id: string;
	name: string;
	imageUrl: string;
	userCount: number;
	onClick?: () => void;
}

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
	return (
		<Link href={`${PATHNAMES.PROJECTS}/${project.id}/board`}>
			<div onClick={project.onClick} className='cursor-pointer'>
				<div className="bg-white rounded-lg shadow-lg w-72 h-40">
					<Image src={project.imageUrl} alt={project.name} className="w-full h-auto" />
				</div>
				<div className="flex flex-col text-white mt-1 justify-between">
					<div className='flex justify-between'>
						<h3 className="text-xl font-semibold">{project.name}</h3>
						<div className="flex items-center justify-center">
							<div className="flex items-center gap-2">
								<Icon iconName="faUser" />
								<span>2</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
