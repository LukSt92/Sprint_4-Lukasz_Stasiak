import React from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40vw;
`;

export const CharacterModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
    >
      <StyledDiv>
        <h2>test</h2>
      </StyledDiv>
    </Modal>
  );
};
