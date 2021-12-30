import React from "react";
import { Typography, Box } from "@material-ui/core";

const Game = (props) => {
  const playTime = props.playTime / 60;

  const convert = (numberWithDecimal) =>
    String(Math.round(numberWithDecimal * 10) / 10);

  return (
    <Box mb={3}>
      <img
        src={`http://media.steampowered.com/steamcommunity/public/images/apps/${props.id}/${props.img}.jpg`}
      />
      <Typography variant="h6" gutterBottom component="div">
        {props.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Hours played: {convert(playTime)}
      </Typography>
    </Box>
  );
};

export default Game;
