import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { GameContext } from '../App.jsx';
import css from './index.module.sass';

export default class GetReady extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 5, isShow: true };
	}
	componentDidMount = ()  => {
		this.count = setInterval(() => {
			if (this.state.count === 1) {
				this.setState({ count: 'GO!!!' });
				setInterval(() => {
					this.props.runGame(),
					this.setState({ isShow: false });
				}, 1000);
				clearInterval(this.count);
				return;
			}
			this.setState({ count: --this.state.count });
		}, 1000);
	}
	componentWillUnmount = () => clearInterval(this.count);
	render() {
		if (!this.state.isShow) return null;
		return(
			<GameContext.Consumer>
				{ctx => (
					<div className={`${css.ready} full-screen`}>
						{
							ctx.selectedHero ?
								<div className={css.title}>{ctx.selectedHero.description}</div> :
								<Redirect to='/' />
						}
						<div className={css.count}>{this.state.count}</div>
						приготовся!!
					</div>
					)
				}
			</GameContext.Consumer>
		)
	}
}
