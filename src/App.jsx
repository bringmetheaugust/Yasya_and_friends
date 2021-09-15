import React, { useReducer } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Menu from '@containers/Menu/index.jsx';
import Game from '@containers/Game/index.jsx';
import About from '@containers/About/index.jsx';
import heroesDB from '@constants/heroes.cjs';
import Notification from '@containers/Notification/index.jsx';

const GameContext = React.createContext();
const firstHeroes = Object.values(heroesDB).filter(hero => hero.opened);
export { GameContext };

function stateReducer(state, action) {
	switch(action.type) {
		case 'OPEN_HERO': {
			return ({
				...state,
				heroes: [ action.payload, ...state.heroes ],
				notification: action.payload.notification || null
			});
		}
		default:
			return ({ ...state, ...action });
	}
}

export default function App() {
	const [ state, setState ] = useReducer(
		stateReducer,
		{
			selectedHero: null,
			heroes: firstHeroes,
			notification: null
		}
	);

	function selectHero(hero) {
		setState({ selectedHero: hero });
	}

	function closeNotification() {
		setState({ notification: null });
	}

	function openHero(newHero) {
		setState({ type: 'OPEN_HERO', payload: newHero });
	}

	const { _, ...contextState } = state; // without `notification`

	return(
		<>
			{
				state.notification &&
				<Notification closeHandler={closeNotification} content={state.notification} />
			}
			<Router>
				<Switch>
					<GameContext.Provider value={contextState}>
						<Route
							exact path='/'
							render={() => <Menu selectHero={selectHero} openHero={openHero} />}
						/>
						<Route exact path='/start' component={Game} />
						<Route exact path='/about' component={About} />
					</GameContext.Provider>
				</Switch>
			</Router>
		</>
	)
}
