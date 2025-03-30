"use client";
import { getMedalsList } from "@/services/api";
import { SET_MEDALS, CALCULATE_TOTAL_MEDALS } from "@/store/features/medalSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Medals from "@/components/Medals";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";

export default function Home() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMedalsList().then((data) => {
      dispatch(SET_MEDALS(data));
      dispatch(CALCULATE_TOTAL_MEDALS());
    }
    ).catch(() => {
      setIsError(true);
    }).finally(() => {
      setIsLoading(false);
    }
  );
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && <Medals />}
    </>
  );
}
