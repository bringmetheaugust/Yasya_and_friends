import '../style/main.sass';
import '../html/main.pug';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './comp/App.jsx';

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);