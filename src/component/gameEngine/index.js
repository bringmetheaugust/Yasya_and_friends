const ICON_SIZE = 60;

export default class GameEngine {
    constructor(selectedHero) {
        this.hero = selectedHero;
    }
    init(reactRef) {
        this.canvas = reactRef;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.createHero();
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    createHero() {
        const image = new Image();

        image.src = this.hero.img;
        this.ctx.save();
        this.ctx.translate(
            (this.canvas.width - ICON_SIZE) / 2,
            ((this.canvas.height - ICON_SIZE) / 2) + this.canvas.height / 3)
        ;
        this.ctx.drawImage(image, 0, 0, ICON_SIZE, ICON_SIZE);
        this.ctx.restore();
    }
    createEnemy() {
        const image = new Image();

        // image.src = this.hero.
    }
}
