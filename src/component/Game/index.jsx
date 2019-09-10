import React from 'react';

import GetReady from '../GetReady/index.jsx';
import GameOver from '../GameOver/index.jsx';
import { GameContext } from '../App.jsx';
import css from './index.module.sass';
import GameEngine from './engine/index.js';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameOver: false,
			points: 0
		};
		this.canvas = React.createRef();
	}
	runGame = () => {}
	componentDidMount = () => {
		this.gameEngine = new GameEngine();
		this.gameEngine.init(this.canvas.current);
	};
	render() {
		
		return(
			<section className={css.game}>
				<canvas className='full-screen' ref={this.canvas}></canvas>
				<GetReady runGame={this.runGame} />
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
			</section>
		)
	}
}
