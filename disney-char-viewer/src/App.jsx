import "./App.css";
import { CharactersList } from "./components/CharacterList/CharactersList";
import { Header } from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";

const StyledMainContener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <StyledMainContener>
        <Header setIsDarkMode={setIsDarkMode} />
        <CharactersList isDarkMode={isDarkMode} />
      </StyledMainContener>
    </ThemeProvider>
  );
}

export default App;
