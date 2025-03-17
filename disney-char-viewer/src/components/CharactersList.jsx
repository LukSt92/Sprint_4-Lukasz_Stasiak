import React, { useEffect, useState } from "react";
import { CharacterPanel } from "./CharacterPanel";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BASE_URL = "https://api.disneyapi.dev/character?page=";

export const CharactersList = () => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("1");

  useEffect(() => {
    (async () => {
      const data = await fetch(`${BASE_URL}${currentPage}`);
      const response = await data.json();
      setCharacters(response);
      setLoading(false);
    })();
  }, [currentPage]);

  if (loading) {
    return <h2>Loading characters...</h2>;
  }

  return (
    <>
      <StyledList>
        {characters?.data.map(({ _id, imageUrl, name }) => (
          <CharacterPanel key={_id} imageUrl={imageUrl} name={name} />
        ))}
      </StyledList>
      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{ button: { color: "#ffffff" } }}
        onChange={(e) => setCurrentPage(e.target.innerText)}
      />
    </>
  );
};
