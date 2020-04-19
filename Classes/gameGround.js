'use strict'
export default class gameGround{
    constructor(height, width, color){
        //canvas id of a html element
        this.height = height;
        this.width = width;
        this.color = color;
    };


    // render and fill the background outside of constructor, it will not be render everytime they call the constructor
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.height,this.width);
    };

    update() {

    }
};