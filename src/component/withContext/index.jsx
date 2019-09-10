import React from 'react';

import { GameContext } from '../App.jsx';

const withContext = (Component) => {
    return (props) => (
        <GameContext.Consumer>
            {ctx => <Component {...props} ctx={ctx} />}
        </GameContext.Consumer>
    )
}

export default withContext;
