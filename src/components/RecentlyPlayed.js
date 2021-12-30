import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { Typography, Box, Grid } from "@material-ui/core";

const RecentlyPlayed = () => {
  const [recentGamesData, setRecentGamesData] = useState([]);

  useEffect(() => {
    async function getRecentlyPlayed() {
      const result = await axios(process.env.envVar.REACT_APP_RECENTLY_PLAYED);

      setRecentGamesData(result.data.response.games);
    }

    getRecentlyPlayed();
  }, []);

  return (
    <Box mb={5}>
      <Typography variant="h4" gutterBottom component="div">
        Recently played
      </Typography>
      {recentGamesData ? (
        <Grid container spacing={5}>
          {recentGamesData.map((recentGame, index) => {
            return (
              <Game
                key={index}
                id={recentGame.appid}
                playTime={recentGame.playtime_forever}
                img={recentGame.img_logo_url}
                name={recentGame.name}
              />
            );
          })}
        </Grid>
      ) : (
        <Typography variant="body1" gutterBottom>
          Nothing played in the last two weeks
        </Typography>
      )} 
    </Box>
  );
};

export default RecentlyPlayed;
