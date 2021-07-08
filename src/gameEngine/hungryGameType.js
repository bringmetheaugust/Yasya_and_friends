import GameEngine from '@engine/index.js';
import randomNumber from '@utils/randomNumber.js';
import generateId from '@utils/generateId.js';
import * as ITEM_TYPES from '@constants/itemTypes.js';
import * as GAME_PARAMS from '@constants/initialParams/common.js';
import * as HUNGRY_GAME_PARAMS from '@constants/initialParams/hungryGameType.js';

export default class NikoGame extends GameEngine {
    constructor(...params) {
        super(params);
        this.rotateHero = HUNGRY_GAME_PARAMS.ROTATE_HERO;
        this.heroPersonalMethods = [this.moveEnemies];
    }
    
    moveEnemies() {
        this.enemies = this.enemies.map(enemy => {
            const enemyIsGone = this.getDrawPosition(enemy.y) > this.canvas.height;

            // check when item is lost
            if (enemyIsGone && enemy.type === ITEM_TYPES.ENEMY_TYPE) {
                this.stopGame();

                return GAME_PARAMS.DEFAULT_COORDINATES;
            }

            // check when enemy icon is new
            if (enemy.x === null) {
                return {
                    ...enemy,
                    x: randomNumber() * this.oneGrid,
                    y: 0 - this.halfOfIconSize,
                    id: generateId()
                };
            }

            // default
            return {
                ...enemy,
                x: enemy.x,
                y: enemy.type === ITEM_TYPES.ENEMY_TYPE ?
                    enemy.y  + this.enemySpeed :
                    enemy.y + GAME_PARAMS.ENEMY_SPEED,
                angle: enemy.angle + HUNGRY_GAME_PARAMS.ROTATION_SPEED
            };
        });

        this.enemies.forEach(enemy => this.drawEnemy(enemy));
    }

    addEnemy(isItem) {
        this.enemies.push(
            isItem ?
                { ...GAME_PARAMS.DEFAULT_COORDINATES, type: this.getRandomItem() } :
                GAME_PARAMS.DEFAULT_COORDINATES
        );
    }

    runGame() {
        this.addEnemyInterval = setInterval(() => this.addEnemy(), HUNGRY_GAME_PARAMS.ENEMIES_ADDING_INTERVAL);
        this.addRandomItem = setInterval(() => this.addEnemy(true), HUNGRY_GAME_PARAMS.SPEED_ITEM_INTERVAL);
        this.startDrawCanvas(this.moveEnemies);
    }

    stopHeroMethods() {
        clearInterval(this.addEnemyInterval);
        clearInterval(this.addRandomItem);
    }
}
