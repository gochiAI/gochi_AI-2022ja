const dialogue = {
	loading:{
		1:{
			txt:[
				"Am I glad I took the plunge and ventured out into the outside world?",
				"―――Elu"
			],
			voice:"01_Natsume.mp3",
		},
		2:{
			txt:[
				"The world is much bigger than it looks in pictures!",
				"―――Natsume-chan"
			],
			voice:"02_Elu.mp3",
		},
	},
	home:{
		sotodura:[
			{
				chara:"natsume",
				txt:[
					"how do you do...?everyone",
					"Well... good luck finding the blue bird.",
					"Hey, Elu! Not that way!",
					"Uh... sorry..."
				],
				voice:"03_Natsume.mp3",
			},{
				chara:"elu",
				txt:[
					"Isn't it futile to look for blue birds?",
					"Oh, Natsume! Let's go over there!",
					"... I think it would be faster to find and sell them anyway."
				],
				voice:"04_Elu.mp3",
			},
			
		],
		negative:[
			{
				chara:"elu",
				txt:[
					"Huh... can't speak well.",
					"We could have been friends..."
				],
				voice:"05_Elu.mp3",
			},{
				chara:"natsume",
				txt:[
					"If we find the blue bird, we'll fall apart.",
					"You'll only miss them if you befriend them."
				],
				voice:"06_Natsume.mp3",
			},
		],
		happy:[
			{
				chara:"natsume",
				txt:[
					"YEAH!!! Blue bird complete!",
					"For me, it was easy.",
					"I'm going to brag to Maya!♪"
				],
				voice:"07_Natsume.mp3",
			},{
				chara:"elu",
				txt:[
					"Why don't we invite Meg and the others and have a time attack together?",
					"I want to have a hot battle!",
					"Hehehe, it's fun, isn't it, Natsume-chan♪"
				],
				voice:"08_Elu.mp3",
			},
		],
	},
	comics:[
		[
			{
				chara:"natsume",
				text:[
					"Elu",
					"Please wake up."
				],
				voice:"09_Natsume.mp3"
			},{
				chara:"elu",
				text:[
					"Natsume-chan",
					"No blue birds over there..."
				],
				voice:"10_Elu.mp3"
			}
		],[
			{
				chara:"natsume",
				text:[
					"I had a weird dream.",
					"because of a game I borrowed from Maya. "
				],
				voice:"11_Natsume.mp3"
			},{
				chara:"elu",
				text:[
					"I've got angels swirling around in my head."
				],
				voice:"12_Elu.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"Oh, no...",
					"My birdcage...？"
				],
				voice:"13_Elu.mp3"
			},{
				chara:"natsume",
				text:[
					"Still sleepwalking?",
					"Elle's bag!"
				],
				voice:"14_Natsume.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"Hey, Natsume-chan.",
					"I'm still new to the town.",
					"I'm glad they accept us as we are."
				],
				voice:"15_Elu.mp3"
			},
		],[
			{
				chara:"natsume",
				text:[
					"Yeah, I'm glad too.",
					"I hope there will be more fun things to come.",
					"Elu"
				],
				voice:"16_Natsume.mp3"
			},
		],[
			{
				chara:"elu",
				text:[
					"I wonder what the reaction would be if I told everyone in the Rabbit House.",
					"the dream story"
				],
				voice:"17_Elu.mp3"
			},{
				chara:"natsume",
				text:[
					"I wonder if they'll give me funny looks.",
					"They were all little angels..."
				],
				voice:"18_Natsume.mp3"
			},
		]
	]
}
/*loading*/
const loadingImg = [];
const loadingImgName = ['rabbit.png','amp.png','brightbunny.png'];
for(let i=0;i<loadingImgName.length;i++){
	loadingImg[i] = new Image();
	loadingImg[i].src = 'core_sys/images/main/loading/'+loadingImgName[i];
}
/*home*/
let homeImg = [];
const homeImgName = ['chara_02.png','door.png','logo.png','playbtn.png','secretbtn.png','torikago.png','happy.png','special.png','chara_01.png','chara_03.png'];
for(let i=0;i<homeImgName.length;i++){
	homeImg[i] = new Image();
	homeImg[i].src = 'core_sys/images/main/home/'+homeImgName[i];
}
/*story*/
let storyImg = [];
const storyImgName = ['bg.jpg','logo.png','saki.png','natsume.png','elu.png'];
for(let i=0;i<storyImgName.length;i++){
	storyImg[i] = new Image();
	storyImg[i].src = 'core_sys/images/main/story/'+storyImgName[i];
}
/*start*/
let startImg = [];
const startImgName = ['bg.jpg','door1.png','door2.png','door3.png','door4.png','door5.png','door6.png','door7.png'];
for(let i=0;i<startImgName.length;i++){
	startImg[i] = new Image();
	startImg[i].src = 'core_sys/images/main/start/'+startImgName[i];
}
/*game*/
let gameImg = [];
const gameImgName = ['kv.png','chara01.png','chara02.png','egg.png','clear.png'];
for(let i=1;i<=6;i++){
	const imgNum = ( '00' + i ).slice( -2 );
	for(let x=0;x<gameImgName.length;x++){
		gameImg[imgNum+x] = new Image();
		gameImg[imgNum+x].src = 'core_sys/images/main/game/'+imgNum+'_'+gameImgName[x];
	}
}
gameImg[99] = new Image();
gameImg[99].src = 'core_sys/images/main/game/ed.png';

