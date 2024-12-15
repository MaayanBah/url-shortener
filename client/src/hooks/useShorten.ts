import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

const useShorten = (searchText: string = "") => {
  const [shortenUrl, setShortenUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (searchText) {
      const shortenUrlRequest = async () => {
        try {
          const response = await apiClient.post("/shorten", {
            url: searchText,
          });
          setShortenUrl(response.data.short_url);
        } catch (err: any) {
          const axiosError = err as AxiosError;
          setError(axiosError.message);
        }
      };
      shortenUrlRequest();
    }
  }, [searchText]);

  return { shortenUrl, error };
};

export default useShorten;
