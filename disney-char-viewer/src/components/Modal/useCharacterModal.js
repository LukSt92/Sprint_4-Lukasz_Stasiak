import { useFetch } from "../../hooks/useFetch";

const url = "https://api.disneyapi.dev/character/";

export const useCharacterModal = (id) => {
  const { data, error, isLoading } = useFetch(`${url}${id}`);

  return {
    data,
    error,
    isLoading,
  };
};
