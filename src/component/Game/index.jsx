import React from 'react';
import { Redirect } from 'react-router-dom';

import GetReady from '../GetReady/index.jsx';
import GameOver from '../GameOver/index.jsx';
import css from './index.module.sass';
import withContext from '../withContext/index.jsx';
import switcher from '../gameEngine/switcher.js';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameOver: false,
			gameStarted: false,
			itemBoard: null
		};
		this.canvas = React.createRef();
	}
	
	runGame = () => {
		this.setState({ gameStarted: true });
		this.game.runGame();
	}

	showItemBoard = img => {
		if (this.state.itemBoard) clearTimeout(this.boardTimeout);

		this.setState({ itemBoard: img });
		this.boardTimeout = setTimeout(() => this.setState({ itemBoard: null }), 3000);
	}

	gameOver = points => this.setState({ gameOver: true, points: points });

	componentDidMount() {
		const { selectedHero } = this.props.ctx;

		if (!selectedHero) return;

		const classForSelectedHero = switcher(selectedHero.id);

		this.game = new classForSelectedHero(selectedHero, this.gameOver,this.showItemBoard);
		this.game.init(this.canvas.current);
	}

	render() {
		const { selectedHero } = this.props.ctx;
		
		if (!selectedHero) return <Redirect to='/' />;
		
		return(
			<section className={css.game}>
				{!this.state.gameStarted && <GetReady runGame={this.runGame} />}
				<canvas className={css.canvas} ref={this.canvas}></canvas>
				<audio autoPlay muted={this.state.gameOver} loop>
					<source src={selectedHero.audio} type="audio/mpeg"/>
				</audio>
				{this.state.itemBoard && <img className={css.item} src={this.state.itemBoard} />}
				{this.state.gameOver && <GameOver points={this.state.points} />}
			</section>
		)
	}
}

export default withContext(Game);
