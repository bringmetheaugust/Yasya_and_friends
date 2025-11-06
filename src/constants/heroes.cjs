const { HUNGRY_GAME_TYPE, RALLY_GAME_TYPE, RABBIT_GAME_TYPE } = require("@constants/gameTypes.js")

module.exports = {
	yasya: {
		id: 1,
		gameType: RALLY_GAME_TYPE,
		heroImg: require("@src/media/heroes/yasya/hero.png").default,
		enemyImg: require("@src/media/heroes/yasya/enemy.jpeg").default,
		audio: require("@src/media/heroes/yasya/audio.mp3").default,
		name: "Яся",
		description: "Допоможіть Ясі втекти з АТБ і дістатися до Синявки!",
		about: `Яся пережила на своєму шляху дуже важкі моменти, які змушували
			бідолашку часто змінювати роботу і світогляд. Доля ніяк не дозволяла часто їздити
			до свого рідного села і проводити час з рідними, іноді просто сидячи у своїй
			кімнаті і, дивлячись на сарай з курми, пускати скупу сльозу. Незважаючи на всі труднощі,
			вона знайшла сміливість і, зловивши удачу, зробила серйозний крок переїхавши до Києва,
			де не так часто зустрінеш вікна, які відкривають вид на чийсь сарай, що
			дозволило бідолашці трохи забути про той біль, який нагадував їй про своє село,
			про Синявку..
		`,
		opened: true,
		secretWord: null,
	},
	niko: {
		id: 2,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require("@src/media/heroes/niko/hero.png").default,
		enemyImg: require("@src/media/heroes/niko/enemy.jpg").default,
		audio: require("@src/media/heroes/niko/audio.mp3").default,
		name: "Коля",
		description: "Допоможіть Колі зловити всі таблетки і вилікуватися від шизофренії!",
		about: `Незважаючи на всі тривоги з боку батьків і близьких,
			Коля ніколи не хотів жити за правилами і завжди давав відсіч системі.
			Всупереч своєму дорослішанню, він постійно ігнорував реальність,
			піддаючи себе новим пригодам. Одного разу він навіть зумів подолати закони фізики,
			які мали б зламати його життя після падіння з дуже високого
			дерева, але Коля дав їм відсіч і залишився майже здоровим. Після цього, здавалося б,
			безрозсудного поєдинку з Ньютоном, історії і легенди про його подвиги
			швидко розходилися по всьому Каневу, часто привертаючи увагу людей.
		`,
		opened: true,
		secretWord: null,
	},
	vitya: {
		id: 3,
		gameType: RABBIT_GAME_TYPE,
		heroImg: require("@src/media/heroes/vitya/hero.png").default,
		enemyImg: require("@src/media/heroes/vitya/enemy.jpg").default,
		audio: require("@src/media/heroes/vitya/audio.mp3").default,
		name: "Уітя",
		description: "Допоможи Уіті втекти від польського пана і не поїхати до Польщі на будівництво!",
		about: `Незважаючи на невиліковний логоневроз і звичку
			кілька разів покрутитися навколо себе перед тим як увійти в якийсь дверний проєм,
			Уітя завжди залишався темним кардиналом душі компанії, її мозком і двигуном
			нестримного веселощів. Важко знайти людину, яка зможе покинути свій
			дім і мрію, перетнути високі пагорби своєї рідни і залишитися там, де
			доведеться мішати цемент під пильним наглядом польського пана і дихати
			смородом одягу, просоченого потом, болем і зруйнованими мріями.
		`,
		opened: true,
		secretWord: null,
	},
	natasha: {
		id: 4,
		gameType: RALLY_GAME_TYPE,
		heroImg: require("@src/media/heroes/natasha/hero.png").default,
		enemyImg: require("@src/media/heroes/natasha/enemy.png").default,
		audio: require("@src/media/heroes/natasha/audio.mp3").default,
		name: "Наташа",
		description: "Допоможіть Наташі втекти від алкоголізму і не спитися!",
		about: `Поки жителі Канева, огорнуті у темряву цього гиблого місця, повільно
			борються проти алкоголізму і швидко-популяції на вулицях міста, Наташа
			намагається дотримуватися балансу добра і зла, безупинно скуповуючи весь алкоголь
			і знищуючи його всередині себе. Але тиск з боку близьких і постійно
			зростаюча ціна спиртного з кожним днем значно ускладнює їй життя
			і ставить під загрозу її головний план - вийти із запою..
		`,
		opened: false,
		secretWord: "abubabu",
	},
	dasha: {
		id: 5,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require("@src/media/heroes/dasha/hero.png").default,
		enemyImg: require("@src/media/heroes/dasha/enemy.png").default,
		audio: require("@src/media/heroes/dasha/audio.mp3").default,
		name: "Дашка",
		description: "Допоможіть Дашці вивчити Реакт!",
		about: `Ніщо так не прагне вирватися з полону темряви і марності, як
			дурненька московська принцеса з відділу контент-менеджменту.
		`,
		opened: false,
		secretWord: "дура",
	},
	jenifer: {
		id: 6,
		gameType: HUNGRY_GAME_TYPE,
		heroImg: require("@src/media/heroes/jenifer/hero.jpg").default,
		enemyImg: require("@src/media/heroes/jenifer/enemy.png").default,
		audio: require("@src/media/heroes/jenifer/audio.mp3").default,
		name: "Женя",
		description: "Hilf Женя alle Gurken zu essen!",
		about: `Ich weiß immer noch nicht, wer du bist. Ich bin mir immer noch
            nicht sicher, ob es dich überhaupt gibt. Ich verstehe immer noch nicht,
            warum wir noch zusammen sind, aber ich will nicht, dass es endet.
		`,
		opened: false,
		secretWord: "fahrstuhl",
	},
}
