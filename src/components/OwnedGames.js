import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { Typography, Box } from "@material-ui/core";

const OwnedGames = () => {
  const [ownedGamesData, setOwnedGamesData] = useState([]);

  const sortArray = (x, y) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    async function getOwnedGames() {
      const result = await axios(process.env.envVar.REACT_APP_OWNED_GAMES);

      setOwnedGamesData(result.data.response.games.sort(sortArray));
    }

    getOwnedGames();
  }, []);

  return (
    <Box mb={5}>
      <Typography variant="h4" gutterBottom component="div">
        Owned games ({ownedGamesData.length})
      </Typography>
      {ownedGamesData.map((ownedGame, index) => {
        return (
          <Game
            key={index}
            id={ownedGame.appid}
            playTime={ownedGame.playtime_forever}
            img={ownedGame.img_logo_url}
            name={ownedGame.name}
          />
        );
      })}
    </Box>
  );
};

export default OwnedGames;
