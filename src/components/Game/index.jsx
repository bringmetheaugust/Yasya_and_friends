import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import css from './index.module.sass';
import GetReady from '@components/GetReady/index.jsx';
import GameOver from '@components/GameOver/index.jsx';
import withContext from '@components/withContext/index.jsx';
import switcher from '@engine/switcher.js';
import * as ICONS from '@constants/icons.cjs';

class Game extends PureComponent {
	state = {
		gameOver: false,
		gameStarted: false,
		itemBoard: null,
		points: 0
	};
	canvas = React.createRef();
	
	runGame = () => {
		this.setState({ gameStarted: true });
		this.game.runGame();
	}

	showItemBoard = img => {
		if (this.state.itemBoard) clearTimeout(this.boardTimeout);

		this.setState({ itemBoard: img });
		this.boardTimeout = setTimeout(() => this.setState({ itemBoard: null }), 4000);
	}

	addPoints = points => {
		if (!this.state.gameOver) this.setState({ points: points + this.state.points });
	}

	gameOver = () => this.setState({ gameOver: true });

	componentDidMount() {
		const { selectedHero } = this.props.ctx;

		if (!selectedHero) return;

		const classForSelectedHero = switcher(selectedHero.gameType);

		this.game = new classForSelectedHero(selectedHero, this.gameOver, this.showItemBoard, this.addPoints);
		this.game.init(this.canvas.current);

		// * preload board images
		for (let image in ICONS) {
			new Image().src = ICONS[image];
		}
	}

	componentWillUnmount() {
		if (this.game === undefined) return;

		cancelAnimationFrame(this.game.gameAnimationFrame);
		this.game.stopHeroMethods();
	}

	render() {
		const { selectedHero } = this.props.ctx;
		const { gameOver, itemBoard, points } = this.state;
		
		if (!selectedHero) return <Redirect to='/' />;
		
		return(
			<section className={css.game}>
				{ !this.state.gameStarted && <GetReady runGame={this.runGame} /> }
				<canvas className={css.canvas} ref={this.canvas} />
				<audio autoPlay muted={this.state.gameOver} loop>
					<source src={selectedHero.audio} type="audio/mpeg" />
				</audio>
				{ !gameOver && <div className={css.points}>очки : {points}</div> }
				{
					itemBoard && (
						<div className={css.board}>
							<img className={css.item} src={itemBoard} />
						</div>
					)
				}
				{ gameOver && <GameOver points={points} /> }
			</section>
		)
	}
}

export default withContext(Game);
