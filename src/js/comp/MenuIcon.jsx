import React from 'react';
import {Link} from "react-router-dom";
import Img from './Img.jsx';

export default class MenuIcon extends React.Component {
	constructor(props) {
		super(props);
		this.sendHeroObj = this.sendHeroObj.bind(this);
	}
	sendHeroObj() {
		this.props.selectHero(this.props.obj);
	}
	render() {
		return(
			<Link onClick={this.sendHeroObj} to='/start' className='hero-icon'>
				<Img className='hero-photo' img={this.props.obj.photo} />
				<div className='name'>
					{this.props.obj.name}
				</div>
			</Link>
		)
	}
}