import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const url = "https://api.disneyapi.dev/character/";

export const useCharacterModal = (id) => {
  const { data } = useFetch(`${url}${id}`);

  return {
    data,
  };
};
