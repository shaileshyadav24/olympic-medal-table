"use client";
import { getMedalsList } from "@/services/api";
import { SET_MEDALS, CALCULATE_TOTAL_MEDALS } from "@/store/features/medalSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Medals from "@/components/Medals";

export default function Home() {
  let dispatch = useDispatch();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    getMedalsList().then((data) => {
      dispatch(SET_MEDALS(data));
      dispatch(CALCULATE_TOTAL_MEDALS());
      setError(false);
      setLoading(false);
    }
    ).catch(() => {
      setError(true);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error loading medals</div>}
      {!loading && !error && <div>
          <Medals />
        </div>}
    </>
  );
}
