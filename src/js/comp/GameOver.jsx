import React from 'react';
import { Link } from "react-router-dom";

export default class GameOver extends React.Component {
	render() {
		return(
			<section className='game-over'>
				<audio autoPlay loop>
					<source src={require("../menu.mp3")} type="audio/mpeg"/>
				</audio>
				<div className='lose'>вы проиграли :(</div>
				<div className='points'>вы набрали <span>{this.props.points}</span> очков</div>
				<Link to='/'>вернуться в меню</Link>
			</section>
		)
	}
}