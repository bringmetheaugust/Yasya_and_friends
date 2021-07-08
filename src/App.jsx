import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Menu from '@components/Menu/index.jsx';
import Game from '@components/Game/index.jsx';
import About from '@components/About/index.jsx';
import heroesDB from '@constants/heroes.js';

const GameContext = React.createContext();
const firstHeroes = Object.values(heroesDB).filter(hero => hero.opened);
export { GameContext };

export default class App extends Component {
	state = { selectedHero: null, heroes: firstHeroes };

	selectHero = hero => this.setState({ selectedHero: hero });

	openHero = newHero => {
		const { heroes } = this.state;

		if (heroes.some(hero => hero.id === newHero.id)) return;
		
		this.setState({ heroes: [ ...heroes, newHero ] });
	}

	render() {
		return(
			<Router>
				<Switch>
					<GameContext.Provider value={this.state}>
						<Route
							exact path='/'
							render={() => <Menu selectHero={this.selectHero} openHero={this.openHero} />}
						/>
						<Route exact path='/start' component={Game} />
						<Route exact path='/about' component={About} />
					</GameContext.Provider>
				</Switch>
			</Router>
		)
	}
}
