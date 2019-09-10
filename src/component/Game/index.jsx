import React from 'react';

import GetReady from '../GetReady/index.jsx';
import GameOver from '../GameOver/index.jsx';
import css from './index.module.sass';
import GameEngine from './engine/index.js';
import withContext from '../withContext/index.jsx';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = { gameOver: false };
		this.canvas = React.createRef();
	}
	runGame = () => {}
	componentDidMount = () => {
		this.gameEngine = new GameEngine(this.props.ctx.selectedHero);
		this.gameEngine.init(this.canvas.current);
	};
	render() {
		
		return(
			<section className={css.game}>
				<GetReady runGame={this.runGame} />
				<canvas className='full-screen' ref={this.canvas}></canvas>
				<audio autoPlay muted={this.state.gameOver} loop>
					{/* <source src={require("../"+val.sound)} type="audio/mpeg"/> */}
				</audio>
				{this.state.gameOver && <GameOver />}
			</section>
		)
	}
}

export default withContext(Game);
