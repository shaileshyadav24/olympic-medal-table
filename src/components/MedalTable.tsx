'use client'
import "@/styles/flag.css";
import "@/styles/medalTable.css";

import Medal from '@/interfaces/Medal';

interface MedalTableProps {
	medalList: Medal[];
	sortBy: string;
	setSortBy: Function
}

export default function MedalTable({ medalList, sortBy, setSortBy }: MedalTableProps) {

	function sortTableBy(type: string) {
		setSortBy(type);
	}

	return (
		<>
			<h1 className="text-xl">MEDAL COUNT</h1>
			<table className="w-full text-sm text-gray-500 table-auto">
				<thead className="text-base text-gray-700 uppercase bg-gray-50">
					<tr>
						<th className="px-6 py-3"></th>
						<th className="px-6 py-3"></th>
						<th className={`px-6 py-3 medal-heading ${sortBy === 'gold' && 'sorted'}`} onClick={() => sortTableBy('gold')}>
							<div className="medals gold"></div>
						</th>
						<th className={`px-6 py-3 medal-heading ${sortBy === 'silver' && 'sorted'}`} onClick={() => sortTableBy('silver')}>
							<div className="medals silver"></div>
						</th>
						<th className={`px-6 py-3 medal-heading ${sortBy === 'bronze' && 'sorted'}`} onClick={() => sortTableBy('bronze')}>
							<div className="medals bronze"></div>
						</th>
						<th className={`px-6 py-3 total ${sortBy === 'total' && 'sorted'}`} onClick={() => sortTableBy('total')}>TOTAL</th>
					</tr>
				</thead>
				<tbody>
					{medalList.map((medal: Medal, index: number) => (

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
					))}
				</tbody>
			</table>
		</>
	)

}