import React from 'react';
import "./styles/styles.scss"
import { Container } from '@material-ui/core';
import PlayerInfo from './components/PlayerInfo';

const App = () => {

    return (
        <Container maxWidth="sm">
            <PlayerInfo />
        </Container>
    )
}

export default App;