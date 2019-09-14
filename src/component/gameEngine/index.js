export const DEFAULT_COORDINATES = { x: null, y: null };
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
        this.oneGrid = Math.round(this.canvas.width / 10);
        this.iconSize = Math.round(this.oneGrid / 2);
        this.heroCoordinates = {
            x: (this.canvas.width -  this.iconSize) / 2,
            y: ((this.canvas.height -  this.iconSize) / 2) + this.canvas.height / 3
        };
        //create hero
        this.drawHero(this.heroCoordinates.x, this.heroCoordinates.y);
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    //hero methods
    drawHero(x, y) {
        const image = new Image();

        image.src = this.hero.heroImg;
        this.ctx.drawImage(image, x, y,  this.iconSize,  this.iconSize);
    }
    moveHero() {
        
    }
    //enemy methods
    drawEnemy(x, y) {
        const image = new Image();

        image.src = this.hero.enemyImg;
        this.ctx.drawImage(image, x, y,  this.iconSize,  this.iconSize);
    }
}
