import React from 'react';
import Img from './Img.jsx';
import GetReady from './GetReady.jsx';
import GameOver from './GameOver.jsx';
import {HeroContext} from './App.jsx';

export default class Game extends React.Component{
	constructor(props){
		super(props);
		this.state={
			go: false,
			attackMassive: [],
			points: 0,
			gameOver: false
		};
		this.changeGo=this.changeGo.bind(this);
		this.heroMove=this.heroMove.bind(this);
		this.goAttack=this.goAttack.bind(this);
		this.checkAttack=this.checkAttack.bind(this);
	}
	heroMove(e){
		const x = e.clientX;
		const y = e.clientY;
		const hero = document.getElementById('hero');
		if (x < hero.getBoundingClientRect().left){
			hero.firstElementChild.style.transform='rotateY(180deg)';
		}
        else if(x>hero.getBoundingClientRect().right){
            hero.firstElementChild.style.transform='';
        }
		hero.style.top=y-50 +'px';
		hero.style.left=x-50 +'px';
	}
	goAttack(){
		this.checkAttack();
		const animationDuration=4;
		let animationSpeed=1;
		let countForClean=0;
		let functionCount = 500;
		const attack = () =>{
			functionCount=functionCount*.998;
			const newDIv ={
				style:{
					left: null,
					animationDuration: null,
				},
				className: 'at'
			};
			const leftPosition=Math.round(Math.random()*100);
			newDIv.style.left=leftPosition+'%';
			newDIv.style.animationDuration=animationDuration/animationSpeed+'s';
			const massive = this.state.attackMassive;
			massive.push(newDIv);
			this.setState({attackMassive:massive});
			this.setState({points:++this.state.points});
			animationSpeed=animationSpeed/.998;
			if(massive.length>10){
				delete massive[countForClean];
				++countForClean;
			};
			this.stopGame=setTimeout(attack,functionCount);
		};
		setTimeout(attack,functionCount);
	}
	changeGo(){
		setTimeout(() =>{
			this.setState({go:true});
		},1000, this.goAttack());
	}
	checkAttack(){
		const hero = document.getElementById('hero');
		this.checkAttack = setInterval(() =>{
			const divs = document.querySelectorAll('.at');
			const cl = hero.getBoundingClientRect().left;
			const cr = hero.getBoundingClientRect().right;
			const ct = hero.getBoundingClientRect().top;
			const cb = hero.getBoundingClientRect().bottom;
			for(let i of divs){
				if(((cl > i.getBoundingClientRect().left && cl < i.getBoundingClientRect().right)||(cr > i.getBoundingClientRect().left && cr < i.getBoundingClientRect().right))&&((ct > i.getBoundingClientRect().top && ct < i.getBoundingClientRect().bottom)||(cb < i.getBoundingClientRect().bottom && cb > i.getBoundingClientRect().top))){
					this.setState({gameOver:true});
					clearInterval(this.checkAttack);
					clearTimeout(this.stopGame);
				}
			};
		},10);
	}
	componentWillUnmount(){
		clearInterval(this.stopGame);
		clearInterval(this.checkAttack);
	}
	render(){
		return(
			<section onClick={this.heroMove} className='game'>
				{
					this.state.go?null:<GetReady changeGo={this.changeGo}/>
				}
				{
					this.state.gameOver?<GameOver points={this.state.points}/>:null
				}
				<HeroContext.Consumer>
					{val =>(
						<React.Fragment>
							<div id='hero'>
								<Img className='hero-photo' img={val.photo}/>
							</div>
							<audio autoPlay muted={this.state.gameOver} loop>
								<source src={require("../"+val.sound)} type="audio/mpeg"/>
							</audio>
							<div className='attack'>
								{
									this.state.attackMassive.map((i,n) =>{
										return (<div style={i.style} key={n} className={i.className}>
													<Img img={val.block}/>
												</div>)
									})
								}
							</div>
						</React.Fragment>
						)
					}
				</HeroContext.Consumer>
				{
					this.state.gameOver?null:<div className='points'>очки : {this.state.points}
				</div>
				}
			</section>
		)
	}
}