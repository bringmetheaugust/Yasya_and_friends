const ACCELERATION = .999;

export default class GameEngine {
    constructor(selectedHero) {
        this.hero = selectedHero;
        this.enemies = [
            { x: null, y: null }
        ];
        this.speed = 1;
        this.acceleration = ACCELERATION;
    }
    init(reactRef) {
        this.canvas = reactRef;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.oneGrid = Math.round(this.canvas.height / 10);
        this.iconSize = Math.round(this.oneGrid / 1.5);
        this.createHero();
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    createHero() {
        const image = new Image();

        image.src = this.hero.heroImg;
        this.ctx.save();
        this.ctx.translate(
            (this.canvas.width -  this.iconSize) / 2,
            ((this.canvas.height -  this.iconSize) / 2) + this.canvas.height / 3)
        ;
        this.ctx.drawImage(image, 0, 0,  this.iconSize,  this.iconSize);
        this.ctx.restore();
    }
    createEnemy(x, y) {
        const image = new Image();

        image.onload = () => this.ctx.drawImage(image, x, y,  this.iconSize,  this.iconSize);
        image.src = this.hero.enemyImg;
    }
}
