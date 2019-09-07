import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './Menu/index.jsx';

const HeroContext = React.createContext();
export { HeroContext };

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { hero: null };
	}
	selectHero = obj => this.setState({ hero: obj });
	render() {
		const context = { hero: this.state.hero };
		return(
			<Router>
				<Switch>
					<HeroContext.Provider value={context}>
						<Route exact path='/' render={() => <Menu selectHero={this.selectHero} />} />
						{/* <Route exact path='/start' render={() => <Game/>} /> */}
					</HeroContext.Provider>
				</Switch>
			</Router>
		)
	}
}
