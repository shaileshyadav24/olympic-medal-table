import MedalTableRowProps from '@/interfaces/MedalTableRowProps';

export function TableRow({ medal, index }: MedalTableRowProps) {
	return (
		<tr key={medal.code} className="bg-white border-b border-gray-200">

			<td>{index + 1}</td>
			<td>
				<div className="flag-container">
					<div className={`flag ${medal.code}`} />
					<div>{medal.code}</div>
				</div>
			</td>
			<td>{medal.gold}</td>
			<td>{medal.silver}</td>
			<td>{medal.bronze}</td>
			<td className="text-base"><b>{medal.total}</b></td>
		</tr>
	)
}