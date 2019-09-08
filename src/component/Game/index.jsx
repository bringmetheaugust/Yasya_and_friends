import React from 'react';

import GetReady from '../GetReady/index.jsx';
import GameOver from '../GameOver/index.jsx';
import { GameContext } from '../App.jsx';
import css from './index.module.sass';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStarted: false,
			gameOver: false,
			points: 0
		};
	}
	runGame = () => {
		this.setState({ isStarted: true });
	}
	render() {
		return(
			<section className={css.game}>
				{!this.state.isStarted && <GetReady runGame={this.runGame} />}
				{this.state.gameOver && <GameOver />}
				<GameContext.Consumer>
					{ctx => (
						<React.Fragment>
							<audio autoPlay muted={this.state.gameOver} loop>
								{/* <source src={require("../"+val.sound)} type="audio/mpeg"/> */}
							</audio>
						</React.Fragment>
						)
					}
				</GameContext.Consumer>
				{this.state.gameOver && <div className='points'>очки : {this.state.points}</div>}
			</section>
		)
	}
}
