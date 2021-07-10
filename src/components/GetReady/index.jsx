import React, { useState, useEffect } from 'react';

import css from './index.module.sass';
import withContext from '../withContext/index.jsx';

const GetReady = props => {
	const [count, setCount] = useState(5);

	useEffect(() => {
		const countInterval = setInterval(() => {

			if (count === 1) {
				setCount('GO!!!' );
				setTimeout(() => props.runGame(), 1000);
				clearInterval(countInterval);
				return;
			}
			
			setCount(count - 1);
		}, 1000);

		return () => clearInterval(countInterval);
	});

	return(
		<div className={`${css.ready} full-screen`}>
			<div className={css.title}>{props.ctx.selectedHero.description}</div>
			<div className={css.count}>{count}</div>
			приготовься!!
		</div>
	);
};

export default withContext(GetReady);
