import React from "react";
import { Typography, Box } from "@material-ui/core";

const Game = (props) => {
  return (
    <Box>
      <img
        src={`http://media.steampowered.com/steamcommunity/public/images/apps/${props.id}/${props.img}.jpg`}
      />
      <Typography variant="h6" gutterBottom component="div">
        {props.name}
      </Typography>
    </Box>
  );
};

export default Game;
