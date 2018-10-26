import React from 'react';
import Menu from './Menu.jsx';
import Game from './Game.jsx';
import { HashRouter as Router, Switch, Route, hashHistory} from "react-router-dom";

const HeroContext = React.createContext();
export {HeroContext};

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			hero:null,
		};
		this.selectHero=this.selectHero.bind(this);
	}
	selectHero(obj){
		this.setState({hero:obj});
	}
	render(){
		return(
			<Router>
				<Switch>
					<HeroContext.Provider value={this.state.hero}>
						<Route exact path='/' render={() =><Menu selectHero={this.selectHero}/>}/>
						<Route exact path='/start' render={() =><Game/>}/>
					</HeroContext.Provider>
				</Switch>
			</Router>
		)
	}
}
////или hero через стате или через контекст