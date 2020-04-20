'use strict'

export default class Snake {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.speed_x = 1;
        this.speed_y = 0;
        this.color = color;
        this.direction = ""; // ??
        this.total_eaten_fruit = 0;
        this.tail = [];
        this.snake_collision = false;
    };

    render(ctx){
        // reflect tail on the canvas
        for(let i = 0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.color);
        }
        ctx.fillRect(this.x, this.y, this.color); 
    };

    store_coordinates(){
        // ikke forleng den med en om ingen mat er spist
        if(this.total_eaten_fruit <= 0){
            //this.tail[this.total_eaten_fruit-1] = {x : this.x, y : this.y};
            return;
        } else{
            for(let i = 0; i < this.tail.length-1; i++){
            this.tail[i] = this.tail[i+1];
            } 
        } 
        this.tail[this.total_eaten_fruit-1] = {x : this.x, y : this.y};
        this.check_collision();   
    }
    // check collision
    /*
    *
    * Må implementere at du taper.
    * */
    check_collision(){
        if(this.tail.length <= 3){
            console.log("nope");
            return;
        } else{
            for(let i = 0; i < this.tail.length-1; i++){
            let collision = (this.tail[i].x == this.x && this.tail[i].y == this.y ) ? true : false;
                if(collision){
                    console.log("not ok");
                }
            }
        }
    }
    update(ctx){
        
        this.store_coordinates();
        this.x = this.x + this.speed_x;
        this.y = this.y + this.speed_y;
        if(this.x > ctx.width){
            this.x = 0;
        } 
        if(this.y > ctx.height){
            this.y = 0;
        }
        if(this.y < 0) {
            this.y = ctx.height;
        }
        if(this.x < 0) {
            this.x = ctx.width;
        }
        // update directio
       
    };

    update_direction(direction) {
            switch(direction){
        case 'Up':
            if(this.speed_y <= 0 ) {
                this.speed_x = 0;
                this.speed_y = -1
            }
            break;
        case 'Down':
            if(this.speed_y >= 0 ) {
                this.speed_x = 0;
                this.speed_y = 1; 
            }
            break;       
        case 'Left':
            if (this.speed_x <= 0) {
                this.speed_y = 0;
                this.speed_x = -1;
            }
            break;
        case 'Right':
            if (this.speed_x >= 0) {
                this.speed_y = 0;
                this.speed_x = 1;
            }
            break;
        default: 
            console.log("error");
            break;
        }
    };

    eat(){
        return;
    }

};