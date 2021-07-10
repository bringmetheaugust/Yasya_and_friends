import React, { useState, useEffect, useContext } from 'react';

import css from './index.module.sass';
import { GameContext } from '@src/App.jsx';

const GetReady = ({ runGame }) => {
	const [count, setCount] = useState(5);
	const context = useContext(GameContext);

	useEffect(() => {
		const countInterval = setInterval(() => {

			if (count === 1) {
				setCount('GO!!!');
				setTimeout(() => runGame(), 1000);
				clearInterval(countInterval);
				return;
			}
			
			setCount(count - 1);
		}, 1000);

		return () => clearInterval(countInterval);
	});

	return(
		<div className={`${css.ready} full-screen`}>
			<div className={css.title}>{context.selectedHero.description}</div>
			<div className={css.count}>{count}</div>
			приготовьтесь!!
		</div>
	);
};

export default GetReady;
