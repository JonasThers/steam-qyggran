import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { Typography, Box } from "@material-ui/core";

const RecentlyPlayed = () => {
  const [recentGamesData, setRecentGamesData] = useState([]);

  useEffect(async () => {
    const result = await axios(process.env.envVar.REACT_APP_RECENTLY_PLAYED);

    setRecentGamesData(result.data.response.games);
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom component="div">
        Recently played
      </Typography>
      {recentGamesData.length ? (
        <Box>
          {recentGamesData.map((recentGame, index) => {
            return <Game key={index} name={recentGame.name} />;
          })}
        </Box>
      ) : (
        <Typography variant="body1" gutterBottom>
          Nothing played in the last two weeks
        </Typography>
      )}
    </Box>
  );
};

export default RecentlyPlayed;
