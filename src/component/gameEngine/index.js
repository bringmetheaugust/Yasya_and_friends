import drawGridForTesting from '@src/util/drawGridForTesting.js';
import getRadian from '@src/util/getRadian.js';

export const DEFAULT_COORDINATES = {
    x: null,
    y: null,
    angle: 0
};
export const GRID_DENSITY = 10;
const ACCELERATION = .9995;

export default class GameEngine {
    constructor(selectedHero) {
        this.hero = selectedHero;
        this.heroCoordinates = DEFAULT_COORDINATES;
        this.enemies = [ DEFAULT_COORDINATES ];
        this.speed = 1;
        this.acceleration = ACCELERATION;
        this.points = 0;
    }
    init(reactRef) {
        this.canvas = reactRef;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.heroCoordinates = { x: this.canvas.width / 2, y: this.canvas.height * .8 };
        this.drawHero(this.heroCoordinates.x, this.heroCoordinates.y);
        this.drawPoints();
        this.canvas.onclick = e => this.moveHero(e.clientX, e.clientY);
        this.canvas.resize = () => this.setCanvasSize();
        //TODO: draw temporary grid
        // drawGridForTesting.call(this);
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.oneGrid = this.canvas.width / GRID_DENSITY + 1;
        this.iconSize = this.oneGrid / 2;
        this.halfOfIconSize = this.oneGrid / 4;
    }
    getDrawPosition(coordinate) {
        return coordinate - this.halfOfIconSize;
    }
    //hero methods
    drawHero(x = this.heroCoordinates.x, y = this.heroCoordinates.y) {
        const image = new Image();

        this.ctx.save();
        this.ctx.translate(x, y);
        // this.ctx.rotate(getRadian(angle));
        this.cutIcon();
        image.src = this.hero.heroImg;
        this.ctx.drawImage(image, this.getDrawPosition(0), this.getDrawPosition(0), this.iconSize, this.iconSize);
        this.ctx.restore();
    }
    moveHero(x, y) {
        const distance = Math.pow(Math.pow((this.heroCoordinates.x - x), 2) + Math.pow((this.heroCoordinates.y - y), 2), .5);
        console.log(distance);
    }
    //enemy methods
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
    //points
    addPoints(point) {
        this.points = !point ? ++this.points : (this.points + point);
    }
    drawPoints() {
        this.ctx.font = '30px yasya';
        this.ctx.fillText(`очки : ${this.points}`, this.canvas.width / 2 - 40, 30);
    }
    //tools
    cutIcon() {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.halfOfIconSize, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.clip();
    }
}