let gameCommonImg = [];
const gameCommonImgName = ['circle.png','kv_circle.png','kv_circle_on.png','natsume.png','elu.png','select.png','ed.png'];
for(let i=0;i<gameCommonImgName.length;i++){
	gameCommonImg[i] = new Image();
	gameCommonImg[i].src = 'core_sys/images/main/game/'+gameCommonImgName[i];
}
/*House*/
let houseImg = [];
const houseImgName = ['cocoa.png','rize.png','chiya.png','syaro.png','maya.png','megu.png','chino.png','fuyu.png','special.png','bird.png',];
for(let i=0;i<houseImgName.length;i++){
	houseImg[i] = new Image();
	houseImg[i].src = 'core_sys/images/main/house/'+houseImgName[i];
}
/*chara*/
let charaImg = [];
const charaImgName = ['cocoa.jpg','rize.jpg','chiya.jpg','syaro.jpg','maya.jpg','megu.jpg','chino.jpg','fuyu.jpg'];
for(let i=0;i<charaImgName.length;i++){
	charaImg[i] = new Image();
	charaImg[i].src = 'core_sys/images/main/chara/'+charaImgName[i];
}
/*comics*/
let comicsImg = [];
const comicsImgName = ['1.png','2.png','3.png','4.png','5.png','6.png','next.png','ending_coffee.jpg'];
for(let i=0;i<comicsImgName.length;i++){
	comicsImg[i] = new Image();
	comicsImg[i].src = 'core_sys/images/main/comics/'+comicsImgName[i];
}

/*special*/
const specialImgDir = 'core_sys/images/main/special/';
let specialImg = [];
const specialImgName = ['bg.jpg'];
for(let i=0;i<specialImgName.length;i++){
	specialImg[i] = new Image();
	specialImg[i].src = specialImgDir+specialImgName[i];
}
let specialCharaImg = [];
let specialCharaEggImg = [];
const specialCharaName = ['cocoa','rize','chiya','syaro','maya','megu','chino','fuyu'];
const specialCharaImgType = ['.jpg','_egg.jpg']
for(let i=0;i<specialCharaName.length;i++){
	specialCharaImg[specialCharaName[i]] = new Image();
	specialCharaImg[specialCharaName[i]].src = specialImgDir+specialCharaName[i]+specialCharaImgType[0];
	specialCharaEggImg[specialCharaName[i]] = new Image();
	specialCharaEggImg[specialCharaName[i]].src = specialImgDir+specialCharaName[i]+specialCharaImgType[1];
}


