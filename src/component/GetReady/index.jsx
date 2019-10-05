import React, { Component } from 'react';

import css from './index.module.sass';
import withContext from '../withContext/index.jsx';

class GetReady extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 5 };
	}

	componentDidMount = ()  => {
		this.count = setInterval(() => {

			if (this.state.count === 1) {
				this.setState({ count: 'GO!!!' });
				setTimeout(() => this.props.runGame(), 1000);
				clearInterval(this.count);
				return;
			}
			
			this.setState({ count: --this.state.count });
		}, 1000);
	}

	componentWillUnmount = () => clearInterval(this.count);

	render() {
		return(
			<div className={`${css.ready} full-screen`}>
				<div className={css.title}>{this.props.ctx.selectedHero.description}</div>
				<div className={css.count}>{this.state.count}</div>
				приготовся!!
			</div>
		)
	}
}

export default withContext(GetReady);
