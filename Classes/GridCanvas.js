'use strict'
export default class GridCanvas {
    constructor(canvas, square, color, height, width){
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
        this.draw_grid(this.ctx);
    };

    draw_grid(ctx){
        // vertikalt
        for(let x = 0; x <= this.canvas.width; x+=20){
            ctx.moveTo(x+this.square, 0);
            ctx.lineTo(x + this.square, this.canvas.height + this.square);
        }
        // horisontalt
        
        for(let j = 0; j <= this.canvas.height; j+= 20){
            ctx.moveTo(0, j+this.square);
            ctx.lineTo(this.canvas.width+this.square, j+this.square);
        }
        ctx.strokeStyle="white";
        ctx.stroke();
    }
    
    fillRect(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.square, y * this.square, this.square, this.square);
    };
    // do nothing
    eat(){
        return;
    }
};