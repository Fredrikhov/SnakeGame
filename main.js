'use strict'
import playGround from "./Classes/gameGround.js";
// set interval - update/run a function every 250ms or 1/4 of a second
setInterval(() => {
    //console.log("HEj");
    let obj = new playGround("snakeGameGround", 500,500,'black');
    //let ctx = obj.canvas_id.getContext();
    obj.render();
    
}, 250);