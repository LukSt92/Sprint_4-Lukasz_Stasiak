import React from "react";
import { CharacterPanel } from "./CharacterPanel";
import { useCharactersList } from "./useCharactersList";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CharactersList = ({ isDarkMode }) => {
  const { data, error, isLoading, currentPage, handlePageChange } =
    useCharactersList();

  if (isLoading) {
    return <h2>Loading characters...</h2>;
  }

  if (error) return <h2>{error}</h2>;

  return (
    <>
      <StyledList>
        {data?.data.map(({ _id, imageUrl, name }) => (
          <CharacterPanel key={_id} imageUrl={imageUrl} name={name} id={_id} />
        ))}
      </StyledList>
      <Pagination
        count={data?.info.totalPages}
        color="primary"
        size="large"
        sx={{ button: { color: isDarkMode ? "#000" : "#fff" } }}
        onChange={(e) => handlePageChange(e.target.innerText)}
        page={currentPage}
      />
    </>
  );
};
