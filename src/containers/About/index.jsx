import React, { useContext } from "react"

import css from "./style.module.sass"
import { GameContext } from "@src/App.jsx"

const ABOUT_ME = `
    Хочу подякувати всім, хто підтримував мене в моїх безнадійних починаннях,
    всім, у кого були сумніви щодо успіху цієї затії і тим, хто ні хвилини не сумнівався.
    <br/>
    Так само вдячний тим, хто був поруч з самого початку, і тим, хто не зумів залишитися до самого кінця.
`

const About = () => {
	const context = useContext(GameContext)

	return (
		<section className={css.about}>
			<audio autoPlay>
				<source src={require("@src/media/about/about.mp3").default} type="audio/mpeg" />
			</audio>
			<div className={css.me}>
				<img src={require("@src/media/about/me.jpg").default} />
				<div className={css.txt} dangerouslySetInnerHTML={{ __html: ABOUT_ME }} />
			</div>
			<div className={css.heroes}>
				<h1>Про наших героїв</h1>
				{context.heroes.map(hero => (
					<ul className={css.hero} key={hero.id}>
						<li className={css.title}>
							<h2>{hero.name}</h2>
							<img src={hero.heroImg} />
						</li>
						<div className={css.txt}>{hero.about}</div>
					</ul>
				))}
			</div>
			<div className={css.bye}>До зустрічі в Аду!</div>
		</section>
	)
}

export default About
