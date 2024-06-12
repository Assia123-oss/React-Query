import React from 'react'
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const useGetCat = () => {
      const fetchCatFn = async () => {
        return await Axios.get("https://catfact.ninja/fact").then(
          (res) => res.data
        );
      };

    const {
      data: catData,
      isLoading: isCatLoading,
      isError,
      refetch,
    } = useQuery({
      queryKey: ["cat"],
      queryFn: fetchCatFn,
    });
    const refetchData = () => {
        alert("DATA REFETCHED");
        refetch();
    }
  return  {catData, refetchData, isCatLoading}
}

export default useGetCat
