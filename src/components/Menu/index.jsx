import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import css from './index.module.sass';
import heroes from '@constants/heroes.js';
import withContext from '../withContext/index.jsx';

const MENU_AUDIO = require("@src/media/menu/menu.mp3"); 

class Menu extends PureComponent {
	state = { secretWord: '' };

	checkSecretWord = ({ key }) => {
		const completedLetters = this.state.secretWord + key;

		const secretHero = Object.values(heroes).find(({ secretWord }) => completedLetters.includes(secretWord));
		
		if (!secretHero) return this.setState({ secretWord: completedLetters});

		this.props.openHero(secretHero);
		this.setState({ secretWord: '' });
	}

	componentDidMount = () => addEventListener('keydown', this.checkSecretWord);

	componentWillUnmount = () => removeEventListener('keydown', this.checkSecretWord);
	
	render() {
		return(
			<section className={css.menu}>
				<audio autoPlay loop>
					<source src={MENU_AUDIO} type="audio/mpeg" />
				</audio>
				<div className={css.heroes}>
					<div className={css.title}>выбери своего героя!!</div>
						{
							this.props.ctx.heroes.map((hero, n) => (
								<Link
									onClick={() => this.props.selectHero(hero)}
									to='/start'
									className={css.hero}
									key={n}
								>
									<img className={css['hero-icon']} src={hero.heroImg} />
									<div className={css.name}>{hero.name}</div>
								</Link>
							))
						}
				</div>
				<div className={css.author}>
					<Link to='/about'>сделано Августом.В августе</Link>
				</div>
			</section>
		)
	}
}

export default withContext(Menu);
