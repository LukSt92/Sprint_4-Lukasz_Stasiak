import React, { useEffect, useState } from "react";
import { CharacterPanel } from "./CharacterPanel";
import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

const BASE_URL = "https://api.disneyapi.dev/character?page=1";

export const CharactersList = () => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetch(BASE_URL);
      const response = await data.json();
      setCharacters(response);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h2>Loading characters...</h2>;
  }

  return (
    <StyledList>
      {characters?.data.map(({ _id, imageUrl, name }) => (
        <CharacterPanel key={_id} imageUrl={imageUrl} name={name} />
      ))}
    </StyledList>
  );
};
