import GameEngine from '../index.js';
import randomNumber from '@src/util/randomNumber.js';

export default class YasyaGame extends GameEngine {
    constructor(selectedHero) {
        super(selectedHero);
    }
    moveEnemies() {
        this.enemies.forEach(enemy => {
            //check when enemy goes throught canvas field
            if (enemy.y > this.canvas.height) {
                enemy.y = 0 - this.iconSize;
                enemy.x = randomNumber() * this.oneGrid;
            }
            //ckech when enemy icon is new
            if (enemy.x === null) {
                enemy.x = randomNumber() * this.oneGrid;
                enemy.y = 0 - this.iconSize;
            }
            //
            enemy.y += this.speed;
        });
    }
    runGame() {
        this.moveEnemies();
        this.enemies.forEach(enemy => this.createEnemy(enemy.x, enemy.y));
        this.speed = this.speed / this.acceleration;
        requestAnimationFrame(this.runGame.bind(this));
    }
}
