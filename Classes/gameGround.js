'use strict'
export default class gameGround{
    constructor(canvas_id, height, width, color){
        //canvas id of a html element
        this.canvas_id = document.getElementById(canvas_id);
        this.height = height;
        this.width = width;
        this.color = color;
    };

    
    // render and fill the background outside of constructor, it will not be render everytime they call the constructor
    render(){
        let ctx = this.canvas_id.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(0,0,this.height,this.width);
    };
};