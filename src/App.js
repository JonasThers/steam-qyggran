import React from 'react';
import "./styles/styles.scss"
import { Container } from '@material-ui/core';
import PlayerInfo from './components/PlayerInfo';
import RecentlyPlayed from './components/RecentlyPlayed';

const App = () => {

    return (
        <Container maxWidth="sm">
            <PlayerInfo />
            <RecentlyPlayed />
        </Container>
    )
}

export default App;