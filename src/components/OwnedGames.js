import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { Typography, Box, Grid, makeStyles } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#fff",
    padding: 10,
    borderRadius: 3,
    marginLeft: 10,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const OwnedGames = () => {
  const classes = useStyles();

  const [ownedGamesData, setOwnedGamesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePagination = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const entriesPerPage = 20;
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = ownedGamesData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(ownedGamesData.length / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box mb={5} id="top">
      <Typography variant="h4" gutterBottom component="div">
        Owned games ({ownedGamesData.length})
      </Typography>
      <Grid container spacing={5}>
        {currentEntries.map((ownedGame, index) => {
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
      </Grid>
      <Box className={classes.pagination}>
        {pageNumbers.map((number, index) => {
          return (
            <AnchorLink href="#top" key={index} className={classes.link}>
              <Box
                id={number}
                onClick={handlePagination}
                className={classes.button}
              >
                {number}
              </Box>
            </AnchorLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default OwnedGames;
