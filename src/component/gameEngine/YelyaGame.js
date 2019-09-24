import GameEngine from './index.js';
import randomNumber from '@src/util/randomNumber.js';
import generateId from '@src/util/generateId.js';
import * as GAME_PARAMS from '@src/constant/gameInitialParams.js';
import * as YELYA_PARAMS from '@src/constant/hero_initial_params/yelyaParams.js';

export default class YelyaGame extends GameEngine {
    constructor(selectedHero, closeCanvas, showItemBoard) {
        super(selectedHero, closeCanvas, showItemBoard);
        this.rotateHero = YELYA_PARAMS.ROTATE_HERO;
        this.heroPersonalMethods = [this.moveEnemy];
        this.countForAddingNewEnemy = 1;
    }

    moveEnemy() {
        this.enemies = this.enemies.map(enemy => {
            //check if items
            if (enemy.type !== GAME_PARAMS.ENEMY_TYPE) {
                return {
                    ...enemy,
                    x: 500,
                    y: 500
                }
            }

            //check if enemy is new
            if (enemy.x === null) {
                switch (randomNumber()) {
                    //top
                    case 1:
                    case 2:
                    case 3:
                        return {
                            ...enemy,
                            x: randomNumber() * this.oneGrid,
                            y: - this.iconSize,
                            id: generateId()
                        }
                    //right
                    case 4:
                    case 5:
                        return {
                            ...enemy,
                            x: this.canvas.width,
                            y: randomNumber() * this.oneGrid,
                            id: generateId()
                        }
                    //bottom
                    case 6:
                    case 7:
                        return {
                            ...enemy,
                            x: randomNumber() * this.oneGrid,
                            y: this.canvas.height + this.iconSize,
                            id: generateId()
                        }
                    //left
                    default:
                        return {
                            ...enemy,
                            x: 0 - this.iconSize,
                            y: randomNumber() * this.oneGrid,
                            id: generateId()
                        }
                }
            }

            //move enemy
            const firstCathet = enemy.x - this.heroCoordinates.x;
            const secondCathet = enemy.y - this.heroCoordinates.y;

            return {
                ...enemy,
                //TODO: problem this enemy ecceleration
                x: enemy.x - firstCathet / GAME_PARAMS.HERO_SPEED * this.enemySpeed,
                y: enemy.y - secondCathet / GAME_PARAMS.HERO_SPEED * this.enemySpeed
            }
        });

        this.enemies.forEach(enemy => this.drawEnemy(enemy));
    }

    addEnemy(isItem) {
        if (this.enemies.length && this.countForAddingNewEnemy % YELYA_PARAMS.ENEMIES_ADDING_INTERVAL) return;

        this.enemies.push(
            isItem ?
                { ...GAME_PARAMS.DEFAULT_COORDINATES, type: this.getRandomItem() } :
                GAME_PARAMS.DEFAULT_COORDINATES
        );
    }

    runGame() {
        setInterval(() => this.addEnemy(true), YELYA_PARAMS.SPEED_ITEM_INTERVAL);
        setInterval(() => {
            ++this.countForAddingNewEnemy;
            this.addEnemy();
        }, 1000);
        this.startDrawCanvas();
    }
}
