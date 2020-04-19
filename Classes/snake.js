'use strict'
import gameGround from "./gameGround.js";
export default class Snake{
    constructor(canvas,x,y,speedX,speedY,color){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    };

    render(){ 
        const ctx = this.canvas.canvas_id.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.x,this.y);
    };

    updateSnake(){
        const ctx = this.canvas.canvas_id.getContext('2d');
        //ctx.clearRect(0,0,this.x,this.y);
        this.x += this.SpeedX * 5;
        this.y += this.speedY * 5;
        ctx.fillStyle = this.color;
        ctx.fillRect(0,0,this.x,this.y);
        console.log("updated");
    };


};