'use strict'

export default class Fruit {
    constructor(color) {
        this.x = null;
        this.y = null;
        this.color = color;
    }

    update(ctx) {
        if (this.x == null && this.y == null) {
            this.create_food(ctx);
        }
    }

    render(ctx) {
        if (this.x != null && this.y != null) {
            ctx.fillRect(this.x, this.y, this.color);
        }
    }
    create_food(ctx) {
        this.x = this.rand_range(0, ctx.width);
        this.y = this.rand_range(0, ctx.height);
    }
    rand_range(min, max) {
        // round up
        min = Math.ceil(min);
        // returns the largest integer less than or equal to a given number.
        max = Math.floor(max);
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    eat(ctx,snake){
        let eating = (this.x == snake.x) && (this.y == snake.y) ? true : false;
        if(eating === true){
            this.x = null;
            this.y = null;
            this.update(ctx);
            this.render(ctx);
            snake.total_eaten_fruit++;
        } 
    }
}