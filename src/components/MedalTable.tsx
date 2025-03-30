'use client'
import "@/styles/flag.css";
import "@/styles/medalTable.css";

import { TableRow } from "./ui/TableRow";

import content from "@/content/content";
import medalTypes from "@/constants/medalType";

import Medal from '@/interfaces/Medal';
import MedalTableProps from '@/interfaces/MedalTableProps';

export default function MedalTable({ medalList, sortBy, setSortBy }: MedalTableProps) {

	function sortTableBy(type: string) {
		setSortBy(type);
	}

	return (
		<>
			<h1 className="text-xl">{content.MEDAL_TABLE_TITLE}</h1>
			<table className="w-full text-sm text-gray-500 table-auto">
				<thead className="text-base text-gray-700 uppercase bg-gray-50">
					<tr>
						<th className="px-6 py-3"></th>
						<th className="px-6 py-3"></th>
						<th className={`px-6 py-3 medal-heading ${sortBy === medalTypes.GOLD && 'sorted' || ''}`}
							onClick={() => sortTableBy(medalTypes.GOLD)}>
							<div className="medals gold"></div>
						</th>
						<th className={`px-6 py-3 medal-heading ${sortBy === medalTypes.SILVER && 'sorted' || ''}`}
							onClick={() => sortTableBy(medalTypes.SILVER)}>
							<div className="medals silver"></div>
						</th>
						<th className={`px-6 py-3 medal-heading ${sortBy === medalTypes.BRONZE && 'sorted' || ''}`}
							onClick={() => sortTableBy(medalTypes.BRONZE)}>
							<div className="medals bronze"></div>
						</th>
						<th className={`px-6 py-3 total ${sortBy === medalTypes.TOTAL && 'sorted' || ''}`}
							onClick={() => sortTableBy(medalTypes.TOTAL)}>{content.TOTAL_TITLE}</th>
					</tr>
				</thead>
				<tbody>
					{medalList.map((medal: Medal, index: number) => (
						<TableRow
							key={medal.code}
							medal={medal}
							index={index} />
						
					))}
				</tbody>
			</table>
		</>
	)

}

