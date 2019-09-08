import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './Menu/index.jsx';
import Game from './Game/index.jsx';
import heroesDB from '@src/constant/heroes.js';

const GameContext = React.createContext();
const firstHeroes = Object.values(heroesDB).filter(hero => hero.opened);
export { GameContext };

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedHero: null,
			heroes: firstHeroes
		};
	}
	selectHero = hero => this.setState({ selectedHero: hero });
	openHero = hero => {
		const newHero = heroesDB[hero];
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
						<Route exact path='/start' render={() => <Game/>} />
					</GameContext.Provider>
				</Switch>
			</Router>
		)
	}
}
