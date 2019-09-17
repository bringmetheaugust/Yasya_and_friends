import { GRID_DENSITY } from '@src/constant/gameInitialParams.js';

export default function drawGridForTesting() {
    this.ctx.save();
    this.ctx.strokeStyle = 'indianred';
    this.ctx.beginPath();
    for (let x = 0; x < GRID_DENSITY; x++) {
        this.ctx.moveTo(x * this.oneGrid, 0);
        this.ctx.lineTo(x * this.oneGrid, this.canvas.height);
    }
    for(let y = 0; y < GRID_DENSITY; y++) {
        this.ctx.moveTo(0, y * this.oneGrid);
        this.ctx.lineTo(this.canvas.width, y * this.oneGrid);
    }
    this.ctx.stroke();
    this.ctx.restore();
}
