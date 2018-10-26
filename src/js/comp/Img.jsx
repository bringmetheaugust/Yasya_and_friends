import React from 'react';

export default class Img extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		return(
			<img className={this.props.className} src={require('../../img/'+this.props.img)}/>
		)
	}
}