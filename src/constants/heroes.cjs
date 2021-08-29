const { HUNGRY_GAME_TYPE, RALLY_GAME_TYPE, RABBIT_GAME_TYPE } =  require('@constants/gameTypes.js');

module.exports = {
	yasya: {
		id: 1,
		gameType: RALLY_GAME_TYPE,
		heroImg: require('@src/media/heroes/yasya/hero.png').default,
		enemyImg: require('@src/media/heroes/yasya/enemy.jpeg').default,
		audio: require('@src/media/heroes/yasya/audio.mp3').default,
		name: 'Яся',
		description: 'Помогите Ясе сбежать с АТБ и добраться до Синявки!',
		about: `Яся пережила на своём пути очень трудные моменты, которые заставляли
			бедняжку часто менять работу и мировозрение. Судьба никак не разрешала часто ездить
			в своё родное село и проводить время с родными, иногда просто сидя в своей
			комнате и, смотря на сарай с курями, пускать скупую слезу. Несмотря на все трудности,
			она нашла смелость, и, поймав удачу, сделала серьёзный шаг переехав в Киев,
			где не так часто встретишь окна, которые открывают вид на чей-то сарай, что
			позволило бедняжке по-немного забыть о той боли, которая напоминала ей о своём селе,
			о Синявке..
		`,
		opened: true,
		secretWord: null
	},
	niko: {
		id: 2,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/niko/hero.png').default,
		enemyImg: require('@src/media/heroes/niko/enemy.jpg').default,
		audio: require('@src/media/heroes/niko/audio.mp3').default,
		name: 'Коля',
		description: 'Помогите Коле поймать все таблетки и вылечиться от шизофрении!',
		about: `Не смотря на все тревоги со стороны родителей и близких,
			Коля никогда не хотел жить по правилам и всегда давал отпор системе.
			Вопреки своёму взрослению, он постоянно игнорировал реальность,
			подвергая себя новыми приключениями. Однажды он даже сумел побороть законы физики,
			которые должны были поломать его жизнь после падения с очень высокого
			дерева, но Коля дал им отпор и остался почти здоров. После этого, казалось бы,
			безрассудного поединка с Ньютоном, истории и легенды о его подвигах
			быстро расходились по всему Каневу, часто привлекая внимание людей.
		`,
		opened: true,
		secretWord: null
	},
	yelya: {
		id: 3,
		gameType: RABBIT_GAME_TYPE,
		heroImg: require('@src/media/heroes/yelya/hero.png').default,
		enemyImg: require('@src/media/heroes/yelya/enemy.png').default,
		audio: require('@src/media/heroes/yelya/audio.mp3').default,
		name: 'Еля',
		description: 'Помогите Еле сбежать от негров!',
		about: `Итс нау о невер, кам холд ми тайт, кисс ми май дарлинг, би май
			тунайт. Туморол вил би тудей. Итс нау о невер май лав вил нот веит..
		`,
		opened: false,
		secretWord: 'еля'
	},
	natasha: {
		id: 4,
		gameType: RALLY_GAME_TYPE,
		heroImg: require('@src/media/heroes/natasha/hero.png').default,
		enemyImg: require('@src/media/heroes/natasha/enemy.png').default,
		audio: require('@src/media/heroes/natasha/audio.mp3').default,
		name: 'Наташа',
		description: 'Помогите Наташе сбежать от алкоголизма и не спиться!',
		about: `Пока жители Канева, окутанные во тьму этого гиблого места, медленно
			борясь против алкоголизма и быдло-популяции на улицах города, Наташа
			пытается соблюдать баланс добра и зла, безостановочно скупая весь алкоголь
			и уничтожая его внутри себя. Но давление со стороны близких и постоянно
			растущая цена спиртного с каждым днём значительно усложняет ей жизнь
			и ставит под угрозу её главный план - выйти из запоя..
		`,
		opened: false,
		secretWord : 'abubabu'
	},
	vitya: {
		id: 5,
		gameType: RABBIT_GAME_TYPE,
		heroImg: require('@src/media/heroes/vitya/hero.png').default,
		enemyImg: require('@src/media/heroes/vitya/enemy.jpg').default,
		audio: require('@src/media/heroes/vitya/audio.mp3').default,
		name: 'Уитя',
		description: 'Помоги Уите сбежать от польского пана и не поехать в Польшу на стройку!',
		about: `Не смотря на неизлечимый логоневроз и привычку
			пару раз покрутиться вокруг себя перед тем как войти в какой-то дверной проём,
			Уитя всегда оставался тёмным кардиналом души компании, её могзом и двигателем
			безудержного веселья. Трудно найти человека, который сможет бросить свой
			дом и мечту, пересечь высокие холмы своей родины и остаться там, где
			придется мешать цемент под пыльным присмотром польского пана и дышать
			вонью одежды, пропитанную потом, болью и разрушенными мечтами.
		`,
		opened: true,
		secretWord: null
	},
	nester: {
		id: 7,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/nester/hero.png').default,
		enemyImg: require('@src/media/heroes/nester/enemy.jpg').default,
		audio: require('@src/media/heroes/nester/audio.mp3').default,
		name: 'Нестер',
		description: 'Помогите Нестеру поймать все гантели и не стать дрыщем!',
		about: 'Андрэус, я в тебя верю!!!',
		opened: false,
		secretWord: 'циганка'
	},
	dasha: {
		id: 8,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/dasha/hero.png').default,
		enemyImg: require('@src/media/heroes/dasha/enemy.png').default,
		audio: require('@src/media/heroes/dasha/audio.mp3').default,
		name: 'Дашка',
		description: 'Помогите Дашке выучить Реакт!',
		about: `Ничто так не стремиться вырваться с плена тьмы и тщености, как
			глупенькая московская принцесса из отдела контент-менеджмента.
		`,
		opened: false,
		secretWord: 'дура'
	},
	raya: {
		id: 9,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/raya/hero.jpg').default,
		enemyImg: require('@src/media/heroes/raya/enemy.jpg').default,
		audio: require('@src/media/heroes/raya/audio.mp3').default,
		name: 'Раечка',
		description: 'Помогите Раечке съесть всю Фрутоняню и не помереть с голоду!',
		about: `Мне так и не удалось понять кто ты на самом деле.`,
		opened: false,
		secretWord: 'кабанчик'
	},
	raya: {
		id: 10,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/megija/hero.jpg').default,
		enemyImg: require('@src/media/heroes/megija/enemy.jpg').default,
		audio: require('@src/media/heroes/megija/audio.mp3').default,
		name: 'Мегия',
		description: 'Помогите Мегии уделить Рафику больше внимания!',
		about: `Просто спасибо за то, что ты есть.`,
		opened: false,
		secretWord: 'рафик'
	}
};
