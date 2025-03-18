import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useCharacterModal } from "./useCharacterModal";
import { ActivityList } from "./ActivityList";
import { Button } from "@mui/material";

const StyledDiv = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  transform: translate(-50%, -50%);
`;
const StyledImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
const StyledActivityContainer = styled.div`
  display: flex;
`;

export const CharacterModal = ({ isModalOpen, setIsModalOpen, id }) => {
  const { data, error, isLoading } = useCharacterModal(id);

  const handleClose = () => setIsModalOpen(false);

  if (error) return <h2>{error}</h2>;

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
    >
      <StyledDiv>
        {isLoading && <h3>Character data is loading...</h3>}
        <StyledImg src={data?.data.imageUrl} alt={data?.data.name} />
        <h3>{data?.data.name}</h3>
        <StyledActivityContainer>
          <ActivityList array={data?.data.films} name="Films" />
          <ActivityList array={data?.data.shortFilms} name="Short films" />
          <ActivityList array={data?.data.videoGames} name="Video Games" />
          <ActivityList array={data?.data.tvShows} name="Tv shows" />
        </StyledActivityContainer>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </StyledDiv>
    </Modal>
  );
};
