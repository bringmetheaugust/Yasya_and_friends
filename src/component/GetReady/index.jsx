import React, { Component } from 'react';

import css from './index.module.sass';
import withContext from '../withContext/index.jsx';

class GetReady extends Component {
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
			<div className={`${css.ready} full-screen`}>
				<div className={css.title}>{this.props.ctx.selectedHero.description}</div>
				<div className={css.count}>{this.state.count}</div>
				приготовся!!
			</div>
		)
	}
}

export default withContext(GetReady);
