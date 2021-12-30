import React from "react";
import "./styles/styles.scss";
import { Container } from "@material-ui/core";
import PlayerInfo from "./components/PlayerInfo";
import RecentlyPlayed from "./components/RecentlyPlayed";
import OwnedGames from "./components/OwnedGames";
import TopGames from "./components/TopGames";

const App = () => {
  return (
    <Container maxWidth="md">
      <PlayerInfo />
      <RecentlyPlayed />
      <TopGames />
      <OwnedGames />
    </Container>
  );
};

export default App;
