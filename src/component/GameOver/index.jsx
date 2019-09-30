import React from 'react';
import { Link } from "react-router-dom";
import css from './index.module.sass';

const GameOver = ({ points }) =>
	<section className={`${css['game-over']} full-screen`}>
		<audio autoPlay loop>
			<source src={require("@src/media/menu/menu.mp3")} type="audio/mpeg" />
		</audio>
		<div className={css.title}>вы проиграли :(</div>
		<div className={css.points}>вы набрали
			<span>{points}</span> очков
		</div>
		<Link to='/' className={css.back}>вернуться в меню</Link>
	</section>

export default GameOver;
