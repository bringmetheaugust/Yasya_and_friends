import drawGridForTesting from '@src/util/drawGridForTesting.js';

export const DEFAULT_COORDINATES = { x: null, y: null };
export const GRID_DENSITY = 10;
const ACCELERATION = .999;

export default class GameEngine {
    constructor(selectedHero) {
        this.hero = selectedHero;
        this.heroCoordinates = DEFAULT_COORDINATES;
        this.enemies = [ DEFAULT_COORDINATES ];
        this.speed = 1;
        this.acceleration = ACCELERATION;
    }
    init(reactRef) {
        this.canvas = reactRef;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize();
        //init game settings
        this.oneGrid = this.canvas.width / GRID_DENSITY + 1;
        this.iconSize = this.oneGrid / 2;
        this.heroCoordinates = { x: this.canvas.width / 2, y: this.canvas.height * .8 };
        //create hero
        this.drawHero(this.heroCoordinates.x, this.heroCoordinates.y);
        //event listener for moving hero
        this.canvas.onclick = e => this.moveHero(e.clientX, e.clientY);
        //TODO: draw temporary grid
        drawGridForTesting.call(this);
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    getDrawPosition(coordinate) {
        return coordinate - this.iconSize / 2;
    }
    //hero methods
    drawHero(x = this.heroCoordinates.x, y = this.heroCoordinates.y) {
        const image = new Image();

        image.src = this.hero.heroImg;
        this.ctx.drawImage(image, this.getDrawPosition(x), this.getDrawPosition(y), this.iconSize, this.iconSize);
    }
    moveHero(x, y) {
        const distance = Math.pow(Math.pow((this.heroCoordinates.x - x), 2) + Math.pow((this.heroCoordinates.y - y), 2), .5);
        console.log(distance);
    }
    //enemy methods
    drawEnemy(x, y) {
        const image = new Image();

        image.src = this.hero.enemyImg;
        this.ctx.drawImage(image, this.getDrawPosition(x), this.getDrawPosition(y),  this.iconSize,  this.iconSize);
    }
}
