import GameEngine from '@engine/index.js';
import randomNumber from '@utils/randomNumber.js';
import generateId from '@utils/generateId.js';
import * as GAME_PARAMS from '@constants/gameConfig/common.js';
import * as ITEM_TYPES from '@constants/itemTypes.js';
import * as RALLY_GAME_PARAMS from '@constants/gameConfig/rallyGameType.js';

export default class YasyaGame extends GameEngine {
    constructor(...params) {
        super(params);
        this.rotateHero = RALLY_GAME_PARAMS.ROTATE_HERO;
        this.heroPersonalMethods = [this.moveEnemies];
    }
    
    moveEnemies() {
        this.enemies = this.enemies.map(enemy => {
            const enemyIsGone = this.getDrawPosition(enemy.y) > this.canvas.height;

            // check when item is gone
            if (enemyIsGone && enemy.type !== ITEM_TYPES.ENEMY_TYPE) {
                this.deleteItem(enemy.id);

                return enemy;
            }

            // check when enemy goes throught canvas field or when enemy icon is new
            if (enemyIsGone || enemy.x === null) {
                if (enemyIsGone) this.addPoints(1);

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
                    enemy.y + this.enemySpeed :
                    enemy.y + GAME_PARAMS.ENEMY_SPEED,
                angle: enemy.angle + RALLY_GAME_PARAMS.ROTATION_SPEED
            };
        });

        this.enemies.forEach(enemy => this.drawEnemy(enemy));
    }

    addEnemy(isItem) {
        if (this.enemies.length >= RALLY_GAME_PARAMS.MAX_ENEMIES && !isItem) return;
        
        this.enemies.push(
            isItem ?
                { ...GAME_PARAMS.DEFAULT_COORDINATES, type: this.getRandomItem() } :
                GAME_PARAMS.DEFAULT_COORDINATES
        );
    }

    runGame() {
        this.addEnemyInterval = setInterval(() => this.addEnemy(), RALLY_GAME_PARAMS.ENEMIES_ADDING_INTERVAL);
        this.addRandomItem = setInterval(() => this.addEnemy(true), RALLY_GAME_PARAMS.SPEED_ITEM_INTERVAL);
        this.startDrawCanvas();
    }

    stopHeroMethods() {
        clearInterval(this.addEnemyInterval);
        clearInterval(this.addRandomItem);
    }
}
