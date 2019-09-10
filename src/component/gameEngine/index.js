const ICON_SIZE = 50;

export default class GameEngine {
    constructor(selectedHero) {
        this.hero = selectedHero;
    }
    init(reactRef) {
        if (!reactRef) return;
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
        this.ctx.drawImage(image, 0, 0, ICON_SIZE, ICON_SIZE);
    }
}
