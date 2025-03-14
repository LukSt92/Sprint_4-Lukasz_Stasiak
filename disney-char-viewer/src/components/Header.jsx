import React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h2>Disney APP</h2>
      <FormControlLabel control={<Switch />} label="Theme" />
    </StyledHeader>
  );
};
