import React from "react";
import { Button } from "@mui/material";

export const CharacterPanel = ({ imageUrl, name }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <Button variant="contained">Learn more</Button>
    </div>
  );
};
