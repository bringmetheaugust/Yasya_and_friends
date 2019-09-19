import GameEngine from '../index.js';
import randomNumber from '@src/util/randomNumber.js';
import generateId from '@src/util/generateId.js';
import {
    DEFAULT_COORDINATES,
    SPEED_ITEM_TYPE,
    DESTROY_ALL_ITEM_TYPE
} from '@src/constant/gameInitialParams.js';
import * as YASYA_PARAMS from '@src/constant/hero_initial_params/yasyaParams.js';

export default class YasyaGame extends GameEngine {
    constructor(selectedHero, closeCanvas) {
        super(selectedHero, closeCanvas);
        this.rotateHero = YASYA_PARAMS.ROTATE_HERO;
        this.heroPersonalMethods = [this.moveEnemies];
    }
    moveEnemies() {
        this.enemies = this.enemies.map(enemy => {
            const enemyIsGone = this.getDrawPosition(enemy.y) > this.canvas.height;
            //check when enemy goes throught canvas field or when enemy icon is new
            if (enemyIsGone || enemy.x === null) {
                if (enemyIsGone) this.addPoints();
                return {
                    ...enemy,
                    x: randomNumber() * this.oneGrid,
                    y: 0 - this.iconSize,
                    id: generateId()
                };
            }
            //default
            return {
                ...enemy,
                x: enemy.x,
                y: enemy.y + this.enemySpeed,
                angle: enemy.angle + YASYA_PARAMS.ROTATION_SPEED
            };
        });
        this.enemies.forEach(enemy => this.drawEnemy(enemy));
    }
    addEnemy(isItem) {
        if (this.enemies.length >= YASYA_PARAMS.MAX_ENEMIES) clearInterval(this.addEnemyInterval);
        this.enemies.push(isItem ? { ...DEFAULT_COORDINATES, type: this.getRandomItem() } : DEFAULT_COORDINATES);
    }
    getRandomItem() {
        const num = randomNumber();

        if (num >= 1 && num <= 4) return DESTROY_ALL_ITEM_TYPE;
        return SPEED_ITEM_TYPE;
    }
    runGame() {
        this.addEnemyInterval = setInterval(() => this.addEnemy(), YASYA_PARAMS.ENEMIES_ADDING_INTERVAL);
        this.addRandomItem = setInterval(() => this.addEnemy(true), YASYA_PARAMS.SPEED_ITEM_INTERVAL);
        this.startDrawCanvas(this.moveEnemies);
    }
}
