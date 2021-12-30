import React from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 'auto',
    width: '100%',
  },
}));

const Game = (props) => {
  const classes = useStyles();

  const playTime = props.playTime / 60;

  const convert = (numberWithDecimal) =>
    String(Math.round(numberWithDecimal * 10) / 10);

  return (
    <Grid item xs={12} sm={6} mb={3}>
      <Box
        component="img"
        className={classes.image}
        src={`http://media.steampowered.com/steamcommunity/public/images/apps/${props.id}/${props.img}.jpg`}
      />
      <Typography variant="h6" gutterBottom component="div">
        {props.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Hours played: {convert(playTime)}
      </Typography>
    </Grid>
  );
};

export default Game;
