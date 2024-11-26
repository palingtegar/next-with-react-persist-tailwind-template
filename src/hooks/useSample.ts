"use client";

import { handleError } from "@/utils/error";
import { useEffect, useState } from "react";
import useAxios from "./useAxios";

export const useSample = (id: number, enabled: boolean = true) => {
  const { axiosInstance } = useAxios();

  const [data, setData] = useState(null);

  const getSample = async () => {
    try {
      const { data } = await axiosInstance.get(`/samples/${id}`);
      setData(data);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (enabled) {
      getSample();
    }
  }, []);

  return { data, refetch: getSample };
};