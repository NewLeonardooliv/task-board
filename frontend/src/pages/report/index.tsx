import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Input from "@/components/Input";
import LoadingCard from "@/components/CardsLoading";

export type Project = {
	description: React.ReactNode;
	id: number;
	name: string;
	path_with_namespace: string;
}


const ReportPage = () => {
	const [projects, setProjects] = React.useState<Project[]>([]);
	const [filteredProjects, setFilteredProjects] = React.useState<Project[]>([]);
	const [searchTerm, setSearchTerm] = React.useState<string>('');
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	React.useEffect(() => {
		const getData = async () => {

			setProjects([]);
			setFilteredProjects([])
			setIsLoading(false);
		}

		getData();
	}, []);

	React.useEffect(() => {
		const getFilteredData = () => {
			let filteredData = projects;

			if (searchTerm) {
				filteredData = projects.filter((item: { name: string; }) =>
					item.name.toLowerCase().includes(searchTerm.toLowerCase())
				);
			}

			setFilteredProjects(filteredData);
		}

		getFilteredData();
	}, [projects, searchTerm]);

	const elements = [];
	for (let index = 0; index < 24; index++) {
		elements.push(<LoadingCard key={index} className="w-56 h-56" />);
	}

	return (
		<div className="bg-background gap-4 flex flex-col rounded-md min-h-screen p-8">
			<div className="flex gap-4 justify-center mb-4">
				<Input
					type="text"
					placeholder="Pesquisar por nome..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					prefixIcon={{ iconName: 'faSearch' }}
				/>
			</div>
			<div className="flex flex-wrap gap-4 justify-center">
				{!isLoading ? (
					<>
						{filteredProjects?.map((item: Project, index: number) => (
							<div key={index}>
								<ProjectCard namespace={item.path_with_namespace} id={item?.id} name={item?.name} />
							</div>
						))}
					</>
				) : (
					<>
						{elements}
					</>
				)}
			</div>
		</div>
	);
};

export default ReportPage;
