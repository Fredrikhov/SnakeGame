'use strict'
import gameGround from "./gameGround.js";

export default class Snake{
    constructor(x, y, speed, color){
        this.x = x;
        this.y = y;
        this.speed_x = speed;
        this.speed_y = 0;
        this.color = color;
    };

    render(ctx){ 
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 10, 10);
    };

    update(){
        //const ctx = this.canvas.canvas_id.getContext('2d');
        //ctx.clearRect(0,0,this.x,this.y);
        this.x += this.speedX;
        //ctx.fillStyle = this.color;
    };
};