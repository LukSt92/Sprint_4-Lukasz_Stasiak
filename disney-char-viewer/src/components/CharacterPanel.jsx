import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@mui/material";
import styled from "styled-components";
import { CharacterModal } from "./CharacterModal";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${(props) => props.theme.border};
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modal = createPortal(
    <CharacterModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />,
    document.body
  );

  return (
    <StyledPanel>
      <StyledImg src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>
        Learn more
      </Button>
      {isModalOpen && modal}
    </StyledPanel>
  );
};
