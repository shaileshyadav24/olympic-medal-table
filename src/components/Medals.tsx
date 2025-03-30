'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SORT_MEDALS_BY_TYPE } from "@/store/features/medalSlice";
import MedalTable from './MedalTable';
import NoMedals from './ui/NoMedals';

export default function Medals() {
    const searchParams = useSearchParams()
    const dispatch = useDispatch();
    let medalList = useSelector((state: any) => state.medal.medalList);
    let [sortBy, setSortBy] = useState('gold');

    useEffect(() => {
        if (searchParams.has('sort')) {
            setSortBy(searchParams.get('sort') as string);
        }
    }, []);

    useEffect(() => {
        dispatch(SORT_MEDALS_BY_TYPE(sortBy ? sortBy : 'gold'));
    }, [sortBy]);


    return (
        <>
            {
                medalList && medalList.length > 0 ? (
                    <MedalTable
                        medalList={medalList}
                        sortBy={sortBy}
                        setSortBy={setSortBy} />
                )
                    : (<NoMedals />)
            }
        </>
    )

}