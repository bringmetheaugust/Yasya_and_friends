import React from "react"
import { Link } from "react-router-dom"

import css from "./index.module.sass"

const GameOver = ({ points }) => (
	<section className={`${css["game-over"]} full-screen`}>
		<audio autoPlay loop>
			<source src={require("@src/media/menu/menu.mp3").default} type="audio/mpeg" />
		</audio>
		<div className={css.title}>ви програли :(</div>
		<div className={css.points}>
			ви набрали
			<span>{points}</span> очок
		</div>
		<Link to="/" className={css.back}>
			повернутися в меню
		</Link>
	</section>
)

export default GameOver
