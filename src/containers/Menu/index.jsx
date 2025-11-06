import React, { useState, useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import SecretWordModal from "@containers/SecretWordModal"
import css from "./index.module.sass"
import { GameContext } from "@src/App.jsx"

const Menu = ({ selectHero, openHero }) => {
	const [isOpenSecretModal, openSecretModal] = useState(false)
	const context = useContext(GameContext)
	const audioRef = useRef()

	useEffect(() => {
		audioRef.current.play()
	}, [])

	return (
		<section className={css.menu}>
			<audio autoPlay loop ref={audioRef}>
				<source src={require("@src/media/menu/menu.mp3").default} type="audio/mpeg" />
			</audio>
			<div className={css.heroes}>
				<div className={css.title}>Обери свого героя!!</div>
				{context.heroes.map(hero => (
					<Link onClick={() => selectHero(hero)} to="/start" className={css.hero} key={hero.id}>
						<img className={css["hero-icon"]} src={hero.heroImg} />
						<div className={css.name}>{hero.name}</div>
					</Link>
				))}
			</div>
			<div className={css.author}>
				<Link to="/about">зроблено Августом. В серпні</Link>
			</div>
			<ul className={css.options}>
				<li onClick={() => openSecretModal(true)} className={css.secret}>
					secret
				</li>
			</ul>
			{isOpenSecretModal && (
				<SecretWordModal successInputHandler={openHero} closeModal={() => openSecretModal(false)} />
			)}
		</section>
	)
}

export default Menu
