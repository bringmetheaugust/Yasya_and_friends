import React from 'react';
import MenuIcon from './MenuIcon.jsx';
import {heroes} from '../heroes.js';

export default class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		return(
			<section className='menu'>
				<audio autoPlay loop>
					<source src={require("../menu.mp3")} type="audio/mpeg"/>
				</audio>
				<div className='menu-window'>
					<div className='menu-window-select'>вибери своего героя!!</div>
					{
						heroes.map((i,n) =><MenuIcon selectHero={this.props.selectHero} obj={i} key={n}/>)
					}
				</div>
				<div className='i'>сделано Августом.В августе</div>
			</section>
		)
	}
}