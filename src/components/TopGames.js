import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { Typography, Box, Grid } from "@material-ui/core";

const TopGames = () => {
  const [topGamesData, setTopGamesData] = useState([]);

  useEffect(() => {
    async function getTopGames() {
      const result = await axios(process.env.envVar.REACT_APP_OWNED_GAMES);

      result.data.response.games.sort(function (a, b) {
        return b.playtime_forever - a.playtime_forever;
      });

      setTopGamesData(result.data.response.games.slice(0, 4));
    }

    getTopGames();
  }, []);

  return (
    <Box mb={5}>
      <Typography variant="h4" gutterBottom component="div">
        Most played games
      </Typography>
      <Grid container spacing={5}>
        {topGamesData.map((topGame, index) => {
          return (
            <Game
              key={index}
              id={topGame.appid}
              playTime={topGame.playtime_forever}
              img={topGame.img_logo_url}
              name={topGame.name}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopGames;
