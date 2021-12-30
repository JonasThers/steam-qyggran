import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Box } from "@material-ui/core";

const PlayerInfo = () => {
  const [userData, setUserData] = useState({});

  useEffect(async () => {
    const result = await axios(process.env.envVar.REACT_APP_PLAYER_INFO);

    setUserData(result.data.response.players[0]);
  }, []);

  return (
    <Box>
      <Typography variant="h2" gutterBottom component="div">
        {userData.personaname}
      </Typography>
    </Box>
  );
};

export default PlayerInfo;
