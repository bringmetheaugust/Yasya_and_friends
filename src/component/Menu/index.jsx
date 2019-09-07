import React from 'react';
import {Link} from "react-router-dom";

import heroes from '@src/constant/heroes.js';
import css from './index.module.sass';

const MENU_AUDIO = require("@src/media/menu/menu.mp3");

export default class Menu extends React.Component {
	render() {
		return(
			<section className={css.menu}>
				<audio autoPlay loop>
					<source src={MENU_AUDIO} type="audio/mpeg" />
				</audio>
				<div className={css.heroes}>
					<div className={css.title}>выбери своего героя!!</div>
					{
						Object.values(heroes).map((hero,n) => 
							<Link onClick={this.sendHeroObj} to='/start' className={css.hero} key={n}>
							 	<img className={css['hero-icon']} src={hero.img} />
								<div className={css.name}>{hero.name}</div>
							</Link>
						)
					}
				</div>
				<div className={css.author}>сделано Августом.В августе</div>
			</section>
		)
	}
}
