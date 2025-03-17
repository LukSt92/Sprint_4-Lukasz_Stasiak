import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const url = "https://api.disneyapi.dev/character?page=";

export const useCharactersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useFetch(`${url}${currentPage}`);

  const handlePageChange = (newPage) => {
    setCurrentPage(parseInt(newPage));
  };

  return {
    data,
    error,
    isLoading,
    currentPage,
    handlePageChange,
  };
};