const charaToNum = {cocoa:1,rize:6,chiya:3,syaro:4,maya:5,megu:2,chino:7,fuyu:8,special:9};
const numToChara = ['cocoa','megu','chiya','syaro','maya','rize','chino','fuyu','special'];


const tags = {
	copyright:'<div class="copyright"><p>©Koi・芳文社／ご注文はBLOOM製作委員会ですか？<br>このホームページに掲載されている一切の文書・図版・写真等を、手段や形態を問わず複製、転載することを禁じます。</p></div>',
	loading:'<div class="loading__wrap"><div class="loading__inner"><div class="loading__logo"><ul><li><img src="'+loadingImg[0].src+'"></li><li><img src="'+loadingImg[1].src+'"></li><li><img src="'+loadingImg[2].src+'"></li></ul><p>PRESENTS</p></div><div class="loading__txt"></div></div></div>',
	home:'<div class="home__wrap">'+
		'	<div class="home__inner">'+
		'		<div class="home__kv">'+
		'			<div class="home__chara">'+
		'				<img src="'+homeImg[0].src+'">'+
		'			</div>'+
		'			<div class="home__dialogue">'+
		'				<div class="home__dialogue-natsume">'+
		'					<div class="home__dialogue-name">Natsume</div>'+
		'					<div class="home__dialogue-txt"></div>'+
		'				</div>'+
		'				<div class="home__dialogue-elu">'+
		'					<div class="home__dialogue-name">Elu</div>'+
		'					<div class="home__dialogue-txt"></div>'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'		<div class="home__menu">'+
		'			<div class="home__logo">'+
		'				<img src="'+homeImg[2].src+'">'+
		'			</div>'+
		'			<div class="home__voice">'+
		'				<h2>Voice</h2>'+
		'				<ul>'+
		'					<li>'+
		'						<button type="button" data-type="sotodura">'+
		'							<span>another person mode</span>'+
		'							<img src="'+homeImg[3].src+'">'+
		'						</button>'+
		'					</li>'+
		'					<li>'+
		'						<button type="button" data-type="negative">'+
		'							<span>negative mode</span>'+
		'							<img src="'+homeImg[3].src+'">'+
		'						</button>'+
		'					</li>'+
		'					<li>'+
		'						<button type="button" data-type="secret">'+
		'							<span></span>'+
		'							<img src="'+homeImg[4].src+'">'+
		'						</button>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'			<div class="home__game">'+
		'				<h2>Game</h2>'+
		'				<ul>'+
		'					<li>'+
		'						<button type="button" data-type="story">'+
		'							<span>STORY</span>'+
		'							<img src="'+homeImg[5].src+'">'+
		'						</button>'+
		'					</li>'+
		'					<li>'+
		'						<button type="button" data-type="start">'+
		'							<span>START</span>'+
		'							<img src="'+homeImg[1].src+'">'+
		'						</button>'+
		'					</li>'+
		'				</ul>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'</div>',
	story:'<div class="story">'+
		'	<div class="story__inner">'+
		'		<div class="story__bg"><span><img src="'+storyImg[0].src+'"></span></div>'+
		'		<div class="story__main">'+
		'			<div class="story__txt">'+
		'				We were in a small world.<br>And we had lots of free time.<br>So we had a question.<br>What is <span class="blue">happiness</span>?
		'			<div class="story__logo">'+
		'				<img src="'+storyImg[1].src+'">'+
		'			</div>'+
		'			<div class="story__dialogue">'+
		'				<dl class="story__dialogue-right">'+
		'					<dt><img src="'+storyImg[2].src+'"></dt>'+
		'					<dd>I am a traveling wizard<br>I hear the call for <span class="blue">happiness</span> from here.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>Suspicious person.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>I have to call the police.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-right">'+
		'					<dt><img src="'+storyImg[2].src+'"></dt>'+
		'					<dd>Is the order a <span class="blue">happiness</span>?<br>Now please go find the <span class="blue">blue bird</span>.<br>My daughter suffers from <span class="blue">blue bird </span>deficiency,<br> and if you find her, I will tell her <span class="blue">happiness</span>.</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>詐欺の手口だ</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>うん　なんかの本で読んだ</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[3].src+'"></dt>'+
		'					<dd>でも探してきてもいいよ　暇だし</dd>'+
		'				</dl>'+
		'				<dl class="story__dialogue-left">'+
		'					<dt><img src="'+storyImg[4].src+'"></dt>'+
		'					<dd>苦しんでるなら助けてあげなきゃ</dd>'+
		'				</dl>'+
		'			</div>'+
		'			<div class="story__txt">'+
		'				私たちは　狭い鳥籠から飛び出した<br><span class="blue">幸せ</span>を探しに'+
		'			</div>'+
		'			<div class="story__button">'+
		'				<button type="button" data-type="start">'+
		'					<img src="'+homeImg[1].src+'">'+
		'					<span>START</span>'+
		'				</button>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'</div>',
	start:[
		'<div class="start"><div class="start__inner"><div class="start__bg"><span><img src="'+startImg[0].src+'"></span></div><div class="start__main"><div class="start__txt">扉の先には　青い鳥の卵があるそうです<br>卵を見つけ　青い鳥を孵化させましょう</div><div class="start__list"><ul>',
		'</ul></div><div class="start__button"><button type="button" data-type="home"><img src="'+homeImg[1].src+'"><span>START</span></button></div></div></div></div>',
	],
	startList:['森のパン屋さん','思い出の大都会','幸福の花園','夜の街','未来遺跡','墓場城','エルとナツメの家'],
	game:'<div class="game"><div class="game__read"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__inner"><div class="game__question"><div class="game__kv"><div class="game__title"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__charaName"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div><div class="game__charaImg"><img src=""></div><div class="game__kvImg"><img src=""><div class="game__line"></div><div class="game__circle"></div><div class="game__egg"><img src=""></div></div></div><div class="game__txt"><div class="game__kv-txt"></div><div class="game__kv-bg"></div></div></div><div class="game__answer"><ul><li class="game__answer-01"><div class="game__answer-txt"></div><div class="game__answer-button"><button type="button" data-answer="1"><img src="core_sys/images/main/game/select.png"></button></div></li><li class="game__answer-02"><div class="game__answer-txt"></div><div class="game__answer-button"><button type="button" data-answer="2"><img src="core_sys/images/main/game/select.png"></button></div></li></ul></div></div></div>',
	stageClear:'<div class="clear"><div class="clear__inner"><div class="clear__head"><div class="clear__name"><div class="clear__name-egg"><img src=""></div><div class="clear__name-name"></div></div><div class="clear__comment"></div></div><div class="clear__body"><div class="clear__chara"><img src="" alt=""></div><div class="clear__dialogue"><ul><li class="clear__dialogue-elu"><div class="clear__dialogue-txt"></div></li><li class="clear__dialogue-natsume"><div class="clear__dialogue-txt"></div></li></ul></div></div><div class="clear__button"><button type="button">STAGE CLEAR</button></div></div><div class="clear__read" style="display:none"><div class="clear__read-txt"></div><div class="clear__read-bg"></div></div></div>',
	house:[
		'<div class="house"><div class="house__inner"><div class="house__bg"><span><img src="'+storyImg[0].src+'"></span></div><div class="house__main"><div class="house__head">見つけた鳥を確認できます</div><div class="house__list"><ul>',
		'</ul></div><div class="house__button"><button type="button" class="house__button-bird"><div class="house__button-ph"><img src="'+houseImg[9].src+'"></div><div class="house__button-cap">最近よく来る鳥です<br>気にしないでください</div></button><button type="button" class="house__button-door" data-type="start"><div class="house__button-ph"><img src="'+homeImg[1].src+'"></div><div class="house__button-cap">出掛ける</div></button></div></div></div></div>'
	],
	chara:'<div class="chara"><div class="chara__inner"><div class="chara__img"><img src=""></div><div class="chara__txt"><div class="chara__comment"></div><div class="chara__head"><div class="chara__name"><div class="chara__name-egg"><img src=""></div><div class="chara__name-name"></div></div><div class="chara__head-ph"><img src=""></div></div><div class="chara__dialogue"><ul><li class="chara__dialogue-elu"><div class="chara__dialogue-txt"></div></li><li class="chara__dialogue-natsume"><div class="chara__dialogue-txt"></div></li></ul></div><div class="chara__button"><button type="button" class="chara__button-dl"><div class="house__button-ph"><img src="core_sys/images/main/chara/dl.png"></div><div class="house__button-cap">写真を撮る</div></button><button type="button" class="chara__button-door" data-stage="07"><div class="house__button-ph"><img src="core_sys/images/main/start/door7.png"></div><div class="house__button-cap">部屋を出る</div></button></div></div></div></div>',
	comics:'<div class="comics"><div class="comics__inner"><div class="comics__ph"><img src="core_sys/images/main/game/ed.png" ></div><div class="comics__dialogue"><ul><li class="comics__dialogue-elu"><div class="comics__dialogue-name">エル</div><div class="comics__dialogue-txt"></div></li><li class="comics__dialogue-natsume"><div class="comics__dialogue-name">ナツメ</div><div class="comics__dialogue-txt"></div></li></ul></div></div></div>',
	fakeAds:'<div class="fakeAds"><div class="fakeAds__inner"><img src="'+comicsImg[7].src+'"></div></div>',
	special:'<div class="special"><div class="special__inner"><div class="special__bg"><span><img src="'+specialImg[0].src+'"></span></div><div class="special__main"><ul class="special__imgs"><li><div class="special__head"></div><div class="special__ph"><a href="#" download><img src="#" alt=""></a></div></li><li><div class="special__head"></div><div class="special__ph"><a href="#" download><img src="#" alt=""></a></div></li></ul><div class="special__button"><button type="button" class="special__button-home"><div class="special__button-ph"><img src="'+homeImg[1].src+'"></div><div class="special__button-cap">部屋を出る</div></button></div></div></div></div>',
}
const stageTxt = {
	game:{
		'01':{
			title:"森のパン屋さん",
			read:"パンパンパン祭り開催中<br>大量に焼き上げられたパンの中から青い鳥の卵を探せ",
			fail:"お腹いっぱいでもう食べれそうにない<br>仕方ない　今日は帰ろう",
			1:{
				charaName:"ちよこ(ココア母)",
				txt:"卵探しなんて後でいいじゃない。<br>それよりパン食べ放題はいかがですかー？<br>パンに囲まれている時間は幸せなのよ。",
				answer01:"えっと…それじゃあ少しだけ…",
				answer02:"心頭滅却しパンの香りの誘惑に打ち勝つ",
				answer:2
			},
			2:{
				charaName:"モカ",
				txt:"いらっしゃーい！え、卵の部屋の鍵？<br>サプライズでパンにいれちゃいました！<br>えーと、どっちだっけ？",
				answer01:"巨大特製キーマカレーパン",
				answer02:"巨大もちもちメロンパン",
				answer:1
			}
		},
		'02':{
			title:"思い出の大都会",
			read:"大都会…初めて来たのに初めてじゃない…？<br>自然と足が動き出す…",
			fail:"何かが違う…<br>気が付いたら、家に戻っていた…",
			1:{
				charaName:"都会で会った変な子",
				txt:"（スパ施設の風景が広がる…）<br>おいそこの双子！サウナで我慢勝負だー！",
				answer01:"いいよ！私が相手だ！",
				answer02:"だめ！争いはよくないよ！",
				answer:1
			},
			2:{
				charaName:"都会で会った面白い子",
				txt:"（ゲームセンターの風景が広がる）<br>ねぇ踊ろうよ！このダンスゲーム面白いよ！",
				answer01:"VRゲームやりたいな",
				answer02:"いいよ！一緒に踊ろう！",
				answer:2
			}
		},
		'03':{
			title:"幸福の花園",
			read:"花の香りが広がる。<br>ずっといたくなるが先に進まなければ…",
			fail:"花園から追い出された…<br>出直そう…",
			1:{
				charaName:"あんこ",
				txt:"巨大な花園の守護者が邪魔している…<br>足元には木の棒とふわふわの白い毛玉がある。",
				answer01:"木の棒を投げる",
				answer02:"白い毛玉を投げる",
				answer:2
			},
			2:{
				charaName:"千夜の祖母",
				txt:"花園を荒らす人間は帰れ！お土産に栗饅頭と羊羹持っていきな！<br>なに生姜饅頭も欲しいのかい？欲張りだねぇ…！",
				answer01:"ついでに青い鳥の卵もください！",
				answer02:"ありがとう　おばあちゃん！",
				answer:1
			}
		},
		'04':{
			title:"夜の街",
			read:"小説家の屋敷をうさぎ警官たちが守っている…<br>怪盗と一緒に潜入し、お宝の卵を奪え！",
			fail:"通報されてうさぎ警官に捕まった<br>家に帰されてしまった",
			1:{
				charaName:"凛さん",
				txt:"わぁ怪盗ラパンの助手さんですか！？<br>見せてください！怪盗ラパン直伝の必殺技！",
				answer01:"ロイヤルストレートフラッシュ！だっけ",
				answer02:"ロイヤルフルハウス！だね",
				answer:1
			},
			2:{
				charaName:"青山ブルーマウンテン",
				txt:"私の渾身のセキュリティ見てくださーい！<br>突破できなかったら取材させてくださーい！<br>ヒントは「ルージュ、サファイア、エメラルド」です。",
				answer01:"赤、緑、青の順番でボタンを押す",
				answer02:"赤、青、緑の順番でボタンを押す",
				answer:2
			}
		},
		'05':{
			title:"未来遺跡",
			read:"他のトレジャーハンターを出し抜いて<br>遺跡の秘宝である卵を手に入れろ！",
			fail:"探索に失敗した…<br>仕方ない　出直そう",
			1:{
				charaName:"ユラ",
				txt:"この先はバリアが邪魔して通れないよ～。<br>解除ボタンが遠くに見えるけど届きそうにないし～。<br>やばー詰んだわ～。",
				answer01:"その吹き矢は飾り？それ使ってみたら？",
				answer02:"石を投げてみようよ",
				answer:2
			},
			2:{
				charaName:"タカヒロ",
				txt:"俺は夢を追うトレジャーハンタータカヒロ。<br>宝は頂いていくよ。君たちにはお引き取り願おう。",
				answer01:"真面目に働いてください。家族が泣きますよ。",
				answer02:"双子の絆で果敢に挑む！",
				answer:1
			}
		},
		'06':{
			title:"墓場城",
			read:"死者が安らかに眠っている…<br>墓守に気づかれず、なるべく静かに通り抜けよう",
			fail:"墓守につまみ出されてしまった…<br>仕方ない出直そう",
			1:{
				charaName:"委員長",
				txt:"こんにちは！<br>クラスメイトバンド「文化祭レクイエム」です！<br>ここなら誰も来ないので今から練習します！",
				answer01:"こっそり通り抜ける",
				answer02:"合の手を入れる",
				answer:1
			},
			2:{
				charaName:"リゼ父",
				txt:"ここは死者の眠る場所だぜ…<br>だけどたまには死者も騒ぎてぇよなぁ！？<br>聞いてくれ、俺の歌！「ダメ親父のデスペラード！」",
				answer01:"マイクを取り上げる",
				answer02:"真面目に働いてください。家族が泣きますよ。",
				answer:1
			}
		},
	},
	clear:{
		'01':{
			name:'ここあ',
			comment:'生まれたてのおねえちゃんだよ！<br>おねえちゃんにまかせなさーい！',
			dialogue:[
				'わぁ、この子パンの香りがするよ！',
				'でも、パンと幸せの過剰摂取でお腹いっぱいだよ…'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※ここあを自宅で確認できるようになりました',
		},
		'02':{
			name:'めぐ',
			comment:'わぁっ、これは風邪っぽいですねー。<br>しんぞういしょくしなければ！術式開始です！',
			dialogue:[
				'ナツメちゃんの心臓に何かあったら私ドナーになるから！',
				'エルはどうなるの？'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※めぐを自宅で確認できるようになりました',
		},
		'03':{
			name:'ちや',
			comment:'つぶあん派？こしあん派？<br>わたしはあまうさあん派―♪',
			dialogue:[
				'わたしはミックス派！',
				'なんか羊羹パン食べたくなってきた…'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※ちやを自宅で確認できるようになりました',
		},
		'04':{
			name:'しゃろ',
			comment:'わたしの事やきとりにする気でしょ…！<br>こわい…！',
			dialogue:[
				'大丈夫！ちょっと拉致するだけだから！',
				'エル、言い方！家に連れ帰るだけだから！'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※しゃろを自宅で確認できるようになりました',
		},
		'05':{
			name:'まや',
			comment:'なんだよーその目はー！<br>ペンギンだって立派なちょーるいだぞー！',
			dialogue:[
				'ペンギンなのに、背中に羽が生えてるー♪',
				'すごい、水陸空両用じゃん。'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※まやを自宅で確認できるようになりました',
		},
		'06':{
			name:'りぜ',
			comment:'生きのこるのは悪いやつばかりだ。<br>りぜは…悪い子だ…こっそりケーキつまみ食いした。',
			dialogue:[
				'やはり生き残るには…悪になるしか…',
				'なんかの映画のセリフ？'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※りぜを自宅で確認できるようになりました',
		},
		'07':{
			name:'ちの',
			comment:'この白いもふもふは親友のてぃっぴー。<br>まつ毛がちゃーむぽいんとっておじいちゃんが言ってた。',
			dialogue:[
				'なんかずっと飲みたかったコーヒーの香りがするー。',
				'将来、うちの専属バリスタになってくれないかなー。'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※りぜを自宅で確認できるようになりました',
		},
		'08':{
			name:'ふゆ',
			comment:'………とり…好き？<br>「まぁ吾輩が好きなのは猫だがね」',
			dialogue:[
				'え、服の猫で腹話術？すごい！',
				'もっとやってやって！'
			],
			result:'持ち帰った卵は青い鳥ではなかった<br>※りぜを自宅で確認できるようになりました',
		},
	},
	ending:[
		{
			elu:"青い鳥！青い鳥！",
			natsume:"捕獲しなきゃ！",
		},{
			saki:"ありがとう。色とりどりの鳥に囲まれて<br>娘たちは自分たちが青い鳥だったと気づいたようです。"
		},{
			natsume:"私たちも世界を知れてよかった。<br>見方とか感じ方変わった気がする。",
			elu:"「幸せの青い鳥」は<br>私たちの身近なとこにあるってことだね",
		},{
			natsume:"つまり、引きこもり最高！<br>部屋には楽しいで溢れてる！",
			elu:"寝っ転がってゲーム最高！<br>お菓子も美味しい！",
		},{
			saki:"でも、これでゲームは終わりです。<br>そろそろ、目を覚ます時間ですよ。<br>そして、青い鳥の片翼はあなたたちの背中にも…"
		}
	],
}
