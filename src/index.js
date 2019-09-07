import '@src/style/index.sass';
import '@src/html/index.pug';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@src/component/App.jsx';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
