import GameEngine from '../index.js';
import randomNumber from '@src/util/randomNumber.js';
import { DEFAULT_ENEMY } from '../index.js';

const MAX_ENEMIES = 10;

export default class YasyaGame extends GameEngine {
    constructor(selectedHero) {
        super(selectedHero);
    }
    moveEnemies() {
        this.enemies = this.enemies.map(enemy => {
            //check when enemy goes throught canvas field or when enemy icon is new
            if (enemy.y > this.canvas.height || enemy.x === null) {
                return { x: randomNumber() * this.oneGrid, y: 0 - this.iconSize };
            }
            //default
            return { x: enemy.x, y: enemy.y + this.speed };
        });
    }
    addEnemy() {
        if (this.enemies.length >= MAX_ENEMIES) return clearInterval(this.addEnemyInterval);
        this.enemies.push(DEFAULT_ENEMY);
    }
    draw() {
        this.moveEnemies();
        this.enemies.forEach(enemy => this.createEnemy(enemy.x, enemy.y));
        this.speed = this.speed / this.acceleration;
        requestAnimationFrame(this.draw.bind(this));
    }
    runGame() {
        this.addEnemyInterval = setInterval(() => this.addEnemy(), 2000);
        this.draw();
    }
}
