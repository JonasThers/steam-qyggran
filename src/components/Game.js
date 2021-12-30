import React from "react";
import { Typography, Box } from "@material-ui/core";

const Game = (props) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom component="div">
        {props.name}
      </Typography>
    </Box>
  );
};

export default Game;