const HEROES = {
	yasya: {
		id: 1,
		heroImg: require('@src/media/heroes/yasya/hero.png'),
		enemyImg: require('@src/media/heroes/yasya/enemy.jpeg'),
		audio: require('@src/media/heroes/yasya/audio.mp3'),
		name: 'Яся',
		description: 'помоги Ясе добраться до Синявки!',
		opened: true
	},
	niko: {
		id: 2,
		heroImg: require('@src/media/heroes/niko/hero.png'),
		enemyImg: require('@src/media/heroes/niko/enemy.jpg'),
		audio: require('@src/media/heroes/niko/audio.mp3'),
		name: 'Коля',
		description: 'помоги Коле убежать от санитаров!',
		opened: true
	},
	yelya: {
		id: 3,
		heroImg: require('@src/media/heroes/yelya/hero.png'),
		enemyImg: require('@src/media/heroes/yelya/enemy.png'),
		audio: require('@src/media/heroes/yelya/audio.mp3'),
		name: 'Еля',
		description: 'помоги Еле убежать от касаний чужих людей!',
		opened: true
	},
	natasha: {
		id: 4,
		heroImg: require('@src/media/heroes/natasha/hero.png'),
		enemyImg: require('@src/media/heroes/natasha/enemy.png'),
		audio: require('@src/media/heroes/natasha/audio.mp3'),
		name: 'Наташа',
		description: 'помоги Наташе не спиться!',
		opened: false
	},
	vitya: {
		id: 5,
		heroImg: require('@src/media/heroes/vitya/hero.png'),
		enemyImg: require('@src/media/heroes/vitya/enemy.jpg'),
		audio: require('@src/media/heroes/vitya/audio.mp3'),
		name: 'Витя',
		description: 'помоги Вите не поехать в Польшу!',
		opened: false
	},
	saliy: {
		id: 6,
		heroImg: require('@src/media/heroes/saliy/hero.png'),
		enemyImg: require('@src/media/heroes/saliy/enemy.jpg'),
		audio: require('@src/media/heroes/saliy/audio.mp3'),
		name: 'Саша',
		description: 'помогите Саше устроится на Нашу Рябу!',
		opened: false
	}
};

export const HEROES_ID= {
	niko: HEROES.niko.id,
	yasya: HEROES.yasya.id,
	yelya: HEROES.yelya.id,
	natasha: HEROES.natasha.id,
	vitya: HEROES.vitya.id,
	saliy: HEROES.saliy.id
}

export default HEROES;
