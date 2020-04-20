'use strict'
export default class GridCanvas {
    constructor(canvas, square, color){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.height = this.canvas.height / square;
        this.width = this.canvas.width / square;
        this.color = color;
        this.square = square;
    };

    fillBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, this.width * this.square, this.height * this.square);
    };

    fillRect(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.square, y * this.square, this.square, this.square);
    };
    // do nothing
    eat(){
        return;
    }
};