import React from 'react';

export default class Img extends React.Component {
	render() {
		return(
			<img className={this.props.className} src={require('../../img/' + this.props.img)}/>
		)
	}
}