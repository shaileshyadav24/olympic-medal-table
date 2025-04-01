'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SORT_MEDALS_BY_TYPE } from "@/store/features/medalSlice";
import MedalTable from './MedalTable';
import NoMedals from './ui/NoMedals';
import medalTypes from '@/constants/medalType';
import MedalState from '@/interfaces/MedalState';

const validSortTypes = [
    medalTypes.GOLD,
    medalTypes.SILVER,
    medalTypes.BRONZE,
    medalTypes.TOTAL
]

export default function Medals() {
    const searchParams = useSearchParams()
    const dispatch = useDispatch();
    const medalList = useSelector((state: {medal: MedalState}) => state.medal.medalList);

    useEffect(() => {
        let sortBy = medalTypes.GOLD;
        const sortQuery = searchParams.get('sort');
        if (sortQuery && validSortTypes.includes(sortQuery)) {
            sortBy = searchParams.get('sort') as string;
        }
        dispatch(SORT_MEDALS_BY_TYPE(sortBy ? sortBy : medalTypes.GOLD));
    }, [dispatch, searchParams]);

    return (
        <>
            {
                medalList && medalList.length > 0 ? (
                    <MedalTable />
                )
                    : (<NoMedals />)
            }
        </>
    )

}