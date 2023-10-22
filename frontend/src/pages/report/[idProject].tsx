import React from "react";
import ReportRow from "@/components/ReportRow";
import { useRouter } from "next/router";
import SelectInput, { Option } from "@/components/SelectInput";

type Issue = {
	title: string;
	id: string;
	time: number;
	closedAt: string;
	createdAt: string;
}


const ReportPage = () => {
	const router = useRouter();

	const [issues, setIssues] = React.useState([]);
	const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());
	const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth() + 1);

	React.useEffect(() => {
		const getData = async () => {
			const { idProject } = router.query;
			if (idProject) {

				setIssues([]);
			}
		}

		getData();
	}, [router.query, selectedYear, selectedMonth]);

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const generateYears = (startYear: number, endYear: number): Option[] => {
		const years: Option[] = [];
		for (let year = endYear; year >= startYear; year--) {
			years.push({ value: year, label: year.toString() });
		}
		return years;
	};

	const months: Option[] = Array.from({ length: 12 }, (_, index) => ({
		value: index + 1,
		label: capitalizeFirstLetter(new Date(0, index).toLocaleDateString('pt-br', { month: 'long' })),
	}));

	const years: Option[] = generateYears(2000, new Date().getFullYear());

	return (
		<div className="rounded-md min-h-screen flex flex-col gap-4 p-8">
			<div className="bg-background rounded-md p-8">
				<div className="flex gap-10 justify-center">
					<SelectInput value={selectedMonth} options={months} onChange={(e) => setSelectedMonth(Number(e.target.value))} />
					<SelectInput value={selectedYear} options={years} onChange={(e) => setSelectedYear(Number(e.target.value))} />
				</div>
			</div>
			<div className="bg-background rounded-md min-h-screen p-8">

				<table className="w-full text-foreground text-center table-fixed">
					<thead>
						<tr>
							<th className="py-2 px-4">Atividade</th>
							<th className="py-2 px-4">Nº Chamado</th>
							<th className="py-2 px-4">Data de Abertura</th>
							<th className="py-2 px-4">Data de Encerramento</th>
							<th className="py-2 px-4">Total de USTs</th>
						</tr>
					</thead>
					<tbody>
						{issues?.map((item: Issue, index) => (
							<ReportRow
								key={index}
								atividade={item.title}
								dataAbertura={item.createdAt}
								dataEncerramento={item.closedAt}
								numeroChamado={item.id}
								totalUSTs={item.time}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ReportPage;
