import React from 'react';

import { GameContext } from '@src/App.jsx';

const withContext = Component => props => (
    <GameContext.Consumer>
        { ctx => <Component {...props} ctx={ctx} /> }
    </GameContext.Consumer>
);

export default withContext;
