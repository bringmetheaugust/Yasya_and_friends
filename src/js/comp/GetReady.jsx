import React from 'react';
import {HeroContext} from './App.jsx';

export default class GetReady extends React.Component{
	constructor(props){
		super(props);
		this.state={
			count: 5
		};
	}
	componentDidMount(){
		const count=setInterval(() =>{
			if(this.state.count==1){
				this.setState({count:'GO!!!'});
				clearInterval(count);
				this.props.changeGo();
				return;
			}
			this.setState({count:--this.state.count});
		}, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.count);
	}
	render(){
		return(
			<HeroContext.Consumer>
				{val =>(
					<div className='get-ready abs'>
						{val.des}
						<div className='count'>{this.state.count}</div>
						приготовся!!
					</div>
					)
				}
			</HeroContext.Consumer>
		)
	}
}