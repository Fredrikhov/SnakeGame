'use strict'
import playGround from "./Classes/gameGround.js";
import Snake from "./Classes/snake.js";

function main() {
    const sprites = {
        "snake" : new Snake(10, 10, 10, 'white'),
        "playground" : new playGround(500,500,'black'),
    }

    const canvas = document.getElementById('snakeGameGround');
    const ctx = canvas.getContext('2d');
    // set interval - update/run a function every 250ms or 1/4 of a second
    setInterval(() => {
        for(var sprite in sprites) {
            sprites[sprite].render(ctx);
            sprites[sprite].update();
        }
    }, 250);
}

main()