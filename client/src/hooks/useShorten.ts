import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useShorten = (searchText: string = "") => {
  const [shortenUrl, setShortenUrl] = useState<string | null>(null);
  useEffect(() => {
    if (searchText) {
      const shortenUrlRequest = async () => {
        const response = await apiClient.post("/shorten", { url: searchText });
        setShortenUrl(response.data.short_url);
      };
      shortenUrlRequest();
    }
  }, [searchText]);

  return { shortenUrl };
};

export default useShorten;
