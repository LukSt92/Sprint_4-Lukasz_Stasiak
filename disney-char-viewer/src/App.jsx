import "./App.css";
import { CharactersList } from "./components/CharactersList";
import { Header } from "./components/Header";
import styled from "styled-components";

const StyledMainContener = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledMainContener>
      <Header />
      <CharactersList />
    </StyledMainContener>
  );
}

export default App;
