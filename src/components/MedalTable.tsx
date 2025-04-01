'use client'
import "@/styles/flag.css";
import "@/styles/medalTable.css";
import { useDispatch, useSelector } from 'react-redux';

import { TableRow } from "./ui/TableRow";

import content from "@/content/content";
import medalTypes from "@/constants/medalType";
import Medal from "@/interfaces/Medal";

import { SORT_MEDALS_BY_TYPE } from "@/store/features/medalSlice";
import MedalState from "@/interfaces/MedalState";

export default function MedalTable() {

	const dispatch = useDispatch();
	const medalList = useSelector((state: {medal: MedalState}) => state.medal.medalList);
	const sortBy = useSelector((state: {medal: MedalState}) => state.medal.sortBy);

	function sortTableBy(type: string) {
		dispatch(SORT_MEDALS_BY_TYPE(type));
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

