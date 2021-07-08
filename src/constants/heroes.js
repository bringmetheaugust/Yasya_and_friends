import { HUNGRY_GAME_TYPE, RALLY_GAME_TYPE, RABBIT_GAME_TYPE } from '@constants/gameTypes';

const HEROES = {
	yasya: {
		id: 1,
		gameType: RALLY_GAME_TYPE,
		heroImg: require('@src/media/heroes/yasya/hero.png'),
		enemyImg: require('@src/media/heroes/yasya/enemy.jpeg'),
		audio: require('@src/media/heroes/yasya/audio.mp3'),
		name: 'Яся',
		description: 'помогите Ясе сбежать с АТБ и добраться до Синявки!',
		about: 'Яся пережила на своём пути очень трудные моменты, которые заставляли\
			бедняжку часто менять работу и мировозрение, которое не давало часто ездить\
			в своё родное село и проводить время с родными, иногда просто сидя в своей\
			комнате, смотря на сарай с курями, скупо пуская слезу. Несмотря на все трудности,\
			она нашла смелость, и, поймав удачу, сделала серьёзный шаг переехав в Киев,\
			где не так часто встретишь окна, которые открывают вид на чей-то сарай, что\
			позволило бедняжке по-немного забыть о той боли, которая напоминала ей о своём селе,\
			о Синявке..\
		',
		opened: true,
		secretWord: null
	},
	niko: {
		id: 2,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/niko/hero.png'),
		enemyImg: require('@src/media/heroes/niko/enemy.jpg'),
		audio: require('@src/media/heroes/niko/audio.mp3'),
		name: 'Коля',
		description: 'помогите Коле поймать все таблетки и вылечиться от шизофрении!',
		about: 'Не смотря на все тревоги со стороны родителей и близких,\
			Нико никогда не хотел жить по правилам и подчиняться каким-либо\
			правила жизни, и, вопреки своёму взрослению, он постоянно\
			игнорировал реальность, подвергая себя приключениям.\
			Однажды он даже сумел побороть законы физики,\
			которые должны были изменить его жизнь после падения с очень высокого\
			дерева, но Нико дал им отпор и остался почти здоров. После этого, казалось бы,\
			безрассудного поединка с законом Ньютона, истории и легенды о его подвигах\
			быстро расходились по всему Каневу, часто привлекая внимание людей.\
		',
		opened: true,
		secretWord: null
	},
	yelya: {
		id: 3,
		gameType: RABBIT_GAME_TYPE,
		heroImg: require('@src/media/heroes/yelya/hero.png'),
		enemyImg: require('@src/media/heroes/yelya/enemy.png'),
		audio: require('@src/media/heroes/yelya/audio.mp3'),
		name: 'Еля',
		description: 'помогите Еле сбежать от негров!',
		about: 'Итс нау о невер, кам холд ми тайт, кисс ми май дарлинг, би май\
			тунайт. Туморол вил би тудей. Итс нау о невер май лав вил нот веит..\
		',
		opened: false,
		secretWord: 'еля'
	},
	natasha: {
		id: 4,
		gameType: RALLY_GAME_TYPE,
		heroImg: require('@src/media/heroes/natasha/hero.png'),
		enemyImg: require('@src/media/heroes/natasha/enemy.png'),
		audio: require('@src/media/heroes/natasha/audio.mp3'),
		name: 'Наташа',
		description: 'помогите Наташе сбежать от алкоголизма и не спиться!',
		about: 'Пока жители Канева, окутанные во тьму этого гиблого места, медленно\
			борясь против алкоголизма и быдло-популяции на улицах города, Наташа\
			пытается соблюдать баланс добра и зла, безостановочно скупая весь алкоголь\
			и уничтожая его внутри себя. но давление со стороны близких и постоянно\
			растущая цена спирного значительно усложняет её цель с каждим разом,\
			что ставит под угрозу её план - выйти из запоя..\
		',
		opened: false,
		secretWord : 'abubabu'
	},
	vitya: {
		id: 5,
		gameType: RABBIT_GAME_TYPE,
		heroImg: require('@src/media/heroes/vitya/hero.png'),
		enemyImg: require('@src/media/heroes/vitya/enemy.jpg'),
		audio: require('@src/media/heroes/vitya/audio.mp3'),
		name: 'Витя',
		description: 'помоги Вите сбежать от польского пана и не поехать в Польшу!',
		about: 'Не смотря на все жизненные преграды, неизлечимый логоневроз и привычку\
			пару раз покрутиться вокруг себя перед тем как войти в какой-то дверную проём,\
			Витя всегда оставался тёмным кардиналом души компании, её могзом и двигателем\
			безудержного веселья. Трудно найти человека, который сможет бросить свой\
			дом и мечту, смело отправиться ломать далеко за высокие холмы своей родины\
			и там сносить старые стены и строить новые под пыльным присмотром польского\
			пана.\
		',
		opened: false,
		secretWord: 'angular'
	},
	nester: {
		id: 7,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/nester/hero.png'),
		enemyImg: require('@src/media/heroes/nester/enemy.jpg'),
		audio: require('@src/media/heroes/nester/audio.mp3'),
		name: 'Нестер',
		description: 'помогите Нестеру поймать все гантели и не стать дрыщем!',
		about: 'TODO',
		opened: false,
		secretWord: 'циганка'
	},
	dasha: {
		id: 8,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/dasha/hero.png'),
		enemyImg: require('@src/media/heroes/dasha/enemy.png'),
		audio: require('@src/media/heroes/dasha/audio.mp3'),
		name: 'Дашка',
		description: 'помогите Дашке выучить Реакт!',
		about: 'Ничто так не стремиться вырваться с плена тьмы и тщености, как \
			глупенькая московская принцесса из отдела контент-менеджмента\
		',
		opened: false,
		secretWord: 'дура'
	},
	raya: {
		id: 9,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require('@src/media/heroes/raya/hero.jpg'),
		enemyImg: require('@src/media/heroes/raya/enemy.jpg'),
		audio: require('@src/media/heroes/raya/audio.mp3'),
		name: 'Раечка',
		description: 'помогите Раечке съесть всю Фрутоняню и не помереть с голоду!',
		about: 'TODO',
		opened: false,
		secretWord: 'кабанчик'
	}
};

export default HEROES;
