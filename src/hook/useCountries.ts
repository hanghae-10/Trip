import { useQuery } from "@tanstack/react-query";
import { Country, Data, getCountries } from "../api/country";
import { useState } from "react";

export const useCountries = () => {
  const [value, setValue] = useState<Data[]>([]);
  const { data } = useQuery<Country>({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
    staleTime: Infinity
  });

  const search = (str: string) => {
    const searched = data?.data.filter((ele) => ele.한글명.includes(str));
    console.log("serched", searched);
    setValue(searched || []);
  };

  return { value, search };
};
