import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 8px;
  margin: 16px;
  padding: 8px;
  width: 250px;
`;

const StyledImg = styled.img`
  width: 250px;
  height: 150px;
  object-fit: fill;
`;

export const CharacterPanel = ({ imageUrl, name }) => {
  return (
    <StyledPanel>
      <StyledImg src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <Button variant="contained">Learn more</Button>
    </StyledPanel>
  );
};
