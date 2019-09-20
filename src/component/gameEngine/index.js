import drawGridForTesting from '@src/util/drawGridForTesting.js';
import getRadian from '@src/util/getRadian.js';
import * as GAME_PARAMS from '@src/constant/gameInitialParams.js';

export default class GameEngine {
    constructor(selectedHero, closeCanvas) {
        this.hero = selectedHero;
        this.heroCoordinates = GAME_PARAMS.DEFAULT_COORDINATES;
        this.clickCoordinates = GAME_PARAMS.DEFAULT_COORDINATES;
        this.enemies = [ GAME_PARAMS.DEFAULT_COORDINATES ];
        this.enemySpeed = GAME_PARAMS.ENEMY_SPEED;
        this.heroSpeed = GAME_PARAMS.HERO_SPEED;
        this.acceleration = GAME_PARAMS.ACCELERATION;
        this.points = 0;
        this.cursorCount = 0;
        this.closeCanvas = closeCanvas;
        this.gameOver = false;
    }
    init(reactRef) {
        this.canvas = reactRef;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.heroCoordinates = { x: this.canvas.width / 2, y: this.canvas.height * .8 };
        this.clickCoordinates = { x: this.heroCoordinates.x, y: this.heroCoordinates.y };
        this.drawHero(this.heroCoordinates.x, this.heroCoordinates.y);
        this.drawPoints();
        this.canvas.onclick = e => {
            this.clickCoordinates = { x: e.clientX, y: e.clientY };
            this.cursorCount = 1;
            this.drawCursor();
        }
        this.canvas.resize = () => this.setCanvasSize();
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

        this.heroCoordinates = {
            ... this.heroCoordinates,
            x: this.heroCoordinates.x - secondCathet / this.heroSpeed,
            y: this.heroCoordinates.y - firstCathet / this.heroSpeed
        };
    }
    drawEnemy({ x, y, angle, type }) {
        const image = new Image();
        
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(getRadian(-angle));
        this.cutIcon();
        switch (type) {
            case GAME_PARAMS.ENEMY_TYPE: {
                image.src = this.hero.enemyImg;
                break;
            }
            case GAME_PARAMS.SPEED_ITEM_TYPE: {
                image.src = GAME_PARAMS.SPEED_ITEM;
                break;
            }
            case GAME_PARAMS.DESTROY_ALL_ITEM_TYPE: {
                image.src = GAME_PARAMS.DESTROT_ALL_ITEM;
                break;
            }
        }
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
        if (!this.gameOver) this.points = !point ? ++this.points : (this.points + point);
    }
    drawPoints() {
        this.ctx.font = '30px yasya';
        this.ctx.fillText(`очки : ${this.points}`, this.canvas.width / 2 - 40, 30);
    }
    checkTouching() {
        const heroXOneCoordinate = this.heroCoordinates.x - this.halfOfIconSize;
        const heroXTwoCoordinate = this.heroCoordinates.x + this.halfOfIconSize;
        const heroYOneCoordinate = this.heroCoordinates.y - this.halfOfIconSize;
        const heroYTwoCoordinate = this.heroCoordinates.y + this.halfOfIconSize;

        this.enemies.forEach(enemy => {
            const enemyXOneCoordinate = enemy.x - this.halfOfIconSize;
            const enemyXTwoCoordinate = enemy.x + this.halfOfIconSize;
            const enemyYOneCoordinate = enemy.y - this.halfOfIconSize;
            const enemyYTwoCoordinate = enemy.y + this.halfOfIconSize;

            if (
                //check X axis touching
                (
                    (heroXTwoCoordinate > enemyXOneCoordinate && heroXOneCoordinate < enemyXOneCoordinate) ||
                    (heroXOneCoordinate < enemyXTwoCoordinate && heroXTwoCoordinate > enemyXTwoCoordinate)
                ) &&
                //check Y axis touching
                (
                    (heroYTwoCoordinate > enemyYOneCoordinate && heroYOneCoordinate < enemyYOneCoordinate) ||
                    (heroYOneCoordinate < enemyYTwoCoordinate && heroYTwoCoordinate > enemyYTwoCoordinate)
                )
            ) {
                enemy.type === GAME_PARAMS.ENEMY_TYPE ? this.stopGame() : this.catchItem(enemy);
            }
        });
    }
    catchItem(item) {
        switch (item.type) {
            case GAME_PARAMS.SPEED_ITEM_TYPE: {
                break;
            }
            case GAME_PARAMS.DESTROY_ALL_ITEM_TYPE: {
                this.enemies = [];
                break;
            }
        }
        this.deleteItem(item.id);
    }
    deleteItem(id) {
        this.enemies = this.enemies.filter(enemy => enemy.id !== id);
    }
    drawCursor() {
        if (!this.cursorCount || this.cursorCount >= this.halfOfIconSize) return this.cursorCount = 0;
        this.ctx.save();
        this.ctx.globalAlpha = 1 - this.cursorCount / this.halfOfIconSize;
        this.ctx.beginPath();
        this.ctx.strokeStyle = GAME_PARAMS.CURSOR_CLICK_COLOR;
        this.ctx.arc(this.clickCoordinates.x, this.clickCoordinates.y, this.cursorCount, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.restore();
        this.cursorCount++;
    }
    startDrawCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.heroPersonalMethods.forEach(method => method.call(this));
        this.drawHero();
        this.drawCursor();
        this.enemySpeed = this.enemySpeed / this.acceleration;
        if (!this.gameOver) {
            this.checkTouching();
            this.drawPoints();
        }
        requestAnimationFrame(this.startDrawCanvas.bind(this));
    }
    stopGame() {
        this.closeCanvas(this.points);
        this.gameOver = true;
    }
}
