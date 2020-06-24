import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import css from './index.module.sass';
import GetReady from '@components/GetReady/index.jsx';
import GameOver from '@components/GameOver/index.jsx';
import withContext from '@components/withContext/index.jsx';
import switcher from '@engine/switcher.js';

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
		this.boardTimeout = setTimeout(() => this.setState({ itemBoard: null }), 3000);
	}

	addPoints = points => {
		if (!this.state.gameOver) this.setState({ points: points + this.state.points || ++this.state.points });
	}

	gameOver = () => this.setState({ gameOver: true });

	componentDidMount() {
		const { selectedHero } = this.props.ctx;

		if (!selectedHero) return;

		const classForSelectedHero = switcher(selectedHero.id);

		this.game = new classForSelectedHero(selectedHero, this.gameOver,this.showItemBoard, this.addPoints);
		this.game.init(this.canvas.current);
	}

	componentWillUnmount() {
		if (this.game === undefined) return;

		cancelAnimationFrame(this.game.gameAnimationFrame);
		this.game.stopHeroMethods();
	}

	render() {
		const { selectedHero } = this.props.ctx;
		
		if (!selectedHero) return <Redirect to='/' />;
		
		return(
			<section className={css.game}>
				{!this.state.gameStarted && <GetReady runGame={this.runGame} />}
				<canvas className={css.canvas} ref={this.canvas}></canvas>
				<audio autoPlay muted={this.state.gameOver} loop>
					<source src={selectedHero.audio} type="audio/mpeg" />
				</audio>
				{!this.state.gameOver && <div className={css.points}>очки : {this.state.points}</div>}
				{this.state.itemBoard && <img className={css.item} src={this.state.itemBoard} />}
				{this.state.gameOver && <GameOver points={this.state.points} />}
			</section>
		)
	}
}

export default withContext(Game);
