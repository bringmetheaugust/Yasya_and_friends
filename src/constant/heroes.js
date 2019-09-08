const HEROES = {
	niko: {
		id: 1,
		img: require('@src/media/heroes/niko/hero.png'),
		name: 'Коля',
		description: 'помоги Коле убежать от санитаров!',
		opened: true
	},
	yasya: {
		id: 2,
		img: require('@src/media/heroes/yasya/hero.png'),
		name: 'Яся',
		description: 'помоги Ясе добраться до Синявки!',
		opened: true
	},
	yelya: {
		id: 3,
		img: require('@src/media/heroes/yelya/hero.png'),
		name: 'Еля',
		description: 'помоги Еле убежать от касаний чужих людей!',
		opened: true
	},
	natasha: {
		id: 4,
		img: require('@src/media/heroes/natasha/hero.png'),
		name: 'Наташа',
		description: 'помоги Наташе не спиться!',
		opened: false
	},
	vitya: {
		id: 5,
		img: require('@src/media/heroes/vitya/hero.png'),
		name: 'Витя',
		description: 'помоги Вите не поехать в Польшу!',
		opened: false
	}
};


export default HEROES;
