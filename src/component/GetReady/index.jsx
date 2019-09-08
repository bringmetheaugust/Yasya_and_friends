import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { GameContext } from '../App.jsx';
import css from './index.module.sass';

export default class GetReady extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 5 };
	}
	componentDidMount = ()  => {
		this.count = setInterval(() => {
			if (this.state.count === 1) {
				this.setState({ count: 'GO!!!' });
				clearInterval(this.count);
				setInterval(() => this.props.runGame(), 1000);
				return;
			}
			this.setState({ count: --this.state.count });
		}, 1000);
	}
	componentWillUnmount = () => clearInterval(this.count);
	render() {
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
