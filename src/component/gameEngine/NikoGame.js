import GameEngine from './index.js';
import randomNumber from '@src/util/randomNumber.js';
import generateId from '@src/util/generateId.js';
import * as GAME_PARAMS from '@src/constant/gameInitialParams.js';
import * as NIKO_PARAMS from '@src/constant/hero_initial_params/nikoParams.js';

export default class NikoGame extends GameEngine {
    constructor(...params) {
        super(params);
        this.rotateHero = NIKO_PARAMS.ROTATE_HERO;
        this.heroPersonalMethods = [this.moveEnemies];
    }
    
    moveEnemies() {
        this.enemies = this.enemies.map(enemy => {
            const enemyIsGone = this.getDrawPosition(enemy.y) > this.canvas.height;

            //check when item is lost
            if(enemyIsGone && enemy.type === GAME_PARAMS.ENEMY_TYPE) {
                this.stopGame();
                return GAME_PARAMS.DEFAULT_COORDINATES;
            }

            //check when enemy icon is new
            if (enemy.x === null) {
                return {
                    ...enemy,
                    x: randomNumber() * this.oneGrid,
                    y: 0 - this.halfOfIconSize,
                    id: generateId()
                };
            }

            //default
            return {
                ...enemy,
                x: enemy.x,
                y: enemy.type === GAME_PARAMS.ENEMY_TYPE ?
                    enemy.y  + this.enemySpeed :
                    enemy.y + GAME_PARAMS.ENEMY_SPEED,
                angle: enemy.angle + NIKO_PARAMS.ROTATION_SPEED
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
        this.addEnemyInterval = setInterval(() => this.addEnemy(), NIKO_PARAMS.ENEMIES_ADDING_INTERVAL);
        this.addRandomItem = setInterval(() => this.addEnemy(true), NIKO_PARAMS.SPEED_ITEM_INTERVAL);
        this.startDrawCanvas(this.moveEnemies);
    }

    stopHeroMethods() {
        clearInterval(this.addEnemyInterval);
        clearInterval(this.addRandomItem);
    }
}
