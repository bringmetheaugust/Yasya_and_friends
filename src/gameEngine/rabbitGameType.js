import GameEngine from '@engine/index.js';
import randomNumber from '@utils/randomNumber.js';
import generateId from '@utils/generateId.js';
import * as GAME_PARAMS from '@constants/gameConfig/common.js';
import * as ITEM_TYPES from '@constants/itemTypes.js';
import * as RABBIT_GAME_PARAMS from '@constants/gameConfig/rabbitGameType.js';

export default class YelyaGame extends GameEngine {
    constructor(...params) {
        super(params);
        this.rotateHero = RABBIT_GAME_PARAMS.ROTATE_HERO;
        this.heroPersonalMethods = [this.moveEnemy];
        this.countForAddingNewEnemy = 1;
    }

    moveEnemy() {
        this.enemies = this.enemies.map(enemy => {
            // check if items
            if (enemy.type !== ITEM_TYPES.ENEMY_TYPE) {
                // check if items is new
                if (enemy.x === null) {
                    return {
                        ...enemy,
                        x: randomNumber() * this.oneGrid,
                        y: randomNumber() * this.canvas.height / GAME_PARAMS.GRID_DENSITY
                    }
                }

                return enemy;
            }

            // check if enemy is new
            if (enemy.x === null) {
                this.addPoints(1);
                
                switch (randomNumber()) {
                    // top
                    case 1:
                    case 2:
                    case 3:
                        return {
                            ...enemy,
                            x: randomNumber() * this.oneGrid,
                            y: - this.iconSize,
                            id: generateId()
                        }
                    // right
                    case 4:
                    case 5:
                        return {
                            ...enemy,
                            x: this.canvas.width,
                            y: randomNumber() * this.oneGrid,
                            id: generateId()
                        }
                    // bottom
                    case 6:
                    case 7:
                        return {
                            ...enemy,
                            x: randomNumber() * this.oneGrid,
                            y: this.canvas.height + this.iconSize,
                            id: generateId()
                        }
                    // left
                    default:
                        return {
                            ...enemy,
                            x: 0 - this.iconSize,
                            y: randomNumber() * this.oneGrid,
                            id: generateId()
                        }
                }
            }

            // move enemy
            const firstCathet = enemy.x - this.heroCoordinates.x;
            const secondCathet = enemy.y - this.heroCoordinates.y;

            return {
                ...enemy,
                // TODO: problem this enemy ecceleration
                x: enemy.x - firstCathet / GAME_PARAMS.HERO_SPEED * this.enemySpeed,
                y: enemy.y - secondCathet / GAME_PARAMS.HERO_SPEED * this.enemySpeed
            }
        });

        this.enemies.forEach(enemy => this.drawEnemy(enemy));
    }

    addEnemy(isItem) {
        if (this.enemies.length && this.countForAddingNewEnemy % RABBIT_GAME_PARAMS.ENEMIES_ADDING_INTERVAL) return;

        this.enemies.push(
            isItem ?
                { ...GAME_PARAMS.DEFAULT_COORDINATES, type: this.getRandomItem() } :
                GAME_PARAMS.DEFAULT_COORDINATES
        );
    }

    runGame() {
        this.addEnemyInterval = setInterval(() => this.addEnemy(true), RABBIT_GAME_PARAMS.SPEED_ITEM_INTERVAL);
        this.addToCountInterval = setInterval(() => {
            ++this.countForAddingNewEnemy;
            this.addEnemy();
        }, 1000);
        this.startDrawCanvas();
    }

    stopHeroMethods() {
        clearInterval(this.addEnemyInterval);
        clearInterval(this.addToCountInterval);
    }
}
