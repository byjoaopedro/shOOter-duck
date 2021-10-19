let element = document.querySelector("canvas");
let canvas = element.getContext('2d');

import createGame from './player.js';
const game = createGame();

import createAnimation from "./animation.js";
const animations = createAnimation();

element.width = game.state.width;
element.height = game.state.height;

document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);

window.onload = () => {
    animate();
}

function animate(){

    canvas.clearRect(0, 0, element.width, element.height);
    animations.duck.draw(canvas, game.player.posX, game.player.posY);
    
    if(game.player.isMoving){
        animations.duck.updateInfos();
    }
}

function keydownHandler(key){

    if(game.state.moveKeys.includes(key.key)) {

        game.player.startMoving();

        if(key.key === "ArrowRight") animations.duck.changeDirection(true);
        if(key.key === "ArrowLeft") animations.duck.changeDirection(false);
        if(key.key === 'x') animations.duck.getArmed(!animations.duck.getArmedValue());
        
        game.player.movePlayer(game.acceptedMoves[key.key]);
    }

    if(game.state.toolKeys.includes(key.key)) {

        game.player.executateHabilitie(game.acceptedHabilities[key.key]);
    }

    animate();
}

function keyupHandler(key){

    game.player.stopMoving();
    if(key.key === "Shift") game.player.stopRunning();
    
}





