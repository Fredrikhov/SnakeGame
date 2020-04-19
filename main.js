'use strict'
import playGround from "./Classes/gameGround.js";
import Snake from "./Classes/snake.js";
// set interval - update/run a function every 250ms or 1/4 of a second
setInterval(() => {
    const backGroundObject = new playGround("snakeGameGround", 500,500,'black');
    // new snake ojbect - passing playground object to get canvas context
    const snake = new Snake(backGroundObject,10,10,10,10,'white');
    //let ctx = obj.canvas_id.getContext();
    backGroundObject.render();
    
    snake.render();
    // update snake so the snake is moving
    snake.updateSnake();

}, 250);