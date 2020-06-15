import React, { Component } from 'react';
import { Link } from "react-router-dom";

import css from './index.module.sass';
import * as SECRET_WORDS from '@src/constant/secretWords.js';
import withContext from '../withContext/index.jsx';

const MENU_AUDIO = require("@src/media/menu/menu.mp3"); 

class Menu extends Component {
	state = { secretWord: '' };

	checkSecretWord = ({ key }) => {
		const completedLetters = this.state.secretWord + key;
		
		switch (true) {
			case (completedLetters.includes(SECRET_WORDS.NATASHA_SECRET_WORD)): {
				this.setState({ secretWord: '' });
				this.props.openHero('natasha');
				return;
			}
			case (completedLetters.includes(SECRET_WORDS.VITYA_SECTER_WORD)): {
				this.setState({ secretWord: '' });
				this.props.openHero('vitya');
				return;
			}
			case (completedLetters.includes(SECRET_WORDS.SALIY_SECRET_WORD)): {
				this.setState({ secretWord: '' });
				this.props.openHero('saliy');
				return;
			}
			case (completedLetters.includes(SECRET_WORDS.NESTER_SECRET_WORD)): {
				this.setState({ secretWord: '' });
				this.props.openHero('nester');
				return;
			}
			case (completedLetters.includes(SECRET_WORDS.DASHA_SECTER_WORD)): {
				this.setState({ secretWord: '' });
				this.props.openHero('dasha');
				return;
			}
		}

		this.setState({ secretWord: completedLetters});
	}

	componentDidMount = () => addEventListener('keydown', this.checkSecretWord);

	componentWillUnmount =() => removeEventListener('keydown', this.checkSecretWord);
	
	render() {
		return(
			<section className={css.menu}>
				<audio autoPlay loop>
					<source src={MENU_AUDIO} type="audio/mpeg" />
				</audio>
				<div className={css.heroes}>
					<div className={css.title}>выбери своего героя!!</div>
						{
							this.props.ctx.heroes.map((hero,n) => (
								<Link onClick={() => this.props.selectHero(hero)} to='/start' className={css.hero} key={n}>
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
