"use client";

import { handleError } from "@/utils/error";
import { useEffect, useState } from "react";
import useAxios from "./useAxios";

export const useSamples = (enabled: boolean = true) => {
  const { axiosInstance } = useAxios();
  const [data, setData] = useState([]);

  const getSamples = async () => {
    try {
      const { data } = await axiosInstance.get("/samples");
      setData(data);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (enabled) {
      getSamples();
    }
  }, []);

  return { data, refetch: getSamples };
};