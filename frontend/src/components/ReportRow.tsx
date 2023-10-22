import React from 'react';

type ReportRowProps = {
	atividade: string;
	numeroChamado: string;
	dataAbertura: string;
	dataEncerramento: string;
	totalUSTs: number;
};

const ReportRow: React.FC<ReportRowProps> = ({ atividade, numeroChamado, dataAbertura, dataEncerramento, totalUSTs }) => {
	return (
		<tr className="border-b border-divider">
			<td className="py-4 px-6">{atividade}</td>
			<td className="py-2 px-4">{numeroChamado}</td>
			<td className="py-2 px-4">{dataAbertura}</td>
			<td className="py-2 px-4">{dataEncerramento}</td>
			<td className="py-2 px-4">{totalUSTs}</td>
		</tr>
	);
};

export default ReportRow;
