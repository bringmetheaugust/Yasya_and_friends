import React, { PureComponent } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Menu from '@containers/Menu/index.jsx';
import Game from '@containers/Game/index.jsx';
import About from '@containers/About/index.jsx';
import heroesDB from '@constants/heroes.cjs';
import Notification from '@containers/Notification/index.jsx';

const GameContext = React.createContext();
const firstHeroes = Object.values(heroesDB).filter(hero => hero.opened);
export { GameContext };

export default class App extends PureComponent {
	state = {
		selectedHero: null,
		heroes: firstHeroes,
		notification: null
	};

	selectHero = hero => this.setState({ selectedHero: hero });

	closeNotification = () => this.setState({ notification: null });

	openHero = newHero => {
		const { heroes } = this.state;
		
		this.setState({ heroes: [ newHero, ...heroes ] });

		if (newHero.notification) this.setState({ notification: newHero.notification });
	}

	render() {
		return(
			<>
				{
					this.state.notification &&
					<Notification closeHandler={this.closeNotification} content={this.state.notification} />
				}
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
			</>
		)
	}
}
