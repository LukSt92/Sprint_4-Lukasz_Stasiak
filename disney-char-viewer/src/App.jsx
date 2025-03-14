import "./App.css";
import { Header } from "./components/Header";
import styled from "styled-components";

const StyledMainContener = styled.div`
  display: flex;
`;

function App() {
  return (
    <StyledMainContener>
      <Header />
    </StyledMainContener>
  );
}

export default App;
