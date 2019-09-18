import drawGridForTesting from '@src/util/drawGridForTesting.js';
import getRadian from '@src/util/getRadian.js';
import * as GAME_PARAMS from '@src/constant/gameInitialParams.js';

export default class GameEngine {
    constructor(selectedHero) {
        this.hero = selectedHero;
        this.heroCoordinates = GAME_PARAMS.DEFAULT_COORDINATES;
        this.clickCoordinates = GAME_PARAMS.DEFAULT_COORDINATES;
        this.enemies = [ GAME_PARAMS.DEFAULT_COORDINATES ];
        this.enemySpeed = GAME_PARAMS.ENEMY_SPEED;
        this.heroSpeed = GAME_PARAMS.HERO_SPEED;
        this.acceleration = GAME_PARAMS.ACCELERATION;
        this.points = 0;
    }
    init(reactRef) {
        this.canvas = reactRef;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.heroCoordinates = { x: this.canvas.width / 2, y: this.canvas.height * .8 };
        this.clickCoordinates = { x: this.heroCoordinates.x, y: this.heroCoordinates.y };
        this.drawHero(this.heroCoordinates.x, this.heroCoordinates.y);
        this.drawPoints();
        this.canvas.onclick = e => this.clickCoordinates = { x: e.clientX, y: e.clientY };
        this.canvas.resize = () => this.setCanvasSize();
        //TODO: draw temporary grid
        // drawGridForTesting.call(this);
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.oneGrid = this.canvas.width / GAME_PARAMS.GRID_DENSITY + 1;
        this.iconSize = this.oneGrid / 2;
        this.halfOfIconSize = this.oneGrid / 4;
    }
    getDrawPosition(coordinate) {
        return coordinate - this.halfOfIconSize;
    }
    drawHero(x = this.heroCoordinates.x, y = this.heroCoordinates.y) {
        const image = new Image();

        if (
            this.clickCoordinates.x !== this.heroCoordinates.x &&
            this.clickCoordinates.y !== this.heroCoordinates.y
        ) this.moveHero();

        this.ctx.save();
        this.ctx.translate(x, y);

        switch (this.rotateHero) {
            case true: {
                console.log('rotation, baby!!');
                break;
            }
            case false: {
                if (this.clickCoordinates.x < this.heroCoordinates.x) this.ctx.scale(-1, 1);
                break;
            }
        }

        this.cutIcon();
        image.src = this.hero.heroImg;
        this.ctx.drawImage(image, this.getDrawPosition(0), this.getDrawPosition(0), this.iconSize, this.iconSize);
        this.ctx.restore();
    }
    moveHero() {
        const firstCathet = this.heroCoordinates.y - this.clickCoordinates.y;
        const secondCathet = this.heroCoordinates.x - this.clickCoordinates.x;
        // const hypotenuse = Math.pow(Math.pow(firstCathet, 2) + Math.pow(secondCathet, 2), .5);

        this.heroCoordinates = {
            ... this.heroCoordinates,
            x: this.heroCoordinates.x - secondCathet / this.heroSpeed,
            y: this.heroCoordinates.y - firstCathet / this.heroSpeed
        };
    }
    drawEnemy({ x, y, angle }) {
        const image = new Image();
        
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(getRadian(angle));
        this.cutIcon();
        image.src = this.hero.enemyImg;
        this.ctx.drawImage(image, this.getDrawPosition(0), this.getDrawPosition(0), this.iconSize, this.iconSize);
        this.ctx.restore();
    }
    cutIcon() {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.halfOfIconSize, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.clip();
    }
    addPoints(point) {
        this.points = !point ? ++this.points : (this.points + point);
    }
    drawPoints() {
        this.ctx.font = '30px yasya';
        this.ctx.fillText(`очки : ${this.points}`, this.canvas.width / 2 - 40, 30);
    }
    checkTouching() {
        this.enemies.forEach(enemy => {
            //TODO: add method to check enemies and heroes touching
        });
    }
}
