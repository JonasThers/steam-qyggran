import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { Typography, Box } from "@material-ui/core";

const OwnedGames = () => {
  const [ownedGamesData, setOwnedGamesData] = useState([]);

  useEffect(() => {
    async function getOwnedGames() {
      const result = await axios(process.env.envVar.REACT_APP_OWNED_GAMES);

      setOwnedGamesData(result.data.response.games);
    }

    getOwnedGames();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom component="div">
        Owned games ({ownedGamesData.length})
      </Typography>
      {ownedGamesData.map((ownedGame, index) => {
        return (
          <Game
            key={index}
            id={ownedGame.appid}
            img={ownedGame.img_logo_url}
            name={ownedGame.name}
          />
        );
      })}
    </Box>
  );
};

export default OwnedGames;
