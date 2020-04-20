'use strict'
import GridCanvas from "./Classes/GridCanvas.js";
import Snake from "./Classes/snake.js";
import Fruit from "./Classes/fruit.js";

function main() {  
    const grid_canvas = new GridCanvas(document.getElementById('snakeGameGround'), 10, 'black');
    const sprites = {
        Snake : new Snake(10, 10, 'white'),
        Food : new Fruit('green'),
    }
    window.addEventListener('keydown', function(event){
        // remove 'Arrrow' from the key name.
        let direction = event.key.slice(5);
        sprites.Snake.update_direction(direction);
    });

    // set interval - update/run a function every 250ms or 1/4 of a second
    setInterval(() => {
        grid_canvas.fillBackground();
        for(let sprite in sprites) {
            sprites[sprite].update(grid_canvas);
            sprites[sprite].render(grid_canvas);
            sprites[sprite].eat(grid_canvas,sprites.Snake);
        }
 
    }, 250);
}
// alone
main()